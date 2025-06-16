import { Strategy, StrategyCategory } from '../types';
import ZapIcon from '../components/icons/ZapIcon';
import BrainArrowsIcon from '../components/icons/BrainArrowsIcon';

const retrievalPractice: Strategy = {
  id: "retrieval-practice",
  title: "Retrieval Practice (More Testing!)",
  description: "Strengthen memory by actively recalling information, similar to Active Recall.",
  longDescription: `
    <p><strong>Quick Take for Your Exams:</strong> This is Active Recall's close cousin, focusing on using practice tests, quizzes, and past exam papers to pull information from your memory. It’s like doing dress rehearsals for the actual exam!</p>
    <p><strong>📝 What Is It?</strong></p>
    <ul>
      <li>A learning strategy that emphasizes bringing information to mind from memory.</li>
      <li>Often involves using practice questions, quizzes, or creating your own tests based on exam material.</li>
      <li>Builds on Active Recall by structuring the retrieval process, often mimicking exam conditions.</li>
    </ul>
  `,
  category: StrategyCategory.MEMORY_ENHANCEMENT,
  icon: ZapIcon,
  visualExplainerComponent: BrainArrowsIcon,
  visualExplainerCaption: "Visualizing Retrieval Practice: Actively testing yourself, simulating exam recall.",
  howTo: [
    "**1. Gather Your Materials:** Use end-of-chapter questions, past exam papers, or create your own quiz questions.",
    "**2. Test Yourself (Closed Book!):** Answer the questions without looking at your notes or textbook. Simulate exam conditions.",
    "**3. Check Your Answers:** Carefully review your responses against the correct answers or mark scheme.",
    "**4. Analyze & Learn from Mistakes:** Understand why you got questions wrong. This directs your focused study for the actual exam."
  ],
  benefits: [],
  realWorldExamples: [
    "<em>Preparing for a multiple-choice History exam:</em> Regularly do blocks of practice questions under timed conditions.",
    "<em>Getting ready for a Math exam:</em> Work through full past papers, then meticulously mark your answers and study the solutions for any errors.",
    "<em>For any subject:</em> After studying a chapter, create 3-5 potential exam questions and try to answer them a day later without notes."
  ],
  examPrepFocus: []
};

export default retrievalPractice;
