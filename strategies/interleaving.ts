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
    `<strong>🔄 Math & Science: Mix It Up for Exam Power</strong><br/>
    ❌ Always study one subject at a time and get bored or stuck?<br/>
    ✅ Mix different topics to train your brain for real exams.<br/><br/>
    <em>How to use interleaving for “Math & Science”:</em><br/>
    • <strong>Step 1:</strong> Do 2 algebra sums, then 2 geometry problems<br/>
    • <strong>Step 2:</strong> Switch to 2 science MCQs (Physics or Chemistry)<br/>
    • <strong>Step 3:</strong> Repeat the cycle—notice how you adapt faster<br/>
    • <strong>Step 4:</strong> Review what felt tricky and try again next session<br/><br/>
    🚀 You’ll be ready for any mix of questions on exam day!`,

    `<strong>📖 Bangla & English: Variety for Stronger Memory</strong><br/>
    ❌ Forget what you studied by the next day?<br/>
    ✅ Mix subjects to keep your brain active and alert.<br/><br/>
    <em>How to use interleaving for “Bangla & English”:</em><br/>
    • <strong>Step 1:</strong> Do a Bangla summary, then an English grammar fill-in-the-blank<br/>
    • <strong>Step 2:</strong> Next, try a Bangla MCQ, then an English paragraph<br/>
    • <strong>Step 3:</strong> Keep switching every 2–3 questions<br/>
    • <strong>Step 4:</strong> Notice how you remember more and get less bored!<br/><br/>
    🌟 Mixing it up makes revision fun and effective!`,

    `<strong>🌏 History/Geography: Real Exam Practice</strong><br/>
    ❌ Struggle to switch between map questions and essays?<br/>
    ✅ Practice mixing question types just like in the real exam.<br/><br/>
    <em>How to use interleaving for “History/Geography”:</em><br/>
    • <strong>Step 1:</strong> Answer a map question, then write a short essay<br/>
    • <strong>Step 2:</strong> Next, do a timeline or date-matching exercise<br/>
    • <strong>Step 3:</strong> Switch back to a map or diagram<br/>
    • <strong>Step 4:</strong> Review and repeat—your brain gets better at switching!<br/><br/>
    🏅 You’ll feel confident with any question order!`,

    `<strong>🧪 Science: Mixed MCQ Practice</strong><br/>
    ❌ Get stuck when questions jump between topics?<br/>
    ✅ Mix MCQs from different chapters in one session.<br/><br/>
    <em>How to use interleaving for “Science MCQs”:</em><br/>
    • <strong>Step 1:</strong> Pick 2 MCQs from Physics, 2 from Chemistry, 2 from Biology<br/>
    • <strong>Step 2:</strong> Answer them in a mixed order<br/>
    • <strong>Step 3:</strong> Notice which topics feel harder—review those next time<br/>
    • <strong>Step 4:</strong> Repeat with new questions each session<br/><br/>
    🎯 You’ll be ready for any surprise in the exam!`,
  ],
  examPrepFocus: [
    "Great for last-month revision before board exams.",
  ]
};

export default interleaving;
