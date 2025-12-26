import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface WeddingCountdownProps {
  weddingDate: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const parseWeddingDate = (dateString: string): Date => {
  // Parse date strings like "Friday, 6th February 2026"
  const months: { [key: string]: number } = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
  };
  
  // Remove ordinal suffixes (st, nd, rd, th) and day name
  const cleaned = dateString
    .toLowerCase()
    .replace(/\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday),?\s*/i, '')
    .replace(/(\d+)(st|nd|rd|th)/g, '$1');
  
  // Extract day, month, year
  const match = cleaned.match(/(\d+)\s+(\w+)\s+(\d{4})/);
  if (match) {
    const day = parseInt(match[1]);
    const month = months[match[2]];
    const year = parseInt(match[3]);
    return new Date(year, month, day, 0, 0, 0);
  }
  
  return new Date(dateString);
};

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const TimeUnit = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center"
  >
    <div className="relative">
      {/* Decorative frame */}
      <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 to-gold-dark/30 rounded-lg blur-sm" />
      <div className="relative bg-gradient-to-br from-cream via-ivory to-cream-dark rounded-lg border-2 border-gold/40 shadow-lg px-3 sm:px-5 py-2 sm:py-3 min-w-[60px] sm:min-w-[80px]">
        <motion.span
          key={value}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl text-magenta font-bold block text-center"
        >
          {value.toString().padStart(2, '0')}
        </motion.span>
      </div>
    </div>
    <span className="font-body text-xs sm:text-sm text-brown-light uppercase tracking-wider mt-2">
      {label}
    </span>
  </motion.div>
);

const Separator = () => (
  <div className="flex flex-col items-center justify-center pb-6">
    <span className="text-gold text-2xl sm:text-3xl font-bold">:</span>
  </div>
);

export const WeddingCountdown = ({ weddingDate, className = "" }: WeddingCountdownProps) => {
  const targetDate = parseWeddingDate(weddingDate);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const isWeddingDay = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isWeddingDay) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center ${className}`}
      >
        <h3 className="font-script text-3xl sm:text-4xl text-magenta">
          Today is the Day! 💍
        </h3>
      </motion.div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading text-sm sm:text-base uppercase tracking-[0.2em] text-gold mb-4 text-center"
      >
        Counting Down To The Big Day
      </motion.h3>
      
      <div className="flex items-center justify-center gap-1 sm:gap-3">
        <TimeUnit value={timeLeft.days} label="Days" delay={0} />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="Hours" delay={0.1} />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="Minutes" delay={0.2} />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="Seconds" delay={0.3} />
      </div>
    </div>
  );
};
