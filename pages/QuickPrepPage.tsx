import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { STRATEGIES, QUICK_PREP_STRATEGIES_IDS, QUICK_PREP_ADVICE, QUICK_STRATEGY_HOW_TOS } from '../constants';
import { Strategy } from '../types';
import ZapIcon from '../components/icons/ZapIcon';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import ClipboardListIcon from '../components/icons/ClipboardListIcon';
import SparklesIcon from '../components/icons/SparklesIcon';

const QuickPrepPage: React.FC = () => {
  const quickStrategies = STRATEGIES.filter(s => QUICK_PREP_STRATEGIES_IDS.includes(s.id));
  // For sticky quick-nav
  const [showNav, setShowNav] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShowNav(window.scrollY > 120);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="animate-fadeIn min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50 py-10 px-2 md:px-0 flex flex-col items-center relative overflow-x-hidden">
      {/* Animated Header & Motivational Banner */}
      <div className="flex flex-col items-center mb-8">
        <div className="animate-bounce-slow mb-2">
          <SparklesIcon className="w-16 h-16 text-yellow-400 drop-shadow-lg" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 drop-shadow text-center">Exam SOS! Quick Prep Guide</h1>
        <p className="text-lg text-blue-700 mt-2 text-center max-w-2xl font-semibold">Feeling the exam pressure mounting? Here are some quick, high-impact tips and strategies to help you focus, calm your nerves, and make the most of your final preparation hours. <span className="text-green-600 font-bold">You've got this!</span></p>
      </div>
      {/* Sticky Quick Navigation */}
      {showNav && (
        <nav className="fixed top-0 left-0 w-full bg-white/90 shadow-lg z-40 flex justify-center py-2 animate-fadeIn">
          <a href="#strategies" className="mx-4 text-red-600 font-bold hover:underline">Strategies</a>
          <a href="#checklist" className="mx-4 text-green-600 font-bold hover:underline">Checklist</a>
          <a href="#calm" className="mx-4 text-blue-600 font-bold hover:underline">Calm Down</a>
        </nav>
      )}
      <SectionWrapper
        title={null}
        subtitle={null}
        className="bg-transparent shadow-none"
      >
        <div className="max-w-3xl mx-auto">
          <Card title="Rapid Response Strategies" icon={<ZapIcon className="w-8 h-8 text-red-600 animate-pulse" />} className="mb-10 shadow-2xl border-2 border-red-200 bg-white/95" id="strategies">
            <p className="text-gray-700 mb-6 text-base md:text-lg">
              When time is short and pressure is high, it's essential to be smart and targeted. Here are a few techniques recommended for immediate focus and confidence:
            </p>
            <div className="space-y-6">
              {quickStrategies.map(strategy => {
                const Icon = strategy.icon;
                const quickHowTo = QUICK_STRATEGY_HOW_TOS[strategy.id];
                return (
                  <div key={strategy.id} className="p-4 bg-gradient-to-r from-white via-blue-50 to-red-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Icon className="w-7 h-7 text-blue-600 mr-3 animate-bounce-slow" />
                      <h4 className="text-lg font-semibold text-gray-800">{quickHowTo?.title || strategy.title}</h4>
                    </div>
                    {quickHowTo?.advisorTip && <p className="text-sm text-blue-700 italic mb-2">{quickHowTo.advisorTip}</p>}
                    <ul className="list-disc list-inside space-y-1 text-base text-gray-600 pl-1">
                      {quickHowTo?.sosHowTo.map((step, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card title="Last-Minute Exam Checklist" icon={<ClipboardListIcon className="w-8 h-8 text-green-600 animate-pulse" />} className="mb-10 shadow-2xl border-2 border-green-200 bg-white/95" id="checklist">
            <p className="text-gray-700 mb-4 text-base md:text-lg">
              Let's quickly run through these essentials to ensure you're all set for exam day:
            </p>
            <ul className="space-y-3 text-gray-700">
              {QUICK_PREP_ADVICE.checklist.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl font-bold flex-shrink-0 mt-[-2px] animate-bounce">&#10004;</span>
                  <span className="flex-grow" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></span>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Calm Down Fast" icon={<LightbulbIcon className="w-8 h-8 text-blue-500 animate-spin-slow" />} className="mb-10 shadow-2xl border-2 border-blue-200 bg-white/95" id="calm">
            <p className="text-blue-700 mb-4 text-base md:text-lg font-semibold">Feeling anxious? Try these quick calming techniques to reset your mind and body:</p>
            <ul className="space-y-3 text-blue-700">
              <li className="flex items-center gap-2"><span className="text-2xl">🧘‍♂️</span> <span>Take 5 deep, slow breaths. Inhale for 4, exhale for 6.</span></li>
              <li className="flex items-center gap-2"><span className="text-2xl">🚶‍♀️</span> <span>Stand up, stretch, and walk around for 2 minutes.</span></li>
              <li className="flex items-center gap-2"><span className="text-2xl">💧</span> <span>Drink a glass of water—hydration helps your brain!</span></li>
              <li className="flex items-center gap-2"><span className="text-2xl">🎧</span> <span>Listen to a favorite song for a quick mood boost.</span></li>
              <li className="flex items-center gap-2"><span className="text-2xl">🤲</span> <span>Rub your hands together and feel the warmth—focus on the sensation.</span></li>
            </ul>
            <div className="mt-6 text-center text-blue-400 text-xs italic">You’re stronger and smarter than you think. Take a breath, and go crush that exam!</div>
          </Card>
        </div>
      </SectionWrapper>
      {/* Playful Footer */}
      <footer className="mt-10 text-center text-sm text-blue-400 opacity-80">
        <span role="img" aria-label="zap">⚡</span> Quick Prep, Big Results. Good luck! <span role="img" aria-label="star">🌟</span>
      </footer>
    </div>
  );
};

export default QuickPrepPage;
