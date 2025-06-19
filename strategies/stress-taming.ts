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
    ❌ Can’t sleep, mind racing with worries?<br/>
    ✅ Use these steps to relax and prepare.<br/><br/>
    <em>How to get a good night’s sleep before exams:</em><br/>
    • <strong>Step 1:</strong> Try 5 deep breaths or listen to calming music<br/>
    • <strong>Step 2:</strong> Pack your bag and lay out your uniform—feel prepared!<br/>
    • <strong>Step 3:</strong> Remind yourself: “I’ve done my best. Tomorrow is a new chance.”<br/>
    • <strong>Step 4:</strong> Sleep comes easier when you’re calm and ready<br/><br/>
    🌙 You’ll wake up fresh and confident!`,

    `<strong>📝 Exam Hall Nerves: Stay Cool</strong><br/>
    ❌ Heart racing before the first question?<br/>
    ✅ Calm your mind and boost your focus.<br/><br/>
    <em>How to stay calm in the exam hall:</em><br/>
    • <strong>Step 1:</strong> Pause and do 3 slow breaths<br/>
    • <strong>Step 2:</strong> Repeat a positive phrase: “I can do this!”<br/>
    • <strong>Step 3:</strong> Look around and notice 3 things you see or hear<br/>
    • <strong>Step 4:</strong> Start your exam with a clear head—you’ve got this!<br/><br/>
    🏅 You’ll feel in control and ready to succeed!`,

    `<strong>💭 Study Worries: Turn Stress Into Strength</strong><br/>
    ❌ Worrying about tough subjects or low marks?<br/>
    ✅ Use positive self-talk to build confidence.<br/><br/>
    <em>How to turn worries into motivation:</em><br/>
    • <strong>Step 1:</strong> Write your worry on a sticky note<br/>
    • <strong>Step 2:</strong> Write a positive answer next to it: “I’m improving every day.”<br/>
    • <strong>Step 3:</strong> Read your positive note before each study session<br/>
    • <strong>Step 4:</strong> Small steps, big progress—be kind to yourself!<br/><br/>
    🌟 You’ll feel lighter and more motivated!`,

    `<strong>🧘‍♂️ Quick Calm: Mindfulness Mini-Break</strong><br/>
    ❌ Feeling overwhelmed during study or revision?<br/>
    ✅ Take a short break to reset your mind.<br/><br/>
    <em>How to use a mindfulness mini-break:</em><br/>
    • <strong>Step 1:</strong> Close your eyes and take 3 deep breaths<br/>
    • <strong>Step 2:</strong> Focus on what you hear, feel, and smell for 1 minute<br/>
    • <strong>Step 3:</strong> Open your eyes and stretch<br/>
    • <strong>Step 4:</strong> Return to study feeling refreshed and focused<br/><br/>
    🌈 You’ll study better and feel less stressed!`,
  ],
  examPrepFocus: []
};

export default stressTaming;
