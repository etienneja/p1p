"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(target: string): TimeLeft | null {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-heading text-3xl md:text-4xl font-bold text-corail tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs md:text-sm text-encre-light uppercase tracking-wider mt-1">{label}</span>
    </div>
  );
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(targetDate));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-4 md:gap-6 py-4">
        {["Jours", "Heures", "Minutes", "Secondes"].map((label) => (
          <TimeBlock key={label} value={0} label={label} />
        ))}
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <p className="text-center text-lg font-semibold text-soleil py-4">
        L&apos;événement a commencé !
      </p>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 py-4">
      <TimeBlock value={timeLeft.days} label="Jours" />
      <span className="text-2xl text-corail font-bold">:</span>
      <TimeBlock value={timeLeft.hours} label="Heures" />
      <span className="text-2xl text-corail font-bold">:</span>
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <span className="text-2xl text-corail font-bold">:</span>
      <TimeBlock value={timeLeft.seconds} label="Secondes" />
    </div>
  );
}
