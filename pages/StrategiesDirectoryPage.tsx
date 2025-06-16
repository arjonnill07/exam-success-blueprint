
import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import { STRATEGIES } from '../constants';
import { Strategy, StrategyCategory } from '../types';
import StrategyDetail from '../components/StrategyDetail';
import Card from '../components/Card'; 
import LightbulbIcon from '../components/icons/LightbulbIcon'; // For guided pathways

interface GuidedPathway {
  id: string;
  feeling: string;
  advisorSays: string;
  relevantStrategyIds: string[];
}

const GUIDED_PATHWAYS: GuidedPathway[] = [
  {
    id: "overwhelmed",
    feeling: "Overwhelmed by too much to study?",
    advisorSays: "Understood! Let's break it down and manage time. Consider focusing on these:",
    relevantStrategyIds: ["pomodoro", "chunking", "interleaving"] 
  },
  {
    id: "forgetful",
    feeling: "Worried about forgetting everything?",
    advisorSays: "A common concern! Memory can be strengthened with these powerful techniques:",
    relevantStrategyIds: ["active-recall", "spaced-repetition", "leitner-system", "visualization"]
  },
  {
    id: "stuck",
    feeling: "Stuck on difficult concepts?",
    advisorSays: "It happens to the best of us! To deepen understanding, try these approaches:",
    relevantStrategyIds: ["feynman-technique", "focus-diffuse", "blooms-taxonomy", "deliberate-practice"]
  },
  {
    id: "anxious",
    feeling: "Anxious about the exam itself?",
    advisorSays: "This platform is here to help you stay calm and confident. This strategy is specifically designed for that:",
    relevantStrategyIds: ["stress-taming"]
  }
];


const StrategiesDirectoryPage: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);
  const [filterCategory, setFilterCategory] = useState<StrategyCategory | 'All'>('All');
  const [activePathway, setActivePathway] = useState<GuidedPathway | null>(null);
  
  const location = useLocation();
  const strategyRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (location.state?.scrollToId) {
      const element = strategyRefs.current[location.state.scrollToId];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const strategyToSelect = STRATEGIES.find(s => s.id === location.state.scrollToId);
        if (strategyToSelect) setSelectedStrategy(strategyToSelect);
      }
    }
  }, [location.state]);


  const categories = ['All', ...Object.values(StrategyCategory)];

  const filteredStrategies = activePathway 
    ? STRATEGIES.filter(s => activePathway.relevantStrategyIds.includes(s.id))
    : (filterCategory === 'All' 
        ? STRATEGIES 
        : STRATEGIES.filter(strategy => strategy.category === filterCategory));

  const handlePathwayClick = (pathway: GuidedPathway) => {
    setActivePathway(pathway);
    setFilterCategory('All'); // Reset category filter when pathway is active
    setSelectedStrategy(null);
  };
  
  const handleCategoryClick = (category: StrategyCategory | 'All') => {
    setFilterCategory(category);
    setActivePathway(null); // Reset pathway when category is chosen
    setSelectedStrategy(null);
  }


  return (
    <div className="animate-fadeIn">
      <SectionWrapper 
        title="Comprehensive Study Strategies Guide" 
        subtitle="Welcome! Here you'll find a wide array of proven techniques to enhance learning, memory, and exam performance. Explore them, or let this guide assist based on how you're feeling."
      >
        {/* Guided Pathways Section */}
        <div className="mb-10 p-6 bg-sky-50 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            <LightbulbIcon className="w-7 h-7 inline-block mr-2 text-yellow-500" />
            How can this guide help if I'm feeling...
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {GUIDED_PATHWAYS.map(pathway => (
              <button
                key={pathway.id}
                onClick={() => handlePathwayClick(pathway)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out transform hover:scale-105
                  ${activePathway?.id === pathway.id
                    ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-300' 
                    : 'bg-white text-blue-700 hover:bg-blue-100 shadow'}`}
              >
                {pathway.feeling}
              </button>
            ))}
            {activePathway && (
              <button
                onClick={() => setActivePathway(null)}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-400 hover:bg-gray-500 text-white shadow"
              >
                Show All Strategies
              </button>
            )}
          </div>
          {activePathway && (
            <div className="mt-4 p-4 bg-white rounded-md border border-blue-200">
              <p className="text-blue-700 font-medium">{activePathway.advisorSays}</p>
            </div>
          )}
        </div>


        {/* Category Filter */}
        {!activePathway && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category as StrategyCategory | 'All')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${filterCategory === category 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Strategies Grid */}
        {filteredStrategies.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {filteredStrategies.map(strategy => {
              const IconComponent = strategy.icon;
              return (
                <div key={strategy.id} ref={(el) => { strategyRefs.current[strategy.id] = el; }}>
                  <button 
                    onClick={() => setSelectedStrategy(strategy)} 
                    className="w-full h-full text-left group"
                    aria-label={`View details for ${strategy.title}`}
                  >
                    <Card 
                      title={strategy.title} 
                      icon={<IconComponent className="w-8 h-8" />}
                      className="h-full flex flex-col group-hover:ring-2 group-hover:ring-blue-500 group-focus:ring-2 group-focus:ring-blue-500"
                    >
                      <p className="text-sm flex-grow">{strategy.description}</p>
                      <span className="mt-3 inline-block text-blue-600 font-semibold group-hover:underline text-sm">
                        View Details &rarr;
                      </span>
                      <span className="block text-xs text-gray-500 mt-1">{strategy.category}</span>
                    </Card>
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg py-8">
            {activePathway ? "No specific strategies for this selection right now, but this guide is always being updated! Try 'Show All Strategies'." : "No strategies in this category yet. Try 'All'!"}
          </p>
        )}
        
      </SectionWrapper>

      {/* Modal for Strategy Detail */}
      {selectedStrategy && (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex justify-center items-center p-4 z-[100] overflow-y-auto" 
            onClick={() => setSelectedStrategy(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`strategy-modal-title-${selectedStrategy.id}`}
        >
          <div 
            className="bg-gradient-to-br from-slate-100 to-sky-100 p-1 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" 
            onClick={e => e.stopPropagation()}
          >
             <div className="bg-white p-1 rounded-lg">
                {/* Add an ID to the h2 for aria-labelledby */}
                <div id={`strategy-modal-title-${selectedStrategy.id}`} className="sr-only">{selectedStrategy.title} Details</div>
                <StrategyDetail strategy={selectedStrategy} />
                <button
                    onClick={() => setSelectedStrategy(null)}
                    className="mt-4 mb-2 ml-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                    Close Details
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StrategiesDirectoryPage;
