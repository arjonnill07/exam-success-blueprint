import { Strategy, StrategyCategory } from '../types';
import ZapIcon from '../components/icons/ZapIcon';
import BrainArrowsIcon from '../components/icons/BrainArrowsIcon';

const retrievalPractice: Strategy = {
  id: "retrieval-practice",
  title: "Retrieval Practice (More Testing!)",
  description: "Test yourself often—like a dress rehearsal for the real exam!",
  longDescription: `
    <div class="space-y-3">
      <div><strong>📝 What:</strong> Practice pulling answers from your memory—no peeking! It’s like doing mock tests before the real thing.</div>
      <div><strong>💡 Why it works:</strong> Every time you try to recall info, your brain builds stronger memory paths. It’s proven: testing yourself beats just rereading notes!</div>
      <div><strong>⚡ How to use it:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Use past board questions, class tests, or make your own quiz.</li>
          <li>Answer without looking at your book or notes (closed book!).</li>
          <li>Check your answers, then focus on what you missed.</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>Try it now:</strong> After studying a chapter, close your book and write down everything you remember. Or, ask a friend to quiz you with last year’s board questions!
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>Real-world Eureka:</strong> Think of it like cricket practice: you don’t just watch matches, you play practice games! The more you test yourself, the more confident you’ll be on exam day—no surprises, just results.
      </div>
    </div>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: ZapIcon,
  visualExplainerComponent: BrainArrowsIcon,
  visualExplainerCaption: "Visualizing Retrieval Practice: Actively testing yourself, simulating exam recall.",
  howTo: [
    "Gather past papers, class tests, or make your own quiz questions.",
    "Test yourself without notes (closed book).",
    "Check your answers and focus on mistakes.",
    "Repeat regularly for every subject.",
  ],
  benefits: [
    "Builds real exam confidence—no surprises!",
    "Strengthens memory much more than just rereading.",
    "Shows you exactly what to revise next.",
  ],
  realWorldExamples: [
    "<em>SSC/HSC:</em> Do last year’s board questions under timed conditions.",
    "<em>Math:</em> Solve a full past paper, then mark and review your mistakes.",
    "<em>Any subject:</em> After a study session, write 3 possible exam questions and answer them tomorrow without notes.",
  ],
  examPrepFocus: [
    "Perfect for mock tests, board prep, and class tests.",
    "Great for building exam stamina and confidence.",
  ]
};

export default retrievalPractice;
