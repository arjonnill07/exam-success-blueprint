import { Strategy, StrategyCategory } from '../types';
import PuzzleIcon from '../components/icons/PuzzleIcon';
import SegmentedBarIcon from '../components/icons/SegmentedBarIcon';

const chunking: Strategy = {
  id: "chunking",
  title: "Chunking (Breaking It Down!)",
  description: "Turn overwhelming topics into bite-sized, conquerable pieces for exam success.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> Overwhelmed by a giant chapter or syllabus? Chunking is your secret weapon to make it easy and even fun! Break big topics into small, meaningful parts—like solving a puzzle, one piece at a time.</p>
    <p><strong>🧩 What Is It?</strong></p>
    <ul>
      <li>Divide large topics (like the whole SSC syllabus) into smaller, logical 'chunks'—each chunk is easier to learn and remember.</li>
      <li>Focus on one chunk at a time, then connect them for the full picture.</li>
      <li>Chunking helps you avoid last-minute panic and makes revision feel achievable!</li>
    </ul>
  `,
  category: StrategyCategory.LEARNING_TECHNIQUES,
  icon: PuzzleIcon,
  visualExplainerComponent: SegmentedBarIcon,
  visualExplainerCaption: "Visualizing Chunking: A huge task broken into smaller, manageable segments.",
  howTo: [
    "**🔍 1. Spot the Monster:** Find that big, scary chapter or topic (e.g., 'Cell Biology' or 'Bangladesh Liberation War').",
    "**✂️ 2. Slice It Up:** Break it into logical chunks—like sub-topics, events, or question types. Use your textbook’s headings or past exam questions as a guide.",
    "**🎯 3. Master Each Chunk:** Focus on one chunk at a time. Summarize it in your own words, draw a diagram, or teach it to a friend.",
    "**🔗 4. Connect the Chunks:** After learning each part, link them together. Make a mind map or explain how the pieces fit for the exam.",
    "**🚀 Try it now:** Pick your hardest chapter and break it into 3–5 chunks. Study just one chunk today—you’ll feel the difference!"
  ],
  benefits: [
    "Reduces overwhelm and exam stress.",
    "Boosts memory by organizing information.",
    "Makes revision faster and more effective.",
    "Helps you spot connections and ace long-answer questions."
  ],
  realWorldExamples: [
    `<strong>🧩 Science: Break Down Big Chapters</strong><br/>
    ❌ The chapter feels huge and overwhelming?<br/>
    ✅ Use chunking to make it easy and fun.<br/><br/>
    <em>How to master “Cell Biology”:</em><br/>
    • <strong>Chunk 1:</strong> List all cell parts (membrane, nucleus, etc.)<br/>
    • <strong>Chunk 2:</strong> Learn each part’s function—draw and label<br/>
    • <strong>Chunk 3:</strong> Practice MCQs or short questions on each chunk<br/>
    • <strong>Chunk 4:</strong> Connect the chunks with a mind map or summary<br/><br/>
    🎉 You’ll finish the chapter step by step, not all at once!`,

    `<strong>📚 Literature: Tackle Long Stories or Poems</strong><br/>
    ❌ Can’t remember all the events or characters?<br/>
    ✅ Break it into small, friendly pieces.<br/><br/>
    <em>How to study “A Long Poem or Story”:</em><br/>
    • <strong>Chunk 1:</strong> Write down the main events<br/>
    • <strong>Chunk 2:</strong> List the key characters and their roles<br/>
    • <strong>Chunk 3:</strong> Find the main theme or lesson<br/>
    • <strong>Chunk 4:</strong> Summarize each chunk in your own words<br/><br/>
    📖 Suddenly, the story makes sense and is easy to revise!`,

    `<strong>➗ Math: Master Theorems Step by Step</strong><br/>
    ❌ Theorem proofs feel confusing and too long?<br/>
    ✅ Chunk them into simple, clear steps.<br/><br/>
    <em>How to master “Area of Triangle” or any theorem:</em><br/>
    • <strong>Chunk 1:</strong> Write the definitions and formula<br/>
    • <strong>Chunk 2:</strong> Break the proof into 2–3 logical steps<br/>
    • <strong>Chunk 3:</strong> Solve a sample problem for each step<br/>
    • <strong>Chunk 4:</strong> Teach the whole process to a friend or sibling<br/><br/>
    🏅 You’ll feel proud and confident with every chunk you finish!`,

    `<strong>🌏 History/Geography: Big Chapters, Small Chunks</strong><br/>
    ❌ Struggling to remember all the facts for a big chapter?<br/>
    ✅ Divide and conquer with chunking.<br/><br/>
    <em>How to study “Bangladesh Liberation War” or “River Systems”:</em><br/>
    • <strong>Chunk 1:</strong> List key dates or places<br/>
    • <strong>Chunk 2:</strong> Write 2–3 sentences about each event or location<br/>
    • <strong>Chunk 3:</strong> Draw a timeline or map<br/>
    • <strong>Chunk 4:</strong> Review each chunk before moving to the next<br/><br/>
    🌟 You’ll remember more and feel less stressed at exam time!`,
  ],
  examPrepFocus: []
};

export default chunking;
