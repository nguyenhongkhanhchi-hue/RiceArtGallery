import { Gem, TrendingUp, Gift, Home } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Tài Lộc Thịnh Vượng',
    description: 'Mang đến năng lượng tích cực, thu hút tài lộc và may mắn đến gia đình bạn',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Home,
    title: 'Bình An Gia Đạo',
    description: 'Tạo không gian sống hài hòa, mang lại sự bình yên và hạnh phúc cho mọi người',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Gem,
    title: 'Nghệ Thuật Độc Đáo',
    description: 'Tác phẩm nghệ thuật tinh xảo, thể hiện đẳng cấp và sở thích thẩm mỹ của bạn',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Gift,
    title: 'Quà Tặng Ý Nghĩa',
    description: 'Món quà hoàn hảo cho dịp khai trương, tân gia, sinh nhật hay lễ tết',
    color: 'from-orange-500 to-red-600'
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Lợi Ích <span className="text-gradient-gold">Vượt Trội</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sở hữu tranh gạo may mắn không chỉ là đầu tư vào nghệ thuật mà còn là đầu tư cho tương lai tươi sáng
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-400/5 to-gold-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
