import { Strategy, StrategyCategory } from '../types';
import RepeatIcon from '../components/icons/RepeatIcon';
import CalendarSpacedIcon from '../components/icons/CalendarSpacedIcon';

const spacedRepetition: Strategy = {
  id: "spaced-repetition",
  title: "Spaced Repetition (স্মার্ট রিভিউ)",
  description: "মেমোরি ফুটো বালতি? Spaced Repetition দিয়ে brain-এ leak বন্ধ করো—revise করো, ভুলে যাওয়ার আগেই!",
  longDescription: `
    <div class="space-y-3">
      <div><strong>⏳ কী:</strong> পড়া শেষ? ভাবো, brain-এ info জমা রাখার জন্য একটু একটু করে পানি (রিভিউ) দিচ্ছো—আজ একটু, কাল একটু, তারপর আবার। মজার ব্যাপার, যতবার রিভিউ করবে, তত কম ভুলবে!</div>
      <div><strong>💡 কেন কাজ করে:</strong> আমাদের brain একটু অলস—একবার পড়লে সব মনে রাখে না! কিন্তু মাঝে মাঝে ঝালিয়ে নিলে, brain-ও বলে, “ওহ, এটা তো চেনা!” টপাররা মুখস্থ নয়, স্মার্ট রিভিউ-এ বিশ্বাসী!</div>
      <div class="flex flex-col items-center my-4">
        <img src="/images/curve 3.png" alt="Ebbinghaus Forgetting Curve" class="w-full max-w-xs md:max-w-md rounded shadow border border-sky-200 mb-2"/>
        <span class="text-blue-700 text-xs">মেমোরি ফুটো বালতি? ঠিক সময়ে পানি (রিভিউ) দিলে, সব info জমে থাকবে!</span>
      </div>
      <div><strong>⚡ কিভাবে করবে:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>প্রথমে ভালোভাবে পড়ো, বুঝে নাও—no rush!</li>
          <li>পরের দিন একটু ঝালিয়ে নাও, তারপর ৩ দিন, ১ সপ্তাহ, ২ সপ্তাহ পর—মনে না থাকলে, “আহা, আবার দেখি!”</li>
          <li>ফ্ল্যাশকার্ড, নোটবুক, বা অ্যাপ (যেমন Anki)—যা খুশি, মজার যেটা লাগে!</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>ট্রাই করে দেখো:</strong> আজ শেখা ম্যাথ ফর্মুলা বা ইংরেজি শব্দ—কাল একটু ঝালিয়ে নাও, ৩ দিন পর আবার, ১ সপ্তাহ পর আবার। ভুলে গেলে, “ওরে বাবা, আবার দেখি!”—মজা পাবে!
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>রিয়েল লাইফ টিপস:</strong> মনে রাখার জন্য brain-কে একটু একটু করে খুশি রাখো—রিভিউ মানে brain-এর জন্য treat! টপাররা শুধু মুখস্থ নয়, মজা করে revise করে—তাই তো সব মনে থাকে!
      </div>
    </div>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: RepeatIcon,
  visualExplainerComponent: CalendarSpacedIcon,
  visualExplainerCaption: "Visualizing Spaced Repetition: Reviewing material at increasing time intervals.",
  howTo: [
    "১. পড়া শেষ? একটু ঘুরে এসে, কাল আবার ঝালিয়ে নাও—brain-ও খুশি!",
    "২. মাঝে মাঝে (৩ দিন, ১ সপ্তাহ, ২ সপ্তাহ) আবার একটু দেখে নাও—মনে না থাকলে, হাসতে হাসতে revise করো!",
    "৩. ফ্ল্যাশকার্ড, নোটবুক, বা app—যা খুশি, মজার যেটা লাগে, সেটাই use করো!",
    "৪. ভুলে গেলে মন খারাপ না—brain-ও তো মানুষ, আবার দেখলেই মনে পড়বে!"
  ],
  benefits: [
    "ভুলে যাওয়ার ভয় কমবে—brain-এ info জমে থাকবে!",
    "শেষ মুহূর্তে গলদঘর্ম মুখস্থ নয়—relax mood-এ revision!",
    "রিভিশন হবে মজার, চাপমুক্ত, আর অনেক বেশি কার্যকর!"
  ],
  realWorldExamples: [
    `<strong>📖 ইংরেজি শব্দ: মজার খেলায় মনে রাখো</strong><br/>
    ❌ সমস্যা: নতুন শব্দ কয়েকদিন পরেই উধাও!<br/>
    ✅ সমাধান: Spaced Repetition দিয়ে শব্দগুলোকে brain-এর favourite বানাও!<br/><br/>
    <em>মজা করে করো:</em><br/>
    ১. আজ ৫টা নতুন শব্দ শেখো, কাল একটু ঝালিয়ে নাও।<br/>
    ২. ৩ দিন, ১ সপ্তাহ পর আবার দেখো—মনে না থাকলে, “আহা, আবার দেখি!”<br/>
    ৩. ফ্ল্যাশকার্ড বা নোটবুক—যা খুশি, মজার যেটা লাগে!
    ৪. প্রতিটা রিভিউ শব্দগুলোকে brain-এর বন্ধু বানাবে!<br/><br/>
    🌟 এক্সাম আর লাইফে শব্দ থাকবে মনে!`,

    `<strong>📅 ইতিহাস: তারিখ মনে রাখা আর চাপ নয়</strong><br/>
    ❌ সমস্যা: এক্সামের আগে তারিখ ভুলে যাও? Happens!<br/>
    ✅ সমাধান: মাঝে মাঝে ঝালিয়ে নাও—brain-ও খুশি, তুমি-ও খুশি!<br/><br/>
    <em>মজা করে করো:</em><br/>
    ১. ৫টা important তারিখ লিখে রাখো।<br/>
    ২. কাল, ৩ দিন, ১ সপ্তাহ পর একটু দেখে নাও।<br/>
    ৩. ক্যালেন্ডার বা app-এ reminder দিলে, brain-ও “thank you” বলবে!<br/>
    ৪. ভুলে গেলে, “আহা, আবার দেখি!”<br/><br/>
    🗓️ Spaced Repetition-এ ইতিহাসও মজার!`,

    `<strong>🧬 বিজ্ঞান: ডায়াগ্রাম মনে রাখা—easy!</strong><br/>
    ❌ সমস্যা: ডায়াগ্রাম কয়েকদিন পরেই ভুলে যাও? No worries!<br/>
    ✅ সমাধান: মাঝে মাঝে ঝালিয়ে নাও—brain-এ জমে যাবে!<br/><br/>
    <em>মজা করে করো:</em><br/>
    ১. ডায়াগ্রাম আঁকো, কাল আবার আঁকো, ৩ দিন পর আবার।<br/>
    ২. ভুলে গেলে, “আহা, আবার দেখি!”—মজা পাবে!
    ৩. প্রতিবার একটু নতুন কিছু যোগ করো—রঙ, ডিটেইল, emoji!<br/><br/>
    🎨 Spaced Repetition-এ ডায়াগ্রাম থাকবে মনে!`,

    `<strong>📝 বাংলা: ব্যাকরণ নিয়ম—no stress!</strong><br/>
    ❌ সমস্যা: ব্যাকরণ নিয়ম এক্সামের আগে উধাও? Happens to all!<br/>
    ✅ সমাধান: মাঝে মাঝে ঝালিয়ে নাও—brain-ও খুশি!<br/><br/>
    <em>মজা করে করো:</em><br/>
    ১. ৩–৫টা নিয়ম লিখে রাখো, কাল একটু revise করো।<br/>
    ২. ৩ দিন, ১ সপ্তাহ পর আবার দেখো—মনে না থাকলে, “আহা, আবার দেখি!”<br/>
    ৩. নিয়ম দিয়ে মজার বাক্য লেখো, বন্ধুদের দেখাও—fun guaranteed!<br/><br/>
    ✍️ Spaced Repetition-এ grammar-ও easy!`
  ],
  examPrepFocus: [
    "দীর্ঘমেয়াদী মনে রাখার জন্য এবং এক্সাম প্রস্তুতিতে পারফেক্ট!",
    "ভোকাব, সূত্র, গুরুত্বপূর্ণ তথ্য—সবকিছুর জন্য দারুণ!"
  ]
};

export default spacedRepetition;
