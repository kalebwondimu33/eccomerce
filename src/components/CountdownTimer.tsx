"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds -= 1;
        
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        
        if (days < 0) {
          // Reset to initial values when countdown reaches 0
          return { days: 3, hours: 23, minutes: 19, seconds: 56 };
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-[32px] font-bold leading-[30px] tracking-[0.04em] text-foreground">
          {value.toString().padStart(2, "0")}
        </span>
        {label !== "Seconds" && (
          <span className="mx-2 text-[24px] font-bold text-red-500">:</span>
        )}
      </div>
      <span className="mt-1 text-[11px] text-foreground">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

