import { ShieldCheck, Truck, Award, Headphones, Lock, Package } from 'lucide-react';
import { GUARANTEES } from '@/constants/guarantees';

const iconMap: Record<string, any> = {
  ShieldCheck,
  Truck,
  Award,
  Headphones,
  Lock,
  Package,
};

export default function GuaranteeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Cam Kết <span className="text-gradient-gold">Bảo Đảm</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến trải nghiệm mua sắm an toàn và hài lòng 100%
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {GUARANTEES.map((guarantee, index) => {
            const Icon = iconMap[guarantee.icon];
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-amber-50 to-gold-50 border-2 border-gold-200 rounded-2xl p-8 hover:shadow-xl hover:border-gold-400 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-gray-900 text-xl mb-2">
                      {guarantee.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-gold-50 via-amber-50 to-gold-50 border-2 border-gold-300 rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-green-600" />
              <span className="font-semibold text-gray-900">Uy Tín</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-gold-600" />
              <span className="font-semibold text-gray-900">Chất Lượng</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Headphones className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-gray-900">Hỗ Trợ 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
