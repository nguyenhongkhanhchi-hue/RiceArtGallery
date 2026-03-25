import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FacebookComments() {
  const { language } = useLanguage();

  useEffect(() => {
    // Load Facebook SDK
    if (!(window as any).FB) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v18.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);

      script.onload = () => {
        if ((window as any).FB) {
          (window as any).FB.XFBML.parse();
        }
      };
    } else {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {language === 'vi' ? 'Bình Luận ' : 'Customer '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              {language === 'vi' ? 'Facebook' : 'Comments'}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'vi'
              ? 'Chia sẻ ý kiến và trải nghiệm của bạn về sản phẩm'
              : 'Share your opinions and experiences about our products'}
          </p>
        </div>

        {/* Facebook Comments Plugin */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 shadow-xl">
            <div id="fb-root"></div>
            <div
              className="fb-comments"
              data-href={window.location.href}
              data-width="100%"
              data-numposts="10"
              data-order-by="reverse_time"
              data-colorscheme="light"
            ></div>
          </div>

          {/* Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {language === 'vi'
                ? '💡 Đăng nhập Facebook để bình luận và tương tác với cộng đồng'
                : '💡 Login to Facebook to comment and interact with the community'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
