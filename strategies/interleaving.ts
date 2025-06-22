import { Strategy, StrategyCategory } from '../types';
import UsersIcon from '../components/icons/UsersIcon';

const interleaving: Strategy = {
  id: "interleaving",
  title: "Interleaving (Mix It Up!)",
  description: "একঘেয়ে পড়া? Nah! Mix Math, Science, English—just like exam hall-এর real challenge! Brain হবে agile, boredom zero!",
  longDescription: `
    <div class="space-y-3">
      <div><strong>🔄 What:</strong> এক session-এ আলাদা আলাদা subject বা topic mix করো—Math, English, Science, ICT—সব একসাথে!</div>
      <div><strong>❓ Why:</strong> Exam-এ তো সবকিছুই mixed! Brain-কে switch করতে শেখাও—surprise কমবে, confidence বাড়বে!</div>
      <div><strong>⚡ How:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>২-৩টা topic বেছে নাও (যেমন, Algebra, English Grammar, Biology)।</li>
          <li>প্রতিটা থেকে ১-২টা problem solve করো, তারপর switch করো। Repeat!</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>Try it now:</strong> ২টা Math sum, ২টা English grammar, ২টা Science MCQ—mix করে দেখো, brain কেমন active হয়!
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>Real-world connection:</strong> ধরো, SSC/HSC-র জন্য পড়ছো। Math-এ ২টা algebra, ২টা geometry, ২টা statistics—সব একসাথে। তারপর English-এ grammar, summary, translation। Exam-এ যেমন mix থাকে, তেমনই practice—brain হবে ready for anything!<br/><br/>
        <em>Bonus:</em> Science পড়লে Physics, Chemistry, Biology—সব MCQ একসাথে mix করো। Question বুঝে solve করতে পারবে lightning speed-এ!
      </div>
    </div>
  `,
  category: StrategyCategory.LEARNING_TECHNIQUES,
  icon: UsersIcon,
  visualExplainerComponent: UsersIcon,
  visualExplainerCaption: "Interleaving: এক session-এ আলাদা আলাদা topic switch করা—brain-এর জন্য real gym!",
  howTo: [
    "২-৩টা subject বা topic বেছে নাও (যেমন, Math, Physics, Bangla)।",
    "একটার পর একটা switch করে পড়ো—boring লাগবে না!",
    "Tough লাগলে ভয় নেই—brain-কে agile বানাচ্ছো!",
    "Mix করার সময় timer set করো—challenge নাও!"
  ],
  benefits: [
    "Exam-এর mixed questions-এ আর ভয় থাকবে না!",
    "Revision হবে interesting—boredom zero!",
    "Brain agile হবে—quickly adapt করতে পারবে।",
    "Different subject-এ switch করার skill বাড়বে—real life-এও কাজে লাগবে!"
  ],
  realWorldExamples: [
    `<strong>🔄 Math & Science: Brain Gym Session</strong><br/>
    ❌ Problem: এক subject পড়তে পড়তে মাথা গরম!<br/>
    ✅ Solution: Mix করো—brain fresh থাকবে!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. ২টা algebra, ২টা geometry, ২টা Physics MCQ solve করো।<br/>
    ২. প্রতিবার subject switch করো—notice করো কেমন লাগে।<br/>
    ৩. যেটা hardest, সেটা পরের session-এ আগে করো।<br/><br/>
    🚀 Exam-এ যেকোনো mix question-এ ready থাকবে!`,

    `<strong>📚 Bangla & English: Memory Power Boost</strong><br/>
    ❌ Problem: পড়া মনে থাকে না, boring লাগে।<br/>
    ✅ Solution: Bangla summary, English grammar, Bangla MCQ, English paragraph—সব mix করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. ১টা Bangla summary, ১টা English grammar fill-in-the-blank।<br/>
    ২. ১টা Bangla MCQ, ১টা English paragraph।<br/>
    ৩. প্রতি ২-৩টা problem-এ subject switch করো।<br/><br/>
    🌟 Mix করলে boredom কমবে, মনে থাকবে বেশি!`,

    `<strong>🧬 Science: MCQ Mix Mastery</strong><br/>
    ❌ Problem: এক type question-এ stuck হয়ে যাও।<br/>
    ✅ Solution: Physics, Chemistry, Biology—সব MCQ একসাথে solve করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Physics, Chemistry, Biology—প্রতিটা থেকে ২টা MCQ নাও।<br/>
    ২. Random order-এ solve করো।<br/>
    ৩. Hardest topic-এ বেশি practice করো।<br/><br/>
    🧪 Mix করলে exam confidence বাড়বে!`,

    `<strong>✏️ Math & English: Focus & Fun</strong><br/>
    ❌ Problem: এক subject পড়তে পড়তে focus হারাও।<br/>
    ✅ Solution: Math problem, English grammar—alternate করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. ২টা math problem, ২টা English grammar।<br/>
    ২. ৫ মিনিট break নাও।<br/>
    ৩. ৩ round repeat করো।<br/>
    ৪. Answer review করে নিজের progress celebrate করো!<br/><br/>
    📝 Alternating করলে mind fresh থাকবে!`,
  ],
  examPrepFocus: [
    "Board exam-এর last month—mix করে revision করো, brain ready থাকবে!",
    "ICT: Coding, theory, MCQ—সব একসাথে practice করো।",
    "Math: Algebra, Geometry, Statistics—mix করে solve করো।",
    "English: Grammar, paragraph, translation—alternate করো।"
  ]
};

export default interleaving;
