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
    `<strong>History Exam:</strong> Break the Liberation War chapter into 'Background', 'Key Events', 'Major Leaders', and 'Aftermath'. <em>Try it now:</em> Make a table for each chunk and fill in key facts—watch your confidence grow!`,
    `<strong>Math Mastery:</strong> For Geometry, split a big theorem into 'Definitions', 'Conditions', 'Proof Steps', and 'Applications'. <em>Challenge:</em> Teach each chunk to a friend or sibling—see how much clearer it gets!`,
    `<strong>Physics Exam Hack:</strong> Faced with a scary circuit diagram in your SSC/HSC exam? Don’t panic! Chunk it: (1) List all components, (2) Identify series/parallel parts, (3) Apply Ohm’s Law to each chunk, (4) Combine for the final answer. <em>Eureka!</em> This is how toppers solve the hardest MCQs step by step. <br/><em>Try it now:</em> Take a sample circuit from your book and break it into chunks—see how much easier it gets!`,
    `<strong>Bangla & English Literature:</strong> Break a long poem or story into 'Main Events', 'Characters', and 'Themes'. <em>Try this:</em> Summarize each chunk in your own words before connecting them for the exam!`,
  ],
  examPrepFocus: []
};

export default chunking;
