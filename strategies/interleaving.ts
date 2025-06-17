import { Strategy, StrategyCategory } from '../types';
import UsersIcon from '../components/icons/UsersIcon';

const interleaving: Strategy = {
  id: "interleaving",
  title: "Interleaving (Mix It Up!)",
  description: "Mix up Math, Science, and English problems in one session—just like your real exam paper!",
  longDescription: `
    <div class="space-y-3">
      <div><strong>🔄 What:</strong> Mix different types of questions or subjects in one study session.</div>
      <div><strong>❓ Why:</strong> Exams always mix things up! This trains your brain to switch and adapt—no surprises on test day.</div>
      <div><strong>⚡ How:</strong>
        <ul class="list-disc list-inside ml-4">
          <li>Pick 2-3 topics (e.g., Algebra, Geometry, English).</li>
          <li>Do 1-2 problems from each, then switch. Repeat.</li>
        </ul>
      </div>
      <div class="bg-sky-50 border-l-4 border-sky-400 p-2 rounded">
        <strong>Try it now:</strong> Mix 2 Math sums, 2 English grammar, 2 Science MCQs. Notice how you have to think harder!
      </div>
      <div class="text-blue-700 text-sm mt-2">
        <strong>Real-world connection:</strong> Imagine you’re preparing for your SSC or HSC exams. In your Math session, instead of solving 10 algebra problems in a row, you do 2 algebra, 2 geometry, and 2 statistics problems. Then, you switch to English and do a grammar fill-in-the-blank, a summary, and a translation. This way, your brain gets used to switching between topics—just like you’ll have to do in the real exam, where questions are never grouped by type!<br/><br/>
        <em>Bonus:</em> If you’re studying Science, try mixing up MCQs from Physics, Chemistry, and Biology in one sitting. You’ll notice you get better at quickly figuring out what each question is really asking, and you’ll feel more confident on exam day.
      </div>
    </div>
  `,
  category: StrategyCategory.LEARNING_TECHNIQUES,
  icon: UsersIcon,
  visualExplainerComponent: UsersIcon,
  visualExplainerCaption: "Visualizing Interleaving: Switching between different topics or problem types in a study session.",
  howTo: [
    "Pick 2-3 subjects or topics (e.g., Math, Physics, Bangla).",
    "Alternate between them in your study session.",
    "If it feels tough, that’s normal! It means your brain is learning to adapt.",
  ],
  benefits: [
    "Prepares you for mixed exam papers.",
    "Makes revision less boring!",
  ],
  realWorldExamples: [
    "<em>SSC:</em> Mix up algebra, geometry, and English grammar in one sitting.",
    "<em>HSC Science:</em> Alternate MCQs from Physics, Chemistry, and Biology in a single practice round.",
    "<em>Class 9 Bangla & English:</em> Do a Bangla summary, then an English grammar fill-in-the-blank, then a Bangla MCQ, and so on.",
  ],
  examPrepFocus: [
    "Great for last-month revision before board exams.",
  ]
};

export default interleaving;
