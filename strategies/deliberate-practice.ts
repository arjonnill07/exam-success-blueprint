import { Strategy, StrategyCategory } from '../types';
import TargetIcon from '../components/icons/TargetIcon';

const deliberatePractice: Strategy = {
  id: "deliberate-practice",
  title: "Deliberate Practice",
  description: "Targeted improvement through structured, focused learning.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> This is about practicing smarter, not just harder, to turn weaknesses into strengths before exam day. Be like a detective, finding and fixing the exact spots needing improvement.</p>
    <p><strong>🎯 What Is It?</strong></p>
    <ul>
      <li>Focusing intensely on areas of weakness (identified from past exam papers or self-assessment).</li>
      <li>Setting specific improvement goals for these weak areas.</li>
      <li>Getting immediate, actionable feedback (e.g., meticulously checking answers against mark schemes).</li>
      <li>Continuously refining the approach for exams. It’s about purposeful effort just outside your comfort zone.</li>
    </ul>
  `,
  category: StrategyCategory.LEARNING_TECHNIQUES,
  icon: TargetIcon,
  visualExplainerComponent: TargetIcon,
  visualExplainerCaption: "Visualizing Deliberate Practice: Focused effort on specific weaknesses to hit the target of mastery.",
  howTo: [
    "**1. Identify Weak Spots:** Analyze past exam papers or practice tests. Where do you consistently lose marks or feel unsure?",
    "**2. Set Specific Goals:** Instead of 'get better at math,' aim for 'correctly solve 5 integration problems of type X'.",
    "**3. Focused Practice:** Work *only* on those specific problem types or concepts. Minimize distractions.",
    "**4. Seek Feedback & Reflect:** Immediately check your work. Understand *why* you made errors. How can you avoid them in the exam?"
  ],
  benefits: [],
  realWorldExamples: [
    "<em>Constantly making calculation errors in Physics numericals for exams?</em> Dedicate practice sessions specifically to doing similar problems slowly, double-checking each step.",
    "<em>Struggling with essay structure for a Literature exam?</em> Practice writing outlines for various prompts, get feedback (even self-feedback against a model answer), and refine.",
    "<em>For a coding exam, if you're weak on recursion:</em> Find many recursion problems and work through them, analyzing solutions until the pattern clicks."
  ],
  examPrepFocus: []
};

export default deliberatePractice;
