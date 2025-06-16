
import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { STRATEGIES, BLOOM_STAGES } from '../constants';
import { Strategy, BloomStage, BloomLevel } from '../types';
import StrategyDetail from '../components/StrategyDetail';
import BookOpenIcon from '../components/icons/BookOpenIcon';
import BrainIcon from '../components/icons/BrainIcon';
import ZapIcon from '../components/icons/ZapIcon';
import LightbulbIcon from '../components/icons/LightbulbIcon';


const SingleSubjectMasteryPage: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);

  const subjectMasteryStrategies = STRATEGIES.filter(s => 
    s.category === 'Concept Mastery' || 
    s.category === 'Memory Enhancement' || 
    s.id === 'active-recall' || 
    s.id === 'feynman-technique' ||
    s.id === 'visualization' ||
    s.id === 'retrieval-practice' // Added retrieval practice
  );
  
  const relevantStrategiesForAnxiety = STRATEGIES.filter(s => s.id === 'stress-taming');

  const bloomLevelColors: Record<BloomLevel, string> = {
    [BloomLevel.REMEMBERING]: "bg-red-100 border-red-300",
    [BloomLevel.UNDERSTANDING]: "bg-orange-100 border-orange-300",
    [BloomLevel.APPLYING]: "bg-yellow-100 border-yellow-300",
    [BloomLevel.ANALYZING]: "bg-green-100 border-green-300",
    [BloomLevel.EVALUATING]: "bg-blue-100 border-blue-300",
    [BloomLevel.CREATING]: "bg-purple-100 border-purple-300",
  };
  const bloomLevelTextColors: Record<BloomLevel, string> = {
    [BloomLevel.REMEMBERING]: "text-red-700",
    [BloomLevel.UNDERSTANDING]: "text-orange-700",
    [BloomLevel.APPLYING]: "text-yellow-700",
    [BloomLevel.ANALYZING]: "text-green-700",
    [BloomLevel.EVALUATING]: "text-blue-700",
    [BloomLevel.CREATING]: "text-purple-700",
  };


  return (
    <div className="animate-fadeIn">
      <SectionWrapper 
        title="Guide to Subject Mastery" 
        subtitle="Ready to truly conquer a subject? This guide equips you with generalized frameworks and specific techniques to master any single subject efficiently and build a rock-solid understanding for exams. Let's do this together!"
      >
        {/* Core Frameworks Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Core Frameworks for Your Mastery Journey</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="Understand, Don't Just Memorize" icon={<BrainIcon className="w-8 h-8" />}>
              <p>Emphasis is placed on grasping underlying concepts. Techniques like the Feynman Technique are invaluable here and will be shown how to use effectively.</p>
            </Card>
            <Card title="Consistent, Spaced Practice" icon={<BookOpenIcon className="w-8 h-8" />}>
              <p>Regular engagement over time is key for deep learning. This guide helps with Spaced Repetition and Active Recall for long-term retention that lasts beyond the exam.</p>
            </Card>
            <Card title="Seek and Apply Feedback" icon={<LightbulbIcon className="w-8 h-8" />}>
              <p>Actively use practice problems and discuss concepts. This feedback loop is crucial for growth, and this platform helps interpret it and improve.</p>
            </Card>
          </div>
        </div>

        {/* Study Techniques for Subject Mastery */}
        <SectionWrapper title="Recommended Study Techniques for Deep Dives" subtitle="Explore powerful strategies tailored for mastering a subject in depth. Click any strategy to see the detailed explanation and how to apply it." className="pt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectMasteryStrategies.map(strategy => {
              const Icon = strategy.icon;
              return (
                <button 
                    key={strategy.id} 
                    onClick={() => setSelectedStrategy(strategy)} 
                    className="text-left group"
                    aria-label={`Learn more about ${strategy.title}`}
                >
                  <Card 
                    title={strategy.title} 
                    icon={<Icon className="w-7 h-7" />}
                    className="h-full group-hover:ring-2 group-hover:ring-blue-500 group-focus:ring-2 group-focus:ring-blue-500"
                  >
                    <p>{strategy.description}</p>
                    <span className="mt-2 inline-block text-blue-600 font-semibold group-hover:underline">View Details &rarr;</span>
                  </Card>
                </button>
              );
            })}
          </div>
        </SectionWrapper>
        
        {/* Modal for Strategy Detail */}
        {selectedStrategy && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex justify-center items-center p-4 z-[100] overflow-y-auto" 
            onClick={() => setSelectedStrategy(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`mastery-strategy-modal-title-${selectedStrategy.id}`}
            >
            <div 
                className="bg-gradient-to-br from-slate-100 to-sky-100 p-1 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" 
                onClick={e => e.stopPropagation()}
            >
                <div className="bg-white p-1 rounded-lg">
                    <div id={`mastery-strategy-modal-title-${selectedStrategy.id}`} className="sr-only">{selectedStrategy.title} Details</div>
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


        {/* Bloom's Taxonomy Section */}
        <SectionWrapper title="Ascend Bloom's Taxonomy Together" subtitle="This section guides you through this hierarchical approach to truly master concepts, moving from basic understanding to critical thinking and creation. This is how expertise is built for exams!" className="bg-sky-50 rounded-xl mt-12 py-10">
          <div className="space-y-6">
            {BLOOM_STAGES.map((stage: BloomStage) => (
              <div key={stage.level} className={`p-1 rounded-lg ${bloomLevelColors[stage.level]}`}>
                <Card 
                    title="" // Title is now handled inside the card for better styling with color
                    className={`bg-white !shadow-md hover:!shadow-lg !scale-100 hover:!scale-[1.02]`} // Override some default card styles
                >
                    <div className={`p-3 -m-3 mb-3 rounded-t-md border-b-2 ${bloomLevelColors[stage.level]}`}>
                        <h3 className={`text-2xl font-bold ${bloomLevelTextColors[stage.level]}`}>{stage.level}</h3>
                    </div>
                    <div className="font-medium text-gray-700 mb-3 space-y-2" dangerouslySetInnerHTML={{ __html: stage.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></div>
                    <h4 className="font-semibold text-gray-600 mt-4 mb-2">Suggested Activities:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 pl-1">
                    {stage.activities.map((activity, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: activity.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                    ))}
                    </ul>
                </Card>
              </div>
            ))}
          </div>
           <p className="mt-8 text-center text-gray-700 text-lg">
            It is recommended to use these levels to deepen engagement with any subject. The goal is to move beyond just remembering, towards applying, analyzing, evaluating, and even creating new insights for exam success and beyond!
          </p>
        </SectionWrapper>


        {/* Overcoming Test Anxiety Section */}
        <SectionWrapper title="Advice on Overcoming Test Anxiety" subtitle="It's normal to feel some stress. Here are strategies to help stay calm, confident, and perform your best during exams." className="mt-12">
          <div className="grid md:grid-cols-1 gap-6">
            {relevantStrategiesForAnxiety.map(strategy => {
               const Icon = strategy.icon;
               return (
                <Card key={strategy.id} title={strategy.title} icon={<Icon className="w-8 h-8 text-green-500" />}>
                   <div className="mb-3 space-y-2" dangerouslySetInnerHTML={{ __html: strategy.longDescription || strategy.description }}></div>
                   {strategy.howTo && strategy.howTo.length > 0 && (
                    <>
                      <h4 className="font-semibold text-gray-700 mb-1">Key Steps:</h4>
                      <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1 pl-1">
                        {strategy.howTo.map((step, index) => <li key={index} dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>)}
                      </ol>
                    </>
                   )}
                </Card>
               );
            })}
             <Card title="More Anxiety Reduction Tips" icon={<ZapIcon className="w-8 h-8 text-yellow-500" />}>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>Thorough Preparation:</strong> A key principle is, the best antidote to anxiety is knowing you're well-prepared. Let's work on this together!</li>
                    <li><strong>Positive Self-Talk:</strong> Replace negative thoughts with positive affirmations. Remind yourself: "I am capable, I have prepared."</li>
                    <li><strong>Visualize Success:</strong> It's encouraged to imagine yourself performing well, feeling calm and confident. See it, believe it.</li>
                    <li><strong>Proper Sleep & Nutrition:</strong> A healthy body supports a calm mind. Remember the importance of good rest and food.</li>
                    <li><strong>Arrive Early:</strong> Avoid any last-minute rushes that can spike stress levels.</li>
                    <li><strong>Read Instructions Carefully:</strong> Take a moment to understand what's expected before diving in.</li>
                    <li><strong>Focus on Your Own Pace:</strong> Don't get flustered by others. Stick to the plan.</li>
                    <li><strong>If You Blank Out:</strong> It's okay. Take a few deep breaths, maybe move to an easier question, and come back. This guide is here to support you (in spirit!).</li>
                </ul>
            </Card>
          </div>
        </SectionWrapper>

      </SectionWrapper>
    </div>
  );
};

export default SingleSubjectMasteryPage;
