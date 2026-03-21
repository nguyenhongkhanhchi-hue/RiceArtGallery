import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import productFrame from '@/assets/product-frame.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Tranh gạo may mắn - Khung vàng cao cấp' },
  { src: gallery2, alt: 'Chi tiết chữ thư pháp trên hạt gạo' },
  { src: gallery3, alt: 'Tranh gạo trong không gian nội thất' },
  { src: productFrame, alt: 'Sản phẩm hoàn thiện đóng khung' },
];

export default function ProductGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Thư Viện <span className="text-gradient-gold">Sản Phẩm</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá vẻ đẹp tinh xảo của tranh gạo may mắn qua bộ sưu tập ảnh chất lượng cao
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            💎 Mỗi tác phẩm đều được chế tác thủ công với tâm huyết và kỹ năng siêu việt
          </p>
        </div>
      </div>
    </section>
  );
}
