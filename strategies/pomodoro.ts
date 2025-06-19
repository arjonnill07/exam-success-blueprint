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
  `<strong>📘 SSC/HSC Exam Crunch: Physics Chapter Walkthrough</strong><br/>
  ❌ Studied Motion for 5 hours but can’t explain Newton’s Laws the next day?<br/>
  ✅ Try this: <strong>4 Pomodoros = 2 hours</strong> of real learning.<br/><br/>
  <em>How to study “Motion – Chapter 2 (Physics)”:</em><br/>
  • <strong>Pomodoro 1:</strong> Read & understand Newton’s Laws from the textbook<br/>
  • <strong>Pomodoro 2:</strong> Watch a 10-min concept video, then solve 3 related examples<br/>
  • <strong>Pomodoro 3:</strong> Practice MCQs from past SSC/HSC questions<br/>
  • <strong>Pomodoro 4:</strong> Write key points & formulas from memory ✍️<br/><br/>
  🔁 Total time: 2 hours. You’ll remember more and still feel fresh!`,

  `<strong>📐 Math Made Easy: Trigonometry SSC Walkthrough</strong><br/>
  ❌ Trigonometry makes you feel stuck or confused?<br/>
  ✅ Use 3 Pomodoros to master it — the smart way.<br/><br/>
  <em>Study plan for “Trigonometry – Chapter 9 (Math)”:</em><br/>
  • <strong>Pomodoro 1:</strong> Memorize basic formulas (sin, cos, tan) + draw the table<br/>
  • <strong>Pomodoro 2:</strong> Solve 5 textbook examples (1–5, page 123)<br/>
  • <strong>Pomodoro 3:</strong> Write formulas & solve 3 problems from memory<br/><br/>
  📈 After 3 Pomodoros, the chapter won’t feel scary — it’ll feel doable.`,

  `<strong>📝 Essay Writing Hack: Bangla Essay (2nd Paper)</strong><br/>
  ❌ You waste 90 minutes on one essay — starting, erasing, repeating.<br/>
  ✅ Structure it with Pomodoros.<br/><br/>
  <em>Write “Digital Bangladesh” (Essay topic) in 3 Pomodoros:</em><br/>
  • <strong>Pomodoro 1:</strong> Brainstorm ideas — list 5 key points (e.g., education, ICT, job market)<br/>
  • <strong>Pomodoro 2:</strong> Draft full essay — intro, body, conclusion ✍️<br/>
  • <strong>Pomodoro 3:</strong> Revise grammar, improve words, add Bangla quotes or proverbs<br/><br/>
  🧠 End result: A well-structured essay done in 75 minutes — stress-free.`,

  `<strong>🧠 Memorizing for Science & History: Biology SSC Example</strong><br/>
  ❌ Read the Digestive System 3 times but forget it in class?<br/>
  ✅ Use Pomodoros to memorize and recall effectively.<br/><br/>
  <em>Memorization plan for “Human Digestive System – Biology Ch. 5”:</em><br/>
  • <strong>Pomodoro 1:</strong> Read & draw the full diagram (label organs)<br/>
  • <strong>Break:</strong> 5-minute walk or rest<br/>
  • <strong>Pomodoro 2:</strong> Try redrawing from memory + list each organ’s function<br/><br/>
  🔍 Add MCQs from past board papers to reinforce learning. Repeat next day for mastery.`,

  `<strong>⚖️ Study-Life Balance Blueprint: HSC Exam Week Strategy</strong><br/>
  ❌ Studying till midnight leaves you tired and unfocused.<br/>
  ✅ Top students use 4 Pomodoros before Maghrib to balance focus and rest.<br/><br/>
  <em>Sample daily plan during exam revision week:</em><br/>
  • <strong>8:30–9:30 AM:</strong> Pomodoro 1 – English 1st Paper (Unseen Comprehension)<br/>
  • <strong>10:00–11:00 AM:</strong> Pomodoro 2 – Physics MCQs (Chapter 3 – Heat)<br/>
  • <strong>3:30–4:30 PM:</strong> Pomodoros 3 & 4 – Bangla 2nd Paper Grammar & Model Test<br/>
  • <strong>Breaks:</strong> Use for prayer, snacks, or rest ☕<br/><br/>
  🎯 Result: High focus, no burnout, and time for life after study.`,
],


  examPrepFocus: [],
  // interactiveComponent: <PomodoroTimer />
};

export default pomodoro;
