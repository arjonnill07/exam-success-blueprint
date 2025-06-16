import { Strategy, StrategyCategory } from '../types';
import UsersIcon from '../components/icons/UsersIcon';

const interleaving: Strategy = {
  id: "interleaving",
  title: "Interleaving (Mix It Up!)",
  description: "Mix different types of problems or subjects in one study session.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> Prepares your brain for the mixed-up nature of real exams! Instead of studying one topic to death (blocking), you switch between different topics or problem types.</p>
    <p><strong>🔄 What Is It?</strong></p>
    <ul>
      <li>A study strategy where you mix, or 'interleave,' different topics or types of problems within a single study session.</li>
      <li>Contrasts with 'blocked practice' (studying one topic fully before moving to another).</li>
      <li>Helps the brain learn to differentiate between concepts and choose the right solution strategy, crucial for exams.</li>
    </ul>
  `,
  category: StrategyCategory.LEARNING_TECHNIQUES,
  icon: UsersIcon,
  visualExplainerComponent: UsersIcon,
  visualExplainerCaption: "Visualizing Interleaving: Switching between different topics or problem types in a study session.",
  howTo: [
    "**1. Identify Related Topics/Problem Types:** For example, different types of algebra problems, or different but related science concepts for your exam.",
    "**2. Mix Them Up:** Instead of doing 20 problems of Type A, then 20 of Type B, do a few of A, a few of B, a few of A again, etc.",
    "**3. Embrace the Initial Difficulty:** It might feel harder at first than blocked practice, but the long-term learning and exam adaptability are greater.",
    "**4. Space It Out Too:** Combine interleaving with spaced repetition for even better results for your exams."
  ],
  benefits: [],
  realWorldExamples: [
    "<em>Studying for a Math exam:</em> Instead of doing all 'addition' problems then all 'subtraction', mix them up. For higher levels, mix different types of integration or equation solving.",
    "<em>Preparing for a Chemistry exam covering different reaction types:</em> Practice identifying and solving problems from various reaction types jumbled together, rather than one type at a time.",
    "<em>Learning different artistic styles for an Art History exam:</em> Review examples from different periods or artists in a mixed order, rather than studying one artist completely before moving to the next."
  ],
  examPrepFocus: []
};

export default interleaving;
