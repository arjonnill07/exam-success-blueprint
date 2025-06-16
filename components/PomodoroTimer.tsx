
import React, { useState, useEffect, useCallback } from 'react';
import useTimer from '../hooks/useTimer';
import ClockIcon from './icons/ClockIcon';

const PomodoroTimer: React.FC = () => {
  const WORK_DURATION = 25 * 60; // 25 minutes
  const SHORT_BREAK_DURATION = 5 * 60; // 5 minutes
  const LONG_BREAK_DURATION = 15 * 60; // 15 minutes

  const [mode, setMode] = useState<'work' | 'shortBreak' | 'longBreak'>('work');
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0);

  const handleTimerEnd = useCallback(() => {
    // Basic notification, browser might block this without user interaction
    // Consider a more subtle visual cue or a user-configurable sound.
    try {
      new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3').play().catch(e => console.warn("Audio play failed:", e));
    } catch (e) {
      console.warn("Audio notification failed:", e);
    }


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
    // Automatically start next session
    // timer.start(); // Commented out to allow manual start
  }, [mode, pomodorosCompleted]);

  const timer = useTimer({
    initialTime: mode === 'work' ? WORK_DURATION : (mode === 'shortBreak' ? SHORT_BREAK_DURATION : LONG_BREAK_DURATION),
    onEnd: handleTimerEnd,
  });
  
  // Update timer's initial time when mode changes and timer is not active
  useEffect(() => {
    if (!timer.isActive) {
        const newInitialTime = mode === 'work' ? WORK_DURATION : (mode === 'shortBreak' ? SHORT_BREAK_DURATION : LONG_BREAK_DURATION);
        timer.reset(newInitialTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);


  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    if (timer.isActive) {
      timer.pause();
    } else {
      if (timer.isPaused || timer.time === (mode === 'work' ? WORK_DURATION : (mode === 'shortBreak' ? SHORT_BREAK_DURATION : LONG_BREAK_DURATION)) ) { // resume or start
         timer.time > 0 ? timer.resume() : timer.start();
      } else { // if time is 0 or it's a fresh start for this mode
        timer.start();
      }
    }
  };

  const handleReset = () => {
    const currentModeDuration = mode === 'work' ? WORK_DURATION : (mode === 'shortBreak' ? SHORT_BREAK_DURATION : LONG_BREAK_DURATION);
    timer.reset(currentModeDuration);
  };
  
  const switchMode = (newMode: 'work' | 'shortBreak' | 'longBreak') => {
    setMode(newMode);
    // timer.reset will be called by useEffect for mode change
  };


  const getModeButtonClass = (buttonMode: 'work' | 'shortBreak' | 'longBreak') => {
    return `px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
      mode === buttonMode ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`;
  };

  const timerDisplayClasses = () => {
    let borderColor = 'border-gray-300';
    if (timer.isActive && !timer.isPaused) {
      if (mode === 'work') borderColor = 'border-red-500 animate-pulse';
      else if (mode === 'shortBreak') borderColor = 'border-green-500';
      else if (mode === 'longBreak') borderColor = 'border-purple-500';
    }
    return `my-8 text-7xl font-bold text-gray-800 tabular-nums p-4 border-4 rounded-full inline-block ${borderColor} transition-colors duration-500`;
  };


  return (
    <div className="p-6 bg-white rounded-xl shadow-2xl text-center max-w-md mx-auto">
      <div className="flex justify-center space-x-2 mb-6">
        <button onClick={() => switchMode('work')} className={getModeButtonClass('work')}>Work</button>
        <button onClick={() => switchMode('shortBreak')} className={getModeButtonClass('shortBreak')}>Short Break</button>
        <button onClick={() => switchMode('longBreak')} className={getModeButtonClass('longBreak')}>Long Break</button>
      </div>
      
      <div className={timerDisplayClasses()}>
        {formatTime(timer.time)}
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={toggleTimer}
          className={`px-8 py-3 rounded-lg text-white font-semibold transition-transform transform hover:scale-105
            ${timer.isActive && !timer.isPaused ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'}`}
        >
          {timer.isActive && !timer.isPaused ? 'Pause' : (timer.isPaused && timer.time > 0 ? 'Resume' : 'Start')}
        </button>
        <button
          onClick={handleReset}
          className="px-8 py-3 rounded-lg bg-gray-500 text-white font-semibold hover:bg-gray-600 transition-transform transform hover:scale-105"
        >
          Reset
        </button>
      </div>
      <p className="text-sm text-gray-500">Pomodoros completed: {pomodorosCompleted}</p>
      <div className="mt-4 flex items-center justify-center text-blue-600">
        <ClockIcon className="w-5 h-5 mr-2"/>
        <p className="font-semibold">
            {mode === 'work' ? 'Recommendation: Time to Focus!' : 'Recommendation: Time for a Break!'}
        </p>
      </div>
    </div>
  );
};

export default PomodoroTimer;
