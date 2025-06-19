import { Strategy, StrategyCategory } from '../types';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import MindMapIcon from '../components/icons/MindMapIcon';

const visualization: Strategy = {
  id: "visualization",
  title: "Visualization Methods (See to Succeed)",
  description: "Turn textbook info into mind maps, diagrams, or mental pictures—see your way to exam success!",
  longDescription: `
    <div class="space-y-3">
      <div><strong>🖼️ What:</strong> Turn ideas into pictures, just like you did as a child when you imagined stories or drew your first map of your neighborhood. Your brain already knows how to do this!</div>
      <div><strong>💡 Eureka! Why it works:</strong> Remember how you never forget the route to your best friend’s house, or the look of your favorite cricket field? That’s visualization! When you turn lessons into pictures, your brain says, “I know this!” and locks it in for the exam.</div>
      <div><strong>🔗 Connect the dots:</strong> Every new topic is like a new stop on your mental map. The more you connect it to what you already know (like linking the water cycle to the rain you see every monsoon), the easier it is to remember.</div>
      <div><strong>⚡ How to spark a Eureka moment:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Draw a mind map for a chapter (e.g., Biology: Cell Structure) and add doodles or colors that remind you of real life.</li>
          <li>Make a flowchart for a process (e.g., Chemistry: Acid-Base Reaction) and imagine it as a recipe you’d follow in the kitchen.</li>
          <li>Turn a poem or story into a comic strip or storyboard in your notebook.</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>Try it now:</strong> Next time you read about the water cycle, close your eyes and picture the rain falling on your school roof, running into the pond, then rising as steam in the hot sun. Draw it out and add a funny detail—like a frog with an umbrella!
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>Real-world Eureka:</strong> When you’re stuck in an exam, don’t just remember words—see the picture you created. That’s how toppers recall tricky diagrams, timelines, or even grammar rules. The secret? They make it personal and visual.<br/><br/>
        <em>Bonus:</em> For HSC Biology, sketch the human heart and label the parts, then imagine the blood as a red bus making stops. For English, make a mind map of a story’s main events and connect them to your own life. Suddenly, it all makes sense!
      </div>
    </div>
  `,
  category: StrategyCategory.CONCEPT_MASTERY,
  icon: LightbulbIcon,
  visualExplainerComponent: MindMapIcon,
  visualExplainerCaption: "Visualizing Visualization: Creating a mind map to connect concepts visually.",
  howTo: [
    "Pick a topic (e.g., Geography: Water Cycle, Biology: Cell).",
    "Draw a diagram, mind map, or flowchart to show the main ideas—add colors, doodles, or personal touches.",
    "Connect new info to something you already know or have seen.",
    "Picture it in your mind before the exam, and recall the story or image you created.",
  ],
  benefits: [
    "Makes complex topics stick by connecting them to your real life.",
    "Turns boring facts into memorable stories or images.",
    "Helps you answer diagram and process questions with confidence.",
  ],
  realWorldExamples: [
    `<strong>🧠 Biology: Visualize the Water Cycle</strong><br/>
    ❌ Read the chapter but forget the steps in the exam?<br/>
    ✅ Turn the process into a picture for easy recall.<br/><br/>
    <em>How to master “Water Cycle”:</em><br/>
    • <strong>Step 1:</strong> Draw a diagram showing rain, evaporation, and clouds<br/>
    • <strong>Step 2:</strong> Add colors and doodles to make it memorable<br/>
    • <strong>Step 3:</strong> Connect each step to something you’ve seen (like rain on your school roof)<br/>
    • <strong>Step 4:</strong> Before the exam, close your eyes and picture your drawing<br/><br/>
    🌦️ You’ll remember every step with ease!`,

    `<strong>📚 History: Mind Map for Liberation War</strong><br/>
    ❌ Struggle to remember all the events and leaders?<br/>
    ✅ Create a mind map to connect the facts.<br/><br/>
    <em>How to master “Bangladesh Liberation War”:</em><br/>
    • <strong>Step 1:</strong> Write the main event in the center of your page<br/>
    • <strong>Step 2:</strong> Draw branches for key dates, leaders, and outcomes<br/>
    • <strong>Step 3:</strong> Add small pictures or symbols for each branch<br/>
    • <strong>Step 4:</strong> Review your mind map before the exam<br/><br/>
    🗺️ You’ll see the whole story at a glance!`,

    `<strong>➗ Math: Flowchart for Problem Solving</strong><br/>
    ❌ Get lost in the steps of a long math problem?<br/>
    ✅ Use a flowchart to organize your thinking.<br/><br/>
    <em>How to master “Solving Equations”:</em><br/>
    • <strong>Step 1:</strong> Write each step in a box (e.g., “Isolate x”, “Divide both sides”)
    • <strong>Step 2:</strong> Draw arrows to show the order<br/>
    • <strong>Step 3:</strong> Add a checkmark when you finish each step<br/>
    • <strong>Step 4:</strong> Use your flowchart to solve similar problems<br/><br/>
    🔢 You’ll never get stuck or skip a step!`,

    `<strong>📖 English: Comic Strip for a Story</strong><br/>
    ❌ Forget the plot or main idea of a story?<br/>
    ✅ Turn it into a comic strip for fun and easy recall.<br/><br/>
    <em>How to master “A Short Story or Poem”:</em><br/>
    • <strong>Step 1:</strong> Draw 4–6 boxes for the main events<br/>
    • <strong>Step 2:</strong> Add simple drawings and speech bubbles<br/>
    • <strong>Step 3:</strong> Write a one-line summary for each box<br/>
    • <strong>Step 4:</strong> Review your comic before the exam<br/><br/>
    🎨 You’ll remember the story and enjoy revising!`,
  ],
  examPrepFocus: [
    "Perfect for diagram-based and process questions in board exams.",
    "Helps with last-minute revision and quick recall.",
  ]
};

export default visualization;
