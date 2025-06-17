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
    `<strong>Physics Problem Breakthrough:</strong> Stuck on a tough SSC Physics calculation? Focus hard for 25 minutes, then take a walk or chat with a friend. <em>Eureka!</em> Many students find the answer pops into their head during the break! <br/><em>Try it now:</em> Next time you’re stuck, step away for 10 minutes—see what happens when you return.`,
    `<strong>Essay Brainstorming:</strong> For Bangla or English essays, focus on the topic and jot down ideas for 20 minutes. Then, do a quick chore (like making tea or watering plants). <em>Surprise:</em> New arguments and examples will often come to you!`,
    `<strong>Math & Science Revision:</strong> Study a dense chapter (like Chemistry reactions) in focused mode, then listen to music or doodle for a few minutes. <em>Result:</em> You’ll connect concepts and remember more for the exam.`,
    `<strong>Real Student Story:</strong> “I was stuck on a math proof for hours. After a break to play carrom, the solution just clicked!” <br/><em>Challenge:</em> Try alternating focus and break sessions for your hardest subject today.”`,
  ],
  examPrepFocus: []
};

export default focusDiffuse;
