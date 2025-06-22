import { Strategy, StrategyCategory } from '../types';
import ZapIcon from '../components/icons/ZapIcon';
import BrainArrowsIcon from '../components/icons/BrainArrowsIcon';

const retrievalPractice: Strategy = {
  id: "retrieval-practice",
  title: "Retrieval Practice (More Testing!)",
  description: "Test yourself—exam rehearsal! Brain-কে superstar বানাও, শুধু পড়া নয়, নিজেকে challenge করো!",
  longDescription: `
    <div class="space-y-3">
      <div><strong>📝 What:</strong> Book বন্ধ করে answer recall করো—no cheating! Mock test-এর মতো, নিজের brain-কে real exam-এর জন্য train করো।</div>
      <div><strong>💡 Why it works:</strong> Recall practice মানে brain-এ memory path super strong! Proven: শুধু reread নয়, নিজেকে quiz করলেই result boost!</div>
      <div><strong>⚡ How to use:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Past board question, class test, নিজের বানানো quiz—সব কাজে লাগাও।</li>
          <li>Book/notes বন্ধ রেখে answer দাও (closed book challenge)।</li>
          <li>Answer check করো, ভুলগুলো next round-এ বেশি practice করো।</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>Try it now:</strong> Chapter পড়ার পর, book বন্ধ করে—সব মনে করতে পারো? না পারলে, friend-কে বলো quiz নিতে! Fun + learning = win!
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>Real-world Eureka:</strong> Cricket match-এর আগে practice game খেলো—just like that! যত বেশি নিজেকে test করবে, exam-এ তত confident থাকবে—surprise zero, result hero!
      </div>
    </div>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: ZapIcon,
  visualExplainerComponent: BrainArrowsIcon,
  visualExplainerCaption: "Retrieval Practice: নিজেকে quiz করো, brain-এ exam recall power boost করো!",
  howTo: [
    "Past paper, class test, নিজের quiz—সব collect করো।",
    "Book/notes বন্ধ রেখে নিজেকে test করো—real exam vibe!",
    "Answer check করে ভুলগুলো বেশি practice করো।",
    "Regularly repeat—subject wise, topic wise!",
    "Group study-তে বন্ধুদের সাথে quiz war করো—fun + memory boost!"
  ],
  benefits: [
    "Exam-এর আগে real confidence—surprise থাকবে না!",
    "Memory reread-এর চেয়ে অনেক strong হবে!",
    "Revision-এ কোনটা revise দরকার, সঙ্গে সঙ্গে বুঝে যাবে।",
    "Writing speed, exam stamina—দুটোই বাড়বে!"
  ],
  realWorldExamples: [
    `<strong>📝 Exam Power: Past Question Practice</strong><br/>
    ❌ Problem: Chapter পড়েও exam-এ blank out!<br/>
    ✅ Solution: Real question দিয়ে নিজেকে test করো—confidence boost!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Board-এর ৩টা question নাও।<br/>
    ২. Book বন্ধ রেখে answer দাও—brave হও!<br/>
    ৩. Answer check করো, ভুলগুলো বেশি practice করো।<br/>
    ৪. নতুন question-এ repeat করো—confidence বাড়বে!<br/><br/>
    🎯 Exam hall-এ ready থাকো—no fear!`,

    `<strong>➖ Math Mastery: Formula Recall</strong><br/>
    ❌ Problem: Formula বা step exam-এ ভুলে যাও।<br/>
    ✅ Solution: Book বন্ধ রেখে formula লিখে practice করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. পড়ার পর, সব formula মনে করে লিখে ফেলো।<br/>
    ২. Friend-কে বলো quiz নিতে।<br/>
    ৩. Answer check করো—ভুল মানে next round-এ বেশি practice!<br/>
    ৪. কয়েকদিন পর আবার repeat করো—formula fresh থাকবে!<br/><br/>
    ➕ Memory strong, math easy!`,

    `<strong>📚 Science: Diagram Recall</strong><br/>
    ❌ Problem: Book-এ diagram easy, exam-এ মনে পড়ে না!<br/>
    ✅ Solution: নিজেকে quiz করো—diagram draw করো, label practice করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Diagram (heart, cell, digestive system) পড়ো।<br/>
    ২. Book cover করে, মনে করে draw করো।<br/>
    ৩. Label লিখে check করো।<br/>
    ৪. প্রতি সপ্তাহে নতুন diagram-এ repeat করো।<br/><br/>
    🧬 Diagram ভুলবে না!`,

    `<strong>✏️ Bangla & English: Writing Practice</strong><br/>
    ❌ Problem: Exam-এ answer লিখতে কষ্ট হয়।<br/>
    ✅ Solution: Book বন্ধ রেখে answer লিখে practice করো—writing skill boost!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Textbook বা past paper থেকে question নাও।<br/>
    ২. Book/notes ছাড়া answer লিখো।<br/>
    ৩. Answer check করে, miss করা point highlight করো।<br/>
    ৪. কয়েকদিন পর আবার practice—writing skill upgrade!<br/><br/>
    📝 Practice করলে answer writing perfect হবে!`,
  ],
  examPrepFocus: [
    "Mock test, board prep, class test—সব জায়গায় perfect!",
    "Exam stamina, confidence—দুটোই বাড়াবে!",
    "ICT: Coding problem, theory—নিজেকে quiz করো, ভুলগুলো বেশি practice করো!",
    "Biology: Diagram, definition—recall practice করো!"
  ]
};

export default retrievalPractice;
