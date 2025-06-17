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
    `<strong>Physics MCQ Mastery:</strong> Always lose marks on 'Current Electricity'? Spend a session only on those MCQs, check answers instantly, and note every mistake. <em>Eureka!</em> Watch your score jump in the next test!`,
    `<strong>Essay Writing Power:</strong> Struggle with introductions? Write just the first paragraph for 5 essay prompts, get feedback, and rewrite until it feels easy. <em>Try it now:</em> You’ll see your essays improve fast!`,
    `<strong>Math Problem Slayer:</strong> Weak in Trigonometry proofs? Practice only those, step by step, and compare with model answers. <em>Challenge:</em> Can you spot your most common mistake and fix it today?`,
    `<strong>Bangla Literature:</strong> Forget key quotes? Practice recalling and writing just the quotes for 10 minutes, then check and repeat. <em>Tip:</em> This is how toppers memorize for essays!`,
  ],
  examPrepFocus: []
};

export default deliberatePractice;
