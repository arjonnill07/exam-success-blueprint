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
    `<strong>Night Before SSC/HSC:</strong> Can’t sleep? Try 5 minutes of deep breathing or listen to a calming audio. <em>Eureka!</em> You’ll fall asleep faster and wake up fresher for the exam!`,
    `<strong>Exam Hall Nerves:</strong> Heart racing before the first question? Pause, do 3 power breaths, and repeat your positive phrase. <em>Try it now:</em> You’ll feel your mind clear and your confidence rise!`,
    `<strong>During a Tough Question:</strong> Stuck and panicking? Look away from the paper, take a slow breath, and focus on your senses for 10 seconds. <em>Tip:</em> This resets your brain so you can try again calmly.`,
    `<strong>Negative Thoughts While Studying:</strong> Notice a worry like 'I always mess up math'? Write it down, then write a positive counter: 'I’ve improved a lot, and I’ll keep getting better.' <em>Challenge:</em> Try this for your biggest worry today!`,
  ],
  examPrepFocus: []
};

export default stressTaming;
