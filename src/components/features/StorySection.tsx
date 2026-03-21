import { Heart, Award, Shield } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Nghệ Thuật <span className="text-gradient-gold">Siêu Phàm</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Mỗi hạt gạo là một tác phẩm nghệ thuật, được chế tác bởi bàn tay tài hoa của nghệ nhân
            </p>
          </div>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none text-gray-700 mb-12 space-y-6">
            <p className="text-lg leading-relaxed">
              <strong className="text-gray-900">Tranh Gạo May Mắn</strong> không chỉ là món quà trang trí, 
              mà còn là <strong className="text-gold-600">biểu tượng của sự kiên nhẫn, tài năng và tâm huyết</strong> của 
              người nghệ nhân. Mỗi chữ thư pháp được viết tay trên hạt gạo nhỏ bé đòi hỏi <strong>sự tập trung tuyệt đối</strong> và 
              <strong> kỹ năng siêu việt</strong>.
            </p>
            
            <p className="text-lg leading-relaxed">
              Theo quan niệm phương Đông, <strong className="text-gold-600">gạo tượng trưng cho sự thịnh vượng, dồi dào</strong>, 
              còn thư pháp mang đến <strong className="text-gold-600">năng lượng tích cực, bình an</strong>. Khi kết hợp hai yếu tố này, 
              bạn sẽ có một tác phẩm nghệ thuật độc nhất vô nhị mang lại <strong>may mắn và tài lộc</strong> cho gia đình.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-gold-50 border border-gold-200/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">Tâm Huyết</h3>
              <p className="text-gray-600">
                Mỗi tác phẩm được chế tác với tình yêu và sự tận tâm
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-gold-50 border border-gold-200/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">Độc Nhất</h3>
              <p className="text-gray-600">
                Không có hai tác phẩm nào giống hệt nhau
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-gold-50 border border-gold-200/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">Chất Lượng</h3>
              <p className="text-gray-600">
                Cam kết 100% thủ công, chất lượng cao cấp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
