import { useEffect, useState } from 'react';

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

export default function CountdownTimer({ 
  endDate, 
  title = 'ƯU ĐÃI KẾT THÚC SAU:',
  description 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endDate) - +new Date();
      
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
  }, [endDate]);

  return (
    <div className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 text-white py-6 px-4">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        {description && (
          <p className="text-base md:text-lg mb-6 opacity-90">{description}</p>
        )}
        
        <div className="flex justify-center gap-3 md:gap-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px] md:min-w-[100px]">
            <div className="text-4xl md:text-5xl font-bold">{timeLeft.days}</div>
            <div className="text-sm md:text-base mt-1 opacity-90">Ngày</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px] md:min-w-[100px]">
            <div className="text-4xl md:text-5xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm md:text-base mt-1 opacity-90">Giờ</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px] md:min-w-[100px]">
            <div className="text-4xl md:text-5xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm md:text-base mt-1 opacity-90">Phút</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px] md:min-w-[100px]">
            <div className="text-4xl md:text-5xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm md:text-base mt-1 opacity-90">Giây</div>
          </div>
        </div>
      </div>
    </div>
  );
}
