import { Strategy, StrategyCategory } from '../types';
import SparklesIcon from '../components/icons/SparklesIcon';
import CalmIcon from '../components/icons/CalmIcon';

const stressTaming: Strategy = {
  id: "stress-taming",
  title: "Stress Taming & Test Anxiety",
  description: "Master your nerves—turn exam stress into calm, focused energy for top performance!",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> Exam jitters? You’re not alone—even toppers feel them! These simple, science-backed techniques help you stay cool and confident, so you can show what you really know when it matters most.</p>
    <p><strong>🧘‍♀️ What Is It?</strong></p>
    <ul>
      <li>Easy ways to calm your body and mind before and during exams.</li>
      <li>Includes deep breathing, positive self-talk, and quick mindfulness tricks you can use anywhere—even in the exam hall!</li>
      <li>Helps you turn stress into focus and confidence, not panic.</li>
    </ul>
  `,
  category: StrategyCategory.STRESS_MANAGEMENT,
  icon: SparklesIcon,
  visualExplainerComponent: CalmIcon,
  visualExplainerCaption: "Visualizing Stress Taming: Finding a calm center amidst exam pressures.",
  howTo: [
    "**1. Power Breathing:** Inhale slowly for 4 counts, hold for 4, exhale for 6-8. Do this 3-5 times before entering the exam hall or when you feel anxious.",
    "**2. Positive Self-Talk:** Swap 'I’ll fail!' for 'I’ve prepared, I can do this!' Write your favorite phrase on a sticky note or in your notebook.",
    "**3. Mindfulness Mini-Break:** Focus on your senses—what do you see, hear, feel? This grounds you in the present and calms racing thoughts.",
    "**4. Preparation Ritual:** The night before, pack your bag, lay out your uniform, and review your notes calmly. This routine signals your brain: 'I’m ready.'",
    "**💡 Try it now:** Before your next study session, do 3 deep breaths and say one positive thing to yourself. Notice the difference!"
  ],
  benefits: [
    "Reduces exam-day panic and blanking out.",
    "Boosts focus and memory recall under pressure.",
    "Makes you feel in control, even in tough situations.",
    "Turns stress into a source of energy and motivation."
  ],
  realWorldExamples: [
    `<strong>😴 Night Before Exam: Calm & Ready</strong><br/>
    ❌ Problem: Can’t sleep, mind racing with worries.<br/>
    ✅ Solution: Use these steps to relax and prepare!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Try 5 deep breaths or listen to calming music.<br/>
    2. Pack your bag and lay out your uniform—feel prepared!<br/>
    3. Remind yourself: “I’ve done my best. Tomorrow is a new chance.”<br/>
    4. Sleep comes easier when you’re calm and ready.<br/><br/>
    🌙 You’ll wake up fresh and confident!`,

    `<strong>📝 Exam Hall Nerves: Stay Cool</strong><br/>
    ❌ Problem: Heart racing before the first question.<br/>
    ✅ Solution: Calm your mind and boost your focus!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Pause and do 3 slow breaths.<br/>
    2. Repeat a positive phrase: “I can do this!”<br/>
    3. Look around and notice 3 things you see or hear.<br/>
    4. Start your exam with a clear head—you’ve got this!<br/><br/>
    🏅 You’ll feel in control and ready to succeed!`,

    `<strong>💬 Study Worries: Turn Stress Into Strength</strong><br/>
    ❌ Problem: Worrying about tough subjects or low marks.<br/>
    ✅ Solution: Use positive self-talk to build confidence!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Write your worry on a sticky note.<br/>
    2. Write a positive response next to it (e.g., “I can improve with practice!”).<br/>
    3. Read your positive note before each study session.<br/>
    4. Notice your confidence grow with each round!<br/><br/>
    🌟 Turn worries into motivation!`,

    `<strong>🧘‍♂️ Quick Calm: Mindfulness Mini-Break</strong><br/>
    ❌ Problem: Feeling overwhelmed during long study sessions.<br/>
    ✅ Solution: Take a mindful break to reset your mind!<br/><br/>
    <em>Action Plan:</em><br/>
    1. Pause and focus on your breathing for 1 minute.<br/>
    2. Notice what you see, hear, and feel around you.<br/>
    3. Stretch or walk for 2–3 minutes.<br/>
    4. Return to your study with a fresh, calm mind.<br/><br/>
    🧘 Mindful breaks boost focus and reduce stress!`,
  ],
  examPrepFocus: []
};

export default stressTaming;
