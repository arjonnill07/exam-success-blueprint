import { Strategy, StrategyCategory } from '../types';
import TargetIcon from '../components/icons/TargetIcon';

const deliberatePractice: Strategy = {
  id: "deliberate-practice",
  title: "Deliberate Practice",
  description: "Practice like a topper: target your weak spots, get feedback, and level up for exam day!",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> Want to turn your biggest weaknesses into strengths? Deliberate Practice is how toppers do it—by zooming in on their mistakes and fixing them, one by one. It’s not about doing more, but doing what matters most!</p>
    <p><strong>🎯 What Is It?</strong></p>
    <ul>
      <li>Focus deeply on your weakest topics (find them from past exam papers or mock tests).</li>
      <li>Set a clear, specific goal for each session—like a mission!</li>
      <li>Get instant feedback (from answer keys, teachers, or friends) and fix mistakes right away.</li>
      <li>Repeat and refine—each session brings you closer to mastery and exam confidence.</li>
    </ul>
  `,
  category: StrategyCategory.LEARNING_TECHNIQUES,
  icon: TargetIcon,
  visualExplainerComponent: TargetIcon,
  visualExplainerCaption: "Visualizing Deliberate Practice: Focused effort on specific weaknesses to hit the target of mastery.",
  howTo: [
    "**1. Find Your Weakest Link:** Review your last exam or mock test. Which topics or question types cost you the most marks?",
    "**2. Set a Mini-Goal:** Instead of 'get better at math,' try 'solve 5 integration MCQs without silly mistakes.'",
    "**3. Practice with Purpose:** Work only on that weak area. Use a timer and keep distractions away.",
    "**4. Get Instant Feedback:** Check answers right away. For every mistake, ask: Why did I miss this? How can I avoid it next time?",
    "**💡 Try it now:** Pick your weakest chapter and set a 30-minute deliberate practice session. Track your progress—see how fast you improve!"
  ],
  benefits: [
    "Transforms weaknesses into strengths for exams.",
    "Builds true confidence—no more exam surprises!",
    "Saves time by focusing only on what matters most.",
    "Makes practice feel like a game or mission."
  ],
  realWorldExamples: [
    `<strong>🎯 Math Power-Up: Mastering Quadratic Equations</strong><br/>
    ❌ Keep making the same mistakes in algebra problems?<br/>
    ✅ Use deliberate practice to target your weak spots.<br/><br/>
    <em>How to master “Quadratic Equations”:</em><br/>
    • <strong>Step 1:</strong> Pick 3 problems you got wrong before<br/>
    • <strong>Step 2:</strong> Solve them again, checking each step<br/>
    • <strong>Step 3:</strong> Review the answer key and note your mistakes<br/>
    • <strong>Step 4:</strong> Try a similar problem right away<br/><br/>
    🏆 Each round makes you stronger and more confident!`,

    `<strong>📝 English Writing: Essay Introduction Practice</strong><br/>
    ❌ Struggle to start essays or get stuck on the intro?<br/>
    ✅ Practice just the introduction, one step at a time.<br/><br/>
    <em>How to improve “Essay Introductions”:</em><br/>
    • <strong>Step 1:</strong> Write the intro for 2 different essay topics<br/>
    • <strong>Step 2:</strong> Ask a friend or teacher for feedback<br/>
    • <strong>Step 3:</strong> Rewrite the intro using their advice<br/>
    • <strong>Step 4:</strong> Repeat for the next section<br/><br/>
    ✍️ Each try makes you more confident and creative!`,

    `<strong>🔬 Science Success: Physics MCQ Mastery</strong><br/>
    ❌ Lose marks on tricky MCQs in Physics or Chemistry?<br/>
    ✅ Practice with purpose and instant feedback.<br/><br/>
    <em>How to master “Physics MCQs”:</em><br/>
    • <strong>Step 1:</strong> Find 5 MCQs from your last test or textbook<br/>
    • <strong>Step 2:</strong> Answer them, then check with the answer key<br/>
    • <strong>Step 3:</strong> For any mistake, ask: “Why did I miss this?”<br/>
    • <strong>Step 4:</strong> Try a similar question right away<br/><br/>
    🚀 You’ll see your score jump in the next test!`,

    `<strong>📚 Bangla/English: Paragraph Practice</strong><br/>
    ❌ Always lose marks for unclear or short paragraphs?<br/>
    ✅ Practice writing and reviewing, one paragraph at a time.<br/><br/>
    <em>How to improve “Paragraph Writing”:</em><br/>
    • <strong>Step 1:</strong> Write a paragraph on a familiar topic (e.g., “A Rainy Day”)<br/>
    • <strong>Step 2:</strong> Check if it has a clear beginning, middle, and end<br/>
    • <strong>Step 3:</strong> Ask a friend to read and give feedback<br/>
    • <strong>Step 4:</strong> Rewrite and improve based on their advice<br/><br/>
    🌟 Every paragraph you write is a step toward exam success!`,
  ],
  examPrepFocus: []
};

export default deliberatePractice;
