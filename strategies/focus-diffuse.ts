import { Strategy, StrategyCategory } from '../types';
import BrainIcon from '../components/icons/BrainIcon';

const focusDiffuse: Strategy = {
  id: "focus-diffuse",
  title: "Focus & Diffuse Modes",
  description: "Alternate between intense concentration and relaxed thinking.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> This is how 'aha!' moments for those tricky exam problems are unlocked! It’s about knowing when to concentrate deeply (focused mode) and when to step back and let the brain connect ideas more broadly (diffuse mode).</p>
    <p><strong>🧠 What Is It?</strong></p>
    <ul>
      <li><strong>Focused Mode:</strong> Intense concentration for direct problem-solving or learning details.</li>
      <li><strong>Diffuse Mode:</strong> Relaxed thinking where your brain makes background connections. Activated by stepping away (e.g., walk, light chore).</li>
      <li><strong>The Switch:</strong> Strategically alternate between modes for breakthroughs on tough exam concepts. Master this mental switch!</li>
    </ul>
  `,
  category: StrategyCategory.LEARNING_TECHNIQUES,
  icon: BrainIcon,
  visualExplainerComponent: BrainIcon,
  visualExplainerCaption: "Visualizing Focus/Diffuse: Switching between deep concentration (focus) and relaxed, broad thinking (diffuse).",
  howTo: [
    "🤯 **1. Tackle the Tough Stuff:** Pick a challenging exam concept or problem.",
    "🧐 **2. Deep Focus Session:** Work intently for a set time (e.g., one Pomodoro). Full concentration!",
    "🚶 **3. Step Away (Diffuse Time!):** Take a real break. Walk, doodle, listen to music (instrumental is good!). Don't actively think about the problem.",
    "💡 **4. Return & Re-engage:** Come back to the task with fresh eyes. Often, new insights will appear."
  ],
  benefits: [],
  realWorldExamples: [
    "<em>Stuck on a complex Physics problem for an exam?</em> Work on it intently (focused mode), then take a 10-minute walk or listen to a song (diffuse mode) before returning. You'll often see it differently!",
    "<em>Brainstorming arguments for an exam essay:</em> Focus on the prompt and jot down initial ideas, then perhaps do a quick, unrelated chore (like making tea) to let ideas percolate and connect.",
    "<em>Trying to understand a dense chapter for an upcoming test:</em> Study the details section by section, then take a break and think about something else entirely before doing a quick review. This helps solidify the big picture."
  ],
  examPrepFocus: []
};

export default focusDiffuse;
