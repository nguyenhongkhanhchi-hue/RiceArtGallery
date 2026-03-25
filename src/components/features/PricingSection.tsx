import { Button } from '@/components/ui/button';
import { Check, Zap, Crown, Sparkles } from 'lucide-react';
import { PRICING_PACKAGES } from '@/constants/pricing';
import { useOrder } from '@/contexts/OrderContext';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap: Record<string, any> = {
  Zap,
  Crown,
  Sparkles,
};

export default function PricingSection() {
  const { language } = useLanguage();
  const { setSelectedPackage, scrollToOrder } = useOrder();
  const packages = PRICING_PACKAGES[language];

  const handleOrder = (packageName: string) => {
    setSelectedPackage(packageName);
    scrollToOrder();
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {language === 'vi' ? 'Bảng Giá ' : 'Special '}
            <span className="bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600 bg-clip-text text-transparent">
              {language === 'vi' ? 'Ưu Đãi' : 'Pricing'}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'vi' 
              ? <>Giảm giá <strong className="text-gold-600">30%</strong> trong tháng này!</>
              : <><strong className="text-gold-600">30% OFF</strong> this month!</>}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = iconMap[pkg.icon];
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
                    🔥 {language === 'vi' ? 'PHỔ BIẾN NHẤT' : 'MOST POPULAR'}
                  </div>
                )}

                <div className="p-8">
                  {/* Icon & Name */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 mb-4">
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
                      <span className="text-5xl font-bold bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600 bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                      <span className="text-gray-600 mb-2">₫</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold mt-2">
                      {language === 'vi' ? 'Tiết kiệm' : 'Save'} {(parseInt(pkg.originalPrice.replace(/[,.\s]/g, '')) - parseInt(pkg.price.replace(/[,.\s]/g, ''))).toLocaleString()}₫
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mt-0.5">
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
                    {pkg.popular 
                      ? (language === 'vi' ? 'Đặt Ngay - Ưu Đãi' : 'Order Now - Special Offer')
                      : (language === 'vi' ? 'Chọn Gói Này' : 'Choose Package')}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          {[
            { vi: 'Hoàn tiền 100%', en: '100% Refund' },
            { vi: 'Giao hàng toàn quốc', en: 'Nationwide Delivery' },
            { vi: 'Hỗ trợ 24/7', en: '24/7 Support' },
            { vi: 'Thanh toán an toàn', en: 'Secure Payment' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-600">
              <Check className="h-5 w-5 text-green-600" />
              <span>{item[language]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
