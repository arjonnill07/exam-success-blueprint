import { Strategy, StrategyCategory } from '../types';
import SparklesIcon from '../components/icons/SparklesIcon';
import CalmIcon from '../components/icons/CalmIcon';

const stressTaming: Strategy = {
  id: "stress-taming",
  title: "Stress Taming & Test Anxiety",
  description: "Manage exam stress and anxiety for optimal performance.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> Feeling exam jitters? It's normal! These techniques help calm your mind and body, so you can perform at your best when it counts.</p>
    <p><strong>🧘‍♀️ What Is It?</strong></p>
    <ul>
      <li>Strategies to reduce physiological and psychological stress responses.</li>
      <li>Includes techniques like deep breathing, mindfulness, and positive self-talk.</li>
      <li>The goal is to approach exams with a calm, focused, and confident mindset.</li>
    </ul>
  `,
  category: StrategyCategory.STRESS_MANAGEMENT,
  icon: SparklesIcon,
  visualExplainerComponent: CalmIcon,
  visualExplainerCaption: "Visualizing Stress Taming: Finding a calm center amidst exam pressures.",
  howTo: [
    "**1. Deep Breathing:** Inhale slowly for 4 counts, hold for 4, exhale slowly for 6-8. Repeat 3-5 times before an exam or during a stressful study session.",
    "**2. Positive Self-Talk:** Replace thoughts like 'I'm going to fail' with 'I've prepared for this, and I can do my best.'",
    "**3. Mindfulness Moment:** Briefly focus on your senses – what you see, hear, feel – to ground yourself in the present, especially before an exam.",
    "**4. Preparation is Key:** Knowing you've studied well is a great stress reducer. Use the other strategies here!"
  ],
  benefits: [],
  realWorldExamples: [
    "<em>Feeling overwhelmed the night before a big exam?</em> Practice a 5-minute guided meditation or deep breathing exercise.",
    "<em>If you start panicking during an exam:</em> Pause, take 3 deep breaths, remind yourself of your preparation, and then re-focus on one question at a time.",
    "<em>When negative thoughts creep in during study:</em> Acknowledge them, then actively counter them with a positive statement about your effort or a past success."
  ],
  examPrepFocus: []
};

export default stressTaming;
