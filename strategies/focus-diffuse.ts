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
    ❌ Stuck on a geometry or algebra problem for ages?<br/>
    ✅ Use focus and diffuse modes to unlock new ideas.<br/><br/>
    <em>How to solve a tough math problem:</em><br/>
    • <strong>Step 1 (Focus):</strong> Work on the problem for 20 minutes, no distractions<br/>
    • <strong>Step 2 (Diffuse):</strong> Take a real break—walk, stretch, or listen to music<br/>
    • <strong>Step 3 (Focus):</strong> Come back and try again—notice new ideas popping up!<br/>
    • <strong>Step 4:</strong> Celebrate every small win—progress is progress!<br/><br/>
    🚀 This is how toppers get “aha!” moments!`,

    `<strong>✍️ English Essay Brainstorm: Get Creative</strong><br/>
    ❌ Can’t think of ideas for your essay or story?<br/>
    ✅ Switch between focus and relax to spark creativity.<br/><br/>
    <em>How to brainstorm for “Digital Bangladesh” or any topic:</em><br/>
    • <strong>Step 1 (Focus):</strong> Write down ideas for 15 minutes—no stopping<br/>
    • <strong>Step 2 (Diffuse):</strong> Take a break: doodle, make tea, or chat with family<br/>
    • <strong>Step 3 (Focus):</strong> Return and organize your ideas—see what new thoughts appear!<br/>
    • <strong>Step 4:</strong> Every break is a brain boost. You’re getting creative!<br/><br/>
    💡 You’ll write faster and with more confidence!`,

    `<strong>🔬 Science Revision: Chemistry Made Easy</strong><br/>
    ❌ Forgetting reactions or facts after hours of study?<br/>
    ✅ Alternate focus and break sessions for better memory.<br/><br/>
    <em>How to revise “Acid-Base Reactions” or any chapter:</em><br/>
    • <strong>Step 1 (Focus):</strong> Study the chapter for 25 minutes<br/>
    • <strong>Step 2 (Diffuse):</strong> Step away—play a quick game or listen to a song<br/>
    • <strong>Step 3 (Focus):</strong> Come back and quiz yourself—surprised by what you remember?<br/>
    • <strong>Step 4:</strong> Pat yourself on the back—this is how toppers learn!<br/><br/>
    🌟 You’ll remember more and feel less stressed!`,

    `<strong>📚 History/Geography: Essay or Map Mastery</strong><br/>
    ❌ Can’t organize your thoughts for a big answer or map?<br/>
    ✅ Use focus and diffuse to plan and review.<br/><br/>
    <em>How to master “Liberation War Essay” or “River Map”:</em><br/>
    • <strong>Step 1 (Focus):</strong> List key points or draw a rough map for 15 minutes<br/>
    • <strong>Step 2 (Diffuse):</strong> Take a break—walk, snack, or chat<br/>
    • <strong>Step 3 (Focus):</strong> Return and organize your answer or redraw the map neatly<br/>
    • <strong>Step 4:</strong> Review and add details—each round makes you better!<br/><br/>
    🏅 You’ll feel calm and ready for any question!`,
  ],
  examPrepFocus: []
};

export default focusDiffuse;
