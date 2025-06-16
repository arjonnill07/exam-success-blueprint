import { Strategy, StrategyCategory } from '../types';
import LightbulbIcon from '../components/icons/LightbulbIcon';
import MindMapIcon from '../components/icons/MindMapIcon';

const visualization: Strategy = {
  id: "visualization",
  title: "Visualization Methods (See to Succeed)",
  description: "Create mental images or diagrams to understand and remember concepts.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> Turn abstract exam concepts into concrete pictures in your mind or on paper! This makes complex information easier to grasp and recall during the exam.</p>
    <p><strong>🖼️ What Is It?</strong></p>
    <ul>
      <li>Using mental imagery, diagrams, mind maps, flowcharts, or concept graphs to represent information.</li>
      <li>Connects different ideas visually, highlighting relationships.</li>
      <li>Appeals to visual learners and can make complex exam topics much more intuitive.</li>
    </ul>
  `,
  category: StrategyCategory.CONCEPT_MASTERY,
  icon: LightbulbIcon,
  visualExplainerComponent: MindMapIcon,
  visualExplainerCaption: "Visualizing Visualization: Creating a mind map to connect concepts visually.",
  howTo: [
    "**1. Mind Maps for Overviews:** Start with a central exam topic and branch out with related concepts, keywords, and examples.",
    "**2. Flowcharts for Processes:** Illustrate sequential steps in a process (e.g., a scientific experiment, historical timeline for an exam).",
    "**3. Concept Graphs for Relationships:** Use nodes and links to show how different ideas or terms connect for your exam syllabus.",
    "**4. Mental Imagery:** For abstract ideas, try to create a vivid mental picture or metaphor to aid recall during the exam."
  ],
  benefits: [],
  realWorldExamples: [
    "<em>Studying the water cycle for a Geography exam:</em> Draw a detailed diagram showing evaporation, condensation, precipitation, etc., and label each part.",
    "<em>Understanding different political ideologies for a Civics exam:</em> Create a mind map showing the core tenets of each and how they relate or differ.",
    "<em>Memorizing the steps of a historical event for an exam:</em> Visualize yourself walking through the event, noting key actions and figures at each stage."
  ],
  examPrepFocus: []
};

export default visualization;
