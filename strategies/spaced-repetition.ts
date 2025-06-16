import { Strategy, StrategyCategory } from '../types';
import RepeatIcon from '../components/icons/RepeatIcon';
import CalendarSpacedIcon from '../components/icons/CalendarSpacedIcon';

const spacedRepetition: Strategy = {
  id: "spaced-repetition",
  title: "Spaced Repetition (Smart Reviewing)",
  description: "Review material at increasing intervals to combat forgetting.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> Stop cramming! This smart technique helps you remember information for the long haul (and for your exams) by reviewing it just as you're about to forget it.</p>
    <p><strong>🗓️ What Is It?</strong></p>
    <ul>
      <li>A learning technique that involves reviewing information at gradually increasing intervals.</li>
      <li>Based on the 'forgetting curve' – we forget things over time if not reviewed.</li>
      <li>By timing reviews strategically, you strengthen memory traces efficiently for exams.</li>
    </ul>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: RepeatIcon,
  visualExplainerComponent: CalendarSpacedIcon,
  visualExplainerCaption: "Visualizing Spaced Repetition: Reviewing material at increasing time intervals.",
  howTo: [
    "**1. Learn It First:** Understand the material initially.",
    "**2. First Review (Soon):** Review it shortly after (e.g., end of the day or next day).",
    "**3. Space It Out:** Subsequent reviews are spaced further apart (e.g., after 3 days, then a week, then 2 weeks, etc.).",
    "**4. Use Tools (Optional):** Flashcard apps like Anki often have built-in spaced repetition algorithms, great for exam vocab or facts."
  ],
  benefits: [],
  realWorldExamples: [
    "<em>Learning new vocabulary for a language exam:</em> Review new words the next day, then a few days later, then a week later, and so on.",
    "<em>Memorizing key historical dates for an exam:</em> Create a review schedule that spaces out your recall attempts for these dates.",
    "<em>Studying important formulas for a Physics exam:</em> Instead of looking at them daily, review them at increasing intervals to strengthen long-term memory."
  ],
  examPrepFocus: []
};

export default spacedRepetition;
