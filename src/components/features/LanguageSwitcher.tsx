import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm border-2 border-gold-300 rounded-full px-4 py-2 shadow-xl">
        <Globe className="h-5 w-5 text-gold-600" />
        <button
          onClick={() => setLanguage('vi')}
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            language === 'vi'
              ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          VI
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full font-semibold transition-all ${
            language === 'en'
              ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
