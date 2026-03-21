import { Button } from '@/components/ui/button';
import { Check, Zap, Crown, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const packages = [
  {
    name: 'Cơ Bản',
    icon: Zap,
    price: '1.990.000',
    originalPrice: '2.800.000',
    description: 'Hoàn hảo cho gia đình',
    features: [
      '1 bức tranh gạo 30x40cm',
      'Khung kính tiêu chuẩn',
      'Chữ thư pháp: Tài - Lộc',
      'Chứng nhận tác phẩm',
      'Giao hàng miễn phí nội thành',
      'Bảo hành khung 6 tháng',
    ],
    popular: false,
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Cao Cấp',
    icon: Crown,
    price: '3.490.000',
    originalPrice: '4.990.000',
    description: 'Lựa chọn phổ biến nhất',
    features: [
      '1 bức tranh gạo 40x50cm',
      'Khung kính cao cấp mạ vàng',
      'Chữ thư pháp: Phúc - Lộc - Thọ',
      'Chứng nhận + giấy khen nghệ nhân',
      'Giao hàng toàn quốc miễn phí',
      'Bảo hành khung 12 tháng',
      'Tư vấn phong thủy miễn phí',
    ],
    popular: true,
    gradient: 'from-gold-400 to-gold-600'
  },
  {
    name: 'VIP',
    icon: Sparkles,
    price: '5.990.000',
    originalPrice: '8.500.000',
    description: 'Dành cho người sành điệu',
    features: [
      '1 bức tranh gạo 50x70cm',
      'Khung gỗ quý + kính chống phản quang',
      'Chữ tùy chọn theo yêu cầu',
      'Chứng nhận cao cấp có dấu đỏ',
      'Giao hàng VIP + lắp đặt tận nhà',
      'Bảo hành trọn đời',
      'Tư vấn phong thủy chuyên sâu',
      'Quà tặng kèm trị giá 500k',
    ],
    popular: false,
    gradient: 'from-purple-500 to-pink-600'
  },
];

export default function PricingSection() {
  const handleOrder = (packageName: string) => {
    toast.success(`Đang chuyển đến trang đặt hàng gói "${packageName}"`, {
      description: 'Vui lòng điền thông tin để hoàn tất đơn hàng'
    });
    console.log('Order package:', packageName);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Bảng Giá <span className="text-gradient-gold">Ưu Đãi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Giảm giá <strong className="text-gold-600">30%</strong> trong tháng này - Chỉ còn <strong className="text-red-600">15 suất</strong>!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.popular 
                    ? 'border-gold-400 scale-105 md:scale-110' 
                    : 'border-gray-200'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🔥 PHỔ BIẾN NHẤT
                  </div>
                )}

                <div className="p-8">
                  {/* Icon & Name */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.gradient} mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600">{pkg.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6 pb-6 border-b border-gray-200">
                    <div className="text-gray-400 line-through text-lg mb-1">
                      {pkg.originalPrice}₫
                    </div>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-5xl font-bold text-gradient-gold">
                        {pkg.price}
                      </span>
                      <span className="text-gray-600 mb-2">₫</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold mt-2">
                      Tiết kiệm {(parseInt(pkg.originalPrice.replace(/\./g, '')) - parseInt(pkg.price.replace(/\./g, ''))).toLocaleString()}₫
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mt-0.5`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    onClick={() => handleOrder(pkg.name)}
                    className={`w-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {pkg.popular ? 'Đặt Ngay - Ưu Đãi' : 'Chọn Gói Này'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          <div className="flex items-center gap-2 text-gray-600">
            <Check className="h-5 w-5 text-green-600" />
            <span>Hoàn tiền 100%</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Check className="h-5 w-5 text-green-600" />
            <span>Giao hàng toàn quốc</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Check className="h-5 w-5 text-green-600" />
            <span>Hỗ trợ 24/7</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Check className="h-5 w-5 text-green-600" />
            <span>Thanh toán an toàn</span>
          </div>
        </div>
      </div>
    </section>
  );
}
