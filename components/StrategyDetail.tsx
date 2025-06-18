import React, { useState } from 'react';
import { Strategy, StrategyCategory } from '../types';
import { STRATEGIES } from '../constants';
import { Link } from 'react-router-dom';


interface StrategyDetailProps {
  strategy: Strategy;
}

const StrategyDetail: React.FC<StrategyDetailProps> = ({ strategy }) => {
  const IconComponent = strategy.icon;
  const VisualExplainer = strategy.visualExplainerComponent;
  const [showMore, setShowMore] = useState(false);

  const getPairingSuggestions = () => {
    const pairings: { id: string, reason: string }[] = [];
    switch (strategy.id) {
      case 'pomodoro':
        pairings.push({ id: 'active-recall', reason: 'use Pomodoros for focused recall sessions.' });
        pairings.push({ id: 'chunking', reason: 'tackle one chunk per Pomodoro.' });
        break;
      case 'active-recall':
        pairings.push({ id: 'spaced-repetition', reason: 'schedule your recall sessions effectively.' });
        pairings.push({ id: 'feynman-technique', reason: 'recall by explaining it simply!' });
        break;
      case 'retrieval-practice': 
        pairings.push({ id: 'spaced-repetition', reason: 'schedule practice test sessions for optimal retention.' });
        pairings.push({ id: 'deliberate-practice', reason: 'use retrieval practice to identify weaknesses for targeted effort.' });
        break;
      case 'chunking':
        pairings.push({ id: 'pomodoro', reason: 'dedicate Pomodoros to specific chunks.' });
        pairings.push({ id: 'visualization', reason: 'map out how chunks connect visually.' });
        break;
      case 'feynman-technique':
        pairings.push({ id: 'active-recall', reason: 'test your simplified explanation with recall.' });
        pairings.push({ id: 'blooms-taxonomy', reason: 'ensure true understanding, moving up the levels.' });
        break;
      case 'spaced-repetition':
        pairings.push({ id: 'active-recall', reason: 'this is what will be spaced out!' });
        pairings.push({ id: 'leitner-system', reason: 'use flashcards with a system for spaced review.' });
        break;
      case 'visualization':
         pairings.push({ id: 'chunking', reason: 'visualize how smaller chunks form the big picture.' });
         pairings.push({ id: 'active-recall', reason: 'draw diagrams from memory to test recall.' });
        break;
      default:
        if (strategy.category === StrategyCategory.MEMORY_ENHANCEMENT && strategy.id !== "active-recall" && strategy.id !== "retrieval-practice") {
            pairings.push({ id: 'active-recall', reason: 'most memory techniques benefit from active testing.' });
        }
        if (strategy.category === StrategyCategory.LEARNING_TECHNIQUES && strategy.id !== "pomodoro") {
            pairings.push({ id: 'pomodoro', reason: 'apply new techniques in focused bursts.' });
        }
    }
    return pairings.slice(0, 2).map(p => STRATEGIES.find(s => s.id === p.id)).filter(Boolean) as Strategy[];
  };
  const suggestedPairings = getPairingSuggestions();

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-6 md:p-10 my-6 max-w-3xl mx-auto animate-fadeIn">
      {/* Hero Section */}
      <div className="flex flex-col sm:flex-row items-center mb-8 gap-6">
        <div className="flex flex-col items-center">
          <IconComponent className="h-16 w-16 text-blue-600 mb-2" />
          <span className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
            {strategy.category}
          </span>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">{strategy.title}</h2>
          <div className="italic text-blue-700 text-lg font-medium mb-1">{strategy.description}</div>
        </div>
      </div>

      {/* What & Why */}
      {strategy.longDescription && (
        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-xl text-gray-800 text-lg leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: strategy.longDescription }} />
      )}

      {/* Visual Explainer */}
      {VisualExplainer && (
        <div className="mb-6 p-4 bg-sky-50 rounded-xl border border-sky-200 flex flex-col items-center">
          <VisualExplainer className="h-24 w-24 md:h-32 md:w-32 text-sky-500 mb-2" />
          {strategy.visualExplainerCaption && (
            <p className="text-base text-blue-700 italic mt-2 text-center">{strategy.visualExplainerCaption}</p>
          )}
        </div>
      )}

      {/* How to Use */}
      {strategy.howTo && strategy.howTo.length > 0 && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-xl">
          <h3 className="text-xl font-bold text-green-800 mb-2 flex items-center gap-2">⚡ How to Use</h3>
          <ol className="space-y-4">
            {strategy.howTo.map((step, index) => {
              // Remove **bold** markdown, then split at first <br/> or line break
              const cleanStep = step.replace(/\*\*(.*?)\*\*/g, '$1');
              const [title, ...descParts] = cleanStep.split(/<br\s*\/?\s*>|\n/);
              const desc = descParts.join(' ').trim();
              return (
                <li key={index} className="bg-white rounded-lg shadow p-4 border border-green-100">
                  <div className="font-semibold text-lg text-green-900 mb-1" dangerouslySetInnerHTML={{ __html: title }} />
                  {desc && <div className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: desc }} />}
                </li>
              );
            })}
          </ol>
        </div>
      )}

      {/* Try it Now Callout */}
      {strategy.tryItNow && (
        <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl animate-pulse">
          <strong>Try it now:</strong> {strategy.tryItNow}
        </div>
      )}

      {/* Benefits */}
      {strategy.benefits && strategy.benefits.length > 0 && (
        <div className="mb-6 p-4 bg-pink-50 border-l-4 border-pink-400 rounded-xl">
          <h3 className="text-xl font-bold text-pink-800 mb-2">Benefits</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800 pl-1">
            {strategy.benefits.map((benefit, index) => (
              <li key={index} className="leading-relaxed">{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Real-World Example - Carousel Style */}
      {strategy.realWorldExamples && strategy.realWorldExamples.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">Real-World Example{strategy.realWorldExamples.length > 1 ? 's' : ''}</h3>
          <RealWorldExampleCarousel examples={strategy.realWorldExamples} />
        </div>
      )}

      {/* Exam Prep Focus */}
      {strategy.examPrepFocus && strategy.examPrepFocus.length > 0 && (
        <div className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-400 rounded-xl">
          <h3 className="text-xl font-bold text-emerald-800 mb-2">Exam Prep Focus</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800 pl-1">
            {strategy.examPrepFocus.map((focus, index) => (
              <li key={index} className="leading-relaxed">{focus}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Collapsible More Details/FAQ */}
      <div className="mb-6">
        <button
          className="text-blue-600 underline font-semibold mb-2"
          onClick={() => setShowMore(v => !v)}
        >
          {showMore ? 'Hide More Details' : 'Show More Details / FAQ'}
        </button>
        {showMore && (
          <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-700">
            <p>Want to go deeper? Explore advanced tips, common mistakes, and more in our full guide (coming soon)!</p>
          </div>
        )}
      </div>

      {/* Pairing Suggestions */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Consider Pairing With:</h3>
        {suggestedPairings.length > 0 ? (
          <ul className="list-none space-y-1 text-sm text-gray-600">
            {suggestedPairings.map(pairedStrategy => (
              <li key={pairedStrategy.id}>
                <Link
                  to="/strategies"
                  state={{ scrollToId: pairedStrategy.id }}
                  className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                  onClick={() => {
                    const closeButton = document.querySelector('.fixed.inset-0 button.bg-red-500');
                    if (closeButton instanceof HTMLElement) closeButton.click();
                  }}
                >
                  {pairedStrategy.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600">
            Explore other strategies in this toolkit to create a powerful, personalized study system! Consider what you're trying to achieve.
          </p>
        )}
      </div>
    </div>
  );
};

export default StrategyDetail;

const exampleMeta = [
  // You can expand this mapping for more personalized avatars/tags
  { tag: 'SSC English', avatar: '📚' },
  { tag: 'HSC Chemistry', avatar: '🧪' },
  { tag: 'Bangla Literature', avatar: '📖' },
  { tag: 'Any subject', avatar: '🎓' },
];

const RealWorldExampleCarousel: React.FC<{ examples: string[] }> = ({ examples }) => {
  const [idx, setIdx] = React.useState(0);
  const meta = exampleMeta[idx % exampleMeta.length];
  const handlePrev = () => setIdx(i => (i - 1 + examples.length) % examples.length);
  const handleNext = () => setIdx(i => (i + 1) % examples.length);
  return (
    <div className="flex flex-col items-center">
      <div className="bg-indigo-50 border-l-4 border-indigo-400 rounded-xl shadow p-6 w-full max-w-xl relative animate-fadeIn">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{meta.avatar}</span>
          <span className="bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold">{meta.tag}</span>
        </div>
        <blockquote className="italic text-lg text-indigo-900 leading-relaxed" dangerouslySetInnerHTML={{ __html: examples[idx] }} />
        <div className="mt-4 flex items-center justify-between w-full">
          <button onClick={handlePrev} className="text-indigo-600 hover:text-indigo-900 font-bold px-3 py-1 rounded transition-colors">&lt; Prev</button>
          <div className="flex gap-1">
            {examples.map((_, i) => (
              <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === idx ? 'bg-indigo-600' : 'bg-indigo-200'}`}></span>
            ))}
          </div>
          <button onClick={handleNext} className="text-indigo-600 hover:text-indigo-900 font-bold px-3 py-1 rounded transition-colors">Next &gt;</button>
        </div>
      </div>
      {idx === examples.length - 1 && examples.length > 1 && (
        <div className="mt-3 text-green-700 font-semibold animate-bounce">🎉 You’ve seen all the examples!</div>
      )}
    </div>
  );
};
