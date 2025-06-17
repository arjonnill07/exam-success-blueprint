import { Strategy, StrategyCategory } from '../types';
import ClipboardListIcon from '../components/icons/ClipboardListIcon';
import FlashcardsIcon from '../components/icons/FlashcardsIcon';

const leitnerSystem: Strategy = {
  id: "leitner-system",
  title: "Leitner System (Smart Flashcards)",
  description: "Level up your memory! Use flashcards in boxes to focus on what you need most.",
  longDescription: `
    <div class="space-y-3">
      <div><strong>🗂️ What:</strong> Turn revision into a game! Move flashcards through boxes—easy cards move up, tough ones stay for more practice. You win by clearing all boxes!</div>
      <div><strong>💡 Why it works:</strong> You spend more time on what’s hard and less on what’s easy. This saves time and makes sure you’re always ready for surprise exam questions.</div>
      <div><strong>⚡ How to play:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Make flashcards for key facts, formulas, or vocab.</li>
          <li>Start all cards in Box 1 (review daily).</li>
          <li>If you get a card right, move it to the next box (review less often). If wrong, keep it in Box 1.</li>
          <li>Keep going until all cards reach the last box—now you’re a master!</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>Try it now:</strong> Make 10 flashcards for your next exam. Review them today. Tomorrow, only review the ones you missed. See how fast you level up!
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>Real-world Eureka:</strong> It’s like cricket nets: you practice the shots you miss most. The Leitner System makes sure you’re always working on your weak spots—so nothing surprises you in the real match (exam)!
      </div>
    </div>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: ClipboardListIcon,
  visualExplainerComponent: FlashcardsIcon,
  visualExplainerCaption: "Visualizing Leitner System: Flashcards moving between review boxes based on recall success.",
  howTo: [
    "Make flashcards for key facts, formulas, or vocab.",
    "Start all cards in Box 1 (review daily).",
    "If correct, move to next box. If wrong, keep in Box 1.",
    "Repeat until all cards reach the last box.",
  ],
  benefits: [
    "Saves time—focuses on what you need most.",
    "Makes revision fun and motivating.",
    "Builds confidence for any exam.",
  ],
  realWorldExamples: [
    "<em>SSC English:</em> Imagine you have 50 new words to learn. With Leitner, you’ll only review the tough ones daily—by exam week, you’ll know every word without cramming!",
    "<em>HSC Chemistry:</em> Struggling with chemical equations? The cards you miss most stay in Box 1, so you see them again and again—until you can write them in your sleep!",
    "<em>Bangla Literature:</em> Use flashcards for author names, poem lines, or key themes. The Leitner System makes sure you never forget the details that get you bonus marks.",
    "<em>Any subject:</em> Students who use Leitner say it feels like a game—watching their weak spots disappear and their confidence soar!",
  ],
  examPrepFocus: [
    "Perfect for quick, daily revision before exams.",
    "Great for large subjects with lots of facts.",
  ]
};

export default leitnerSystem;
