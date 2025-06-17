import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { STRATEGIES } from '../constants';
import { Strategy } from '../types';
import StrategyDetail from '../components/StrategyDetail';
import BookOpenIcon from '../components/icons/BookOpenIcon';
import BrainIcon from '../components/icons/BrainIcon';
import ZapIcon from '../components/icons/ZapIcon';
import LightbulbIcon from '../components/icons/LightbulbIcon';

const studentStories = [
  {
    name: 'Ayesha (Class 10)',
    story: '“I used to memorize everything, but when I started drawing mind maps and teaching my friends, I finally understood Chemistry. My marks jumped from 60% to 85%!”',
  },
  {
    name: 'Rahim (Class 12)',
    story: '“Active recall felt weird at first, but quizzing myself every week made the formulas stick. I felt confident walking into the exam.”',
  },
];

const quickTips = [
  'Break big chapters into small, daily goals.',
  'Explain what you learn to a friend or even your pillow!',
  'Use color and diagrams to make notes memorable.',
  'Test yourself before the exam tests you.',
];

const roadmapSteps = [
  {
    label: '1. Understand Concepts',
    desc: 'Focus on WHY, not just WHAT. Use the Feynman Technique or mind maps.',
    icon: <BrainIcon className="w-7 h-7 text-blue-500" />,
  },
  {
    label: '2. Practice & Recall',
    desc: 'Quiz yourself, solve problems, and use spaced repetition.',
    icon: <BookOpenIcon className="w-7 h-7 text-green-500" />,
  },
  {
    label: '3. Review & Reflect',
    desc: 'Check mistakes, ask questions, and adjust your plan.',
    icon: <LightbulbIcon className="w-7 h-7 text-yellow-500" />,
  },
];

const faq = [
  {
    q: 'What if I forget everything on exam day?',
    a: 'Take a deep breath, start with easy questions, and trust your preparation. Use quick recall triggers like mnemonics or diagrams.',
  },
  {
    q: 'How do I stay motivated for boring subjects?',
    a: 'Set small rewards, study with a friend, or turn it into a game. Remind yourself of your bigger goal!',
  },
];

const dos = [
  'Summarize each topic in your own words.',
  'Practice with past papers and quizzes.',
  'Take short breaks to recharge.',
  'Ask for help when stuck.',
];
const donts = [
  "Cram everything the night before.",
  "Just read without testing yourself.",
  "Skip sleep for extra study.",
  "Ignore topics you find hard.",
];

const SingleSubjectMasteryPage: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const subjectMasteryStrategies = STRATEGIES.filter(s => 
    s.category === 'Concept Mastery' || 
    s.category === 'Memory Enhancement' || 
    s.id === 'active-recall' || 
    s.id === 'feynman-technique' ||
    s.id === 'visualization' ||
    s.id === 'retrieval-practice'
  );
  const relevantStrategiesForAnxiety = STRATEGIES.filter(s => s.id === 'stress-taming');

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-sky-200 py-12 px-4 rounded-b-3xl shadow mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Master Any Subject</h1>
        <p className="text-xl md:text-2xl text-blue-700 mb-6 max-w-2xl mx-auto">“Success is the sum of small efforts, repeated day in and day out.”</p>
        <a href="#roadmap" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition">Start Here</a>
      </div>

      {/* Visual Roadmap */}
      <SectionWrapper id="roadmap" title={<span>🗺️ Your 3-Step Roadmap to Mastery</span>} subtitle="Follow these steps for every subject. Simple, powerful, proven.">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-8">
          {roadmapSteps.map((step, idx) => (
            <div key={idx} className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
              {step.icon}
              <h3 className="mt-3 text-xl font-bold text-blue-800">{step.label}</h3>
              <p className="mt-2 text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Quick Tips & Did You Know */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl shadow">
          <h4 className="font-bold text-yellow-700 mb-2">⚡ Quick Tips</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {quickTips.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl shadow">
          <h4 className="font-bold text-blue-700 mb-2">💡 Did You Know?</h4>
          <p className="text-gray-700">Active recall and spaced repetition can double your retention compared to rereading notes. Try quizzing yourself after every study session!</p>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <SectionWrapper title={<span>✅ Do’s & ❌ Don’ts for Mastery</span>}>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-green-700 font-bold mb-2">Do’s</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {dos.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-red-700 font-bold mb-2">Don’ts</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {donts.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Student Voices */}
      <SectionWrapper title={<span>🎤 Student Voices</span>} subtitle="Real stories from Bangladeshi students who mastered their toughest subjects.">
        <div className="grid md:grid-cols-2 gap-6">
          {studentStories.map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-400">
              <p className="italic text-gray-800 mb-2">{s.story}</p>
              <div className="text-right text-blue-700 font-semibold">— {s.name}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Study Techniques Gallery */}
      <SectionWrapper title={<span>🧠 Strategy Gallery</span>} subtitle="Click any strategy to see how it works and how to use it.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectMasteryStrategies.map(strategy => {
            const Icon = strategy.icon;
            return (
              <button 
                key={strategy.id} 
                onClick={() => setSelectedStrategy(strategy)} 
                className="text-left group w-full"
                aria-label={`Learn more about ${strategy.title}`}
              >
                <Card 
                  title={<span className="flex items-center gap-2">{<Icon className="w-7 h-7" />} {strategy.title}</span>} 
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

      {/* Test Anxiety Toolkit (FAQ) */}
      <SectionWrapper title={<span>🧘 Test Anxiety Toolkit</span>} subtitle="Stay calm, confident, and in control during exams.">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {faq.map((item, i) => (
            <div key={i} className="bg-blue-50 rounded-xl shadow p-6 mb-2">
              <button
                className="w-full text-left font-semibold text-blue-800 focus:outline-none focus:underline"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                aria-controls={`faq-panel-${i}`}
              >
                {item.q}
              </button>
              <div
                id={`faq-panel-${i}`}
                className={`mt-2 text-gray-700 transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                aria-hidden={openFaq !== i}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h4 className="font-bold text-blue-700 mb-2">Extra Tips</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Thorough Preparation:</strong> The best antidote to anxiety is knowing you're well-prepared. Let's work on this together!</li>
            <li><strong>Positive Self-Talk:</strong> Replace negative thoughts with positive affirmations. Remind yourself: "I am capable, I have prepared."</li>
            <li><strong>Visualize Success:</strong> Imagine yourself performing well, feeling calm and confident. See it, believe it.</li>
            <li><strong>Proper Sleep & Nutrition:</strong> A healthy body supports a calm mind. Remember the importance of good rest and food.</li>
            <li><strong>Arrive Early:</strong> Avoid any last-minute rushes that can spike stress levels.</li>
            <li><strong>Read Instructions Carefully:</strong> Take a moment to understand what's expected before diving in.</li>
            <li><strong>Focus on Your Own Pace:</strong> Don't get flustered by others. Stick to the plan.</li>
            <li><strong>If You Blank Out:</strong> It's okay. Take a few deep breaths, maybe move to an easier question, and come back. This guide is here to support you (in spirit!).</li>
          </ul>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SingleSubjectMasteryPage;
