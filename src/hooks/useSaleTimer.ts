import { useEffect, useState, useCallback, useRef } from 'react';

const STORAGE_KEY = 'strike_sale_deadline';
const SALE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours
const COUPON_CODE = 'STRIKE40LIGHTNING';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function calculateTimeLeft(deadline: number): TimeLeft {
  const diff = deadline - Date.now();
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    expired: false,
  };
}

export function useSaleTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });
  const [deadline, setDeadline] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const dl = parseInt(stored, 10);
      if (!isNaN(dl)) {
        setDeadline(dl);
        return;
      }
    }
  }, []);

  useEffect(() => {
    if (deadline === null) return;
    setTimeLeft(calculateTimeLeft(deadline));
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  const startTimer = useCallback(() => {
    const dl = Date.now() + SALE_DURATION_MS;
    localStorage.setItem(STORAGE_KEY, String(dl));
    setDeadline(dl);
  }, []);

  return { timeLeft, startTimer, deadline };
}

export { COUPON_CODE, STORAGE_KEY, SALE_DURATION_MS };
