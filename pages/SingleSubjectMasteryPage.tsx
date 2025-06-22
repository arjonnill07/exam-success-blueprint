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

];

const quickTips = [
  'বড় chapter? ছোট ছোট goal-এ ভাগ করো—আজ একটু, কাল একটু, শেষে boss feeling!',
  'যা শিখছো, বন্ধু বা pillow-কে explain করো—না পারলে, আবার পড়ো!',
  'Color, diagram, meme—notes memorable বানাও!',
  'Exam-এর আগে নিজেকে test করো—surprise zero, confidence hero!',
];

const roadmapSteps = [
  {
    label: '১. Concept Ninja',
    desc: 'WHY বুঝো, শুধু WHAT নয়! Feynman Technique বা mind map use করো—concept clear মানে subject তোমার!',
    icon: <BrainIcon className="w-7 h-7 text-blue-500" />,
    buddy: '“বন্ধুকে explain করতে পারলে—concept boss!”'
  },
  {
    label: '২. Practice Pro',
    desc: 'Quiz, problem solve, spaced repetition—practice মানে brain gym!',
    icon: <BookOpenIcon className="w-7 h-7 text-green-500" />,
    buddy: '“নিজেকে quiz করো—mistake মানে next level!”'
  },
  {
    label: '৩. Review Hero',
    desc: 'ভুল ধরো, প্রশ্ন করো, plan adjust করো—mistake মানে upgrade!',
    icon: <LightbulbIcon className="w-7 h-7 text-yellow-500" />,
    buddy: '“ভুল মানে ভয় না—next time boss move!”'
  },
];

const faq = [
  {
    q: 'Exam hall-এ সব ভুলে গেলে কী করব?',
    a: 'গভীর শ্বাস নাও, সহজ question দিয়ে শুরু করো, নিজের preparation-এ বিশ্বাস রাখো। Mnemonic বা diagram মনে করো—panic মানে pause, not game over!',
  },
  {
    q: 'Boring subject-এ motivation পাই না—help!',
    a: 'ছোট reward set করো, বন্ধু নিয়ে পড়ো, game বানিয়ে নাও। বড় goal মনে রাখো—তুমি পারবে!',
  },
];

const dos = [
  'নিজের ভাষায় topic explain করো—brain-এ বসে যাবে!',
  'Past paper, quiz—practice, practice, practice!',
  'Short break নাও—brain recharge!',
  'Stuck? Help চাও—cool ভাই/আপু-রা help করে!',
];
const donts = [
  'Last night hero হয়ো না—brain hang হবে!',
  'শুধু পড়া নয়—নিজেকে test করো!',
  'ঘুম skip করলে brain lag—no superpower!',
  'Hard topic ignore করলে exam-এ surprise!',
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Subject Mastery: Cool ভাই/আপু Style!</h1>
        <p className="text-xl md:text-2xl text-blue-700 mb-6 max-w-2xl mx-auto">“একটা সাবজেক্ট, একশো percent mastery—তুমি পারবে!”</p>
        <a href="#roadmap" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition">Start Your Gameplan</a>
      </div>

      {/* Visual Roadmap */}
      <SectionWrapper id="roadmap" title={<span>🗺️ Mastery Gameplan: ৩টা Step, Boss Result!</span>} subtitle="Step by step—subject হবে তোমার playground!">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-8">
          {roadmapSteps.map((step, idx) => (
            <div key={idx} className="flex-1 bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border-t-4 border-blue-400">
              {step.icon}
              <h3 className="mt-3 text-xl font-bold text-blue-800">{step.label}</h3>
              <p className="mt-2 text-gray-700">{step.desc}</p>
              <div className="mt-2 text-blue-500 font-semibold">{step.buddy}</div>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl text-blue-700 font-bold text-center">
          Self-Check: আজকে কোন topic-টা বন্ধু/পিলো-কে explain করতে পারবে?
        </div>
      </SectionWrapper>

      {/* Quick Tips & Did You Know */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl shadow">
          <h4 className="font-bold text-yellow-700 mb-2">⚡ Cool Buddy Tips</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {quickTips.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl shadow">
          <h4 className="font-bold text-blue-700 mb-2">💡 Did You Know?</h4>
          <p className="text-gray-700">Active recall মানে brain gym—just rereading মানে শুধু চোখের ব্যায়াম! Quiz war শুরু করো—retention double!</p>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <SectionWrapper title={<span>✅ Survival Guide: Do’s & ❌ Don’ts</span>}>
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
      <SectionWrapper title={<span>🎤 Squad Stories</span>} subtitle="Bangladeshi student-দের real mastery hacks!">
        <div className="grid md:grid-cols-2 gap-6">
          {studentStories.map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border-l-4 border-blue-400">
              <p className="italic text-gray-800 mb-2">{s.story}</p>
              <div className="text-right text-blue-700 font-semibold">— {s.name}</div>
              <div className="mt-2 text-green-600 text-sm">{s.advice}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Study Techniques Gallery */}
      <SectionWrapper title={<span>🧠 Strategy Power-Ups</span>} subtitle="Click any strategy—see how cool toppers actually study!">
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
                  <div className="text-xs text-blue-400 mt-1">Cool Tip: এই strategy-টা ICT, Math, Bangla—সব subject-এ কাজ করে!</div>
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
      <SectionWrapper title={<span>🧘 Test Anxiety Toolkit</span>} subtitle="Exam মানে war না—calm থাকো, confident থাকো, boss থাকো!">
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
          <h4 className="font-bold text-blue-700 mb-2">Extra Buddy Tips</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><strong>Solid Preparation:</strong> ভালো করে পড়া মানে anxiety কমে যাবে—তুমি ready!</li>
            <li><strong>Positive Self-Talk:</strong> Negative thought-কে positive-এ বদলাও—“আমি পারি, আমি প্রস্তুত!”</li>
            <li><strong>Visualize Success:</strong> নিজেকে calm, confident, winner হিসেবে imagine করো—see it, believe it!</li>
            <li><strong>Sleep & Food:</strong> Healthy body মানে calm mind—ঘুম, খাবার skip করো না!</li>
            <li><strong>Arrive Early:</strong> Last minute rush মানে stress—আগে গিয়ে relax করো।</li>
            <li><strong>Read Carefully:</strong> Instruction ভালো করে পড়ো—confusion zero!</li>
            <li><strong>Your Own Pace:</strong> অন্যদের দেখে stress নিও না—নিজের plan-এ থাকো।</li>
            <li><strong>If You Blank Out:</strong> Deep breath, easy question দিয়ে শুরু—panic মানে pause, not game over!</li>
          </ul>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SingleSubjectMasteryPage;
