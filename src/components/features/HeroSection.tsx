import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import heroImage from '@/assets/hero-rice-art.jpg';

export default function HeroSection() {
  const scrollToOrder = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-400/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-4 py-2">
              <Star className="h-4 w-4 text-gold-300 fill-gold-300" />
              <span className="text-sm font-medium text-gold-100">Nghệ Thuật Thủ Công Cao Cấp</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                Tranh Gạo
                <span className="block text-gradient-gold">May Mắn</span>
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 font-medium">
                Thư Pháp Vi Tế Trên Từng Hạt Gạo
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-amber-100/90 leading-relaxed max-w-xl">
              Mỗi tác phẩm là sự kết hợp độc đáo giữa <strong className="text-white">nghệ thuật thư pháp truyền thống</strong> và 
              <strong className="text-white"> tài năng siêu phàm</strong> của nghệ nhân. Mang đến <strong className="text-gold-300">tài lộc, bình an</strong> và 
              <strong className="text-gold-300"> thịnh vượng</strong> cho gia đình bạn.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToOrder}
                className="bg-gold-500 hover:bg-gold-600 text-amber-900 font-semibold text-lg px-8 py-6 shadow-2xl hover:shadow-gold-500/50 transition-all shimmer-effect group"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Đặt Hàng Ngay
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gold-400/50 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-8 py-6"
              >
                Khám Phá Thêm
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-300">5000+</div>
                <div className="text-sm text-amber-100/80">Khách Hài Lòng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-300">100%</div>
                <div className="text-sm text-amber-100/80">Thủ Công</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-300">4.9★</div>
                <div className="text-sm text-amber-100/80">Đánh Giá</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-400/30 animate-float">
              <img 
                src={heroImage} 
                alt="Tranh gạo may mắn - Thư pháp trên hạt gạo" 
                className="w-full h-auto"
              />
              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="bg-gold-100 rounded-full p-3">
                  <Sparkles className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Giới Hạn</div>
                  <div className="text-sm text-gray-600">Chỉ 50 bộ/tháng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#fffbeb"/>
        </svg>
      </div>
    </section>
  );
}
