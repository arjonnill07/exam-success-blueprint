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
    ❌ Read the chapter but blank out in the exam?<br/>
    ✅ Test yourself with real questions for true confidence.<br/><br/>
    <em>How to use retrieval practice for “Board Questions”:</em><br/>
    • <strong>Step 1:</strong> Pick 3 board questions from last year’s exam<br/>
    • <strong>Step 2:</strong> Answer them without looking at your book—be brave!<br/>
    • <strong>Step 3:</strong> Check your answers, then focus on what you missed<br/>
    • <strong>Step 4:</strong> Repeat with new questions—each round builds confidence<br/><br/>
    🎯 You’ll walk into the exam hall ready for anything!`,

    `<strong>➗ Math Mastery: Write from Memory</strong><br/>
    ❌ Forget formulas or steps during the test?<br/>
    ✅ Practice recalling and writing without notes.<br/><br/>
    <em>How to use retrieval practice for “Math Formulas”:</em><br/>
    • <strong>Step 1:</strong> After studying, close your book and write down all formulas you remember<br/>
    • <strong>Step 2:</strong> Quiz yourself or ask a friend to test you<br/>
    • <strong>Step 3:</strong> Check your answers—mistakes are just steps to success!<br/>
    • <strong>Step 4:</strong> Try again tomorrow—each round makes you stronger<br/><br/>
    🏆 You’ll remember more and feel less exam stress!`,

    `<strong>📚 Literature: Question Your Reading</strong><br/>
    ❌ Read a story or poem but can’t answer questions about it?<br/>
    ✅ Make your own questions and answer from memory.<br/><br/>
    <em>How to use retrieval practice for “Bangla/English Stories”:</em><br/>
    • <strong>Step 1:</strong> Write 3 possible exam questions after reading<br/>
    • <strong>Step 2:</strong> Answer them from memory, then check your book<br/>
    • <strong>Step 3:</strong> Notice what you missed—review and try again<br/>
    • <strong>Step 4:</strong> Every try builds your confidence—keep going!<br/><br/>
    🌟 You’ll be ready for any question in the exam!`,

    `<strong>🔬 Science: Self-Testing for Success</strong><br/>
    ❌ Study hard but forget facts in the exam hall?<br/>
    ✅ Test yourself regularly to lock in knowledge.<br/><br/>
    <em>How to use retrieval practice for “Science Chapters”:</em><br/>
    • <strong>Step 1:</strong> After reading, write down everything you remember about the topic<br/>
    • <strong>Step 2:</strong> Quiz yourself with MCQs or short questions<br/>
    • <strong>Step 3:</strong> Check your answers and review mistakes<br/>
    • <strong>Step 4:</strong> Repeat next day—each round makes you exam-ready<br/><br/>
    🚀 You’ll build real memory power for science!`,
  ],
  examPrepFocus: [
    "Perfect for mock tests, board prep, and class tests.",
    "Great for building exam stamina and confidence.",
  ]
};

export default retrievalPractice;
