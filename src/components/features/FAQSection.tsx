import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '@/constants/faq';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FAQSection() {
  const { language } = useLanguage();
  const faqs = FAQ_ITEMS[language];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-amber-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mb-6">
            <HelpCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {language === 'vi' ? 'Câu Hỏi ' : 'Frequently '}
            <span className="bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600 bg-clip-text text-transparent">
              {language === 'vi' ? 'Thường Gặp' : 'Asked Questions'}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'vi'
              ? 'Giải đáp mọi thắc mắc của bạn về sản phẩm và dịch vụ'
              : 'Answers to all your questions about products and services'}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'border-gold-400 shadow-xl'
                  : 'border-gray-200 shadow-md hover:border-gold-300'
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-amber-50/50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                    openIndex === index
                      ? 'bg-gradient-to-br from-gold-400 to-gold-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className={`font-display font-bold text-lg md:text-xl transition-colors ${
                    openIndex === index ? 'text-gold-700' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 h-6 w-6 text-gold-600 transition-transform duration-300 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                  <div className="pl-14 pr-10">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-gold-50 via-amber-50 to-gold-50 border-2 border-gold-300 rounded-2xl px-8 py-6">
            <p className="text-gray-700 font-semibold text-lg">
              {language === 'vi' ? 'Vẫn còn thắc mắc?' : 'Still have questions?'}
            </p>
            <a
              href="https://zalo.me/0939941588"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {language === 'vi' ? '💬 Tư Vấn Zalo Ngay' : '💬 Contact via Zalo'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
