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
    ❌ Problem: Keep making the same mistakes in algebra problems.<br/>
    ✅ Solution: Use deliberate practice to target your weak spots!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Pick 3 problems you got wrong before.<br/>
    2. Solve them again, checking each step.<br/>
    3. Review the answer key and note your mistakes.<br/>
    4. Try a similar problem right away.<br/><br/>
    🏆 Each round makes you stronger and more confident!`,

    `<strong>📝 English Writing: Essay Introduction Practice</strong><br/>
    ❌ Problem: Struggle to start essays or get stuck on the intro.<br/>
    ✅ Solution: Practice just the introduction, one step at a time!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Write the intro for 2 different essay topics.<br/>
    2. Ask a friend or teacher for feedback.<br/>
    3. Rewrite the intro using their advice.<br/>
    4. Repeat for the next section.<br/><br/>
    ✍️ Each try makes you more confident and creative!`,

    `<strong>🔬 Science Success: Physics MCQ Mastery</strong><br/>
    ❌ Problem: Lose marks on tricky MCQs in Physics or Chemistry.<br/>
    ✅ Solution: Practice with purpose and instant feedback!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Find 5 MCQs from your last test or textbook.<br/>
    2. Solve them and check your answers right away.<br/>
    3. For every mistake, ask: Why did I miss this? How can I avoid it next time?<br/>
    4. Try a similar MCQ to reinforce your learning.<br/><br/>
    🧪 Deliberate practice makes science easy!`,

    `<strong>📚 Bangla: Mastering Grammar or Literature</strong><br/>
    ❌ Problem: Struggle with certain grammar rules or story questions.<br/>
    ✅ Solution: Target your weak spots with focused practice!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Pick 2–3 grammar rules or story questions you find hard.<br/>
    2. Practice them and check your answers.<br/>
    3. Review mistakes and try again the next day.<br/>
    4. Celebrate progress with each round!<br/><br/>
    🌟 Focused practice builds exam confidence!`,
  ],
  examPrepFocus: []
};

export default deliberatePractice;
