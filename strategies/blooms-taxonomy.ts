import { Strategy, StrategyCategory } from '../types';
import BarChartIcon from '../components/icons/BarChartIcon';
import PyramidIcon from '../components/icons/PyramidIcon';

const bloomsTaxonomy: Strategy = {
  id: "blooms-taxonomy",
  title: "Bloom's Taxonomy (Climbing to Mastery)",
  description: "A framework for categorizing educational goals and objectives.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> This is a roadmap to true understanding! It guides you from just remembering facts to critically evaluating and creating with your knowledge – essential for top exam performance.</p>
    <p><strong>🔺 What Is It?</strong></p>
    <ul>
      <li>A hierarchy of learning levels, from basic recall to complex creation.</li>
      <li>Each level builds on the previous one.</li>
      <li>Mastering subjects for exams means aiming to operate at the higher levels.</li>
    </ul>
  `,
  category: StrategyCategory.CONCEPT_MASTERY,
  icon: BarChartIcon,
  visualExplainerComponent: PyramidIcon,
  visualExplainerCaption: "Visualizing Bloom's Taxonomy: A pyramid showing levels of learning from foundational recall to higher-order thinking.",
  howTo: [
    "**1. Start with Remembering:** Can you recall the basic facts and definitions for the exam?",
    "**2. Move to Understanding:** Can you explain these concepts in your own words?",
    "**3. Practice Applying:** Can you use this knowledge to solve exam-style problems or in new situations?",
    "**4. Aim for Analyzing, Evaluating, Creating:** Can you break down complex ideas, judge their value, or develop new insights for advanced exam questions?"
  ],
  benefits: [],
  realWorldExamples: [
    "<strong>Subject: History - Topic: World War I</strong><br/><em>Remembering:</em> List the main countries in the Allied and Central Powers for the exam.<br/><em>Understanding:</em> Explain the primary causes of WWI in your own words.<br/><em>Applying:</em> Given a map of Europe in 1914, illustrate the initial alliances and potential conflict points relevant to exam questions.<br/><em>Analyzing:</em> Compare and contrast the war strategies of two major powers and their effectiveness based on exam case studies.<br/><em>Evaluating:</em> Judge the significance of the Treaty of Versailles in leading to future conflicts, using evidence for an exam essay.<br/><em>Creating:</em> Design a 'What if?' scenario: Propose an alternative diplomatic solution in 1914 that might have prevented the war, and outline its potential impact for a hypothetical exam question.",
    "<strong>Subject: Biology - Topic: Photosynthesis</strong><br/><em>Remembering:</em> Recall the chemical equation for photosynthesis for the exam.<br/><em>Understanding:</em> Explain the roles of chlorophyll and sunlight in the process.<br/><em>Applying:</em> Predict how a plant's photosynthetic rate would change if CO2 levels were increased, for an exam problem.<br/><em>Analyzing:</em> Diagram the light-dependent and light-independent reactions, showing how they are interconnected, as might be required in an exam.<br/><em>Evaluating:</em> Assess the efficiency of C3 vs. C4 photosynthesis in different environmental conditions, justifying your answer for an exam question.<br/><em>Creating:</em> Propose an experiment to optimize light conditions for maximal photosynthetic output in a specific crop, for a project-based exam scenario.",
    "<strong>Subject: Literature - Novel: 'To Kill a Mockingbird'</strong><br/><em>Remembering:</em> Identify the main characters and key plot points for the exam.<br/><em>Understanding:</em> Summarize the themes of justice and prejudice as presented in the novel.<br/><em>Applying:</em> Discuss how Scout's perspective as a child narrator influences the reader's understanding of events – a common exam question.<br/><em>Analyzing:</em> Analyze the symbolism of the mockingbird throughout the novel for an essay exam.<br/><em>Evaluating:</em> Argue whether Atticus Finch is a truly heroic figure, considering his actions and their limitations, for a critical exam response.<br/><em>Creating:</em> Write an alternative ending to a chapter from the perspective of a different character, maintaining the novel's style, for a creative exam task."
  ],
  examPrepFocus: []
};

export default bloomsTaxonomy;
