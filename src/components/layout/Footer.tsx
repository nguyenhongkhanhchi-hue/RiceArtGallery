import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gradient-gold mb-4">
              Tranh Gạo May Mắn
            </h3>
            <p className="text-sm leading-relaxed">
              Nghệ thuật thư pháp trên từng hạt gạo, mang đến may mắn và thịnh vượng cho gia đình bạn.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Liên Kết</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#story" className="hover:text-gold-400 transition-colors">Về Chúng Tôi</a></li>
              <li><a href="#pricing" className="hover:text-gold-400 transition-colors">Bảng Giá</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Chính Sách Bảo Hành</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Hướng Dẫn Đặt Hàng</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Liên Hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-gold-400" />
                <span>0123 456 789</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-gold-400" />
                <span>info@tranhgao.vn</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-gold-400" />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Mạng Xã Hội</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gold-600 flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gold-600 flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gold-600 flex items-center justify-center transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm mt-4 leading-relaxed">
              Theo dõi chúng tôi để nhận tin tức mới nhất và ưu đãi đặc biệt!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Tranh Gạo May Mắn. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
