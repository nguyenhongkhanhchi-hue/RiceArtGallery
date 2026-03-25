import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import productFrame from '@/assets/product-frame.jpg';

const galleryImages = [
  { src: gallery1, alt: { vi: 'Tranh gạo may mắn - Khung vàng cao cấp', en: 'Lucky rice art - Premium gold frame' } },
  { src: gallery2, alt: { vi: 'Chi tiết chữ thư pháp trên hạt gạo', en: 'Calligraphy details on rice grains' } },
  { src: gallery3, alt: { vi: 'Tranh gạo trong không gian nội thất', en: 'Rice art in interior space' } },
  { src: productFrame, alt: { vi: 'Sản phẩm hoàn thiện đóng khung', en: 'Finished framed product' } },
];

export default function ProductGallery() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50/50 via-white to-cream">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {language === 'vi' ? 'Thư Viện ' : 'Product '}
            <span className="bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600 bg-clip-text text-transparent">
              {language === 'vi' ? 'Sản Phẩm' : 'Gallery'}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'vi'
              ? 'Khám phá vẻ đẹp tinh xảo của tranh gạo may mắn qua bộ sưu tập ảnh chất lượng cao'
              : 'Discover the exquisite beauty of lucky rice art through our high-quality collection'}
          </p>
        </div>

        {/* Main Slider */}
        <div className="max-w-5xl mx-auto relative mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentIndex ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt[language]}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                    <p className="text-white font-display font-bold text-2xl md:text-3xl drop-shadow-lg">
                      {image.alt[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all shadow-xl z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all shadow-xl z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-gold-400 to-gold-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                } rounded-full`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                index === currentIndex ? 'ring-4 ring-gold-400' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt[language]}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm line-clamp-2">{image.alt[language]}</p>
                </div>
              </div>
              {index === currentIndex && (
                <div className="absolute inset-0 border-4 border-gold-400 rounded-2xl pointer-events-none"></div>
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg font-semibold">
            {language === 'vi'
              ? '💎 Mỗi tác phẩm đều được chế tác thủ công với tâm huyết và kỹ năng siêu việt'
              : '💎 Each piece is handcrafted with dedication and extraordinary skills'}
          </p>
        </div>
      </div>
    </section>
  );
}
