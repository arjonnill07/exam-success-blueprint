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
    ❌ Problem: The chapter feels huge and overwhelming.<br/>
    ✅ Solution: Use chunking to make it easy and fun!<br/><br/>
    <em>Action Plan:</em><br/>
    1. List all cell parts (membrane, nucleus, etc.).<br/>
    2. Learn each part’s function—draw and label.<br/>
    3. Practice MCQs or short questions on each chunk.<br/>
    4. Connect the chunks with a mind map or summary.<br/><br/>
    🎉 You’ll finish the chapter step by step, not all at once!`,

    `<strong>📖 Literature: Tackle Long Stories or Poems</strong><br/>
    ❌ Problem: Can’t remember all the events or characters.<br/>
    ✅ Solution: Break it into small, friendly pieces!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Write down the main events.<br/>
    2. List the key characters and their roles.<br/>
    3. Find the main theme or lesson.<br/>
    4. Summarize each chunk in your own words.<br/><br/>
    📚 Suddenly, the story makes sense and is easy to revise!`,

    `<strong>➗ Math: Master Theorems Step by Step</strong><br/>
    ❌ Problem: Theorem proofs feel confusing and too long.<br/>
    ✅ Solution: Chunk them into simple, clear steps!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Write the definitions and formula.<br/>
    2. Break the proof into 3–4 logical steps.<br/>
    3. Practice each step separately.<br/>
    4. Connect all steps for the full proof.<br/><br/>
    🧮 Step-by-step chunks make math easy!`,

    `<strong>📝 Bangla: Essay or Grammar in Chunks</strong><br/>
    ❌ Problem: Essays or grammar rules feel overwhelming.<br/>
    ✅ Solution: Break them into chunks for easy learning!<br/><br/>
    <em>Action Plan:</em><br/>
    1. For essays: List main points, then write a paragraph for each.<br/>
    2. For grammar: List rules, then practice one at a time.<br/>
    3. Review and connect all chunks.<br/>
    4. Summarize or teach the full topic to a friend.<br/><br/>
    ✍️ Chunking makes big tasks simple!`,
  ],
  examPrepFocus: []
};

export default chunking;
