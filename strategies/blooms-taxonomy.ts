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
    `<strong>🧬 Biology Mastery: Photosynthesis Walkthrough</strong><br/>
    ❌ Memorized the process but can’t explain it in your own words?<br/>
    ✅ Try this Bloom’s ladder approach for real understanding.<br/><br/>
    <em>How to master “Photosynthesis”:</em><br/>
    • <strong>Step 1 (Remember):</strong> Write the formula and key terms from memory<br/>
    • <strong>Step 2 (Understand):</strong> Explain the process to a friend or out loud<br/>
    • <strong>Step 3 (Apply):</strong> Draw and label the diagram in your notebook<br/>
    • <strong>Step 4 (Analyze):</strong> Compare photosynthesis in sunlight vs. shade<br/>
    • <strong>Step 5 (Evaluate):</strong> Discuss: Why is sunlight so important?<br/>
    • <strong>Step 6 (Create):</strong> Design a simple experiment to test plant growth<br/><br/>
    🌱 You’ll move from memorizing to truly mastering the topic!`,

    `<strong>📚 History Success: Liberation War Example</strong><br/>
    ❌ You read the chapter but forget key events in the exam?<br/>
    ✅ Use Bloom’s steps to lock in the details.<br/><br/>
    <em>How to study “Bangladesh Liberation War”:</em><br/>
    • <strong>Step 1 (Remember):</strong> List 3 important dates and leaders<br/>
    • <strong>Step 2 (Understand):</strong> Summarize the main reason for the war in 2 sentences<br/>
    • <strong>Step 3 (Apply):</strong> Connect a lesson from the war to a current event<br/>
    • <strong>Step 4 (Analyze):</strong> Compare two leaders’ roles—how were they different?<br/>
    • <strong>Step 5 (Evaluate):</strong> Share your opinion: What was the bravest act you learned about?<br/>
    • <strong>Step 6 (Create):</strong> Write a diary entry as if you were a student in 1971<br/><br/>
    🏆 You’ll remember more and write better answers!`,

    `<strong>➗ Math Confidence: Geometry Problem Solving</strong><br/>
    ❌ Stuck on geometry proofs or formulas?<br/>
    ✅ Climb Bloom’s ladder for step-by-step mastery.<br/><br/>
    <em>How to tackle “Area of Triangle” problems:</em><br/>
    • <strong>Step 1 (Remember):</strong> Recall the formula from memory<br/>
    • <strong>Step 2 (Understand):</strong> Explain why the formula works using a drawing<br/>
    • <strong>Step 3 (Apply):</strong> Solve a real exam question using the formula<br/>
    • <strong>Step 4 (Analyze):</strong> Compare the area of two triangles—what changes if the base doubles?<br/>
    • <strong>Step 5 (Evaluate):</strong> Decide which method is fastest for a tricky problem<br/>
    • <strong>Step 6 (Create):</strong> Make your own geometry puzzle for a friend<br/><br/>
    📈 You’ll feel more confident and ready for any question!`,

    `<strong>📖 English Writing: Paragraph or Essay Success</strong><br/>
    ❌ You start writing but get stuck or lose your main idea?<br/>
    ✅ Use Bloom’s steps to organize and improve your writing.<br/><br/>
    <em>How to write “A Rainy Day” (or any topic):</em><br/>
    • <strong>Step 1 (Remember):</strong> List 3 key points for your topic<br/>
    • <strong>Step 2 (Understand):</strong> Summarize your main idea in one sentence<br/>
    • <strong>Step 3 (Apply):</strong> Write a short paragraph using your points<br/>
    • <strong>Step 4 (Analyze):</strong> Check if your paragraph has a clear beginning, middle, and end<br/>
    • <strong>Step 5 (Evaluate):</strong> Ask a friend to read and give feedback—what’s strong, what’s missing?<br/>
    • <strong>Step 6 (Create):</strong> Add a personal story or example to make your writing unique<br/><br/>
    ✍️ You’ll write faster, better, and with more confidence!`,
  ],
  examPrepFocus: [
    "Perfect for preparing for all levels of exam questions.",
    "Helps you move beyond memorization to true mastery.",
  ]
};

export default bloomsTaxonomy;
