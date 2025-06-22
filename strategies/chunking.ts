import { Strategy, StrategyCategory } from '../types';
import PuzzleIcon from '../components/icons/PuzzleIcon';
import SegmentedBarIcon from '../components/icons/SegmentedBarIcon';

const chunking: Strategy = {
  id: "chunking",
  title: "Chunking (Breaking It Down!)",
  description: "বড় chapter বা syllabus দেখে ভয় পাও? Chunking দিয়ে সব হবে pocket-এর মধ্যে!",
  longDescription: `
    <p><strong>কমরেড, বিশাল chapter দেখে মাথা ঘুরে যায়?</strong><br/>
    Chunking-ই তোমার secret weapon! বড় জিনিসকে ছোট ছোট টুকরো করো—puzzle-এর মতো, এক টুকরো এক টুকরো করে solve করো।<br/>
    <strong>🧩 Chunking কী?</strong></p>
    <ul>
      <li>Divide large topics (like the whole SSC syllabus) into smaller, logical 'chunks'—each chunk is easier to learn and remember.</li>
      <li>Focus on one chunk at a time, then connect them for the full picture.</li>
      <li>Chunking helps you avoid last-minute panic and makes revision feel achievable!</li>
    </ul>
    <p>Chunking মানে—big boss chapter-ও হবে তোমার ছোট ভাই!</p>
  `,
  category: StrategyCategory.LEARNING_TECHNIQUES,
  icon: PuzzleIcon,
  visualExplainerComponent: SegmentedBarIcon,
  visualExplainerCaption: "Visualizing Chunking: A huge task broken into smaller, manageable segments.",
  howTo: [
    "🔍 **১. বের করো:** বড়, ভয়ংকর chapter বা topic (যেমন, 'Cell Biology' বা 'বাংলাদেশের মুক্তিযুদ্ধ')।",
    "✂️ **২. টুকরো টুকরো করো:** Sub-topic, event, question type—textbook-এর heading বা exam question দেখে ভাগ করো।",
    "🎯 **৩. একেকটা chunk-এ master হও:** নিজের ভাষায় summary লেখো, diagram আঁকো, বা ছোট ভাই/বোনকে শেখাও (না থাকলে আয়নায় বলো!)।",
    "🔗 **৪. সব chunk connect করো:** Mind map বানাও, বা exam-এর জন্য পুরোটা একসাথে explain করো।",
    "🚀 **Try করো:** তোমার hardest chapter-টা ৩–৫টা chunk-এ ভাগ করো। আজ শুধু একটা chunk পড়ো—দেখো, কেমন easy লাগে!"
  ],
  benefits: [
    "বড় chapter দেখে আর ভয় লাগবে না—সব manageable!",
    "পড়া মনে থাকবে, কারণ brain ছোট ছোট টুকরোতে info store করে।",
    "Revision super fast হবে, exam-এর আগেও confident!",
    "Long answer-এ connect করতে পারবে—topper-দের secret!"
  ],
  realWorldExamples: [

    `<strong>📚 History: Long Chapter Chunking</strong><br/>
    ❌ সমস্যা: Liberation War বা Mughal Empire-এর বিশাল chapter—সব event, date, leader গুলিয়ে যায়?<br/>
    ✅ Solution: Chunk করে timeline, leader, event আলাদা করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Timeline chunk: Main year/period গুলো আলাদা করো।<br/>
    ২. Leader chunk: Key leader-দের নাম, কাজ লিখে রাখো।<br/>
    ৩. Event chunk: Important event গুলো আলাদা করো।<br/>
    ৪. সব chunk revise করে, নিজের ভাষায় গল্প বলো—বন্ধুকে না পেলে, আয়নায় বলো!<br/><br/>
    🗺️ Chunk-wise পড়লে, বড় chapter-ও মনে থাকবে!`,


    `<strong>🔬 Chemistry: Periodic Table Chunking—Like a Superhero Map!</strong><br/>
    ❌ সমস্যা: Periodic table-এর সব element, group, property—একসাথে পড়লে মাথা ঘুরে যায়, মনে হয় Avengers Assemble!<br/>
    ✅ Solution: Chunk করে পড়ো, মনে থাকবে super easy—আর Avengers-এর মতো group-ও চিনে ফেলো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Group chunk: Alkali metals, Halogens, Noble gases—প্রতিটা group আলাদা chunk-এ পড়ো, group-এর জন্য আলাদা রং বা symbol দাও (যেমন, Alkali metals=লাল, Halogens=সবুজ)।<br/>
    ২. Period chunk: Row-wise element গুলো chunk করো, প্রতিটা row-কে আলাদা story বা funny নাম দাও (যেমন, 2nd period=“School Friends”, 3rd period=“Cricket Team”)।<br/>
    ৩. Property chunk: প্রতিটা group-এর main property আলাদা chunk-এ লিখে রাখো, সাথে ছোট্ট doodle বা emoji দাও (Halogens=🔥, Noble gases=🎈)।<br/>
    ৪. Proven mnemonic বা funny rhyme দিয়ে chunk-wise revise করো:<br/>
    &nbsp;&nbsp;• Alkali metals (Li, Na, K, Rb, Cs, Fr): “লি না কে রুবি শেখায় ফ্রেন্স”<br/>
    &nbsp;&nbsp;• Halogens (F, Cl, Br, I, At): “Fahim Cleared Bristi, Iftar Ashbe Taratari” (ফাহিম ক্লিয়ারড বৃষ্টি, ইফতার আসবে তারাতারি)<br/>
    
    ৫. Group-wise flashcard বানাও, quiz খেলো বন্ধুদের সাথে—কে বেশি group চিনতে পারে!<br/><br/>
    🧪 Chunk-wise পড়লে, Periodic Table হবে তোমার superhero squad—exam-এ আর ভয় নেই!`,

    `<strong>🧪 Chemistry: Equation & Reaction Chunking</strong><br/>
    ❌ সমস্যা: Organic chemistry-র equation, reaction, আর mechanism—সব গুলিয়ে যায়?<br/>
    ✅ Solution: Chunking দিয়ে একেকটা step আলাদা করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Equation-এর reactant, product, catalyst—সব আলাদা chunk।<br/>
    ২. প্রতিটা step diagram এঁকে বুঝে practice করো।<br/>
    ৩. Mechanism-এর প্রতিটা ধাপ chunk করো—arrow দিয়ে flow বোঝাও।<br/>
    ৪. সব chunk connect করে পুরো process revise করো।<br/><br/>
    🧪 Chunking করলে, বড় equation-ও মনে থাকবে!`,



    `<strong>📐 Math: Formula & Problem Chunking</strong><br/>
    ❌ সমস্যা: Algebra-র formula, theorem, আর problem—সব একসাথে পড়লে মাথা গুলিয়ে যায়?<br/>
    ✅ Solution: Formula, example, problem-solving—সব আলাদা chunk করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Formula chunk: সব formula আলাদা করে লিখে রাখো।<br/>
    ২. Example chunk: প্রতিটা formula-র ২টা করে example solve করো।<br/>
    ৩. Problem chunk: Exam-এর problem গুলো আলাদা chunk-এ practice করো।<br/>
    ৪. সব chunk revise করে, নিজের ভাষায় explain করো।<br/><br/>
    🧮 Chunk-wise পড়লে, math হবে magic!`,

    `<strong>📝 English: Passage & Writing Chunking</strong><br/>
    ❌ সমস্যা: Passage পড়লে answer, summary, vocabulary—সব গুলিয়ে যায়?<br/>
    ✅ Solution: Passage-কে chunk করে পড়ো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Passage chunk: Paragraph বা section আলাদা করো।<br/>
    ২. Question chunk: প্রতিটা question আলাদা chunk-এ answer practice করো।<br/>
    ৩. Vocabulary chunk: নতুন শব্দগুলো আলাদা chunk-এ লিখে revise করো।<br/>
    ৪. Writing chunk: Summary, main idea, opinion—সব আলাদা chunk-এ practice করো।<br/><br/>
    📖 Chunk-wise পড়লে, English-এ confident হবে!`,

    `<strong>🧬 Biology: Diagram & Process Chunking</strong><br/>
    ❌ সমস্যা: Digestive system, photosynthesis-এর diagram, step, function—সব একসাথে পড়লে ভুলে যাও?<br/>
    ✅ Solution: Diagram, step, function—সব আলাদা chunk করো!<br/><br/>
    <em>Action Plan:</em><br/>
    ১. Diagram chunk: প্রতিটা organ বা part আলাদা করে আঁকো।<br/>
    ২. Step chunk: Process-এর প্রতিটা ধাপ আলাদা chunk-এ লিখো।<br/>
    ৩. Function chunk: প্রতিটা part-এর কাজ আলাদা chunk-এ লিখো।<br/>
    ৪. সব chunk revise করে, নিজের ভাষায় explain করো।<br/><br/>
    🌱 Chunk-wise পড়লে, biology diagram আর ভুল হবে না!`
  ],
  examPrepFocus: [
    "Big chapter, long answer, revision—সবকিছুর জন্য chunking technique দারুণ!",
    "Chunk-wise পড়লে, exam-এর আগের রাতেও cool!"
  ]
};

export default chunking;
