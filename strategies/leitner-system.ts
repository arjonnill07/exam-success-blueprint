import { Strategy, StrategyCategory } from '../types';
import ClipboardListIcon from '../components/icons/ClipboardListIcon';
import FlashcardsIcon from '../components/icons/FlashcardsIcon';

const leitnerSystem: Strategy = {
  id: "leitner-system",
  title: "Leitner System (Smart Flashcards)",
  description: "An efficient flashcard method using spaced repetition principles.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> Turbocharge your flashcard studying! This system ensures you focus more on the tough concepts you haven't mastered yet for exams, saving time on what you already know.</p>
    <p><strong>🗂️ What Is It?</strong></p>
    <ul>
      <li>A flashcard system using multiple 'boxes' or piles.</li>
      <li>Correctly answered cards move to a 'less frequent' review box.</li>
      <li>Incorrect cards move back to the 'more frequent' review box.</li>
      <li>Optimizes study time by focusing on harder material for exams.</li>
    </ul>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: ClipboardListIcon,
  visualExplainerComponent: FlashcardsIcon,
  visualExplainerCaption: "Visualizing Leitner System: Flashcards moving between review boxes based on recall success.",
  howTo: [
    "**1. Create Flashcards:** For key terms, formulas, dates, etc., crucial for your exam.",
    "**2. Set Up Boxes (3-5):** Box 1 (review daily), Box 2 (review every 2 days), Box 3 (every 4 days), etc.",
    "**3. Start with Box 1:** Review all cards. If correct, move to Box 2. If incorrect, it stays in Box 1.",
    "**4. Review Systematically:** On scheduled days, review cards in their respective boxes, moving them up or down based on recall."
  ],
  benefits: [],
  realWorldExamples: [
    "<em>Learning vocabulary for a language exam:</em> New words start in Box 1. As you learn them, they progress to boxes reviewed less frequently.",
    "<em>Memorizing historical dates or chemical formulas for an exam:</em> The Leitner system ensures you drill the ones you struggle with more often.",
    "<em>Preparing for a medical exam with many anatomical terms:</em> This system helps manage a large volume of information efficiently."
  ],
  examPrepFocus: []
};

export default leitnerSystem;
