import { Strategy, StrategyCategory } from '../types';
import PuzzleIcon from '../components/icons/PuzzleIcon';
import SegmentedBarIcon from '../components/icons/SegmentedBarIcon';

const chunking: Strategy = {
  id: "chunking",
  title: "Chunking (Breaking It Down!)",
  description: "Break down complex information into smaller, manageable parts.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> Feeling swamped by a huge topic? Chunking is the way to make it totally manageable and less scary for exams! We'll turn mountains into molehills.</p>
    <p><strong>🧩 What Is It?</strong></p>
    <ul>
      <li>Break large amounts of information (like a whole exam syllabus) into smaller, meaningful units or 'chunks'.</li>
      <li>Each chunk is easier to process, understand, and remember.</li>
      <li>Focus on one chunk at a time before connecting them for the bigger picture.</li>
    </ul>
  `,
  category: StrategyCategory.LEARNING_TECHNIQUES,
  icon: PuzzleIcon,
  visualExplainerComponent: SegmentedBarIcon,
  visualExplainerCaption: "Visualizing Chunking: A large task broken into smaller, manageable segments.",
  howTo: [
    "**1. Identify the 'Whole':** Pinpoint that large exam topic or chapter that feels overwhelming.",
    "**2. Slice It Up:** Break it into smaller, logical sub-topics or sections. Think about how exam questions might target these parts.",
    "**3. Master Each Chunk:** Focus on understanding one chunk thoroughly before moving to the next.",
    "**4. Connect the Chunks:** Once individual chunks are clear, actively link them to understand the overall concept for the exam."
  ],
  benefits: [],
  realWorldExamples: [
    "<em>Studying a History chapter for an exam:</em> Chunk it into 'Causes', 'Key Events', 'Key Figures', and 'Consequences'. Master each before linking them.",
    "<em>Learning a complex Math theorem:</em> Break it down into understanding the definitions, the conditions, the proof steps, and then its applications for exam problems.",
    "<em>Preparing for a Biology exam covering cellular respiration:</em> Chunk it into Glycolysis, Krebs Cycle, and Electron Transport Chain. Study each pathway's inputs, outputs, and significance separately first."
  ],
  examPrepFocus: []
};

export default chunking;
