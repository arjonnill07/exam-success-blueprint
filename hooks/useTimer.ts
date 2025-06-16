
import { useState, useEffect, useCallback, useRef } from 'react';

interface TimerOptions {
  initialTime: number;
  onEnd?: () => void;
}

interface TimerControls {
  time: number;
  isActive: boolean;
  isPaused: boolean;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: (newTime?: number) => void;
}

const useTimer = ({ initialTime, onEnd }: TimerOptions): TimerControls => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const start = useCallback(() => {
    setIsActive(true);
    setIsPaused(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  }, []);

  const pause = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    setIsPaused(false);
    if (intervalRef.current) clearInterval(intervalRef.current); // Clear just in case
    intervalRef.current = window.setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  }, []);

  const reset = useCallback((newTime?: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTime(newTime !== undefined ? newTime : initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (isActive && !isPaused && time <= 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsActive(false);
      onEnd?.();
    }
  }, [time, isActive, isPaused, onEnd]);

  useEffect(() => {
    // Cleanup interval on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return { time, isActive, isPaused, start, pause, resume, reset };
};

export default useTimer;
