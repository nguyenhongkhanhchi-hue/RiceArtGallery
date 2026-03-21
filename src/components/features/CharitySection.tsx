import { Heart, TrendingUp, Users } from 'lucide-react';
import charityImage from '@/assets/charity.jpg';
import { CHARITY_SECTION } from '@/constants/content';

export default function CharitySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              {CHARITY_SECTION.title} <span className="text-gradient-gold">{CHARITY_SECTION.titleHighlight}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {CHARITY_SECTION.subtitle}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={charityImage} 
                  alt="Chương trình từ thiện phát gạo"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="h-8 w-8 text-red-400 fill-red-400" />
                    <h3 className="text-2xl font-bold">Chia Sẻ Yêu Thương</h3>
                  </div>
                  <p className="text-amber-100">Mỗi đơn hàng = 1 phần gạo cho người khó khăn</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {CHARITY_SECTION.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {CHARITY_SECTION.stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-gold-50 to-amber-50 rounded-2xl border-2 border-gold-200"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Impact Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-gray-900 text-lg mb-1">
                      Hỗ Trợ Gia Đình Khó Khăn
                    </h4>
                    <p className="text-gray-600">
                      Phát gạo định kỳ cho các hộ nghèo, người già neo đơn
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-gray-900 text-lg mb-1">
                      Chăm Sóc Trẻ Em Mồ Côi
                    </h4>
                    <p className="text-gray-600">
                      Đóng góp cho các trại trẻ mồ côi và mái ấm từ thiện
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-gray-900 text-lg mb-1">
                      Minh Bạch & Công Khai
                    </h4>
                    <p className="text-gray-600">
                      Cập nhật định kỳ trên fanpage với hình ảnh thực tế
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
