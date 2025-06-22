import { Strategy, StrategyCategory } from '../types';
import BarChartIcon from '../components/icons/BarChartIcon';
import PyramidIcon from '../components/icons/PyramidIcon';

const bloomsTaxonomy: Strategy = {
  id: "blooms-taxonomy",
  title: "Bloom's Taxonomy (Mastery Mountain)",
  description: "Climb the learning mountain: from basic facts to creative genius—Bangla-English style!",
  longDescription: `
    <div class="space-y-3">
      <div><strong>⛰️ Imagine This:</strong> ধরো, তুমি পাহাড়ে চড়ছো—কিন্তু এই পাহাড়টা পড়াশোনার! প্রতিটা ধাপ—মুখস্থ (Remember), বুঝে বলা (Understand), কাজে লাগানো (Apply), বিশ্লেষণ (Analyze), বিচার (Evaluate), আর নিজের কিছু তৈরি (Create)—তোমাকে উপরে তুলবে, একদম master level-এ।<br/>যেমন, মজার biryani রান্না: প্রথমে রেসিপি মুখস্থ, তারপর কেন কী দিচ্ছো বুঝে নাও, রান্না করো, স্বাদ নাও, কোথায় ভুল সেটা খুঁজে ঠিক করো, আর শেষে নিজের স্টাইলের biryani বানাও! পড়াশোনাতেও ঠিক তাই—ধাপে ধাপে উপরে উঠো, নিজের স্টাইল তৈরি করো!</div>
      <div><strong>🔥 Why Care?</strong> Exams (SSC, HSC, varsity, board) ask questions from every level. শুধু মুখস্থ? Base camp-এ আটকে যাবে! MCQ, short, creative, project—সব unlock করতে হলে, mountain-এর top-এ উঠতে হবে। Climb higher, and exam will feel easy!</div>
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-2 rounded">
        <strong>Common Mistake:</strong> শুধু পড়া বা মুখস্থ—no climbing! তাই creative, analysis, বা project question এ blackout। Bloom’s steps মানে—level by level unlock, like a game!
      </div>
      <div><strong>🚀 How to Climb (Step by Step):</strong>
        <ul class="list-disc list-inside ml-4">
          <li><strong>Remember:</strong> Facts, formulas, dates—MCQ, fill-in-the-blanks. (Like: Who scored the fastest century? ICT: shortcut keys? Biology: cell parts?)</li>
          <li><strong>Understand:</strong> Explain in your own words—short answers. (Why is photosynthesis important? Business: profit vs. revenue? ICT: shortcut কী কাজে লাগে?)</li>
          <li><strong>Apply:</strong> Use knowledge in new situations—problem-solving, lab, real life. (Solve a new math problem, do an experiment, use Excel formula, write a real-life example.)</li>
          <li><strong>Analyze:</strong> Break down, compare, find patterns—essay, data, case study. (Compare two poems, analyze a cricket match, break down a business plan, spot trends in a graph.)</li>
          <li><strong>Evaluate:</strong> Judge, argue, justify—debate, critical response. (Which method is better? Why? ICT: Which software is best for your project? Bangla: কোন কবি বেশি impactful?)</li>
          <li><strong>Create:</strong> Invent, design, write—project, story, experiment. (Write your own ending, design a science project, make a new app idea, invent a mnemonic.)</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>Try Now:</strong> Pick any topic (e.g., Liberation War, Cell Division, Trigonometry, ICT: Database, Business: Marketing Mix, Bangla: কবিতা)। নিজেকে challenge করো: Can I recall facts? Explain? Apply? Analyze? Evaluate? Create something new? If yes, you’re a mountain climber! If not, start climbing—one step at a time.
      </div>
      <div class="bg-green-50 border-l-4 border-green-400 p-2 rounded mt-2">
        <strong>Quick Self-Check:</strong> Last chapter-এর জন্য ৬টা step পারো? কোনটা missing? ওখান থেকেই শুরু করো! Challenge your friends—who can climb higher?
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>Real Life Example:</strong> Cricket practice: first remember the rules, then understand the grip, apply in nets, analyze your shots, evaluate your performance, and finally create your own signature move. Or, TikTok trends: watch, understand, try, analyze what’s viral, evaluate your own video, and finally create your own trend! Exams are just like this—step by step, you become a pro!
      </div>
      <div class="text-pink-700 text-sm mt-2 font-bold">
        Tumi পারবে! Just climb one step higher every day—soon, you’ll be the master! 💪
      </div>
    </div>
  `,
  category: StrategyCategory.CONCEPT_MASTERY,
  icon: BarChartIcon,
  visualExplainerComponent: PyramidIcon,
  visualExplainerCaption: "Bloom's Taxonomy: Climb the learning pyramid, from basics to creative mastery!",
  howTo: [
    "১. যেকোনো topic নাও (e.g., Biology: Cell Division, History: Liberation War, Math: Trigonometry, ICT: Database, Business: Marketing Mix)",
    "২. Step 1: Base Camp—facts/parar likho 🏕️ (Remember)",
    "৩. Step 2: Explain in your own words—বন্ধুকে বোঝাও (Understand)",
    "৪. Step 3: নতুন problem solve করো, diagram আঁকো, real life-এ use করো (Apply)",
    "৫. Step 4: তুলনা করো, pattern খুঁজে বের করো, breakdown করো (Analyze)",
    "৬. Step 5: Judge or argue—debate করো, নিজের মত দাও (Evaluate)",
    "৭. Step 6: নিজের কিছু বানাও—story, project, app, experiment (Create)",
    "৮. Practice exam questions at every level—mastery guaranteed!",
    "৯. Self-check: কোন step missing? ওখান থেকে শুরু করো!"
  ],
  benefits: [
    "সব ধরনের exam question-এর জন্য প্রস্তুতি—MCQ থেকে essay পর্যন্ত!",
    "Learning হবে game-এর মতো—level up every time!",
    "True understanding, not just memorization—real mastery!",
    "Creative, confident, and exam-ready—you’ll stand out!"
  ],
  realWorldExamples: [
    `<strong>🧬 Biology: Cell Division Mastery</strong><br/>
    ❌ Problem: Only memorizing steps, but can't explain or apply.<br/>
    ✅ Solution: Climb Bloom’s mountain!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. (Remember) Steps likho from memory.<br/>
    ২. (Understand) Process explain করো বন্ধুকে।<br/>
    ৩. (Apply) Diagram আঁকো, label দাও।<br/>
    ৪. (Analyze) Mitosis vs. Meiosis তুলনা করো।<br/>
    ৫. (Evaluate) কোনটা বেশি important? কেন?<br/>
    ৬. (Create) নিজের analogy বানাও—cell division মানে photocopy machine!<br/><br/>
    🌱 Step by step, biology boss!`,

    `<strong>📚 History: Liberation War Example</strong><br/>
    ❌ Problem: Dates মুখস্থ, but events mix up in exam.<br/>
    ✅ Solution: Use Bloom’s steps!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. (Remember) Main events & dates লিখো।<br/>
    ২. (Understand) প্রতিটা event-এর importance explain করো।<br/>
    ৩. (Apply) Timeline বা map আঁকো।<br/>
    ৪. (Analyze) দুইটা event compare করো।<br/>
    ৫. (Evaluate) কোনটা বেশি impactful? কেন?<br/>
    ৬. (Create) নিজের short story লেখো—একজন freedom fighter-এর চোখে।<br/><br/>
    🗺️ History হবে interesting!`,

    `<strong>➗ Math: Trigonometry Level Up</strong><br/>
    ❌ Problem: Formula মুখস্থ, but word problem এ আটকে যাও।<br/>
    ✅ Solution: Bloom’s mountain climb করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. (Remember) Key formulas লিখো।<br/>
    ২. (Understand) Formula explain করো নিজের ভাষায়।<br/>
    ৩. (Apply) নতুন problem solve করো।<br/>
    ৪. (Analyze) Complex problem steps-এ ভাগ করো।<br/>
    ৫. (Evaluate) Solution check করো—কেন ঠিক হলো?",
    ৬. (Create) নিজের word problem বানাও, solve করো।<br/><br/>
    🧮 Math হবে fun!`,

    `<strong>📝 Bangla & English: From Rote to Rockstar</strong><br/>
    ❌ Problem: শুধু মুখস্থ, but creative question এ আটকে যাও।<br/>
    ✅ Solution: Bloom’s ladder follow করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. (Remember) Key facts বা কবিতার লাইন লিখো।<br/>
    ২. (Understand) Meaning explain করো নিজের ভাষায়।<br/>
    ৩. (Apply) নতুন sentence-এ use করো।<br/>
    ৪. (Analyze) দুইটা character বা theme compare করো।<br/>
    ৫. (Evaluate) Judge করো—কোনটা better? কেন?",
    ৬. (Create) নিজের poem, story, বা essay লেখো।<br/><br/>
    ✍️ Bloom’s steps মানে creativity + exam success!`,

    `<strong>💻 ICT: Database Boss</strong><br/>
    ❌ Problem: শুধু definition মুখস্থ, but real project এ confused.<br/>
    ✅ Solution: Bloom’s steps use করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. (Remember) Database terms লিখো।<br/>
    ২. (Understand) Table vs. field explain করো।<br/>
    ৩. (Apply) Excel-এ ছোট database বানাও।<br/>
    ৪. (Analyze) কোন table কিভাবে connected? খুঁজে বের করো।<br/>
    ৫. (Evaluate) কোন design better? কেন?<br/>
    ৬. (Create) নিজের database project বানাও—student info, marks, etc.<br/><br/>
    💡 ICT-তে confident হবে!`,

    `<strong>📈 Business Studies: Marketing Mix Master</strong><br/>
    ❌ Problem: শুধু 4P মুখস্থ, but case study এ stuck.
    ✅ Solution: Bloom’s ladder follow করো!
    <em>Action Plan:</em><br/>
    ১. (Remember) 4P terms লিখো।<br/>
    ২. (Understand) প্রতিটা P explain করো।<br/>
    ৩. (Apply) নিজের পছন্দের product-এর জন্য 4P fill করো।<br/>
    ৪. (Analyze) দুইটা brand compare করো।<br/>
    ৫. (Evaluate) কোন brand-এর marketing better? কেন?<br/>
    ৬. (Create) নিজের imaginary brand-এর জন্য marketing plan বানাও।<br/><br/>
    🚀 Business-এ pro হবে!`
  ],
  examPrepFocus: [
    "Perfect for all exam question types—MCQ, short, creative, project!",
    "Helps you move from memorization to real mastery—one step at a time.",
  ]
};

export default bloomsTaxonomy;
