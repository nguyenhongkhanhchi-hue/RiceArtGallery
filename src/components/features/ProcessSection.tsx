import { Pen, Eye, PackageCheck, Sparkles } from 'lucide-react';
import craftsmanImage from '@/assets/craftsman.jpg';
import { PROCESS_SECTION } from '@/constants/process';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProcessSection() {
  const { language } = useLanguage();
  const content = PROCESS_SECTION[language];

  const icons = { Pen, Eye, PackageCheck, Sparkles };

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {content.heading} <span className="bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600 bg-clip-text text-transparent">{content.headingHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={craftsmanImage} 
                alt={language === 'vi' ? 'Nghệ nhân đang viết thư pháp trên hạt gạo' : 'Artisan writing calligraphy on rice grains'}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 hidden lg:block">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600 bg-clip-text text-transparent mb-1">{content.yearsExperience}</div>
                <div className="text-sm text-gray-600 font-medium">{content.yearsLabel}</div>
              </div>
            </div>
          </div>

          {/* Steps Side */}
          <div className="space-y-6 order-1 lg:order-2">
            {content.steps.map((step, index) => {
              const Icon = icons[step.icon as keyof typeof icons];
              
              return (
                <div 
                  key={index}
                  className="flex gap-6 items-start group"
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
