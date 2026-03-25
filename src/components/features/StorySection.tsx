import { Heart, Award, Shield } from 'lucide-react';
import { STORY_SECTION } from '@/constants/story';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StorySection() {
  const { language } = useLanguage();
  const content = STORY_SECTION[language];

  return (
    <section id="story" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              {content.heading} <span className="bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600 bg-clip-text text-transparent">{content.headingHighlight}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none text-gray-700 mb-12 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-justify">
              {content.paragraph1}
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-justify">
              {content.paragraph2}
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8">
            {content.values.map((value, index) => {
              const icons = { Heart, Award, Shield };
              const Icon = icons[value.icon as keyof typeof icons];
              
              return (
                <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-gold-50 border border-gold-200/50 hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-base md:text-lg text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
