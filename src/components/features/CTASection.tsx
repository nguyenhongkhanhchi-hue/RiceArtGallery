import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Clock } from 'lucide-react';

export default function CTASection() {
  const scrollToOrder = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-pulse">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Chỉ còn 15 suất trong tháng này!</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Đừng Bỏ Lỡ Cơ Hội <br />
            <span className="text-gold-300">Sở Hữu Tác Phẩm Độc Đáo</span>
          </h2>

          <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Mỗi tháng chúng tôi chỉ sản xuất <strong className="text-white">50 bộ tranh</strong> để đảm bảo 
            chất lượng tuyệt đối. Đặt hàng ngay để không phải chờ đợi!
          </p>

          {/* Benefits List */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-2">🎁</div>
              <div className="font-semibold mb-1">Tặng Quà</div>
              <div className="text-sm text-amber-100">Trị giá 500.000₫</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-2">🚚</div>
              <div className="font-semibold mb-1">Miễn Phí Ship</div>
              <div className="text-sm text-amber-100">Toàn quốc 24h</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-2">💯</div>
              <div className="font-semibold mb-1">Đảm Bảo</div>
              <div className="text-sm text-amber-100">Hoàn tiền 100%</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToOrder}
              className="bg-gold-500 hover:bg-gold-600 text-amber-900 font-semibold text-xl px-10 py-7 shadow-2xl hover:shadow-gold-500/50 transition-all shimmer-effect group"
            >
              <Sparkles className="mr-2 h-6 w-6 group-hover:animate-pulse" />
              Đặt Hàng Ngay - Giảm 30%
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Text */}
          <p className="mt-8 text-amber-200 text-sm">
            ✓ Thanh toán an toàn &nbsp;•&nbsp; ✓ Bảo mật thông tin &nbsp;•&nbsp; ✓ Hỗ trợ 24/7
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}
