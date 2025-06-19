import { Strategy, BloomStage, BloomLevel } from './types';
import strategies from './strategies';


export const APP_NAME = "  Exam Ace  ";

export const STRATEGIES: Strategy[] = strategies;

export const MOTIVATIONAL_QUOTES = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "The secret to getting ahead is getting started.",
  "Don't watch the clock; do what it does. Keep going.",
  "The expert in anything was once a beginner.",
  "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
  "You don't have to be great to start, but you have to start to be great.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Wake up with determination. Go to bed with satisfaction.",
  "It's not whether you get knocked down, it's whether you get up.",
  "Your positive action combined with positive thinking results in success.",
  "Strive for progress, not perfection.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Well done is better than well said. Start applying these strategies today!",
  "Focus on your goal. Don't look in any direction but ahead.",
  "The key to success is to focus on goals, not obstacles.",
  "You are capable of more than you know. This guide is here to help unlock that potential.",
  "Every accomplishment starts with the decision to try. Use these techniques as your starting point."
];


export const BLOOM_STAGES: BloomStage[] = [
  {
    level: BloomLevel.REMEMBERING,
    description: `
      <p><strong>Goal for This Stage:</strong> Build a solid foundation by recalling facts and basic concepts for your exams.</p>
      <p><strong>Exam Snapshot:</strong> You'll see questions like "Define...", "List...", "Identify...".</p>
      <p><em>Suggested Activities:</em></p>`,
    activities: [
      "**Use flashcards** for key terms and definitions.",
      "**Practice with quizzes** that test factual recall.",
      "**Summarize key points** from your notes after reading."
    ]
  },
  {
    level: BloomLevel.UNDERSTANDING,
    description: `
      <p><strong>Goal for This Stage:</strong> Explain ideas or concepts. This means truly getting what the information means for exam scenarios.</p>
      <p><strong>Exam Snapshot:</strong> Expect questions like "Explain...", "Summarize...", "Compare/Contrast...".</p>
      <p><em>Suggested Activities:</em></p>`,
    activities: [
      "**Explain concepts** in your own words (try the Feynman Technique!).",
      "**Draw diagrams or mind maps** to illustrate connections.",
      "**Discuss topics** with study partners to check comprehension."
    ]
  },
  {
    level: BloomLevel.APPLYING,
    description: `
      <p><strong>Goal for This Stage:</strong> Use information in new situations. This is crucial for problem-solving questions in exams.</p>
      <p><strong>Exam Snapshot:</strong> This involves "Solve...", "Apply...", "Demonstrate...".</p>
      <p><em>Suggested Activities:</em></p>`,
    activities: [
      "**Solve practice problems** from textbooks or past papers.",
      "**Work on case studies** or real-world application exercises.",
      "**Use learned formulas** or methods in new contexts."
    ]
  },
  {
    level: BloomLevel.ANALYZING,
    description: `
      <p><strong>Goal for This Stage:</strong> Draw connections among ideas. Break down information into component parts for the exam.</p>
      <p><strong>Exam Snapshot:</strong> Questions might be "Analyze...", "Differentiate...", "Organize...".</p>
      <p><em>Suggested Activities:</em></p>`,
    activities: [
      "**Create concept maps** showing relationships between ideas.",
      "**Compare and contrast** different theories or solutions.",
      "**Identify assumptions** or biases in given information."
    ]
  },
  {
    level: BloomLevel.EVALUATING,
    description: `
      <p><strong>Goal for This Stage:</strong> Justify a stand or decision. Make judgments based on criteria and standards, important for essay questions or critical analysis in exams.</p>
      <p><strong>Exam Snapshot:</strong> Look for "Evaluate...", "Justify...", "Critique...".</p>
      <p><em>Suggested Activities:</em></p>`,
    activities: [
      "**Critique a piece of work** or a proposed solution.",
      "**Debate topics** and defend your point of view with evidence.",
      "**Write argumentative essays** assessing different perspectives."
    ]
  },
  {
    level: BloomLevel.CREATING,
    description: `
      <p><strong>Goal for This Stage:</strong> Produce new or original work. This is the highest level, essential for project-based exams or advanced problem-solving.</p>
      <p><strong>Exam Snapshot:</strong> Could be "Design...", "Develop...", "Formulate a plan for...".</p>
      <p><em>Suggested Activities:</em></p>`,
    activities: [
      "**Design a project** or experiment based on learned principles.",
      "**Develop a new model** or theory to explain observations.",
      "**Write a unique solution** to a complex problem."
    ]
  }
];

