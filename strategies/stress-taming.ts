import { Strategy, StrategyCategory } from '../types';
import SparklesIcon from '../components/icons/SparklesIcon';
import CalmIcon from '../components/icons/CalmIcon';

const stressTaming: Strategy = {
  id: "stress-taming",
  title: "Stress Taming & Test Anxiety",
  description: "পরীক্ষার স্ট্রেস? Cool ভাই/আপু mode on! Calm, confident energy দিয়ে exam conquer করো!",
  longDescription: `
    <p><strong>Quick Take:</strong> পরীক্ষার আগে হাত-পা ঠান্ডা? বুক ধড়ফড়? Relax, even the toppers feel it! এই science-backed tricks দিয়ে তুমি হবে exam hall-এর calmest legend!</p>
    <p><strong>🧘‍♀️ What Is It?</strong></p>
    <ul>
      <li>Easy, proven ways to chill your mind & body—exam hall-এও কাজ করে!</li>
      <li>Deep breathing, positive self-talk, আর lightning-fast mindfulness—সব ready!</li>
      <li>Stress কে বানাও তোমার secret weapon—panic নয়, power!</li>
    </ul>
  `,
  category: StrategyCategory.STRESS_MANAGEMENT,
  icon: SparklesIcon,
  visualExplainerComponent: CalmIcon,
  visualExplainerCaption: "Calm center খুঁজে পাও—exam pressure-এর মাঝেও!",
  howTo: [
    "**১. Power Breathing (শ্বাসের জাদু):** ৪ সেকেন্ড ধরে শ্বাস নাও, ৪ সেকেন্ড ধরে রাখো, ৬-৮ সেকেন্ডে ছাড়ো। ৩-৫ বার করো—exam hall-এ ঢোকার আগে বা টেনশন লাগলে।",
    "**২. Positive Self-Talk (নিজেকে hype দাও!):** 'পারব না' বাদ দাও, বলো—'আমি পারি, আমি প্রস্তুত!' তোমার favourite phrase লিখে রাখো—copy, খাতায়, বা মনের ভেতর।",
    "**৩. Mindfulness Mini-Break (মাথা ঠান্ডা pause):** চোখ বন্ধ করে, ৩টা জিনিস দেখো/শোনো/অনুভব করো। Present-এ থাকো—brain cool হবে!",
    "**৪. Preparation Ritual (রাতের আগের hero move):** ব্যাগ গুছিয়ে রাখো, uniform বের করো, notes একবার দেখে নাও। Brain বুঝবে—'Ready!'",
    "**💡 Try it now:** পরের বার পড়তে বসার আগে ৩টা deep breath নাও, আর নিজেকে একটা positive কথা বলো। পার্থক্য টের পাবে!"
  ],
  benefits: [
    "Exam panic কমে যাবে—blank out হবে না!",
    "Pressure-এও focus & memory sharp থাকবে।",
    "Tough situation-এও control তোমার হাতে!",
    "Stress কে energy & motivation-এ বদলে ফেলো।"
  ],
  realWorldExamples: [
    `<strong>🌙 রাতের আগে: Sleep Like a Champ</strong><br/>
    ❌ Problem: ঘুম আসছে না, মাথায় শুধু চিন্তা।<br/>
    ✅ Solution: Hero-দের মতো relax করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. ৫টা deep breath নাও বা calming music শোনো।<br/>
    ২. ব্যাগ গুছিয়ে, uniform বের করো—feel ready!<br/>
    ৩. নিজেকে বলো: “আমি চেষ্টা করেছি, কাল নতুন দিন।”<br/>
    ৪. Calm থাকলে ঘুম আসবেই!<br/><br/>
    🌟 সকালে উঠবে fresh & confident!`,

    `<strong>📝 Exam Hall Nerves: Cool Boss Mode</strong><br/>
    ❌ Problem: প্রশ্ন দেখেই heart beat বেড়ে গেল!<br/>
    ✅ Solution: Mind cool করো, focus বাড়াও!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Pause দিয়ে ৩টা slow breath নাও।<br/>
    ২. Positive phrase repeat করো: “I can do this!”<br/>
    ৩. চারপাশে ৩টা জিনিস দেখো/শোনো।<br/>
    ৪. Fresh mind-এ exam শুরু করো—legendary performance!<br/><br/>
    🏅 Control তোমার হাতে, success guaranteed!`,

    `<strong>💬 Study Worries: Stress কে Motivation বানাও</strong><br/>
    ❌ Problem: Tough subject বা কম নম্বর নিয়ে চিন্তা।<br/>
    ✅ Solution: Positive self-talk দিয়ে confidence boost করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. চিন্তা লিখে ফেলো sticky note-এ।<br/>
    ২. পাশে positive response লেখো (যেমন, “Practice করলে improve হবেই!”)।<br/>
    ৩. পড়ার আগে positive note পড়ো।<br/>
    ৪. Self-confidence বাড়বে—guaranteed!<br/><br/>
    🌟 Worry কে motivation-এ turn করো!`,

    `<strong>🧘‍♂️ Quick Calm: Mindfulness Break</strong><br/>
    ❌ Problem: Long study session-এ overwhelmed লাগছে?<br/>
    ✅ Solution: Mindful break নাও—reset করো mind!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. ১ মিনিট চোখ বন্ধ করে শ্বাসে মন দাও।<br/>
    ২. চারপাশে কী দেখো, শোনো, অনুভব করো—notice করো।<br/>
    ৩. ২-৩ মিনিট stretch বা হেঁটে আসো।<br/>
    ৪. Fresh mind-এ আবার পড়া শুরু করো!<br/><br/>
    🧘 Mindful break দিলে focus & mood দুই-ই boost হবে!`,
  ],
  examPrepFocus: [
    "Math: Exam hall-এ sum ভুলে গেলে, ৩টা deep breath নাও—panic কমবে, formula মনে পড়বে!",
    "Biology: Nervous লাগলে, চোখ বন্ধ করে নিজের heartbeat শুনো—calm হবে, answer clear হবে!",
    "Bangla: Essay লেখার আগে positive self-talk—'আমি পারব!'—confidence বাড়াবে!",
    "ICT: Coding problem-এ stuck? ১ মিনিট mindful pause নাও, fresh mind-এ আবার শুরু করো!"
  ]
};

export default stressTaming;
