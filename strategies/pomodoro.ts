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
  `<strong>🕒 Physics: Master a Chapter in Less Time</strong><br/>
  ❌ Problem: You study “Motion” for hours but can’t recall Newton’s Laws the next day.<br/>
  ✅ Solution: Use 4 Pomodoros (2 hours) for focused, effective learning!<br/><br/>
  <em>Action Plan:</em><br/>
  1. Pomodoro 1: Read and understand Newton’s Laws.<br/>
  2. Pomodoro 2: Watch a short concept video, then solve 3 examples.<br/>
  3. Pomodoro 3: Practice MCQs from past questions.<br/>
  4. Pomodoro 4: Write key points and formulas from memory.<br/>
  5. Take short breaks between each Pomodoro.<br/><br/>
  🔁 You’ll remember more and feel less tired!`,

  `<strong>📐 Math: Trigonometry Made Simple</strong><br/>
  ❌ Problem: Trigonometry feels confusing and overwhelming.<br/>
  ✅ Solution: Break it into 3 Pomodoros for clarity and confidence!<br/><br/>
  <em>Action Plan:</em><br/>
  1. Pomodoro 1: Memorize basic formulas and draw the table.<br/>
  2. Pomodoro 2: Solve 5 textbook examples.<br/>
  3. Pomodoro 3: Write formulas and solve 3 problems from memory.<br/>
  4. Review and relax after each session.<br/><br/>
  📈 After 3 Pomodoros, the chapter will feel much easier!`,

  `<strong>📝 Bangla: Write an Essay Without Stress</strong><br/>
  ❌ Problem: You spend too long on essays and feel stuck.<br/>
  ✅ Solution: Structure your writing with Pomodoros!<br/><br/>
  <em>Action Plan:</em><br/>
  1. Pomodoro 1: Brainstorm and list 5 key points.<br/>
  2. Pomodoro 2: Draft the essay (intro, body, conclusion).<br/>
  3. Pomodoro 3: Revise grammar, improve words, and add quotes.<br/>
  4. Take a break and review your work.<br/><br/>
  🧠 You’ll finish faster and with less stress!`,

  `<strong>🧬 Biology: Memorize Diagrams Effectively</strong><br/>
  ❌ Problem: You read about the digestive system but forget the diagram in class.<br/>
  ✅ Solution: Use Pomodoros to memorize and recall!<br/><br/>
  <em>Action Plan:</em><br/>
  1. Pomodoro 1: Read and draw the full diagram, labeling each part.<br/>
  2. Take a 5-minute break (walk, stretch, or relax).<br/>
  3. Pomodoro 2: Redraw from memory and list each organ’s function.<br/>
  4. Add MCQs from past papers for extra practice.<br/><br/>
  🔍 Repeat the next day for mastery!`,

  `<strong>⚖️ Balanced Study-Life Routine</strong><br/>
  ❌ Problem: Studying late leaves you tired and unfocused.<br/>
  ✅ Solution: Use Pomodoros to balance study and rest!<br/><br/>
  <em>Action Plan:</em><br/>
  1. Pomodoro 1: Focus on English comprehension.<br/>
  2. Pomodoro 2: Practice Physics MCQs.<br/>
  3. Pomodoros 3 & 4: Work on Bangla grammar and a model test.<br/>
  4. Use breaks for snacks, prayer, or rest.<br/><br/>
  🎯 Result: High focus, no burnout, and time for yourself after study!`,
],


  examPrepFocus: [],
  // interactiveComponent: <PomodoroTimer />
};

export default pomodoro;
