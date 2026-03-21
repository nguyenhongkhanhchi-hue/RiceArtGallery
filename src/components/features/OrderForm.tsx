import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, X, Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';
import { PRICING_PACKAGES } from '@/constants/content';

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

  const selectedPackage = watch('package');

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (uploadedFiles.length + files.length > 5) {
      toast.error('Tối đa 5 hình ảnh');
      return;
    }

    setUploading(true);

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        if (file.size > 5 * 1024 * 1024) {
          throw new Error(`File ${file.name} quá lớn (tối đa 5MB)`);
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
      toast.success(`Đã tải lên ${results.length} hình ảnh`);
    } catch (error: any) {
      console.error('Upload error:', error);
      toast.error(error.message || 'Lỗi khi tải hình ảnh');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    toast.success('Đã xóa hình ảnh');
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
        const errorMessage = error instanceof Error ? error.message : 'Có lỗi xảy ra';
        throw new Error(errorMessage);
      }

      toast.success('🎉 Đặt hàng thành công!', {
        description: 'Chúng tôi đã nhận được đơn hàng và sẽ liên hệ bạn sớm nhất.',
      });

      reset();
      setUploadedFiles([]);
    } catch (error: any) {
      console.error('Order error:', error);
      toast.error('Lỗi khi gửi đơn hàng', {
        description: error.message || 'Vui lòng thử lại sau',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="order-form" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Form <span className="text-gradient-gold">Đặt Hàng</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Điền thông tin bên dưới, chúng tôi sẽ liên hệ bạn trong vòng 24h
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gold-200">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-lg font-semibold text-gray-900">
                  Họ và Tên <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="Nguyễn Văn A"
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
                    Số Điện Thoại <span className="text-red-500">*</span>
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
                    Email <span className="text-red-500">*</span>
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
                  Địa Chỉ Nhận Hàng <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="address"
                  {...register('address')}
                  placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành"
                  className="mt-2 h-14 text-lg border-2 border-gray-300 focus:border-gold-500"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                )}
              </div>

              {/* Package */}
              <div>
                <Label htmlFor="package" className="text-lg font-semibold text-gray-900">
                  Chọn Gói Sản Phẩm <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={(value) => setValue('package', value)}>
                  <SelectTrigger className="mt-2 h-14 text-lg border-2 border-gray-300 focus:border-gold-500">
                    <SelectValue placeholder="-- Chọn gói --" />
                  </SelectTrigger>
                  <SelectContent>
                    {PRICING_PACKAGES.map((pkg) => (
                      <SelectItem key={pkg.name} value={pkg.name} className="text-lg">
                        {pkg.name} - {pkg.price}₫ 
                        {pkg.popular && ' 🔥'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.package && (
                  <p className="text-red-500 text-sm mt-1">{errors.package.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-lg font-semibold text-gray-900">
                  Lời Nhắn (Tùy chọn)
                </Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="Ghi chú thêm về đơn hàng (ví dụ: muốn chọn chữ gì, thời gian nhận hàng...)"
                  className="mt-2 min-h-[120px] text-lg border-2 border-gray-300 focus:border-gold-500"
                />
              </div>

              {/* File Upload */}
              <div>
                <Label className="text-lg font-semibold text-gray-900">
                  Hình Ảnh Đính Kèm (Tùy chọn, tối đa 5 ảnh)
                </Label>
                <div className="mt-2">
                  <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-gold-500 hover:bg-gold-50 transition-colors">
                    <div className="text-center">
                      {uploading ? (
                        <>
                          <Loader2 className="h-8 w-8 mx-auto text-gold-600 animate-spin" />
                          <span className="text-sm text-gray-600 mt-2">Đang tải...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="h-8 w-8 mx-auto text-gray-400" />
                          <span className="text-sm text-gray-600 mt-2">
                            Nhấn để chọn hình ảnh
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
                    Đang Gửi...
                  </>
                ) : (
                  '✨ Gửi Đơn Hàng Ngay'
                )}
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Bằng cách đặt hàng, bạn đồng ý với{' '}
                <a href="#" className="text-gold-600 hover:underline">
                  Điều khoản dịch vụ
                </a>{' '}
                của chúng tôi
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
