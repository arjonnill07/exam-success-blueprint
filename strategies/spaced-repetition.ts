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
    "<em>Language learning:</em> Review new words after 1 day, 3 days, 1 week, and so on.",
    "<em>History dates:</em> Make a spaced review schedule for key events.",
    "<em>Physics formulas:</em> Review at increasing intervals to lock them in.",
  ],
  examPrepFocus: [
    "Perfect for long-term retention and exam prep.",
    "Great for vocab, formulas, and key facts.",
  ]
};

export default spacedRepetition;
