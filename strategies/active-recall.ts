import { Strategy, StrategyCategory } from '../types';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import BrainArrowsIcon from '../components/icons/BrainArrowsIcon';

const activeRecall: Strategy = {
  id: "active-recall",
  title: "Active Recall (Test Yourself!)",
  description: "Unlock your brain’s full power—actively pull out knowledge and make it unforgettable for exams!",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> Want to remember more in less time? Active Recall is the secret weapon of toppers! Instead of just reading, challenge your brain to retrieve answers—this is how you make facts stick for the real exam.</p>
    <p><strong>🧠🔍 What Is It?</strong></p>
    <ul>
      <li>Deliberately try to remember information without looking at your notes—like a quiz, but you’re the quizmaster!</li>
      <li>Every time you pull out an answer, your memory gets stronger. It’s like doing push-ups for your brain.</li>
      <li>Way more effective than re-reading or highlighting—this is how you train for exam day!</li>
    </ul>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: LightbulbIcon,
  visualExplainerComponent: BrainArrowsIcon,
  visualExplainerCaption: "Visualizing Active Recall: Actively pulling information out of your brain, like retrieving a file.",
  howTo: [
    "**1. Study Smart:** Learn a topic as usual, but don’t stop there!",
    "**2. Hide Your Notes:** Close your book or cover your page.",
    "**3. Test Yourself:** Write, say, or draw everything you remember—no peeking!",
    "**4. Check & Target Gaps:** Compare with your notes. Missed something? That’s your next focus!",
    "**💡 Try it now:** After reading this, close your eyes and recall the 4 steps. Can you do it? That’s Active Recall in action!"
  ],
  benefits: [
    "Dramatically boosts memory retention for exams.",
    "Builds true understanding, not just memorization.",
    "Saves time—less re-reading, more learning!",
    "Makes exam revision feel like a game or challenge."
  ],
  realWorldExamples: [
    `<strong>MCQ Mastery:</strong> Before your next Physics or Biology MCQ test, close your book and try to answer 10 questions from memory. <em>Eureka!</em> You’ll spot your weak areas instantly and fix them before the real exam!`,
    `<strong>Essay Power:</strong> For Bangla or English, read a passage, then write a summary or key points from memory. <em>Challenge:</em> Can you recall the main arguments without looking? That’s how toppers prep for essays!`,
    `<strong>Flashcard Game:</strong> Make flashcards for formulas, dates, or vocab. Look at the question, pause, and force yourself to answer before flipping. <em>Tip:</em> Compete with a friend—who can recall more?`,
    `<strong>Teach to Learn:</strong> Explain a tough concept (like Newton’s Laws or the Water Cycle) to a sibling or even your wall—no notes allowed! <em>Try it now:</em> You’ll quickly see what you know and what needs work.`,
  ],
  examPrepFocus: []
};

export default activeRecall;
