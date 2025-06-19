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
    `<strong>🃏 English Vocab: Flashcard Power</strong><br/>
    ❌ Forget new words after a few days?<br/>
    ✅ Use the Leitner System to make them stick.<br/><br/>
    <em>How to master “English Vocabulary”:</em><br/>
    • <strong>Step 1:</strong> Make 10 flashcards for new words<br/>
    • <strong>Step 2:</strong> Review all cards today. Tomorrow, only review the ones you missed<br/>
    • <strong>Step 3:</strong> Move correct cards to the next box—see your progress grow!<br/>
    • <strong>Step 4:</strong> Keep going until all cards are easy<br/><br/>
    🎉 You’ll remember words for exams and beyond!`,

    `<strong>🧪 Chemistry: Mastering Equations</strong><br/>
    ❌ Struggle to remember chemical equations?<br/>
    ✅ Flashcards and the Leitner System make it easy.<br/><br/>
    <em>How to master “Chemistry Equations”:</em><br/>
    • <strong>Step 1:</strong> Write tricky equations on flashcards<br/>
    • <strong>Step 2:</strong> Review daily. If you get one right, move it to the next box<br/>
    • <strong>Step 3:</strong> Focus on the tough ones—soon, nothing will surprise you in exams!<br/>
    • <strong>Step 4:</strong> Celebrate when all your cards reach the last box<br/><br/>
    🏆 You’ll ace even the hardest questions!`,

    `<strong>📚 Bangla Literature: Author & Poem Mastery</strong><br/>
    ❌ Forget author names or poem lines in the exam?<br/>
    ✅ Flashcards help you review and remember with ease.<br/><br/>
    <em>How to master “Bangla Literature”:</em><br/>
    • <strong>Step 1:</strong> Make flashcards for author names, poem lines, or key themes<br/>
    • <strong>Step 2:</strong> Review the cards every day, moving the easy ones up a box<br/>
    • <strong>Step 3:</strong> Watch your weak spots disappear and your confidence soar!<br/>
    • <strong>Step 4:</strong> Flashcards make revision fun—keep leveling up!<br/><br/>
    🌟 You’ll never fear literature questions again!`,

    `<strong>➗ Math Formulas: Fast Recall for Exams</strong><br/>
    ❌ Struggle to remember all the formulas before the test?<br/>
    ✅ Leitner flashcards make revision quick and easy.<br/><br/>
    <em>How to master “Math Formulas”:</em><br/>
    • <strong>Step 1:</strong> Write each formula on a flashcard<br/>
    • <strong>Step 2:</strong> Review daily, moving correct ones up a box<br/>
    • <strong>Step 3:</strong> Focus on the ones you miss—review them more often<br/>
    • <strong>Step 4:</strong> By exam week, you’ll know every formula by heart!<br/><br/>
    🚀 You’ll feel calm and ready for any math question!`,
  ],
  examPrepFocus: [
    "Perfect for quick, daily revision before exams.",
    "Great for large subjects with lots of facts.",
  ]
};

export default leitnerSystem;
