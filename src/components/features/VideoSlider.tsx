import { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { YOUTUBE_VIDEOS } from '@/constants/videos';
import { useLanguage } from '@/contexts/LanguageContext';

export default function VideoSlider() {
  const { language } = useLanguage();
  const videos = YOUTUBE_VIDEOS[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  useEffect(() => {
    if (isPlaying === null) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      }, 5000); // Auto-advance every 5 seconds when not playing
      return () => clearInterval(interval);
    }
  }, [isPlaying, videos.length]);

  const extractVideoId = (idOrUrl: string): string => {
    if (idOrUrl.includes('youtube.com') || idOrUrl.includes('youtu.be')) {
      const match = idOrUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
      return match ? match[1] : idOrUrl;
    }
    return idOrUrl;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(null);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {language === 'vi' ? 'Video ' : 'Video '}
            <span className="bg-gradient-to-r from-gold-400 via-yellow-300 to-gold-400 bg-clip-text text-transparent">
              {language === 'vi' ? 'Giới Thiệu' : 'Introduction'}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {language === 'vi' 
              ? 'Khám phá quy trình tạo tranh gạo và trải nghiệm từ khách hàng'
              : 'Discover the rice art creation process and customer experiences'}
          </p>
        </div>

        {/* Video Display */}
        <div className="max-w-5xl mx-auto relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black" style={{ paddingBottom: '56.25%' }}>
            {isPlaying === currentIndex ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${extractVideoId(videos[currentIndex].id)}?autoplay=1`}
                title={videos[currentIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0">
                <img
                  src={`https://img.youtube.com/vi/${extractVideoId(videos[currentIndex].id)}/maxresdefault.jpg`}
                  alt={videos[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group hover:bg-black/50 transition-colors cursor-pointer"
                     onClick={() => setIsPlaying(currentIndex)}>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="h-12 w-12 text-white ml-2" fill="white" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10"
            aria-label="Previous video"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all z-10"
            aria-label="Next video"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>

          {/* Video Info */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              {videos[currentIndex].title}
            </h3>
            <p className="text-gray-400 text-lg">
              {videos[currentIndex].description}
            </p>
          </div>

          {/* Thumbnails */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            {videos.map((video, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(null);
                }}
                className={`relative w-32 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? 'border-gold-400 scale-110 shadow-xl'
                    : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={`https://img.youtube.com/vi/${extractVideoId(video.id)}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 border-2 border-gold-400 rounded-lg"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
