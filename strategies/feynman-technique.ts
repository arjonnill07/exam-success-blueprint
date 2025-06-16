import { Strategy, StrategyCategory } from '../types';
import UsersIcon from '../components/icons/UsersIcon';
import TeacherIcon from '../components/icons/TeacherIcon';

const feynmanTechnique: Strategy = {
  id: "feynman-technique",
  title: "Feynman Technique (Teach Me!)",
  description: "Explain a concept in simple terms to identify gaps in understanding.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> The ultimate test of understanding for any exam topic! If you can explain it simply, you truly get it. If not, you've found exactly where to focus your revision.</p>
    <p><strong>🧑‍🏫 What Is It?</strong></p>
    <ul>
      <li>Choose a concept you need to learn for an exam.</li>
      <li>Write or say an explanation of it as if you're teaching a child (or someone unfamiliar with the topic).</li>
      <li>Use simple language and analogies. Avoid jargon.</li>
      <li>Identify areas where your explanation is weak or confusing – these are your knowledge gaps for the exam.</li>
    </ul>
  `,
  category: StrategyCategory.CONCEPT_MASTERY,
  icon: UsersIcon,
  visualExplainerComponent: TeacherIcon,
  visualExplainerCaption: "Visualizing Feynman Technique: Explaining a concept simply, as if to a student.",
  howTo: [
    "**1. Pick a Concept:** Choose something you need to master for your exam.",
    "**2. Teach It Simply:** Write down or say aloud an explanation using only simple language. Imagine your student is 10 years old.",
    "**3. Spot the Gaps:** Where did you get stuck, use jargon, or feel unsure? This is crucial exam feedback.",
    "**4. Review & Simplify:** Go back to your study materials to clarify those weak points. Then, try simplifying your explanation again."
  ],
  benefits: [],
  realWorldExamples: [
    "<em>Struggling with 'natural selection' for a Biology exam?</em> Try to explain it to an imaginary younger sibling. Where do you hesitate? That's your study point.",
    "<em>Preparing for an Economics exam on 'supply and demand'?</em> Write out an explanation using everyday examples, avoiding technical terms until you can define them simply.",
    "<em>Before a Math exam, if a particular theorem is confusing:</em> Attempt to explain its proof and significance in the simplest terms possible. This quickly reveals if you've truly grasped it."
  ],
  examPrepFocus: []
};

export default feynmanTechnique;
