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
    `<strong>🎲 English Vocab: Flashcard Power</strong><br/>
    ❌ Problem: Forget new words after a few days.<br/>
    ✅ Solution: Use the Leitner System to make them stick!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Make 10 flashcards for new words.<br/>
    2. Review all cards today. Tomorrow, only review the ones you missed.<br/>
    3. Move correct cards to the next box—see your progress grow!<br/>
    4. Keep going until all cards are easy.<br/><br/>
    🎉 You’ll remember words for exams and beyond!`,

    `<strong>🧪 Chemistry: Mastering Equations</strong><br/>
    ❌ Problem: Struggle to remember chemical equations.<br/>
    ✅ Solution: Flashcards and the Leitner System make it easy!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Write tricky equations on flashcards.<br/>
    2. Review daily. If you get one right, move it to the next box.<br/>
    3. If you miss one, keep it in Box 1 for more practice.<br/>
    4. Keep reviewing until all cards reach the last box.<br/><br/>
    🧪 Master equations step by step!`,

    `<strong>📅 History: Key Dates with Flashcards</strong><br/>
    ❌ Problem: Forget important dates before the exam.<br/>
    ✅ Solution: Use flashcards and the Leitner System!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Make flashcards for 5 key dates/events.<br/>
    2. Review daily, moving correct cards up a box.<br/>
    3. Focus on the ones you miss—review them more often.<br/>
    4. Celebrate when all cards are in the last box!<br/><br/>
    🗓️ Flashcards make history easy!`,

    `<strong>✏️ Bangla: Grammar Rules with Flashcards</strong><br/>
    ❌ Problem: Grammar rules slip away before the test.<br/>
    ✅ Solution: Use the Leitner System for grammar mastery!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Write 3–5 grammar rules on flashcards.<br/>
    2. Review daily, moving correct cards up a box.<br/>
    3. If you miss a rule, keep it in Box 1 for extra practice.<br/>
    4. Review until all rules are easy to recall.<br/><br/>
    ✍️ Flashcards make grammar simple!`,
  ],
  examPrepFocus: [
    "Perfect for quick, daily revision before exams.",
    "Great for large subjects with lots of facts.",
  ]
};

export default leitnerSystem;
