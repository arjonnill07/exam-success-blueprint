import { Strategy, StrategyCategory } from '../types';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import BrainArrowsIcon from '../components/icons/BrainArrowsIcon';

const activeRecall: Strategy = {
  id: "active-recall",
  title: "Active Recall ",
  description: "Utilize your brain —নিজেই নিজেকে প্রশ্ন করো, Studying will become a game!",
  longDescription: `
    <p> কম সময়ে বেশি মনে রাখতে চাও? Active Recall-ই toppers-দের গোপন অস্ত্র! শুধু পড়ে গেলে হবে না, নিজেকে প্রশ্ন করো—তোমার brain তখনই আসল কাজটা শিখে নেবে।</p>
    <p><strong>🧠🔍 Active Recall কী?</strong></p>
    <ul>
      <li>নোট না দেখে মনে করার চেষ্টা করো—quiz-এর মতো</li>
      <li>প্রতিবার মনে করতে পারলে, brain-এর muscle gets stronger my friend। gym-এর মতো, but brain-এর জন্য।</li>
      <li> Better and effective then repeated reading and highlighting!</li>
    </ul>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: LightbulbIcon,
  visualExplainerComponent: BrainArrowsIcon,
  visualExplainerCaption: "Visualizing Active Recall: Actively pulling information out of your brain, like retrieving a file.",
  howTo: [
    "১. যেকোনো একটা Topic পড়ো!",
    "২. এবার নোট বা বই টা বন্ধ করো — brain-এর সাথে কথা বলো।",
    "৩. নিজেকে প্রশ্ন করো—লিখে, মুখে বলো, বা ছবি আঁকো—কিছুতেই চুরি না!",
    "৪. যা পড়ছো মনে করার চেষ্টা করো তো, remember- no peeking! চুরি করে দেখা যাবে না",
    "💡 এখনই চেষ্টা করো তো: এই ৪টা ধাপ পড়ে চোখ বন্ধ করো—মনে করতে পারো? এটাই তো Active Recall!"
  ],
  benefits: [
    "Dramatically boosts memory retention for exams.",
    "Builds true understanding, not just memorization.",
    "Saves time—less re-reading, more learning!",
    "Makes exam revision feel like a game or challenge."
  ],
  realWorldExamples: [
    `<strong>🧠 ইতিহাস: মুক্তিযুদ্ধের ঘটনা মনে রাখো</strong><br/>
    ❌ সমস্যা: মুক্তিযুদ্ধ নিয়ে পড়েছো, কিন্তু তারিখ বা ঘটনা গুলিয়ে ফেলো।<br/>
    ✅ Solution: Active Recall দিয়ে সব মনে রাখো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. বই থেকে key fact পড়ো।<br/>
    ২. বই বন্ধ করে, নিজের খাতায় তারিখ আর ঘটনা লিখে ফেলো।<br/>
    ৩. মিলিয়ে দেখো—যা ভুলে গেছো, সেটা কাল আবার মনে করার চেষ্টা করো।<br/>
    ৪. এভাবে ১ সপ্তাহ চালিয়ে যাও।<br/><br/>
    ⭐ দেখবে, ধাপে ধাপে সব মনে থাকবে!`,

    `<strong>🔬 Science: পদার্থবিজ্ঞানের সূত্র</strong><br/>
    ❌ সমস্যা: Laws of Motion পড়েছো, কিন্তু নিজের ভাষায় বলতে পারো না।<br/>
    ✅ Solution: Active Recall !<br/><br/>
    <em>Action Plan:</em><br/>
    ১. মনোযোগ দিয়ে chapter পড়ো।<br/>
    ২. বই বন্ধ করে Newton-এর ৩টা law নিজের ভাষায় লিখে ফেলো।<br/>
    ৩. পরের দিন, বন্ধু বা ছোট ভাই/বোনকে বোঝাও।<br/>
    ৪. ভুল হলে আবার পড়ো, আবার চেষ্টা করো।<br/><br/>
    💡 যতবার মনে করবে, ততবার শক্তিশালী হবে!`,

    `<strong>📐 Math: Conquering Formulas</strong><br/>
    ❌ সমস্যা: Quadratic formula বারবার ভুলে যাও।<br/>
    ✅ Solution: আগে recall, পরে দেখে নাও!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. খাতায় formula লিখে ফেলো, মনে করে।<br/>
    ২. ২-৩টা সমস্যা সমাধান করো, নোট না দেখে।<br/>
    ৩. মিলিয়ে দেখো, ভুল হলে চিহ্নিত করো।<br/>
    ৪. নিজেকে বা বন্ধুকে বোঝাও।<br/><br/>
    🚀 ধীরে ধীরে, সূত্র হবে তোমার নিজের!`,

    `<strong>📝 বাংলা/English Essay Writing</strong><br/>
    ❌ সমস্যা: Model essay পড়ো, কিন্তু লিখতে গেলে পয়েন্ট মনে থাকে না।<br/>
    ✅ Solution: Recall দিয়ে আইডিয়া সাজাও!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Model essay পড়ো।<br/>
    ২. বই বন্ধ করে, মূল পয়েন্টগুলো লিখে ফেলো।<br/>
    ৩. প্রতিটা পয়েন্ট নিয়ে ছোট ছোট প্যারাগ্রাফ লেখো।<br/>
    ৪. মিলিয়ে দেখো, কোথায় ভুল বা ফাঁক আছে, ঠিক করো।<br/><br/>
    ✍️ এভাবে চর্চা করলে, রচনা লেখা হবে super easy!`,

    `<strong>🧬 Biology: Draw to remember </strong><br/>
    ❌ সমস্যা: Heart-এর diagram মুখস্থ করো, কিন্তু পরীক্ষায় label ভুলে যাও।<br/>
    ✅ Solution: Recall আর ছবি আঁকা—দুটো একসাথে!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Study the heart diagram and its parts <br/>
    ২. বই বন্ধ করে, খাতায় diagram আঁকো।<br/>
    ৩. প্রতিটা অংশ label দাও, কাজ লিখে রাখো।<br/>
    ৪. পরের দিন আবার আঁকো, ভুল হলে ঠিক করো।<br/><br/>
    🎨 ছবি এঁকে মনে রাখলে, ভুল হবে না!`,
  ],
  examPrepFocus: [
    "MCQ, short question, board exam-এর জন্য দারুণ কাজের।",
    "নিজেকে প্রশ্ন করার অভ্যাস গড়ে তুললে, পরীক্ষার ভয় থাকবে না!"
  ]
};

export default activeRecall;
