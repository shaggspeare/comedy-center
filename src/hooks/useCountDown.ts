'use client';
import { useEffect, useState } from 'react';

interface CountDownState {
  currentDays: number | string;
  currentHours: number | string;
  currentMinutes: number | string;
  currentSeconds: number | string;
}

const useCountDown = (): CountDownState => {
  const [currentTime, setCurrentTime] = useState<CountDownState>({
    currentDays: 0,
    currentHours: 0,
    currentMinutes: 0,
    currentSeconds: 0,
  });

  function updateTargetDate(): number {
    const now = new Date();
    now.setHours(23, 59, 59, 0);
    const targetDate = now.getTime() + 10 * 24 * 60 * 60 * 1000;
    return targetDate;
  }

  function updateCountdown(): void {
    const targetDate = updateTargetDate();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    setCurrentTime({
      currentDays: days < 10 ? '0' + days : days,
      currentHours: hours < 10 ? '0' + hours : hours,
      currentMinutes: minutes < 10 ? '0' + minutes : minutes,
      currentSeconds: seconds < 10 ? '0' + seconds : seconds,
    });
  }

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return currentTime;
};

export default useCountDown;
