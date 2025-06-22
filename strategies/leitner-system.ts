import { Strategy, StrategyCategory } from '../types';
import ClipboardListIcon from '../components/icons/ClipboardListIcon';
import FlashcardsIcon from '../components/icons/FlashcardsIcon';

const leitnerSystem: Strategy = {
  id: "leitner-system",
  title: "Leitner System (Smart Flashcards)",
  description: "Memory game খেলো! Flashcards দিয়ে tough facts সহজে শিখো—level up like a pro!",
  longDescription: `
    <div class="space-y-3">
      <div><strong>🗂️ What:</strong> Revision-কে বানাও game! Flashcard বানাও, ভুল করলে বারবার practice—ঠিক হলে next level! সব box clear মানে—memory boss! </div>
      <div><strong>💡 Why it works:</strong> Hard topics-এ বেশি সময়, easy-তে কম—time save, brain sharp! Surprise exam question-এও confident থাকবে।</div>
      <div><strong>⚡ How to play:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Key facts, formula, vocab—সব flashcard-এ লেখো।</li>
          <li>সব card Box 1-এ রাখো (daily review)।</li>
          <li>ঠিক উত্তর? Next box-এ move করো (review কম)। ভুল? Box 1-এ রাখো।</li>
          <li>সব card last box-এ গেলে—তুমি master!</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>Try it now:</strong> তোমার পরের exam-এর জন্য ১০টা flashcard বানাও। আজ সব পড়ো, কাল শুধু ভুলগুলো। দেখো, কত দ্রুত level up করো!
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>Real-world Eureka:</strong> Cricket practice-এর মতো—যে shot miss করো, সেটাই বেশি practice! Leitner System-এ weak spot-এ বেশি সময়—exam-এ আর কোনো surprise নেই!
      </div>
    </div>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: ClipboardListIcon,
  visualExplainerComponent: FlashcardsIcon,
  visualExplainerCaption: "Leitner System: Flashcard-গুলো box থেকে box-এ jump করে—recall success হলে!",
  howTo: [
    "Key facts, formula, vocab—সব flashcard-এ লেখো।",
    "সব card Box 1-এ রাখো (daily review)।",
    "ঠিক হলে next box-এ move, ভুল হলে Box 1-এ রাখো।",
    "সব card last box-এ গেলে—তুমি memory master!",
    "Group study-তে বন্ধুদের সাথে flashcard challenge করো—fun & fast revision!"
  ],
  benefits: [
    "Time save—hard topics-এ বেশি focus!",
    "Revision হবে game-এর মতো—boring নয়, motivating!",
    "Exam-এর আগে confidence boost!",
    "Self-check—কোনটা পারো, কোনটা revise দরকার, সঙ্গে সঙ্গে বুঝে যাবে।"
  ],
  realWorldExamples: [
    `<strong>🎲 English Vocab: Flashcard Power</strong><br/>
    ❌ Problem: নতুন শব্দ মনে থাকে না!<br/>
    ✅ Solution: Leitner System-এ flashcard বানাও—word master হয়ে যাও!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. ১০টা নতুন শব্দ flashcard-এ লেখো।<br/>
    ২. আজ সব পড়ো, কাল শুধু ভুলগুলো।<br/>
    ৩. ঠিক হলে next box-এ move করো—progress দেখো!<br/>
    ৪. সব card easy হলে—celebrate!<br/><br/>
    🎉 Word-গুলো exam-এও মনে থাকবে!`,

    `<strong>🧪 Chemistry: Equation Boss</strong><br/>
    ❌ Problem: Chemical equation মনে থাকে না।<br/>
    ✅ Solution: Flashcard-এ tricky equation লিখে Leitner System-এ practice করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Hard equation-গুলো flashcard-এ লেখো।<br/>
    ২. Daily review—ঠিক হলে next box, ভুল হলে Box 1।<br/>
    ৩. সব equation last box-এ গেলে—chemistry master!<br/><br/>
    🧪 Step by step master হও!`,

    `<strong>📅 History: Date Champ</strong><br/>
    ❌ Problem: Important date exam-এর আগে ভুলে যাও।<br/>
    ✅ Solution: Flashcard-এ date লিখে Leitner System-এ practice করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. ৫টা key date/event flashcard-এ লেখো।<br/>
    ২. Daily review—ঠিক হলে next box-এ move।<br/>
    ৩. ভুলগুলো বেশি revise করো।<br/>
    ৪. সব card last box-এ গেলে—celebrate!<br/><br/>
    🗓️ History হবে easy!`,

    `<strong>✏️ Bangla: Grammar Hero</strong><br/>
    ❌ Problem: Grammar rule মনে থাকে না।<br/>
    ✅ Solution: Leitner System-এ flashcard-এ rule practice করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. ৩-৫টা grammar rule flashcard-এ লেখো।<br/>
    ২. Daily review—ঠিক হলে next box-এ move।<br/>
    ৩. ভুল হলে Box 1-এ রাখো, বেশি practice করো।<br/>
    ৪. সব rule easy হলে—grammar master!<br/><br/>
    ✍️ Grammar হবে simple!`,
  ],
  examPrepFocus: [
    "Quick, daily revision—exam-এর আগে perfect!",
    "Big subject, অনেক fact—flashcard-এ ভাগ করে নাও!",
    "ICT: Coding syntax, shortcut, theory—সব flashcard-এ নাও!",
    "Biology: Diagram label, function, definition—flashcard-এ practice করো!"
  ]
};

export default leitnerSystem;
