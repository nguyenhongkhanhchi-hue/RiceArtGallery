import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useOrder } from '@/contexts/OrderContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StickyOrderButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToOrder } = useOrder();
  const { language } = useLanguage();

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

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToOrder}
        className="relative group"
      >
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-gold-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Button */}
        <div className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white rounded-full shadow-2xl hover:shadow-gold-500/50 transition-all duration-300 group-hover:scale-110">
          <ShoppingCart className="h-6 w-6 group-hover:animate-bounce" />
          <span className="font-bold text-lg whitespace-nowrap">
            {language === 'vi' ? 'ĐẶT HÀNG NGAY' : 'ORDER NOW'}
          </span>
        </div>
      </button>
    </div>
  );
}
