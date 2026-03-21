import productFrame from '@/assets/product-frame.jpg';
import { Check } from 'lucide-react';

const features = [
  'Chữ thư pháp viết tay trên từng hạt gạo',
  'Khung kính cao cấp với viền mạ vàng',
  'Kích thước 30x40cm, dễ dàng treo tường',
  'Kèm chứng nhận tác phẩm thật',
  'Bảo hành khung tranh 12 tháng',
  'Giao hàng tận nơi, đóng gói cẩn thận',
];

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Product Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-200">
              <img 
                src={productFrame} 
                alt="Tranh gạo may mắn đóng khung cao cấp" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full p-6 shadow-2xl animate-pulse">
              <div className="text-center">
                <div className="text-sm font-semibold">GIẢM</div>
                <div className="text-3xl font-bold">30%</div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⭐ SẢN PHẨM CAO CẤP
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                Tranh Gạo <span className="text-gradient-gold">Hoàn Hảo</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Mỗi tác phẩm là sự kết hợp hoàn hảo giữa nghệ thuật thư pháp truyền thống và 
                kỹ thuật chế tác hiện đại, mang đến cho bạn một sản phẩm đẳng cấp nhất.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-gray-900">
                Đặc Điểm Nổi Bật:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Guarantee */}
            <div className="bg-gradient-to-br from-amber-50 to-gold-50 border-2 border-gold-200 rounded-2xl p-6">
              <h4 className="font-display font-semibold text-gray-900 mb-2 text-lg">
                🛡️ Cam Kết Chất Lượng
              </h4>
              <p className="text-gray-700 leading-relaxed">
                <strong>Hoàn tiền 100%</strong> nếu sản phẩm không đúng mô tả. 
                Chúng tôi tự tin về chất lượng và nghệ thuật của từng tác phẩm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