export const QUICK_PREP_STRATEGIES_IDS = ['pomodoro', 'active-recall', 'stress-taming', 'feynman-technique'];

export const QUICK_STRATEGY_HOW_TOS: Record<string, { title?: string; advisorTip?: string; sosHowTo: string[] }> = {
  'pomodoro': {
    title: "Quick Pomodoro Focus",
    advisorTip: "Quick Tip: Even one focused Pomodoro (25 mins) is better than hours of distracted study!",
    sosHowTo: [
      "**1. One Task Only:** Pick the *single most important thing* to review or practice right now.",
      "**2. Timer On (25 Mins):** No interruptions. This is a focused sprint.",
      "**3. Quick Break (5 Mins):** Step away completely. Hydrate, stretch."
    ]
  },
  'active-recall': {
    title: "Rapid Active Recall",
    advisorTip: "Quick Tip: Test yourself *before* looking at notes. It's tough but super effective!",
    sosHowTo: [
      "**1. Key Concepts List:** Quickly jot down 3-5 main topics/formulas you MUST know for tomorrow.",
      "**2. Blank Page Recall:** For each, write everything you remember. *Don't peek!*",
      "**3. Check & Correct:** Now compare with notes. Focus on fixing gaps."
    ]
  },
  'stress-taming': {
    title: "Instant Stress Tamer",
    advisorTip: "Quick Tip: This takes 2 minutes but can make a huge difference to your exam mindset.",
    sosHowTo: [
      "**1. Sit Comfortably:** Close your eyes if you like.",
      "**2. Deep Breath In (4s):** Through your nose, feel your belly expand.",
      "**3. Hold (4s):** Gently hold that breath.",
      "**4. Exhale Slowly (6-8s):** Through your mouth, releasing tension.",
      "**5. Repeat 3-5 times.** Feel calmer?"
    ]
  },
  'feynman-technique': {
    title: "Fast Feynman Check",
    advisorTip: "Quick Tip: If you can't explain it simply, you don't understand it well enough for the exam... yet!",
    sosHowTo: [
      "**1. Toughest Concept:** Pick ONE thing you're still shaky on.",
      "**2. Explain to a 10-Year-Old:** On paper or aloud, explain it in the simplest terms. No jargon!",
      "**3. Identify Gaps:** Where did you stumble or use complex words? That's your weak spot to quickly review."
    ]
  }
};

export const QUICK_PREP_ADVICE = {
  intro: "Feeling the exam pressure mounting? Here are some quick, high-impact tips and strategies to help you focus, calm your nerves, and make the most of your final preparation hours. You've got this!",
  checklist: [
    "**Confirm Exam Details:** Double-check time, location, and any specific requirements (calculator, ID, etc.).",
    "**Pack Your Bag:** Gather all necessary stationery, water bottle, and any permitted aids *the night before*.",
    "**Quick Review (Don't Cram):** Briefly go over summary notes or flashcards for key concepts. Avoid trying to learn new, complex material now.",
    "**Plan Your Morning:** Lay out clothes, plan breakfast. Reduce morning-of decisions.",
    "**Set Multiple Alarms:** Seriously. Better safe than sorry!",
    "**Good Night's Sleep:** Aim for at least 7-8 hours. Your brain needs it to perform.",
    "**Healthy Meal:** Eat a balanced meal before the exam, but nothing too heavy.",
    "**Positive Mindset:** Remind yourself of your preparation. Visualize success. Take a few deep breaths. You are ready for this!"
  ],
  outro: "Remember, these last-minute steps are about staying calm and organized. The main work is done. Trust your preparation and walk into that exam hall with confidence!"
};
