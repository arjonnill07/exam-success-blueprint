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
    `<strong>SSC/HSC Exam Crunch:</strong> Students who use Pomodoro say they finish revision faster and feel less tired. 4 Pomodoros = 2 hours of real focus, not 6 hours of distracted study! <br/><em>Eureka!</em> Try it for your next mock test revision—notice how much more you remember, and how fresh you feel at the end!`,
    `<strong>Math Mastery:</strong> Break a big chapter (like Trigonometry) into 25-minute sprints. After each Pomodoro, jot down what you recall—see your memory grow! <br/><em>Try it now:</em> Set a timer, solve 5 problems, then take a break. Repeat. You’ll be amazed at your progress.`,
    `<strong>Bangla & English Essays:</strong> Use Pomodoro to brainstorm, draft, and revise in separate sessions. The break helps you spot mistakes and spark new ideas. <br/><em>Real student tip:</em> “I write better essays when I walk around during breaks—my best ideas come then!”`,
    `<strong>Science & History:</strong> Toppers use Pomodoro to memorize facts, then test themselves in the next session. The break helps their brain lock in the info! <br/><em>Challenge:</em> Memorize 10 facts, take a break, then recall them aloud. See the difference!`,
    `<strong>Real Student Story:</strong> “I used to get headaches after long study days. Now, with Pomodoro, I finish early and still have energy for cricket!” <br/><em>Action:</em> Try Pomodoro for just one evening—notice your energy and mood!”`,
  ],
  examPrepFocus: [],
  // interactiveComponent: <PomodoroTimer />
};

export default pomodoro;
