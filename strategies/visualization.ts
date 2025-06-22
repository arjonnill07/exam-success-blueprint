import { Strategy, StrategyCategory } from '../types';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import MindMapIcon from '../components/icons/MindMapIcon';

const visualization: Strategy = {
  id: "visualization",
  title: "Visualization Methods (দেখে শিখে রাখো)",
  description: "Textbook-এর boring জিনিসগুলোকে mind map, diagram বা কল্পনার ছবিতে রূপ দাও—দেখে দেখে পরীক্ষায় বাজিমাত করো!",
  longDescription: `
    <div class="space-y-3">
      <div><strong>🖼️ What:</strong> কোনো কিছু পড়ে কল্পনা করো, ছোটবেলায় যেমন গল্প শুনে ছবি আঁকতে বা map বানাতে মজা পেতে। Brain তো এমনিতেই ছবি ভালোবাসে!</div>
      <div><strong>💡 Eureka! কেন কাজ করে:</strong> বন্ধুর বাসার রাস্তা বা প্রিয় মাঠের ছবি ভুলে যাও? না! কারণ তুমি সেটা কল্পনা করেছো। পড়াটাকেও যদি ছবিতে রূপ দাও, brain বলবে, “এটা তো চিনি!”—পরীক্ষায় সহজেই মনে পড়বে।</div>
      <div><strong>🔗 Connect the dots:</strong> নতুন topic মানে mental map-এ নতুন একটা stop। পুরনো জানা কিছু দিয়ে নতুনটা মিলিয়ে নাও (যেমন, Water Cycle-এর সাথে বর্ষার বৃষ্টি)।</div>
      <div><strong>⚡ How to spark a Eureka moment:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Biology-এর কোনো chapter-এর জন্য mind map আঁকো (যেমন Cell Structure), নিজের মতো রঙ বা doodle দাও।</li>
          <li>Chemistry-তে কোনো process-এর জন্য flowchart বানাও, ভাবো রান্নার recipe-এর মতো।</li>
          <li>Poem বা story-কে comic strip বা storyboard-এ রূপ দাও।</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>Try it now:</strong> Water Cycle পড়লে, চোখ বন্ধ করে ভাবো—স্কুলের ছাদে বৃষ্টি পড়ছে, সেটা পুকুরে যাচ্ছে, তারপর রোদে ভাপ হয়ে উড়ে যাচ্ছে। আঁকো আর মজার কিছু যোগ করো—যেমন, ছাতা হাতে ব্যাঙ!
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>Real-world Eureka:</strong> পরীক্ষায় আটকে গেলে শুধু শব্দ মুখস্থ না করে, নিজের আঁকা ছবিটা মনে করো। Topper-রা tricky diagram, timeline বা grammar rule এভাবেই মনে রাখে। Secret? পড়াটাকে নিজের মতো করে ছবিতে রূপ দাও!<br/><br/>
        <em>Bonus:</em> HSC Biology-তে, human heart আঁকো, অংশগুলো label দাও, আর ভাবো blood লাল bus-এর মতো stop-এ stop-এ যাচ্ছে। English-এ, story-এর main event-এর mind map আঁকো আর নিজের জীবনের সাথে মিলিয়ে নাও। দেখবে, সব সহজ লাগবে!
      </div>
    </div>
  `,
  category: StrategyCategory.CONCEPT_MASTERY,
  icon: LightbulbIcon,
  visualExplainerComponent: MindMapIcon,
  visualExplainerCaption: "Visualization: কীভাবে mind map আঁকা যায় আর concept-গুলোকে চোখের সামনে আনা যায়",
  howTo: [
    "একটা topic বেছে নাও (e.g., Geography: Water Cycle, Biology: Cell)",
    "Diagram, mind map বা flowchart আঁকো—রঙ, doodle বা নিজের মতো কিছু যোগ করো।",
    "নতুন info-কে আগের দেখা বা জানা কিছুর সাথে মিলিয়ে নাও।",
    "পরীক্ষার আগে চোখ বন্ধ করে ছবিটা মনে করো, story বা scene-টা ভাবো।",
  ],
  benefits: [
    "জটিল বিষয় সহজে মনে রাখতে পারবে, কারণ বাস্তব জীবনের সাথে মিলিয়ে যাবে।",
    "Boring fact-ও মজার গল্প বা ছবিতে রূপ নেবে, তাই সহজে মনে থাকবে।",
    "Diagram বা process question-এ আত্মবিশ্বাস বাড়বে।",
  ],
  realWorldExamples: [
    `<strong>🧠 Biology: Water Cycle visualize করো</strong><br/>
    ❌ সমস্যা: Chapter পড়েছো, কিন্তু পরীক্ষায় step ভুলে যাও।<br/>
    ✅ Solution: পুরো process-টা ছবিতে রূপ দাও!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. বৃষ্টি, evaporation, মেঘ—সব step-এর ছবি আঁকো।<br/>
    ২. রঙ আর doodle দাও, যেন মজার হয়।<br/>
    ৩. প্রতিটা step-এর সাথে বাস্তব কিছু মিলিয়ে নাও (যেমন, স্কুলের ছাদে বৃষ্টি, গ্রামের পুকুর, বা ছাদে পানি জমে থাকা)।<br/>
    ৪. পরীক্ষার আগে চোখ বন্ধ করে নিজের আঁকা ছবিটা ভাবো।<br/><br/>
    🌦️ দেখবে, সব step সহজে মনে থাকবে!`,

    `<strong>📚 History: মুক্তিযুদ্ধ বা ২১শে ফেব্রুয়ারি নিয়ে mind map</strong><br/>
    ❌ সমস্যা: সব event আর leader-এর নাম মনে রাখতে কষ্ট হয়।<br/>
    ✅ Solution: Mind map আঁকো, সব info একসাথে জুড়ে দাও!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. পাতার মাঝখানে main event লেখো (যেমন, ১৯৭১ বা ২১শে ফেব্রুয়ারি)।<br/>
    ২. তার থেকে branch বের করে তারিখ, নেতা, গুরুত্বপূর্ণ ঘটনা যোগ করো (যেমন, শহীদ মিনার, বঙ্গবন্ধু, ৭ই মার্চ)।<br/>
    ৩. প্রতিটা branch-এ রঙ, symbol বা doodle দাও (যেমন, পতাকা, শহীদ মিনার, মাইক)।<br/>
    ৪. পরীক্ষার আগে mind map দেখে নাও—গল্পের মতো মনে হবে!<br/><br/>
    🗺️ Mind map-এ history সহজে মনে থাকবে!`,

    `<strong>✏️ English: Poem-কে comic strip-এ রূপ দাও</strong><br/>
    ❌ সমস্যা: Poem কঠিন লাগে, মুখস্থ করতে কষ্ট হয়।<br/>
    ✅ Solution: Poem-এর line-গুলো ছবিতে রূপ দাও, মজায় পড়ো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Poem পড়ে important line-গুলো underline করো।<br/>
    ২. প্রতিটা stanza-র জন্য comic strip বা storyboard আঁকো।<br/>
    ৩. Speech bubble বা doodle দাও, যেন অর্থ স্পষ্ট হয় (যেমন, নদী, কাক, গ্রাম, স্কুল)।<br/>
    ৪. পরীক্ষার আগে comic দেখে নাও—poem জীবন্ত হয়ে উঠবে!<br/><br/>
    🎨 ছবির গল্পে poem সহজে মনে থাকবে!`,

    `<strong>🧬 Science: Chemistry reaction-এর জন্য flowchart</strong><br/>
    ❌ সমস্যা: Acid-base reaction-এর step ভুলে যাও।<br/>
    ✅ Solution: Flowchart আঁকো, বাস্তব জীবনের সাথে মিলিয়ে নাও!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. প্রতিটা step-এর জন্য flowchart আঁকো।<br/>
    ২. Arrow, রঙ আর সহজ icon দাও।<br/>
    ৩. ভাবো, রান্নার recipe-এর মতো step-গুলো হচ্ছে (যেমন, ডাল রান্না, চা বানানো)।<br/>
    ৪. পরীক্ষার আগে flowchart মনে করো আর মনে মনে “রান্না” করো।<br/><br/>
    🧪 Step-গুলো ছবিতে কল্পনা করলে science সহজ!`,
  ],
  examPrepFocus: [
    "Board exam-এর diagram-based আর process question-এর জন্য দারুণ কাজের।",
    "শেষ মুহূর্তের revision আর দ্রুত মনে করার জন্য দারুণ।",
  ]
};

export default visualization;
