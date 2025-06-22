import { Strategy, StrategyCategory } from '../types';
import BrainIcon from '../components/icons/BrainIcon';

const focusDiffuse: Strategy = {
  id: "focus-diffuse",
  title: "Focus & Diffuse Modes",
  description: "Alternate between intense concentration and relaxed thinking.",
  longDescription: `
    <p><strong>পরীক্ষার জন্য টিপস:</strong> কঠিন math বা science-এর সমস্যায় stuck? 'Aha!' moment পেতে হলে শুধু গম্ভীর মুখে পড়লেই হবে না—কখনো মনোযোগ দিয়ে পড়ো (Focus), আবার কখনো একটু relax হও (Diffuse)। Brain তখনই magic টা করে!</p>
    <p><strong>🧠 Focus & Diffuse কী?</strong></p>
    <ul>
      <li><strong>Focus Mode:</strong> একদম মনোযোগ দিয়ে পড়ছো বা সমস্যা সমাধান করছো—যেমন, exam-এর আগের রাতের পড়া, বা কঠিন sum solve করা।</li>
      <li><strong>Diffuse Mode:</strong> একটু relax, ছাদে গিয়ে আকাশ দেখো, বা প্রিয় গান শোনো। Brain তখন background-এ connect করে দেয় সব idea!</li>
      <li><strong>Switch করো:</strong> দুইটা mode বদলাও—দেখবে, হঠাৎ নতুন solution মাথায় চলে আসবে! এইটাই secret!</li>
    </ul>
  `,
  category: StrategyCategory.LEARNING_TECHNIQUES,
  icon: BrainIcon,
  visualExplainerComponent: BrainIcon,
  visualExplainerCaption: "Visualizing Focus/Diffuse: Switching between deep concentration (focus) and relaxed, broad thinking (diffuse).",
  howTo: [
    "🤯 ১. কঠিন কিছু বেছে নাও—যেমন, tricky math problem বা science-এর concept।",
    "🧐 ২. Deep Focus: ২৫ মিনিট একদম মনোযোগ দিয়ে পড়ো (Pomodoro timer দিলে ভালো)। Mobile দূরে রাখো!",
    "🚶 ৩. Diffuse Time: এবার একটু break—ছাদে হাঁটো, বারান্দায় দাঁড়াও, বা প্রিয় গান শোনো। একদম relax!",
    "💡 ৪. আবার ফিরে এসো—নতুন চোখে দেখো, দেখবে, হঠাৎ মাথায় idea চলে এসেছে!"
  ],
  benefits: [
    "কঠিন বিষয় সহজে মাথায় ঢুকে যাবে।",
    "Stress কমবে, পড়া হবে মজার!",
    "নতুন idea বা solution পেতে আর ভয় লাগবে না।",
    "পরীক্ষার আগে brain থাকবে fresh!"
  ],
  realWorldExamples: [
    `<strong>🧠 Math: Geometry-তে আটকে গেছো?</strong><br/>
    ❌ সমস্যা: অনেকক্ষণ ধরে try করছো, but কিছুতেই হচ্ছে না।<br/>
    ✅ Solution: Focus & Diffuse মিক্স করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. (Focus) ২০ মিনিট মনোযোগ দিয়ে চেষ্টা করো।<br/>
    ২. (Diffuse) একটু ছাদে হাঁটো, বা বারান্দায় দাঁড়াও।<br/>
    ৩. (Focus) আবার desk-এ ফিরে আসো—দেখবে, নতুন clue পেয়ে গেছো!<br/>
    ৪. Celebrate your small wins!<br/><br/>
    🚀 এইভাবেই brain-এ 'aha!' moment টা আসে ভাইয়া
!`,

    `<strong>✍️ English: Essay-র idea পাচ্ছো না?</strong><br/>
    ❌ সমস্যা: খাতা খুলে বসে আছো, মাথায় কিছুই আসছে না।<br/>
    ✅ Solution: Focus & Diffuse-এ switch করো!<br/><br/>
    <em>Action Plan:</em><br/>
    1. (Focus) Write down ideas for 15 minutes—no stopping.<br/>
    2. (Diffuse) Take a break: doodle, make tea, or chat with family.<br/>
    3. (Focus) Return and organize your ideas—see what new thoughts appear!<br/>
    4. Every break is a brain boost. You’re getting creative!<br/><br/>
    💡 You’ll write faster and with more confidence!`,

    `<strong>🧪 Science: Chemistry পড়ে ভুলে যাচ্ছো?</strong><br/>
    ❌ সমস্যা: অনেকক্ষণ পড়ে, কিছুই মনে থাকছে না।<br/>
    ✅ Solution: Focus & Diffuse-এ পড়ো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. (Focus) ২৫ মিনিট পড়ো।<br/>
    ২. (Diffuse) একটু গান শোনো, বা বারান্দায় দাঁড়াও।<br/>
    ৩. (Focus) ফিরে এসে নিজেকে quiz করো—দেখবে, অনেক কিছু মনে আছে!<br/>
    ৪. praise yourself buddy!<br/><br/>
    🌟 stress কমবে!`,

    `<strong>📚 History/Geography: বড় answer লিখতে পারছো না?</strong><br/>
    ❌ সমস্যা: মাথায় কিছুই আসছে না, কোথা থেকে শুরু করবে বুঝতে পারছো না।<br/>
    ✅ Solution: Focus & Diffuse-এ switch করো!<br/><br/>
    <em>Action Plan:</em><br/>
    1. (Focus) Outline your answer or map for 15 minutes.<br/>
    2. (Diffuse) Take a break—walk, stretch, or relax.<br/>
    3. (Focus) Return and fill in details.<br/>
    4. Review your work and celebrate your progress!<br/><br/>
    🗺️ Alternating focus and breaks makes big tasks easy!`,
  ],
  examPrepFocus: []
};

export default focusDiffuse;
