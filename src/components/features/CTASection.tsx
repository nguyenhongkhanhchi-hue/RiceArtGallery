import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { CTA_SECTION } from '@/constants/cta';
import { useOrder } from '@/contexts/OrderContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CTASection() {
  const { language } = useLanguage();
  const { scrollToOrder } = useOrder();
  const content = CTA_SECTION[language];

  return (
    <section className="py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            {content.title} <br />
            <span className="text-gold-300">{content.titleHighlight}</span>
          </h2>

          <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            {content.description}
          </p>

          {/* Benefits List */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            {content.benefits.map((benefit, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <div className="font-semibold mb-1">{benefit.title}</div>
                <div className="text-sm text-amber-100">{benefit.subtitle}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToOrder}
              className="bg-gold-500 hover:bg-gold-600 text-amber-900 font-semibold text-xl px-10 py-7 shadow-2xl hover:shadow-gold-500/50 transition-all shimmer-effect group"
            >
              <Sparkles className="mr-2 h-6 w-6 group-hover:animate-pulse" />
              {content.ctaButton}
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Text */}
          <p className="mt-8 text-amber-200 text-sm">
            {content.trustText}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}
