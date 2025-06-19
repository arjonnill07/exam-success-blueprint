import React, { createContext, useContext, useMemo } from 'react';
import useTimer from '../hooks/useTimer';

interface PomodoroTimerContextType {
  workDuration: number;
  setWorkDuration: React.Dispatch<React.SetStateAction<number>>;
  shortBreakDuration: number;
  setShortBreakDuration: React.Dispatch<React.SetStateAction<number>>;
  longBreakDuration: number;
  setLongBreakDuration: React.Dispatch<React.SetStateAction<number>>;
  mode: 'work' | 'shortBreak' | 'longBreak';
  setMode: React.Dispatch<React.SetStateAction<'work' | 'shortBreak' | 'longBreak'>>;
  pomodorosCompleted: number;
  setPomodorosCompleted: React.Dispatch<React.SetStateAction<number>>;
  timer: ReturnType<typeof useTimer>;
  setConfigChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const PomodoroTimerContext = createContext<PomodoroTimerContextType | undefined>(undefined);

export const PomodoroTimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Move the timer logic here (copied from PomodoroTimer.tsx, minus UI)
  // Customizable durations
  const [workDuration, setWorkDuration] = React.useState(25);
  const [shortBreakDuration, setShortBreakDuration] = React.useState(5);
  const [longBreakDuration, setLongBreakDuration] = React.useState(15);
  const WORK_DURATION = workDuration * 60;
  const SHORT_BREAK_DURATION = shortBreakDuration * 60;
  const LONG_BREAK_DURATION = longBreakDuration * 60;

  const [mode, setMode] = React.useState<'work' | 'shortBreak' | 'longBreak'>('work');
  const [pomodorosCompleted, setPomodorosCompleted] = React.useState(0);

  const handleTimerEnd = React.useCallback(() => {
    try {
      new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3').play().catch(() => {});
    } catch {}
    if (mode === 'work') {
      const newPomodorosCompleted = pomodorosCompleted + 1;
      setPomodorosCompleted(newPomodorosCompleted);
      if (newPomodorosCompleted % 4 === 0) {
        setMode('longBreak');
        timer.reset(LONG_BREAK_DURATION);
      } else {
        setMode('shortBreak');
        timer.reset(SHORT_BREAK_DURATION);
      }
    } else {
      setMode('work');
      timer.reset(WORK_DURATION);
    }
  }, [mode, pomodorosCompleted, WORK_DURATION, SHORT_BREAK_DURATION, LONG_BREAK_DURATION]);

  const timer = useTimer({
    initialTime: mode === 'work' ? WORK_DURATION : (mode === 'shortBreak' ? SHORT_BREAK_DURATION : LONG_BREAK_DURATION),
    onEnd: handleTimerEnd,
  });

  // Update timer's initial time when mode changes and timer is not active
  React.useEffect(() => {
    if (!timer.isActive) {
      const newInitialTime = mode === 'work' ? WORK_DURATION : (mode === 'shortBreak' ? SHORT_BREAK_DURATION : LONG_BREAK_DURATION);
      timer.reset(newInitialTime);
    }
    // eslint-disable-next-line
  }, [mode]);

  // Add state to trigger timer reset on config change
  const [configChanged, setConfigChanged] = React.useState(false);
  React.useEffect(() => {
    if (configChanged) {
      const newInitialTime = mode === 'work' ? WORK_DURATION : (mode === 'shortBreak' ? SHORT_BREAK_DURATION : LONG_BREAK_DURATION);
      timer.reset(newInitialTime);
      setConfigChanged(false);
    }
    // eslint-disable-next-line
  }, [configChanged]);

  const value = useMemo(() => ({
    workDuration, setWorkDuration,
    shortBreakDuration, setShortBreakDuration,
    longBreakDuration, setLongBreakDuration,
    mode, setMode,
    pomodorosCompleted, setPomodorosCompleted,
    timer,
    setConfigChanged,
  }), [workDuration, shortBreakDuration, longBreakDuration, mode, pomodorosCompleted, timer]);

  return (
    <PomodoroTimerContext.Provider value={value}>
      {children}
    </PomodoroTimerContext.Provider>
  );
};

export const usePomodoroTimer = () => {
  const context = useContext(PomodoroTimerContext);
  if (context === undefined) {
    throw new Error('usePomodoroTimer must be used within a PomodoroTimerProvider');
  }
  return context;
};
