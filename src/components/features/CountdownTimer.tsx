import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  endDate: string;
  title?: string;
  description?: string;
}

const COUNTDOWN_KEY = 'countdown_start_time';
const COUNTDOWN_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export default function CountdownTimer({ 
  endDate, 
  title = 'ƯU ĐÃI KẾT THÚC SAU:',
  description 
}: CountdownTimerProps) {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Get or set the countdown start time
    let countdownEndTime = localStorage.getItem(COUNTDOWN_KEY);
    
    if (!countdownEndTime) {
      // First visit - set 24h countdown from now
      const endTime = new Date().getTime() + COUNTDOWN_DURATION;
      localStorage.setItem(COUNTDOWN_KEY, endTime.toString());
      countdownEndTime = endTime.toString();
    }

    const calculateTimeLeft = () => {
      const difference = parseInt(countdownEndTime!) - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const labels = {
    vi: { days: 'Ngày', hours: 'Giờ', minutes: 'Phút', seconds: 'Giây' },
    en: { days: 'Days', hours: 'Hours', minutes: 'Mins', seconds: 'Secs' },
  };

  const currentLabels = labels[language];

  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-6 px-4 shadow-xl">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        {description && (
          <p className="text-base md:text-lg mb-6 opacity-90">{description}</p>
        )}
        
        <div className="flex justify-center gap-3 md:gap-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px] md:min-w-[100px] border-2 border-white/30">
            <div className="text-4xl md:text-5xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
            <div className="text-sm md:text-base mt-1 opacity-90 font-semibold">{currentLabels.days}</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px] md:min-w-[100px] border-2 border-white/30">
            <div className="text-4xl md:text-5xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="text-sm md:text-base mt-1 opacity-90 font-semibold">{currentLabels.hours}</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px] md:min-w-[100px] border-2 border-white/30">
            <div className="text-4xl md:text-5xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="text-sm md:text-base mt-1 opacity-90 font-semibold">{currentLabels.minutes}</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px] md:min-w-[100px] border-2 border-white/30">
            <div className="text-4xl md:text-5xl font-bold animate-pulse">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="text-sm md:text-base mt-1 opacity-90 font-semibold">{currentLabels.seconds}</div>
          </div>
        </div>

        <p className="mt-4 text-sm opacity-75">
          {language === 'vi' 
            ? '⏰ Ưu đãi này chỉ dành riêng cho bạn trong 24 giờ!'
            : '⏰ This exclusive offer is only for you for 24 hours!'}
        </p>
      </div>
    </div>
  );
}
