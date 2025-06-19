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
    ❌ Problem: Memorized the process but can’t explain it in your own words.<br/>
    ✅ Solution: Try this Bloom’s ladder approach for real understanding!<br/><br/>
    <em>Action Plan:</em><br/>
    1. (Remember) Write the formula and key terms from memory.<br/>
    2. (Understand) Explain the process to a friend or out loud.<br/>
    3. (Apply) Draw and label the diagram in your notebook.<br/>
    4. (Analyze) Compare photosynthesis in sunlight vs. shade.<br/>
    5. (Evaluate) Discuss: Why is sunlight so important?<br/>
    6. (Create) Design a simple experiment to test plant growth.<br/><br/>
    🌱 You’ll move from memorizing to truly mastering the topic!`,

    `<strong>📚 History Success: Liberation War Example</strong><br/>
    ❌ Problem: You read the chapter but forget key events in the exam.<br/>
    ✅ Solution: Climb Bloom’s steps for full understanding!<br/><br/>
    <em>Action Plan:</em><br/>
    1. (Remember) List the main events and dates.<br/>
    2. (Understand) Explain why each event was important.<br/>
    3. (Apply) Draw a timeline or map of the events.<br/>
    4. (Analyze) Compare the causes and effects of two major events.<br/>
    5. (Evaluate) Discuss: Which event had the biggest impact?<br/>
    6. (Create) Write a short essay or story from a participant’s view.<br/><br/>
    🗺️ Step-by-step mastery makes history easy!`,

    `<strong>➗ Math: Climb the Mastery Mountain</strong><br/>
    ❌ Problem: Can solve MCQs but struggle with word problems or creative questions.<br/>
    ✅ Solution: Use Bloom’s steps to level up your math!<br/><br/>
    <em>Action Plan:</em><br/>
    1. (Remember) Write key formulas from memory.<br/>
    2. (Understand) Explain a formula in your own words.<br/>
    3. (Apply) Solve a problem using the formula.<br/>
    4. (Analyze) Break down a complex problem into steps.<br/>
    5. (Evaluate) Check your solution and explain why it works.<br/>
    6. (Create) Make your own word problem and solve it.<br/><br/>
    🧮 Bloom’s steps make math fun and powerful!`,

    `<strong>📝 Bangla & English: From Facts to Creativity</strong><br/>
    ❌ Problem: Only memorize answers, struggle with creative or analytical questions.<br/>
    ✅ Solution: Climb Bloom’s ladder for every subject!<br/><br/>
    <em>Action Plan:</em><br/>
    1. (Remember) List key facts or lines from a poem.<br/>
    2. (Understand) Explain the meaning in your own words.<br/>
    3. (Apply) Use the idea in a new sentence or context.<br/>
    4. (Analyze) Compare two characters or themes.<br/>
    5. (Evaluate) Judge which character or idea is stronger.<br/>
    6. (Create) Write your own poem, story, or essay.<br/><br/>
    ✍️ Bloom’s steps unlock creativity and exam success!`,
  ],
  examPrepFocus: [
    "Perfect for preparing for all levels of exam questions.",
    "Helps you move beyond memorization to true mastery.",
  ]
};

export default bloomsTaxonomy;
