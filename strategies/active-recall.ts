import { Strategy, StrategyCategory } from '../types';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import BrainArrowsIcon from '../components/icons/BrainArrowsIcon';

const activeRecall: Strategy = {
  id: "active-recall",
  title: "Active Recall (Test Yourself!)",
  description: "Unlock your brain’s full power—actively pull out knowledge and make it unforgettable for exams!",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> Want to remember more in less time? Active Recall is the secret weapon of toppers! Instead of just reading, challenge your brain to retrieve answers—this is how you make facts stick for the real exam.</p>
    <p><strong>🧠🔍 What Is It?</strong></p>
    <ul>
      <li>Deliberately try to remember information without looking at your notes—like a quiz, but you’re the quizmaster!</li>
      <li>Every time you pull out an answer, your memory gets stronger. It’s like doing push-ups for your brain.</li>
      <li>Way more effective than re-reading or highlighting—this is how you train for exam day!</li>
    </ul>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: LightbulbIcon,
  visualExplainerComponent: BrainArrowsIcon,
  visualExplainerCaption: "Visualizing Active Recall: Actively pulling information out of your brain, like retrieving a file.",
  howTo: [
    "**1. Study Smart:** Learn a topic as usual, but don’t stop there!",
    "**2. Hide Your Notes:** Close your book or cover your page.",
    "**3. Test Yourself:** Write, say, or draw everything you remember—no peeking!",
    "**4. Check & Target Gaps:** Compare with your notes. Missed something? That’s your next focus!",
    "**💡 Try it now:** After reading this, close your eyes and recall the 4 steps. Can you do it? That’s Active Recall in action!"
  ],
  benefits: [
    "Dramatically boosts memory retention for exams.",
    "Builds true understanding, not just memorization.",
    "Saves time—less re-reading, more learning!",
    "Makes exam revision feel like a game or challenge."
  ],
realWorldExamples: [
  `<strong>🧠 History: Remembering Key Events</strong><br/>
  ❌ Problem: You read about the Liberation War, but forget the dates and events during revision.<br/>
  ✅ Solution: Use Active Recall to make facts stick!<br/><br/>
  <em>Action Plan:</em><br/>
  1. Read the key facts from your textbook.<br/>
  2. Close your book and write down all the important dates and events from memory.<br/>
  3. Check your notes—what did you miss? Mark those for tomorrow’s recall session.<br/>
  4. Repeat this process every day for 1 week.<br/><br/>
  ⭐ Step by step, you’ll remember more and feel exam-ready!`,

  `<strong>📘 Science: Mastering Physics Laws</strong><br/>
  ❌ Problem: You read “Laws of Motion” but can’t explain them in your own words.<br/>
  ✅ Solution: Give your brain a workout with Active Recall!<br/><br/>
  <em>Action Plan:</em><br/>
  1. Read the chapter once with focus.<br/>
  2. Close your book and write down Newton’s 3 Laws from memory.<br/>
  3. Next day, try explaining the laws out loud as if teaching a friend.<br/>
  4. Check your notes and fill in any gaps.<br/><br/>
  💡 Each time you recall, your memory gets stronger!`,

  `<strong>📐 Math: Conquering Formulas</strong><br/>
  ❌ Problem: You keep forgetting the quadratic formula during practice.<br/>
  ✅ Solution: Recall before you peek!<br/><br/>
  <em>Action Plan:</em><br/>
  1. Write down the quadratic formula from memory.<br/>
  2. Solve 2–3 problems without looking at your notes.<br/>
  3. Check your answers and note any mistakes.<br/>
  4. Explain the steps aloud to yourself or a study buddy.<br/><br/>
  🚀 With calm, steady practice, formulas will become second nature!`,

  `<strong>📝 Bangla: Essay Writing Confidence</strong><br/>
  ❌ Problem: You read model essays but struggle to remember key points when writing your own.<br/>
  ✅ Solution: Recall and organize ideas step by step!<br/><br/>
  <em>Action Plan:</em><br/>
  1. Read a model essay once.<br/>
  2. Close the book and list the main points from memory.<br/>
  3. Write a short paragraph about each point.<br/>
  4. Check your work and gently improve any weak areas.<br/><br/>
  ✍️ Each session builds your confidence to write essays on your own!`,

  `<strong>🧬 Biology: Drawing Diagrams from Memory</strong><br/>
  ❌ Problem: You memorize the heart diagram but forget the labels during exams.<br/>
  ✅ Solution: Recall and draw for lasting memory!<br/><br/>
  <em>Action Plan:</em><br/>
  1. Study the heart diagram and its parts.<br/>
  2. Close your book and draw the diagram on a blank page.<br/>
  3. Label each part and write its function.<br/>
  4. Review and repeat the next day.<br/><br/>
  🎨 Drawing and recalling helps you remember with clarity!`,
],

  examPrepFocus: []
};

export default activeRecall;
