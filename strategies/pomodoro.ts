import { Strategy, StrategyCategory } from '../types';
import ClockIcon from '../components/icons/ClockIcon';

const pomodoro: Strategy = {
  id: "pomodoro",
  title: "Pomodoro Technique (পড়ার সুপারপাওয়ার!)",
  description: "২৫ মিনিট একদম ফোকাস, তারপর ছোট্ট break—এইভাবেই ভায়া বাজিমাত !",
  longDescription: `
    <p><strong>ছোট্ট বন্ধু, মনোযোগ ধরে রাখতে কষ্ট হচ্ছে?</strong><br/>
    ঘণ্টার পর ঘণ্টা পড়েও কিছু মনে থাকছে না? Pomodoro-র magic দিয়ে পড়া হবে cool, মাথা থাকবে fresh!</p>
    <p><strong>🕒 Pomodoro কী?</strong></p>
    <ul>
      <li>২৫ মিনিট একদম ফোকাস—মোবাইল silent, বন্ধুদের group mute!</li>
      <li>তারপর ৩–৫ মিনিটের মিনি break—একটু হাঁটো, পানি খাও, জানালায় তাকাও।</li>
      <li>এভাবে ৪ বার পড়া হলে, ১৫–৩০ মিনিটের বড় break—cricket, adda, snack, যা খুশি!</li>
    </ul>
    <p>এইভাবে পড়লে brain আর body—দুটোই থাকবে energetic! Pomodoro মানে—study like a superhero!</p>
  `,
  category: StrategyCategory.TIME_MANAGEMENT,
  icon: ClockIcon,
  visualExplainerComponent: ClockIcon,
  visualExplainerCaption: "Pomodoro মানে—একটু ফোকাস, একটু মজা, সব মিলিয়ে পড়াশোনায় full রাপ্পারাপ্পা !",
  howTo: [
    "🎯 **একটা clear goal ঠিক করো**<br/>যেমন: ‘১০টা physics MCQ solve করব’ বা ‘Chapter 7-এর math formula revise করব’।",
    "⏱️ **২৫ মিনিটের timer দাও**<br/>এই সময়টা শুধু পড়া—মোবাইল দূরে, মনোযোগ একদম sharp!",
    "🔥 **পুরো মন দিয়ে পড়ো**<br/>মন অন্যদিকে গেলে, scratch pad-এ distraction লিখে রাখো, পরে দেখবে!",
    "🧘 **৫ মিনিটের break**<br/>উঠে দাঁড়াও, পানি খাও, জানালায় তাকাও—কিন্তু scroll না!",
    "🔁 **Repeat করো**<br/>৪টা Pomodoro হলে, বড় break—cricket, snack, গান, যা খুশি! Brain recharge, তারপর আবার ready!"
  ],
  benefits: [
    "পড়া হবে super effective—কম সময়ে বেশি মনে থাকবে!",
    "Break-এর জন্য মাথা থাকবে cool, stress কমবে।",
    "Distraction কমবে, পড়া হবে game-এর মতো!",
    "Exam-এর আগে energy থাকবে—burnout হবে না!"
  ],
  realWorldExamples: [
    `<strong>🕒 Physics: কম সময়ে পুরো chapter শেষ!</strong><br/>
    ❌ সমস্যা: “Motion” পড়ছো, কিন্তু Newton’s Laws মনে থাকছে না।<br/>
    ✅ Solution: ৪টা Pomodoro (২ ঘণ্টা)—দেখো, কেমন মনে থাকে!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Pomodoro 1: Newton’s Laws পড়ো, বুঝে নাও।<br/>
    ২. Pomodoro 2: ছোট্ট video দেখো, ৩টা example solve করো।<br/>
    ৩. Pomodoro 3: MCQ practice করো।<br/>
    ৪. Pomodoro 4: Key points আর formula লিখে ফেলো।<br/>
    ৫. প্রতিটা Pomodoro-র পর ছোট্ট break—জানালায় তাকাও, পানি খাও!<br/><br/>
    🔁 দেখবে, পড়া মনে থাকবে, মাথা থাকবে cool!`,

    `<strong>📐 Math: Trigonometry আর ভয় নয়!</strong><br/>
    ❌ সমস্যা: Trigonometry শুনলেই মাথা ঘুরে যায়?<br/>
    ✅ Solution: ৩টা Pomodoro-তে সব সহজ!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Pomodoro 1: Formula মুখস্থ করো, table আঁকো।<br/>
    ২. Pomodoro 2: ৫টা example solve করো।<br/>
    ৩. Pomodoro 3: Formula লিখে, ৩টা problem নিজের থেকে করো।<br/>
    ৪. প্রতিটা session-এর পর একটু relax!<br/><br/>
    📈 ৩টা Pomodoro-র পর, chapter, একেবারে pocket-এর মধ্যে!`,

    `<strong>📝 Bangla: Essay লেখা হবে cool!</strong><br/>
    ❌ সমস্যা: Essay লিখতে গিয়ে stuck হয়ে যাচ্ছো?<br/>
    ✅ Solution: Pomodoro-তে essay লেখা হবে game-এর মতো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Pomodoro 1: ৫টা main point brainstorm করো।<br/>
    ২. Pomodoro 2: Draft লেখো (intro, body, conclusion)।<br/>
    ৩. Pomodoro 3: Grammar, word, quote ঠিক করো।<br/>
    ৪. Break নিয়ে নিজের লেখা দেখে নাও।<br/><br/>
    🧠 দেখবে, essay লেখা super easy!`,

    `<strong>🧬 Biology: Diagram মুখস্থ হবে মজা করে!</strong><br/>
    ❌ সমস্যা: Digestive system পড়েছো, কিন্তু diagram ভুলে যাচ্ছো?<br/>
    ✅ Solution: Pomodoro-তে diagram মনে থাকবে!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Pomodoro 1: Diagram পড়ো, আঁকো, label দাও।<br/>
    ২. ৫ মিনিট break—walk, stretch, relax!<br/>
    ৩. Pomodoro 2: মনে করে আবার আঁকো, organ-এর কাজ লিখো।<br/>
    ৪. MCQ practice করো।<br/><br/>
    🔍 পরের দিন repeat করো—diagram হবে pocket-এর মধ্যে!`,

    `<strong>⚖️ Study-Life Balance: পড়া, মজা, সব একসাথে!</strong><br/>
    ❌ সমস্যা: Late-night পড়া, মাথা গরম?<br/>
    ✅ Solution: Pomodoro-তে পড়া আর মজা—দুটোই!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Pomodoro 1: English comprehension পড়ো।<br/>
    ২. Pomodoro 2: Physics MCQ practice করো।<br/>
    ৩. Pomodoro 3 & 4: Bangla grammar আর model test practice।<br/>
    ৪. Break-এ snacks, prayer, বা একটু rest!<br/><br/>
    🎯 Result: Focus থাকবে, energy থাকবে, পড়া হবে cool!`
  ],
  examPrepFocus: [
    "Board exam, model test, revision—সবকিছুর জন্য Pomodoro technique দারুণ!",
    "পড়ার মাঝে ছোট্ট break—brain থাকবে fresh, তুমিও থাকবে champ!"
  ]
};

export default pomodoro;
