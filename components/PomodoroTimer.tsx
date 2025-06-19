import React, { useEffect } from 'react';
import ClockIcon from './icons/ClockIcon';
import { usePomodoroTimer } from './PomodoroTimerContext';

const PomodoroTimer: React.FC = () => {
  const {
    workDuration, setWorkDuration,
    shortBreakDuration, setShortBreakDuration,
    longBreakDuration, setLongBreakDuration,
    mode, setMode,
    pomodorosCompleted,
    timer,
    setConfigChanged,
  } = usePomodoroTimer();

  const WORK_DURATION = workDuration * 60;
  const SHORT_BREAK_DURATION = shortBreakDuration * 60;
  const LONG_BREAK_DURATION = longBreakDuration * 60;

  useEffect(() => {
    const newInitialTime = mode === 'work' ? WORK_DURATION : (mode === 'shortBreak' ? SHORT_BREAK_DURATION : LONG_BREAK_DURATION);
    timer.reset(newInitialTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  useEffect(() => {
    if (timer.isActive && !timer.isPaused) {
      const handle = () => {
        try {
          new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3').play().catch(e => console.warn("Audio play failed:", e));
        } catch (e) {
          console.warn("Audio notification failed:", e);
        }
      };
      handle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer.isActive, timer.isPaused]);

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    if (timer.isActive) {
      timer.pause();
    } else {
      if (timer.isPaused || timer.time === (mode === 'work' ? WORK_DURATION : (mode === 'shortBreak' ? SHORT_BREAK_DURATION : LONG_BREAK_DURATION)) ) {
         timer.time > 0 ? timer.resume() : timer.start();
      } else {
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


  // Add UI for customizing durations
  return (
    <div className="p-6 bg-white rounded-xl shadow-2xl text-center max-w-md mx-auto">
      <form
        className="flex flex-col md:flex-row gap-2 items-center justify-center mb-4"
        onSubmit={e => { e.preventDefault(); setConfigChanged(true); }}
      >
        <label className="flex flex-col text-xs text-gray-600 font-semibold">
          Work (min)
          <input
            type="number"
            min={1}
            max={90}
            value={workDuration}
            onChange={e => setWorkDuration(Number(e.target.value))}
            className="border rounded px-2 py-1 w-16 text-center font-bold"
          />
        </label>
        <label className="flex flex-col text-xs text-gray-600 font-semibold">
          Short Break
          <input
            type="number"
            min={1}
            max={30}
            value={shortBreakDuration}
            onChange={e => setShortBreakDuration(Number(e.target.value))}
            className="border rounded px-2 py-1 w-16 text-center font-bold"
          />
        </label>
        <label className="flex flex-col text-xs text-gray-600 font-semibold">
          Long Break
          <input
            type="number"
            min={1}
            max={60}
            value={longBreakDuration}
            onChange={e => setLongBreakDuration(Number(e.target.value))}
            className="border rounded px-2 py-1 w-16 text-center font-bold"
          />
        </label>
        <button
          type="submit"
          className="ml-2 px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
        >Save</button>
      </form>
      
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
