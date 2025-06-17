import { Strategy, StrategyCategory } from '../types';
import BarChartIcon from '../components/icons/BarChartIcon';
import PyramidIcon from '../components/icons/PyramidIcon';

const bloomsTaxonomy: Strategy = {
  id: "blooms-taxonomy",
  title: "Bloom's Taxonomy (Climbing to Mastery)",
  description: "Level up your learning: from remembering facts to creating new ideas—just like climbing a mountain!",
  longDescription: `
    <div class="space-y-3">
      <div><strong>⛰️ What:</strong> Imagine learning as climbing a mountain—each step takes you higher, from basic facts to creative thinking.</div>
      <div><strong>💡 Why it matters:</strong> Exams (SSC, HSC, class tests) ask questions from every level. If you only memorize, you’ll get stuck at the bottom. Climb higher to ace MCQs, short answers, essays, and projects!</div>
      <div><strong>🚀 How to level up:</strong>
        <ul class="list-disc list-inside ml-4">
          <li><strong>Remember:</strong> Recall facts (MCQs, fill-in-the-blanks).</li>
          <li><strong>Understand:</strong> Explain in your own words (short answers).</li>
          <li><strong>Apply:</strong> Use knowledge in new situations (problem-solving, science experiments).</li>
          <li><strong>Analyze:</strong> Break down ideas, compare, find patterns (essay, data analysis).</li>
          <li><strong>Evaluate:</strong> Judge, argue, or justify (debate, critical response).</li>
          <li><strong>Create:</strong> Design, invent, or write something new (project, story, experiment).</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>Try it now:</strong> Take any topic (e.g., Photosynthesis). Ask yourself: Can I recall the formula? Explain it? Predict what happens if sunlight is blocked? Compare C3 and C4 plants? Suggest a new experiment? You’re climbing the mastery mountain!
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>Real-world Eureka:</strong> You already use Bloom’s steps every day! When you learn a cricket shot, you first remember the rules, then understand the grip, apply it in practice, analyze your mistakes, evaluate your performance, and finally create your own style. Learning for exams works the same way—climb step by step, and you’ll reach the top!
      </div>
    </div>
  `,
  category: StrategyCategory.CONCEPT_MASTERY,
  icon: BarChartIcon,
  visualExplainerComponent: PyramidIcon,
  visualExplainerCaption: "Visualizing Bloom's Taxonomy: A pyramid showing levels of learning from foundational recall to higher-order thinking.",
  howTo: [
    "Pick a topic (e.g., Biology: Photosynthesis, History: Liberation War).",
    "Start at the bottom: Can you recall the facts?",
    "Move up: Can you explain, apply, analyze, evaluate, and create?",
    "Practice exam questions at each level to master the topic.",
  ],
  benefits: [
    "Helps you answer every type of exam question, from MCQ to essay.",
    "Makes learning active and fun—like leveling up in a game!",
    "Builds true understanding, not just rote memorization.",
  ],
  realWorldExamples: [
    "<em>Biology (Photosynthesis):</em> Recall the formula, explain the process, predict changes, compare plant types, judge efficiency, design an experiment.",
    "<em>History (Liberation War):</em> List key dates, explain causes, apply lessons, analyze events, evaluate decisions, create a new perspective in an essay.",
    "<em>Cricket:</em> Remember the rules, understand techniques, apply in practice, analyze mistakes, evaluate performance, create your own shot!",
  ],
  examPrepFocus: [
    "Perfect for preparing for all levels of exam questions.",
    "Helps you move beyond memorization to true mastery.",
  ]
};

export default bloomsTaxonomy;
