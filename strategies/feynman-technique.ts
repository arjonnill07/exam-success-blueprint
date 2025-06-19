import { Strategy, StrategyCategory } from '../types';
import UsersIcon from '../components/icons/UsersIcon';
import TeacherIcon from '../components/icons/TeacherIcon';

const feynmanTechnique: Strategy = {
  id: "feynman-technique",
  title: "Feynman Technique (Teach Me!)",
  description: "Unlock your superpower: teach any topic simply, and you’ll master it for life!",
  longDescription: `
    <div class="space-y-3">
      <div><strong>🦸‍♂️ What:</strong> Become a teacher, detective, and storyteller! Explain any topic as if you’re teaching a 10-year-old, a friend, or even your parents. If you can do that, you truly understand it.</div>
      <div><strong>💡 Why it works:</strong> Teaching forces your brain to organize, simplify, and connect ideas. If you get stuck, you’ve found your weak spot—now you know exactly what to fix before the exam!</div>
      <div><strong>⚡ How to use your superpower:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Pick a topic you want to master (e.g., Math theorem, Biology process, English poem).</li>
          <li>Explain it out loud or write it down as if your listener is much younger or new to the subject.</li>
          <li>Use simple words, stories, or even doodles—no jargon allowed!</li>
          <li>Notice where you hesitate or get confused. That’s your clue to review and try again.</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>Try it now:</strong> After studying a tough chapter, call a friend or sibling and explain it in your own words. Or, teach your pillow! If you can make them (or yourself) say “Oh, now I get it!”—you’re exam-ready.
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>Real-world Eureka:</strong> Ever noticed how the best students are always helping others? That’s their secret! When you teach, you learn twice. You’ll spot gaps, build confidence, and maybe even become the go-to genius in your group.
      </div>
    </div>
  `,
  category: StrategyCategory.CONCEPT_MASTERY,
  icon: UsersIcon,
  visualExplainerComponent: TeacherIcon,
  visualExplainerCaption: "Visualizing Feynman Technique: Explaining a concept simply, as if to a student.",
  howTo: [
    "Pick a topic you want to master (e.g., Math, Science, English).",
    "Explain it out loud or write it down as if teaching a 10-year-old.",
    "Use simple words, stories, or doodles—no jargon!",
    "Where you get stuck, review and try again until it’s crystal clear.",
  ],
  benefits: [
    "Makes you a true master, not just a memorizer!",
    "Builds confidence and helps friends too.",
    "Turns boring study into a fun challenge.",
  ],
  realWorldExamples: [
    `<strong>🧑‍🏫 Science Mastery: Teaching Photosynthesis</strong><br/>
    ❌ Problem: You read the chapter but still feel confused.<br/>
    ✅ Solution: Teach it to someone else for true understanding!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Read the topic and close your book.<br/>
    2. Explain it out loud as if teaching a friend or sibling.<br/>
    3. Use simple words and draw a diagram.<br/>
    4. Notice where you get stuck—review and try again.<br/><br/>
    🌟 You’ll remember more and feel confident in class!`,

    `<strong>📚 Literature: Retelling a Story or Poem</strong><br/>
    ❌ Problem: Can’t remember all the details for the exam.<br/>
    ✅ Solution: Use the Feynman Technique to make it stick!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Read the story or poem.<br/>
    2. Retell it in your own words to a family member.<br/>
    3. Use simple language and add a drawing or summary.<br/>
    4. Notice which parts are hard to explain—review and try again.<br/><br/>
    ✏️ Retelling makes stories and poems easy!`,

    `<strong>➗ Math: Explain a Theorem Simply</strong><br/>
    ❌ Problem: Theorems feel confusing and hard to remember.<br/>
    ✅ Solution: Teach the steps to someone else!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Read the theorem and close your book.<br/>
    2. Explain each step out loud, using simple words.<br/>
    3. Draw a diagram or use real-life examples.<br/>
    4. Review any step you can’t explain—try again until it’s clear.<br/><br/>
    ➕ Teaching makes math easy to remember!`,

    `<strong>🌏 Geography: Teach a Map or Process</strong><br/>
    ❌ Problem: Maps and processes are hard to recall in exams.<br/>
    ✅ Solution: Teach the process to a friend or even your pillow!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Study the map or process and close your book.<br/>
    2. Explain it step by step, using simple words.<br/>
    3. Draw the map or process from memory.<br/>
    4. Review and repeat until you can teach it easily.<br/><br/>
    🗺️ Teaching makes geography simple!`,
  ],
  examPrepFocus: [
    "Perfect for tough, confusing topics in any subject.",
    "Great for group study and last-minute revision.",
  ]
};

export default feynmanTechnique;
