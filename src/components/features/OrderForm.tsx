import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Upload, X, Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import { PRICING_PACKAGES } from '@/constants/pricing';
import { useOrder } from '@/contexts/OrderContext';
import { useLanguage } from '@/contexts/LanguageContext';

const orderSchema = z.object({
  name: z.string().min(2, 'Vui lòng nhập họ tên (ít nhất 2 ký tự)'),
  phone: z.string().regex(/^[0-9]{10,11}$/, 'Số điện thoại không hợp lệ (10-11 số)'),
  email: z.string().email('Email không hợp lệ'),
  address: z.string().min(10, 'Vui lòng nhập địa chỉ đầy đủ'),
  package: z.string().min(1, 'Vui lòng chọn gói sản phẩm'),
  message: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

export default function OrderForm() {
  const { language } = useLanguage();
  const { selectedPackage } = useOrder();
  const packages = PRICING_PACKAGES[language];
  
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; url: string }[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  // Auto-fill selected package
  useEffect(() => {
    if (selectedPackage) {
      setValue('package', selectedPackage);
    }
  }, [selectedPackage, setValue]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (uploadedFiles.length + files.length > 5) {
      toast.error(language === 'vi' ? 'Tối đa 5 hình ảnh' : 'Maximum 5 images');
      return;
    }

    setUploading(true);

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        if (file.size > 5 * 1024 * 1024) {
          throw new Error(`File ${file.name} ${language === 'vi' ? 'quá lớn (tối đa 5MB)' : 'too large (max 5MB)'}`);
        }

        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('order-attachments')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from('order-attachments')
          .getPublicUrl(filePath);

        return { name: file.name, url: data.publicUrl };
      });

      const results = await Promise.all(uploadPromises);
      setUploadedFiles((prev) => [...prev, ...results]);
      toast.success(language === 'vi' ? `Đã tải lên ${results.length} hình ảnh` : `Uploaded ${results.length} images`);
    } catch (error: any) {
      console.error('Upload error:', error);
      toast.error(error.message || (language === 'vi' ? 'Lỗi khi tải hình ảnh' : 'Error uploading images'));
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    toast.success(language === 'vi' ? 'Đã xóa hình ảnh' : 'Image removed');
  };

  const onSubmit = async (data: OrderFormData) => {
    setSubmitting(true);

    try {
      const { data: responseData, error } = await supabase.functions.invoke(
        'send-order-email',
        {
          body: {
            ...data,
            attachments: uploadedFiles.map((f) => f.url),
          },
        }
      );

      if (error) {
        const errorMessage = error instanceof Error ? error.message : (language === 'vi' ? 'Có lỗi xảy ra' : 'An error occurred');
        throw new Error(errorMessage);
      }

      toast.success(language === 'vi' ? '🎉 Đặt hàng thành công!' : '🎉 Order successful!', {
        description: language === 'vi' ? 'Chúng tôi đã nhận được đơn hàng và sẽ liên hệ bạn sớm nhất.' : 'We received your order and will contact you soon.',
      });

      reset();
      setUploadedFiles([]);
    } catch (error: any) {
      console.error('Order error:', error);
      toast.error(language === 'vi' ? 'Lỗi khi gửi đơn hàng' : 'Error sending order', {
        description: error.message || (language === 'vi' ? 'Vui lòng thử lại sau' : 'Please try again later'),
      });
    } finally {
      setSubmitting(false);
    }
  };

  const labels = {
    vi: {
      heading: 'Form Đặt Hàng',
      headingHighlight: 'Đặt Hàng',
      subtitle: 'Điền thông tin bên dưới, chúng tôi sẽ liên hệ bạn trong vòng 24h',
      name: 'Họ và Tên',
      phone: 'Số Điện Thoại',
      email: 'Email',
      address: 'Địa Chỉ Nhận Hàng',
      package: 'Chọn Gói Sản Phẩm',
      message: 'Lời Nhắn',
      messagePlaceholder: 'Ghi chú thêm về đơn hàng (ví dụ: muốn chọn chữ gì, thời gian nhận hàng...)',
      upload: 'Hình Ảnh Đính Kèm',
      uploadDesc: '(Tùy chọn, tối đa 5 ảnh)',
      uploadButton: 'Nhấn để chọn hình ảnh',
      uploading: 'Đang tải...',
      submit: '✨ Gửi Đơn Hàng Ngay',
      submitting: 'Đang Gửi...',
      terms: 'Bằng cách đặt hàng, bạn đồng ý với',
      termsLink: 'Điều khoản dịch vụ',
      termsEnd: 'của chúng tôi',
    },
    en: {
      heading: 'Order Form',
      headingHighlight: 'Order',
      subtitle: 'Fill in the information below, we will contact you within 24 hours',
      name: 'Full Name',
      phone: 'Phone Number',
      email: 'Email',
      address: 'Delivery Address',
      package: 'Select Package',
      message: 'Message',
      messagePlaceholder: 'Additional notes about your order (e.g., custom text, delivery time...)',
      upload: 'Image Attachments',
      uploadDesc: '(Optional, max 5 images)',
      uploadButton: 'Click to select images',
      uploading: 'Uploading...',
      submit: '✨ Submit Order Now',
      submitting: 'Submitting...',
      terms: 'By ordering, you agree to our',
      termsLink: 'Terms of Service',
      termsEnd: '',
    },
  };

  const t = labels[language];

  return (
    <section id="order-form" className="py-24 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              {language === 'vi' ? 'Form ' : ''}
              <span className="bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600 bg-clip-text text-transparent">
                {t.headingHighlight}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              {t.subtitle}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gold-200">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-lg font-semibold text-gray-900">
                  {t.name} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder={language === 'vi' ? 'Nguyễn Văn A' : 'John Doe'}
                  className="mt-2 h-14 text-lg border-2 border-gray-300 focus:border-gold-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-lg font-semibold text-gray-900">
                    {t.phone} <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    {...register('phone')}
                    placeholder="0912345678"
                    className="mt-2 h-14 text-lg border-2 border-gray-300 focus:border-gold-500"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-lg font-semibold text-gray-900">
                    {t.email} <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="example@email.com"
                    className="mt-2 h-14 text-lg border-2 border-gray-300 focus:border-gold-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address" className="text-lg font-semibold text-gray-900">
                  {t.address} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="address"
                  {...register('address')}
                  placeholder={language === 'vi' ? 'Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành' : 'Street, Ward, District, City'}
                  className="mt-2 h-14 text-lg border-2 border-gray-300 focus:border-gold-500"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                )}
              </div>

              {/* Package */}
              <div>
                <Label htmlFor="package" className="text-lg font-semibold text-gray-900">
                  {t.package} <span className="text-red-500">*</span>
                </Label>
                <Select
                  id="package"
                  {...register('package')}
                  className="mt-2"
                >
                  <option value="">{language === 'vi' ? '-- Chọn gói --' : '-- Select package --'}</option>
                  {packages.map((pkg) => (
                    <option key={pkg.name} value={pkg.name}>
                      {pkg.name} - {pkg.price}₫{pkg.popular && ' 🔥'}
                    </option>
                  ))}
                </Select>
                {errors.package && (
                  <p className="text-red-500 text-sm mt-1">{errors.package.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-lg font-semibold text-gray-900">
                  {t.message} {t.uploadDesc}
                </Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder={t.messagePlaceholder}
                  className="mt-2 min-h-[120px] text-lg border-2 border-gray-300 focus:border-gold-500"
                />
              </div>

              {/* File Upload */}
              <div>
                <Label className="text-lg font-semibold text-gray-900">
                  {t.upload} {t.uploadDesc}
                </Label>
                <div className="mt-2">
                  <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-gold-500 hover:bg-gold-50 transition-colors">
                    <div className="text-center">
                      {uploading ? (
                        <>
                          <Loader2 className="h-8 w-8 mx-auto text-gold-600 animate-spin" />
                          <span className="text-sm text-gray-600 mt-2">{t.uploading}</span>
                        </>
                      ) : (
                        <>
                          <Upload className="h-8 w-8 mx-auto text-gray-400" />
                          <span className="text-sm text-gray-600 mt-2">
                            {t.uploadButton}
                          </span>
                        </>
                      )}
                    </div>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      disabled={uploading || uploadedFiles.length >= 5}
                    />
                  </label>

                  {/* Uploaded Files */}
                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3"
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="text-sm text-gray-700">{file.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={submitting}
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white shadow-xl hover:shadow-2xl transition-all"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                    {t.submitting}
                  </>
                ) : (
                  t.submit
                )}
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                {t.terms}{' '}
                <a href="#" className="text-gold-600 hover:underline">
                  {t.termsLink}
                </a>
                {t.termsEnd && ` ${t.termsEnd}`}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
