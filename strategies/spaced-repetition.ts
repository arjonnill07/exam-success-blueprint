import { Strategy, StrategyCategory } from '../types';
import RepeatIcon from '../components/icons/RepeatIcon';
import CalendarSpacedIcon from '../components/icons/CalendarSpacedIcon';

const spacedRepetition: Strategy = {
  id: "spaced-repetition",
  title: "Spaced Repetition (Smart Reviewing)",
  description: "Review material at increasing intervals to beat forgetting and lock in learning.",
  longDescription: `
    <div class="space-y-3">
      <div><strong>⏳ What:</strong> Review what you learn at smart intervals—right before you’re about to forget. Each review strengthens your memory for exams!</div>
      <div><strong>💡 Why it works:</strong> Your brain forgets fast (see the curve below), but every review resets the curve and makes your memory stronger. That’s why toppers don’t cram—they review smartly!</div>
      <div class="flex flex-col items-center my-4">
        <img src="/images/curve 3.png" alt="Ebbinghaus Forgetting Curve" class="w-full max-w-xs md:max-w-md rounded shadow border border-sky-200 mb-2"/>
        <span class="text-blue-700 text-xs">The Forgetting Curve: Each review flattens the drop!</span>
      </div>
      <div><strong>⚡ How to use it:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>First, learn the topic well.</li>
          <li>Review after 1 day, then 3 days, then a week, then 2 weeks, and so on.</li>
          <li>Use flashcards or apps (like Anki) to remind you when to review.</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>Try it now:</strong> After learning a new Math formula or English word, set reminders to review it tomorrow, in 3 days, and next week. Watch how it sticks!
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>Real-world Eureka:</strong> Think of your memory like a leaky bucket. If you pour in water (review) just before it’s empty, you never run dry! That’s how toppers remember so much for board exams and beyond.
      </div>
    </div>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: RepeatIcon,
  visualExplainerComponent: CalendarSpacedIcon,
  visualExplainerCaption: "Visualizing Spaced Repetition: Reviewing material at increasing time intervals.",
  howTo: [
    "Learn the material well the first time.",
    "Review after 1 day, then 3 days, then a week, then 2 weeks, etc.",
    "Use flashcards or spaced repetition apps to help you remember when to review.",
    "Each review makes your memory stronger and longer-lasting.",
  ],
  benefits: [
    "Beats forgetting and helps you remember for exams and life!",
    "Saves time—no more last-minute cramming.",
    "Makes revision less stressful and more effective.",
  ],
  realWorldExamples: [
    `<strong>📖 English Vocab: Remember Words for Life</strong><br/>
    ❌ Problem: Forget new words after a few days.<br/>
    ✅ Solution: Use spaced repetition to make them stick!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Learn 5 new words today.<br/>
    2. Review them tomorrow, then again after 3 days, then a week.<br/>
    3. Use flashcards or a notebook to track your reviews.<br/>
    4. Each review makes the words stick—watch your vocab grow!<br/><br/>
    🌟 You’ll remember words for exams and beyond!`,

    `<strong>📅 History: Dates & Events That Stick</strong><br/>
    ❌ Problem: Forget important dates right before the exam.<br/>
    ✅ Solution: Review at smart intervals to lock them in!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Write down 5 key dates/events from your chapter.<br/>
    2. Review them after 1 day, then 3 days, then a week.<br/>
    3. Use a calendar or app to set reminders.<br/>
    4. Quiz yourself each time—see your memory improve!<br/><br/>
    🗓️ Spaced reviews make history easy!`,

    `<strong>🧬 Science: Mastering Diagrams</strong><br/>
    ❌ Problem: Diagrams fade from memory after a week.<br/>
    ✅ Solution: Use spaced repetition to keep them fresh!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Draw the diagram and label all parts.<br/>
    2. Review and redraw after 1 day, then 3 days, then a week.<br/>
    3. Cover the labels and test yourself each time.<br/>
    4. Add a new detail or color with each review.<br/><br/>
    🎨 Repetition makes diagrams stick for exams!`,

    `<strong>📝 Bangla: Remembering Grammar Rules</strong><br/>
    ❌ Problem: Grammar rules slip away before the test.<br/>
    ✅ Solution: Review rules at spaced intervals!<br/><br/>
    <em>Action Plan:</em><br/>
    1. List 3–5 grammar rules you want to master.<br/>
    2. Review them after 1 day, then 3 days, then a week.<br/>
    3. Write a sentence using each rule during every review.<br/>
    4. Quiz yourself or ask a friend to check your sentences.<br/><br/>
    ✍️ Spaced repetition makes grammar easy!`,
  ],
  examPrepFocus: [
    "Perfect for long-term retention and exam prep.",
    "Great for vocab, formulas, and key facts.",
  ]
};

export default spacedRepetition;
