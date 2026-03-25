import { MessageCircle } from 'lucide-react';
import { SITE_INFO } from '@/constants/site';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ZaloButton() {
  const { language } = useLanguage();
  const info = SITE_INFO[language];

  const handleZaloClick = () => {
    const message = encodeURIComponent(info.zaloMessage);
    window.open(`https://zalo.me/${info.phone}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleZaloClick}
      className="fixed bottom-24 right-6 z-50 group"
      aria-label="Tư vấn Zalo"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Button */}
        <div className="relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="h-6 w-6" />
          <span className="font-bold text-lg whitespace-nowrap">
            {language === 'vi' ? 'TƯ VẤN ZALO' : 'ZALO CONSULT'}
          </span>
        </div>
      </div>
    </button>
  );
}
