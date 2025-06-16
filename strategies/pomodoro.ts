import { Strategy, StrategyCategory } from '../types';
import ClockIcon from '../components/icons/ClockIcon';

const pomodoro: Strategy = {
  id: "pomodoro",
  title: "Pomodoro Technique",
  description: "Work in focused 25-minute intervals with short breaks.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong><br/>
    Struggling to focus?<br/>
    Long study hours but little progress? Pomodoro breaks your study into focused bursts to keep you sharp and energized.</p>
    <p><strong>🕒 What Is It?</strong></p>
    <ul>
      <li>Study for 25 minutes with zero distractions.</li>
      <li>Take a 3–5 minute break to recharge.</li>
      <li>After 4 sessions, take a longer break (15–30 mins).</li>
    </ul>
  `,
  category: StrategyCategory.TIME_MANAGEMENT,
  icon: ClockIcon,
  visualExplainerComponent: ClockIcon,
  visualExplainerCaption: "Visualizing Pomodoro: Focused work sprints followed by short, refreshing breaks.",
  howTo: [
    "**🎯 Pick One Clear Goal**<br/>Example: “Solve 10 physics MCQs” or “Revise math formulas from Chapter 7”",
    "**⏱️ Set a 25-Minute Timer**<br/>This is your full-focus zone. No phone, no tabs, just the task.",
    "**🔥 Study with Intensity**<br/>If your mind wanders, gently bring it back. Keep a scratch pad to note distractions.",
    "**🧘 Take a 5-Minute Break**<br/>Get up. Stretch. Drink water. Don’t scroll!",
    "**🔁 Repeat**<br/>After 4 Pomodoros, take a longer break. Let your brain fully recharge."
  ],
  benefits: [],
  realWorldExamples: [
    "<strong>📐 Math:</strong><br/>Pomodoro 1: Solve 7 tricky problems from Algebra<br/>Pomodoro 2: Revise formula list or error notebook",
    "<strong>🧪 Science (Physics, Chemistry, Biology):</strong><br/>Pomodoro 1: Review key definitions and laws<br/>Pomodoro 2: Solve board-style short questions",
    "<strong>📚 History & Civics:</strong><br/>Pomodoro 1: Memorize key events from a chapter<br/>Pomodoro 2: Write a practice answer to a long question",
    "<strong>🗣️ Language/Grammar:</strong><br/>Pomodoro 1: Flashcards for 20 vocab words (Active Recall style!)<br/>Pomodoro 2: Practice paragraph or dialogue writing"
  ],
  examPrepFocus: [],
  // interactiveComponent: <PomodoroTimer />
};

export default pomodoro;
