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
    `<strong>🧠 Math Breakthrough: Solving Tough Problems</strong><br/>
    ❌ Problem: Stuck on a geometry or algebra problem for ages.<br/>
    ✅ Solution: Use focus and diffuse modes to unlock new ideas!<br/><br/>
    <em>Action Plan:</em><br/>
    1. (Focus) Work on the problem for 20 minutes, no distractions.<br/>
    2. (Diffuse) Take a real break—walk, stretch, or listen to music.<br/>
    3. (Focus) Come back and try again—notice new ideas popping up!<br/>
    4. Celebrate every small win—progress is progress!<br/><br/>
    🚀 This is how toppers get “aha!” moments!`,

    `<strong>✍️ English Essay Brainstorm: Get Creative</strong><br/>
    ❌ Problem: Can’t think of ideas for your essay or story.<br/>
    ✅ Solution: Switch between focus and relax to spark creativity!<br/><br/>
    <em>Action Plan:</em><br/>
    1. (Focus) Write down ideas for 15 minutes—no stopping.<br/>
    2. (Diffuse) Take a break: doodle, make tea, or chat with family.<br/>
    3. (Focus) Return and organize your ideas—see what new thoughts appear!<br/>
    4. Every break is a brain boost. You’re getting creative!<br/><br/>
    💡 You’ll write faster and with more confidence!`,

    `<strong>🧪 Science Revision: Chemistry Made Easy</strong><br/>
    ❌ Problem: Forgetting reactions or facts after hours of study.<br/>
    ✅ Solution: Alternate focus and break sessions for better memory!<br/><br/>
    <em>Action Plan:</em><br/>
    1. (Focus) Study the chapter for 25 minutes.<br/>
    2. (Diffuse) Step away—play a quick game or listen to a song.<br/>
    3. (Focus) Come back and quiz yourself—surprised by what you remember?<br/>
    4. Pat yourself on the back—this is how toppers learn!<br/><br/>
    🌟 You’ll remember more and feel less stressed!`,

    `<strong>📚 History/Geography: Essay or Map Mastery</strong><br/>
    ❌ Problem: Can’t organize your thoughts for a big answer or map.<br/>
    ✅ Solution: Use focus and diffuse modes for clarity!<br/><br/>
    <em>Action Plan:</em><br/>
    1. (Focus) Outline your answer or map for 15 minutes.<br/>
    2. (Diffuse) Take a break—walk, stretch, or relax.<br/>
    3. (Focus) Return and fill in details.<br/>
    4. Review your work and celebrate your progress!<br/><br/>
    🗺️ Alternating focus and breaks makes big tasks easy!`,
  ],
  examPrepFocus: []
};

export default focusDiffuse;
