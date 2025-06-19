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
    ❌ You read the chapter but still feel confused?<br/>
    ✅ Teach it to someone else for true understanding.<br/><br/>
    <em>How to master “Photosynthesis”:</em><br/>
    • <strong>Step 1:</strong> Read the topic and close your book<br/>
    • <strong>Step 2:</strong> Explain it out loud as if teaching a friend or sibling<br/>
    • <strong>Step 3:</strong> Use simple words and draw a diagram<br/>
    • <strong>Step 4:</strong> Notice where you get stuck—review and try again<br/><br/>
    🌟 You’ll remember more and feel confident in class!`,

    `<strong>📚 Literature: Retelling a Story or Poem</strong><br/>
    ❌ Can’t remember all the details for the exam?<br/>
    ✅ Use the Feynman Technique to make it stick.<br/><br/>
    <em>How to study “A Long Poem or Story”:</em><br/>
    • <strong>Step 1:</strong> Read the story or poem<br/>
    • <strong>Step 2:</strong> Retell it in your own words to a family member<br/>
    • <strong>Step 3:</strong> Use a drawing or real-life example if needed<br/>
    • <strong>Step 4:</strong> Each time you explain, you’ll understand it better<br/><br/>
    📖 You’ll be ready for any question in the exam!`,

    `<strong>➗ Math: Explaining a Tricky Formula</strong><br/>
    ❌ Memorized the formula but forget how to use it?<br/>
    ✅ Teach it to someone else for real mastery.<br/><br/>
    <em>How to master “Area of Triangle” or any formula:</em><br/>
    • <strong>Step 1:</strong> Write the formula and what it means<br/>
    • <strong>Step 2:</strong> Teach it to a friend using a simple story or drawing<br/>
    • <strong>Step 3:</strong> If you get stuck, check your book, then explain again<br/>
    • <strong>Step 4:</strong> Teaching is learning—be proud of your progress!<br/><br/>
    🏅 You’ll never forget the formula again!`,

    `<strong>🌏 History/Geography: Explaining Key Events</strong><br/>
    ❌ Struggle to remember all the facts for a big chapter?<br/>
    ✅ Teach the main events to someone else.<br/><br/>
    <em>How to study “Bangladesh Liberation War” or “River Systems”:</em><br/>
    • <strong>Step 1:</strong> List the key events or places<br/>
    • <strong>Step 2:</strong> Explain each one to a friend or family member<br/>
    • <strong>Step 3:</strong> Use a timeline or map to make it visual<br/>
    • <strong>Step 4:</strong> Review and teach again—each round makes you better!<br/><br/>
    🎯 You’ll feel ready for any question on exam day!`,
  ],
  examPrepFocus: [
    "Perfect for tough, confusing topics in any subject.",
    "Great for group study and last-minute revision.",
  ]
};

export default feynmanTechnique;
