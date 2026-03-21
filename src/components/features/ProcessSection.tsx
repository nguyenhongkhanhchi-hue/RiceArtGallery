import { Pen, Eye, PackageCheck, Sparkles } from 'lucide-react';
import craftsmanImage from '@/assets/craftsman.jpg';

const steps = [
  {
    icon: Pen,
    title: 'Chọn Gạo & Viết Thư Pháp',
    description: 'Nghệ nhân lựa chọn từng hạt gạo hoàn hảo và viết chữ thư pháp bằng mực đặc biệt',
  },
  {
    icon: Eye,
    title: 'Kiểm Tra Chất Lượng',
    description: 'Mỗi hạt gạo được kiểm tra kỹ lưỡng dưới kính lúp để đảm bảo chữ rõ nét, đẹp mắt',
  },
  {
    icon: PackageCheck,
    title: 'Đóng Khung Cao Cấp',
    description: 'Tranh được đóng trong khung kính cao cấp với bố cục nghệ thuật, sẵn sàng treo tường',
  },
  {
    icon: Sparkles,
    title: 'Giao Đến Tay Bạn',
    description: 'Đóng gói cẩn thận, kèm chứng nhận và lời chúc phúc từ nghệ nhân',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Quy Trình <span className="text-gradient-gold">Tạo Tác</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mỗi tác phẩm trải qua quy trình nghiêm ngặt để đảm bảo chất lượng hoàn hảo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={craftsmanImage} 
                alt="Nghệ nhân đang viết thư pháp trên hạt gạo" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 hidden lg:block">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-gold mb-1">15+</div>
                <div className="text-sm text-gray-600 font-medium">Năm Kinh Nghiệm</div>
              </div>
            </div>
          </div>

          {/* Steps Side */}
          <div className="space-y-6 order-1 lg:order-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-6 items-start group"
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
