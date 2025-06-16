
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { STRATEGIES, QUICK_PREP_STRATEGIES_IDS, QUICK_PREP_ADVICE, QUICK_STRATEGY_HOW_TOS } from '../constants';
import { Strategy } from '../types';
import ZapIcon from '../components/icons/ZapIcon';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import ClipboardListIcon from '../components/icons/ClipboardListIcon';

const QuickPrepPage: React.FC = () => {
  const quickStrategies = STRATEGIES.filter(s => QUICK_PREP_STRATEGIES_IDS.includes(s.id));

  return (
    <div className="animate-fadeIn">
      <SectionWrapper
        title="Exam SOS! Quick Prep Guide"
        subtitle={QUICK_PREP_ADVICE.intro}
        className="bg-red-50"
      >
        <div className="max-w-3xl mx-auto">
          <Card title="Rapid Response Strategies" icon={<ZapIcon className="w-8 h-8 text-red-600" />} className="mb-10 shadow-xl border border-red-200">
            <p className="text-gray-700 mb-6">
              When time is short and pressure is high, it's essential to be smart and targeted. Here are a few techniques recommended for immediate focus and confidence:
            </p>
            <div className="space-y-6">
              {quickStrategies.map(strategy => {
                const Icon = strategy.icon;
                const quickHowTo = QUICK_STRATEGY_HOW_TOS[strategy.id];
                return (
                  <div key={strategy.id} className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-2">
                      <Icon className="w-6 h-6 text-blue-600 mr-3" />
                      <h4 className="text-lg font-semibold text-gray-800">{quickHowTo?.title || strategy.title}</h4>
                    </div>
                    {quickHowTo?.advisorTip && <p className="text-sm text-blue-700 italic mb-2">{quickHowTo.advisorTip}</p>}
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 pl-1">
                      {quickHowTo?.sosHowTo.map((step, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card title="Last-Minute Exam Checklist" icon={<ClipboardListIcon className="w-8 h-8 text-green-600" />} className="mb-10 shadow-xl border border-green-200">
            <p className="text-gray-700 mb-4">
              Let's quickly run through these essentials to ensure you're all set for exam day:
            </p>
            <ul className="space-y-3 text-gray-700">
              {QUICK_PREP_ADVICE.checklist.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-3 text-xl font-bold flex-shrink-0 mt-[-2px]">&#10004;</span> {/* Check mark */}
                  <span className="flex-grow" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></span>
                </li>
              ))}
            </ul>
          </Card>
          
          <div className="text-center p-6 bg-blue-600 text-white rounded-xl shadow-lg">
            <LightbulbIcon className="w-12 h-12 mx-auto mb-3 text-yellow-300"/>
            <p className="text-xl font-semibold">
              {QUICK_PREP_ADVICE.outro}
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default QuickPrepPage;
