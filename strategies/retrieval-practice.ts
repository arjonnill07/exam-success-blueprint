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
    `<strong>📝 Exam Power: Past Question Practice</strong><br/>
    ❌ Problem: Read the chapter but blank out in the exam.<br/>
    ✅ Solution: Test yourself with real questions for true confidence!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Pick 3 board questions from last year’s exam.<br/>
    2. Answer them without looking at your book—be brave!<br/>
    3. Check your answers, then focus on what you missed.<br/>
    4. Repeat with new questions—each round builds confidence.<br/><br/>
    🎯 You’ll walk into the exam hall ready for anything!`,

    `<strong>➖ Math Mastery: Write from Memory</strong><br/>
    ❌ Problem: Forget formulas or steps during the test.<br/>
    ✅ Solution: Practice recalling and writing without notes!<br/><br/>
    <em>Action Plan:</em><br/>
    1. After studying, close your book and write down all formulas you remember.<br/>
    2. Quiz yourself or ask a friend to test you.<br/>
    3. Check your answers—mistakes are just steps to success!<br/>
    4. Repeat every few days to keep formulas fresh.<br/><br/>
    ➕ Writing from memory makes math easy!`,

    `<strong>📚 Science: Self-Quiz for Diagrams</strong><br/>
    ❌ Problem: Diagrams look easy in the book but hard to recall in exams.<br/>
    ✅ Solution: Quiz yourself to make diagrams stick!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Study a diagram (e.g., heart, cell, digestive system).<br/>
    2. Cover the diagram and redraw it from memory.<br/>
    3. Label all parts and check your work.<br/>
    4. Repeat with new diagrams each week.<br/><br/>
    🧬 Self-quizzing makes science diagrams unforgettable!`,

    `<strong>✏️ Bangla & English: Practice Writing Answers</strong><br/>
    ❌ Problem: Struggle to write full answers in exams.<br/>
    ✅ Solution: Practice writing from memory, step by step!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Pick a question from your textbook or past paper.<br/>
    2. Write your answer without looking at notes.<br/>
    3. Check your answer and highlight what you missed.<br/>
    4. Try again in a few days—see your writing improve!<br/><br/>
    📝 Practice makes perfect for long answers!`,
  ],
  examPrepFocus: [
    "Perfect for mock tests, board prep, and class tests.",
    "Great for building exam stamina and confidence.",
  ]
};

export default retrievalPractice;
