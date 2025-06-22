import { Strategy, StrategyCategory } from '../types';
import TargetIcon from '../components/icons/TargetIcon';

const deliberatePractice: Strategy = {
  id: "deliberate-practice",
  title: "Deliberate Practice",
  description: "Turn your weaknesses into strengths with focused practice!",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> Want to turn your biggest weaknesses into strengths? Deliberate Practice is how toppers do it—by zooming in on their mistakes and fixing them, one by one. It’s not about doing more, but doing what matters most!</p>
    <p><strong>🎯 What Is It?</strong></p>
    <ul>
      <li>Focus deeply on your weakest topics (find them from past exam papers or mock tests).</li>
      <li>Set a clear, specific goal for each session—like a mission!</li>
      <li>Get instant feedback (from answer keys, teachers, or friends) and fix mistakes right away.</li>
      <li>Repeat and refine—each session brings you closer to mastery and exam confidence.</li>
    </ul>
  `,
  category: StrategyCategory.LEARNING_TECHNIQUES,
  icon: TargetIcon,
  visualExplainerComponent: TargetIcon,
  visualExplainerCaption: "Visualizing Deliberate Practice: Focused effort on specific weaknesses to hit the target of mastery.",
  howTo: [
    "১. তোমার সবচেয়ে দুর্বল জায়গা খুঁজে বের করো—শেষ exam বা mock test-এর ভুলগুলো দেখো।",
    "২. Mini-goal ঠিক করো—যেমন, '৫টা integration MCQ ভুল না করে solve করব'।",
    "৩. শুধু ওই topic-এ ২০-৩০ মিনিট practice করো, timer দিয়ে, distraction-free!",
    "৪. সাথে সাথে answer check করো—ভুল হলে, কেন হলো বুঝে নাও, আরেকটা similar problem try করো।",
    "৫. Progress লিখে রাখো—দেখবে, ধাপে ধাপে improvement!"
  ],
  benefits: [
    "দুর্বলতা শক্তিতে বদলে যাবে—exam-এ আর ভয় নেই!",
    "Practice হবে mission-এর মতো—boring লাগবে না।",
    "Time বাঁচবে—শুধু দরকারি জিনিসে ফোকাস।",
    "Confidence বাড়বে—surprise কমবে!"
  ],
  realWorldExamples: [
    `<strong>🎯 Math: Sign Mistake Fixer</strong><br/>
    ❌ সমস্যা: Algebra-তে বারবার sign ভুল করো?<br/>
    ✅ Solution: শুধু sign mistake-এর problem আলাদা করে practice করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. পুরনো exam-এর sign mistake গুলো খুঁজে বের করো।<br/>
    ২. ৫টা similar problem timer দিয়ে solve করো।<br/>
    ৩. সাথে সাথে answer check করো, ভুল হলে কারণ লিখে রাখো।<br/>
    ৪. পরের দিন আবার try করো।<br/><br/>
    🏆 এক সপ্তাহে sign mistake কমে যাবে!`,

    `<strong>📝 English: Only Conclusion Drill</strong><br/>
    ❌ সমস্যা: Essay-এর conclusion লিখতে আটকে যাও?<br/>
    ✅ Solution: শুধু conclusion practice করো, feedback নাও!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. ২টা essay topic-এর conclusion লিখো।<br/>
    ২. Friend বা teacher-কে দেখাও, feedback নাও।<br/>
    ৩. Feedback দিয়ে rewrite করো।<br/>
    ৪. পরের দিন নতুন topic-এ repeat করো।<br/><br/>
    ✍️ Conclusion-এ confident হবে!`,

    `<strong>🔬 Science: Diagram Label Drill</strong><br/>
    ❌ সমস্যা: Biology-তে diagram label ভুলে যাও?<br/>
    ✅ Solution: শুধু label practice করো, সাথে সাথে check করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. ৩টা diagram (যেমন, heart, leaf, digestive system) আঁকো।<br/>
    ২. Label দাও, answer key দিয়ে মিলিয়ে দেখো।<br/>
    ৩. ভুল হলে, কারণ লিখে রাখো।<br/>
    ৪. Similar diagram আবার practice করো।<br/><br/>
    🧪 Label ভুল কমে যাবে!`,

    `<strong>📚 Bangla: Grammar Rule Target</strong><br/>
    ❌ সমস্যা: Bangla grammar-এর নির্দিষ্ট rule বারবার ভুল করো?<br/>
    ✅ Solution: শুধু ওই rule-এর example practice করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. যে rule-এ ভুল করো, ৩টা example practice করো।<br/>
    ২. সাথে সাথে answer check করো।<br/>
    ৩. ভুল হলে, কারণ লিখে রাখো।<br/>
    ৪. পরের দিন আবার try করো।<br/><br/>
    🌟 Grammar-এ mastery আসবে!`
  ],
  examPrepFocus: []
};

export default deliberatePractice;
