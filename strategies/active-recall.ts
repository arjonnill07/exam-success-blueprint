import { Strategy, StrategyCategory } from '../types';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import BrainArrowsIcon from '../components/icons/BrainArrowsIcon';

const activeRecall: Strategy = {
  id: "active-recall",
  title: "Active Recall (Test Yourself!)",
  description: "Actively retrieve information from memory to strengthen it.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> This is a powerful way to make information 'stick' for exams. Instead of passively re-reading, actively pull facts from your brain!</p>
    <p><strong>🧠🔍 What Is It?</strong></p>
    <ul>
      <li>The act of deliberately trying to remember information without looking at your notes.</li>
      <li>It forces your brain to work, strengthening memory pathways.</li>
      <li>Far more effective than just re-reading or highlighting for exam preparation.</li>
    </ul>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: LightbulbIcon,
  visualExplainerComponent: BrainArrowsIcon,
  visualExplainerCaption: "Visualizing Active Recall: Actively pulling information out of your brain, like retrieving a file.",
  howTo: [
    "**1. Learn the Material:** First, study a topic as you normally would.",
    "**2. Close Your Book/Notes:** Step away from the source material.",
    "**3. Recall Actively:** Try to write down, say aloud, or mentally summarize everything you remember about the topic.",
    "**4. Check & Identify Gaps:** Compare your recall attempt with your notes. See what you missed? That's where to focus next!"
  ],
  benefits: [],
  realWorldExamples: [
    "<em>After reading a chapter for your upcoming exam:</em> Close the book and write down the main points and key definitions from memory.",
    "<em>Using flashcards:</em> Look at the question/term (the cue) and actively try to recall the answer *before* flipping the card. Essential for exam prep!",
    "<em>Explaining a concept to someone else (or an imaginary student) without notes:</em> This forces active retrieval and highlights what you truly understand for the exam."
  ],
  examPrepFocus: []
};

export default activeRecall;
