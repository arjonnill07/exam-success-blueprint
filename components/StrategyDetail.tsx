
import React from 'react';
import { Strategy, StrategyCategory } from '../types'; // Added StrategyCategory import
import { STRATEGIES } from '../constants'; // For pairing
import { Link } from 'react-router-dom';


interface StrategyDetailProps {
  strategy: Strategy;
}

const StrategyDetail: React.FC<StrategyDetailProps> = ({ strategy }) => {
  const IconComponent = strategy.icon;
  const VisualExplainer = strategy.visualExplainerComponent;

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
    <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 my-4">
      <div className="flex items-start sm:items-center mb-6 flex-col sm:flex-row">
        <IconComponent className="h-12 w-12 text-blue-600 mr-0 mb-3 sm:mr-4 sm:mb-0 flex-shrink-0" />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{strategy.title}</h2>
          <p className="text-md text-blue-700 font-medium">{strategy.category}</p>
        </div>
      </div>

      <div 
        className="p-4 bg-gray-50 rounded-lg mb-6 border border-gray-200 text-gray-700 text-lg leading-relaxed space-y-3"
        dangerouslySetInnerHTML={{ __html: strategy.longDescription || strategy.description }}
      />

      {VisualExplainer && (
        <div className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Visual Cue:</h3>
          <div className="flex justify-center items-center my-3">
            <VisualExplainer className="h-24 w-24 md:h-32 md:w-32 text-blue-500" />
          </div>
          {strategy.visualExplainerCaption && (
            <p className="text-sm text-gray-600 italic mt-2">{strategy.visualExplainerCaption}</p>
          )}
        </div>
      )}

      {strategy.examPrepFocus && strategy.examPrepFocus.length > 0 && (
        <div className="mb-6 p-4 bg-emerald-50 rounded-lg border border-emerald-300 shadow-sm">
          <h3 className="text-xl font-semibold text-emerald-800 mb-3">Exam Edge:</h3>
          <ul className="list-disc list-inside space-y-2 text-emerald-700 pl-1">
            {strategy.examPrepFocus.map((focus, index) => (
              <li key={index} className="leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: focus.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
            ))}
          </ul>
        </div>
      )}

      {strategy.howTo && strategy.howTo.length > 0 && (
        <div className="mb-6 p-4 bg-sky-50 rounded-lg border border-sky-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Implement This:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 pl-1">
            {strategy.howTo.map((step, index) => (
              <li key={index} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
            ))}
          </ol>
        </div>
      )}

      {strategy.benefits && strategy.benefits.length > 0 && (
        <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Other Potential Benefits:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
            {strategy.benefits.map((benefit, index) => (
              <li key={index} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: benefit.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
            ))}
          </ul>
        </div>
      )}

      {strategy.realWorldExamples && strategy.realWorldExamples.length > 0 && (
        <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-300">
          <h3 className="text-xl font-semibold text-yellow-800 mb-3">Real-World & Exam Examples:</h3>
          <ul className="list-disc list-inside space-y-2 text-yellow-700 pl-1">
            {strategy.realWorldExamples.map((example, index) => (
              <li key={index} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: example.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
            ))}
          </ul>
        </div>
      )}
      
      {strategy.interactiveComponent && (
         <div className="mt-8 p-4 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Try It Out:</h3>
            {strategy.interactiveComponent}
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-200">
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
