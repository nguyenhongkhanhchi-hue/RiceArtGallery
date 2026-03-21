import { useEffect, useState } from 'react';
import customer1 from '@/assets/customer-1.jpg';
import customer2 from '@/assets/customer-2.jpg';
import customer3 from '@/assets/customer-3.jpg';

const customerPhotos = [
  {
    image: customer1,
    name: 'Gia Đình Chị Mai',
    feedback: 'Rất hài lòng với sản phẩm! Cả nhà đều yêu thích.',
  },
  {
    image: customer2,
    name: 'Anh Hùng - Doanh Nhân',
    feedback: 'Tranh gạo trang trí văn phòng rất đẳng cấp!',
  },
  {
    image: customer3,
    name: 'Ông Bà Thọ',
    feedback: 'Món quà ý nghĩa từ con cháu, rất vui!',
  },
];

export default function CustomerPhotosSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customerPhotos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Khách Hàng <span className="text-gradient-gold">Hài Lòng</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hàng ngàn khách hàng đã tin tưởng và yêu thích sản phẩm của chúng tôi
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {customerPhotos.map((customer, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentIndex 
                    ? 'opacity-100 relative' 
                    : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-amber-50 to-gold-50">
                  {/* Image */}
                  <div className="relative">
                    <img 
                      src={customer.image} 
                      alt={customer.name}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-gold-500 text-white rounded-full p-6 shadow-xl">
                      <div className="text-center">
                        <div className="text-3xl font-bold">⭐</div>
                        <div className="text-sm font-semibold">5/5</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="text-6xl text-gold-400 mb-4">"</div>
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                      {customer.feedback}
                    </p>
                    <div className="border-l-4 border-gold-500 pl-4">
                      <p className="font-display font-bold text-gray-900 text-xl">
                        {customer.name}
                      </p>
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-gold-500 text-xl">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {customerPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gold-500'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                } rounded-full`}
                aria-label={`Chuyển đến ảnh ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
