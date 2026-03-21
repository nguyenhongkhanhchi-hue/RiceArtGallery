import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export default function StickyOrderButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToOrderForm = () => {
    document.getElementById('order-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Button
        onClick={scrollToOrderForm}
        size="lg"
        className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white font-bold text-lg px-8 py-7 shadow-2xl hover:shadow-gold-500/50 rounded-full shimmer-effect group"
      >
        <ShoppingCart className="mr-2 h-6 w-6 group-hover:animate-bounce" />
        Đặt Hàng Ngay
      </Button>
    </div>
  );
}
