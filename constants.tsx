
import React from 'react';
import { Strategy, StrategyCategory, BloomStage, BloomLevel } from './types';
import BookOpenIcon from './components/icons/BookOpenIcon';
import BrainIcon from './components/icons/BrainIcon';
import ClockIcon from './components/icons/ClockIcon';
import LightbulbIcon from './components/icons/LightbulbIcon';
import PuzzleIcon from './components/icons/PuzzleIcon';
import RepeatIcon from './components/icons/RepeatIcon';
import SparklesIcon from './components/icons/SparklesIcon';
import TargetIcon from './components/icons/TargetIcon';
import UsersIcon from './components/icons/UsersIcon';
import ZapIcon from './components/icons/ZapIcon';
import PomodoroTimer from './components/PomodoroTimer';
import ClipboardListIcon from './components/icons/ClipboardListIcon';
import BarChartIcon from './components/icons/BarChartIcon';

// New Icons for Visual Explainers
import PyramidIcon from './components/icons/PyramidIcon';
import SegmentedBarIcon from './components/icons/SegmentedBarIcon';
import CalmIcon from './components/icons/CalmIcon';
import FlashcardsIcon from './components/icons/FlashcardsIcon';
import MindMapIcon from './components/icons/MindMapIcon';
import BrainArrowsIcon from './components/icons/BrainArrowsIcon';
import CalendarSpacedIcon from './components/icons/CalendarSpacedIcon';
import TeacherIcon from './components/icons/TeacherIcon';


export const APP_NAME = "Exam Success Blueprint";

export const STRATEGIES: Strategy[] = [
  {
    id: "pomodoro",
    title: "Pomodoro Technique",
    description: "Work in focused 25-minute intervals with short breaks.",
    longDescription: `
      <p><strong>Quick Take for Your Exams:</strong><br/>
      Struggling to focus?<br/>
      Long study hours but little progress? Pomodoro breaks your study into focused bursts to keep you sharp and energized.</p>
      <p><strong>🕒 What Is It?</strong></p>
      <ul>
        <li>Study for 25 minutes with zero distractions.</li>
        <li>Take a 3–5 minute break to recharge.</li>
        <li>After 4 sessions, take a longer break (15–30 mins).</li>
      </ul>
    `,
    category: StrategyCategory.TIME_MANAGEMENT,
    icon: ClockIcon,
    visualExplainerComponent: ClockIcon,
    visualExplainerCaption: "Visualizing Pomodoro: Focused work sprints followed by short, refreshing breaks.",
    howTo: [
      "**🎯 Pick One Clear Goal**<br/>Example: “Solve 10 physics MCQs” or “Revise math formulas from Chapter 7”",
      "**⏱️ Set a 25-Minute Timer**<br/>This is your full-focus zone. No phone, no tabs, just the task.",
      "**🔥 Study with Intensity**<br/>If your mind wanders, gently bring it back. Keep a scratch pad to note distractions.",
      "**🧘 Take a 5-Minute Break**<br/>Get up. Stretch. Drink water. Don’t scroll!",
      "**🔁 Repeat**<br/>After 4 Pomodoros, take a longer break. Let your brain fully recharge."
    ],
    benefits: [],
    realWorldExamples: [
      "<strong>📐 Math:</strong><br/>Pomodoro 1: Solve 7 tricky problems from Algebra<br/>Pomodoro 2: Revise formula list or error notebook",
      "<strong>🧪 Science (Physics, Chemistry, Biology):</strong><br/>Pomodoro 1: Review key definitions and laws<br/>Pomodoro 2: Solve board-style short questions",
      "<strong>📚 History & Civics:</strong><br/>Pomodoro 1: Memorize key events from a chapter<br/>Pomodoro 2: Write a practice answer to a long question",
      "<strong>🗣️ Language/Grammar:</strong><br/>Pomodoro 1: Flashcards for 20 vocab words (Active Recall style!)<br/>Pomodoro 2: Practice paragraph or dialogue writing"
    ],
    examPrepFocus: [],
    interactiveComponent: <PomodoroTimer />
  },
  {
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
    visualExplainerComponent: BrainIcon, // Consider a more specific icon if available/creatable
    visualExplainerCaption: "Visualizing Focus/Diffuse: Switching between deep concentration (focus) and relaxed, broad thinking (diffuse).",
     howTo: [
      "🤯 **1. Tackle the Tough Stuff:** Pick a challenging exam concept or problem.",
      "🧐 **2. Deep Focus Session:** Work intently for a set time (e.g., one Pomodoro). Full concentration!",
      "🚶 **3. Step Away (Diffuse Time!):** Take a real break. Walk, doodle, listen to music (instrumental is good!). Don't actively think about the problem.",
      "💡 **4. Return & Re-engage:** Come back to the task with fresh eyes. Often, new insights will appear."
    ],
    benefits: [],
    realWorldExamples: [
        "<em>Stuck on a complex Physics problem for an exam?</em> Work on it intently (focused mode), then take a 10-minute walk or listen to a song (diffuse mode) before returning. You'll often see it differently!",
        "<em>Brainstorming arguments for an exam essay:</em> Focus on the prompt and jot down initial ideas, then perhaps do a quick, unrelated chore (like making tea) to let ideas percolate and connect.",
        "<em>Trying to understand a dense chapter for an upcoming test:</em> Study the details section by section, then take a break and think about something else entirely before doing a quick review. This helps solidify the big picture."
    ],
    examPrepFocus: []
  },
  {
    id: "chunking",
    title: "Chunking (Breaking It Down!)",
    description: "Break down complex information into smaller, manageable parts.",
    longDescription: `
      <p><strong>Quick Take for Your Exams:</strong> Feeling swamped by a huge topic? Chunking is the way to make it totally manageable and less scary for exams! We'll turn mountains into molehills.</p>
      <p><strong>🧩 What Is It?</strong></p>
      <ul>
        <li>Break large amounts of information (like a whole exam syllabus) into smaller, meaningful units or 'chunks'.</li>
        <li>Each chunk is easier to process, understand, and remember.</li>
        <li>Focus on one chunk at a time before connecting them for the bigger picture.</li>
      </ul>
    `,
    category: StrategyCategory.LEARNING_TECHNIQUES,
    icon: PuzzleIcon,
    visualExplainerComponent: SegmentedBarIcon,
    visualExplainerCaption: "Visualizing Chunking: A large task broken into smaller, manageable segments.",
    howTo: [
      "**1. Identify the 'Whole':** Pinpoint that large exam topic or chapter that feels overwhelming.",
      "**2. Slice It Up:** Break it into smaller, logical sub-topics or sections. Think about how exam questions might target these parts.",
      "**3. Master Each Chunk:** Focus on understanding one chunk thoroughly before moving to the next.",
      "**4. Connect the Chunks:** Once individual chunks are clear, actively link them to understand the overall concept for the exam."
    ],
    benefits: [],
    realWorldExamples: [
      "<em>Studying a History chapter for an exam:</em> Chunk it into 'Causes', 'Key Events', 'Key Figures', and 'Consequences'. Master each before linking them.",
      "<em>Learning a complex Math theorem:</em> Break it down into understanding the definitions, the conditions, the proof steps, and then its applications for exam problems.",
      "<em>Preparing for a Biology exam covering cellular respiration:</em> Chunk it into Glycolysis, Krebs Cycle, and Electron Transport Chain. Study each pathway's inputs, outputs, and significance separately first."
    ],
    examPrepFocus: []
  },
  {
    id: "active-recall",
    title: "Active Recall (Test Yourself!)",
    description: "Actively retrieve information from memory to strengthen it.",
    longDescription: `
      <p><strong>Quick Take for Your Exams:</strong> This is a powerful way to make information 'stick' for exams. Instead of passively re-reading, actively pull facts from your brain!</p>
      <p><strong>🧠🔍 What Is It?</strong></p>
      <ul>
        <li>The act of deliberately trying to remember information without looking at your notes.</li>
        <li>It forces your brain to work, strengthening memory pathways.</li>
        <li>Far more effective than just re-reading or highlighting for exam preparation.</li>
      </ul>
    `,
    category: StrategyCategory.MEMORY_ENHANCEMENT,
    icon: LightbulbIcon,
    visualExplainerComponent: BrainArrowsIcon,
    visualExplainerCaption: "Visualizing Active Recall: Actively pulling information out of your brain, like retrieving a file.",
    howTo: [
      "**1. Learn the Material:** First, study a topic as you normally would.",
      "**2. Close Your Book/Notes:** Step away from the source material.",
      "**3. Recall Actively:** Try to write down, say aloud, or mentally summarize everything you remember about the topic.",
      "**4. Check & Identify Gaps:** Compare your recall attempt with your notes. See what you missed? That's where to focus next!"
    ],
    benefits: [],
    realWorldExamples: [
      "<em>After reading a chapter for your upcoming exam:</em> Close the book and write down the main points and key definitions from memory.",
      "<em>Using flashcards:</em> Look at the question/term (the cue) and actively try to recall the answer *before* flipping the card. Essential for exam prep!",
      "<em>Explaining a concept to someone else (or an imaginary student) without notes:</em> This forces active retrieval and highlights what you truly understand for the exam."
    ],
    examPrepFocus: []
  },
  {
    id: "deliberate-practice",
    title: "Deliberate Practice",
    description: "Targeted improvement through structured, focused learning.",
    longDescription: `
      <p><strong>Quick Take for Your Exams:</strong> This is about practicing smarter, not just harder, to turn weaknesses into strengths before exam day. Be like a detective, finding and fixing the exact spots needing improvement.</p>
      <p><strong>🎯 What Is It?</strong></p>
      <ul>
        <li>Focusing intensely on areas of weakness (identified from past exam papers or self-assessment).</li>
        <li>Setting specific improvement goals for these weak areas.</li>
        <li>Getting immediate, actionable feedback (e.g., meticulously checking answers against mark schemes).</li>
        <li>Continuously refining the approach for exams. It’s about purposeful effort just outside your comfort zone.</li>
      </ul>
    `,
    category: StrategyCategory.LEARNING_TECHNIQUES,
    icon: TargetIcon,
    visualExplainerComponent: TargetIcon,
    visualExplainerCaption: "Visualizing Deliberate Practice: Focused effort on specific weaknesses to hit the target of mastery.",
    howTo: [
      "**1. Identify Weak Spots:** Analyze past exam papers or practice tests. Where do you consistently lose marks or feel unsure?",
      "**2. Set Specific Goals:** Instead of 'get better at math,' aim for 'correctly solve 5 integration problems of type X'.",
      "**3. Focused Practice:** Work *only* on those specific problem types or concepts. Minimize distractions.",
      "**4. Seek Feedback & Reflect:** Immediately check your work. Understand *why* you made errors. How can you avoid them in the exam?"
    ],
    benefits: [],
    realWorldExamples: [
      "<em>Constantly making calculation errors in Physics numericals for exams?</em> Dedicate practice sessions specifically to doing similar problems slowly, double-checking each step.",
      "<em>Struggling with essay structure for a Literature exam?</em> Practice writing outlines for various prompts, get feedback (even self-feedback against a model answer), and refine.",
      "<em>For a coding exam, if you're weak on recursion:</em> Find many recursion problems and work through them, analyzing solutions until the pattern clicks."
    ],
    examPrepFocus: []
  },
  {
    id: "stress-taming",
    title: "Stress Taming & Test Anxiety",
    description: "Manage exam stress and anxiety for optimal performance.",
    longDescription: `
      <p><strong>Quick Take for Your Exams:</strong> Feeling exam jitters? It's normal! These techniques help calm your mind and body, so you can perform at your best when it counts.</p>
      <p><strong>🧘‍♀️ What Is It?</strong></p>
      <ul>
        <li>Strategies to reduce physiological and psychological stress responses.</li>
        <li>Includes techniques like deep breathing, mindfulness, and positive self-talk.</li>
        <li>The goal is to approach exams with a calm, focused, and confident mindset.</li>
      </ul>
    `,
    category: StrategyCategory.STRESS_MANAGEMENT,
    icon: SparklesIcon, // Or a dedicated "Calm" icon
    visualExplainerComponent: CalmIcon,
    visualExplainerCaption: "Visualizing Stress Taming: Finding a calm center amidst exam pressures.",
    howTo: [
      "**1. Deep Breathing:** Inhale slowly for 4 counts, hold for 4, exhale slowly for 6-8. Repeat 3-5 times before an exam or during a stressful study session.",
      "**2. Positive Self-Talk:** Replace thoughts like 'I'm going to fail' with 'I've prepared for this, and I can do my best.'",
      "**3. Mindfulness Moment:** Briefly focus on your senses – what you see, hear, feel – to ground yourself in the present, especially before an exam.",
      "**4. Preparation is Key:** Knowing you've studied well is a great stress reducer. Use the other strategies here!"
    ],
    benefits: [],
    realWorldExamples: [
      "<em>Feeling overwhelmed the night before a big exam?</em> Practice a 5-minute guided meditation or deep breathing exercise.",
      "<em>If you start panicking during an exam:</em> Pause, take 3 deep breaths, remind yourself of your preparation, and then re-focus on one question at a time.",
      "<em>When negative thoughts creep in during study:</em> Acknowledge them, then actively counter them with a positive statement about your effort or a past success."
    ],
    examPrepFocus: []
  },
  {
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
    icon: BarChartIcon, // Placeholder, PyramidIcon is better
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
  },
  {
    id: "leitner-system",
    title: "Leitner System (Smart Flashcards)",
    description: "An efficient flashcard method using spaced repetition principles.",
    longDescription: `
      <p><strong>Quick Take for Your Exams:</strong> Turbocharge your flashcard studying! This system ensures you focus more on the tough concepts you haven't mastered yet for exams, saving time on what you already know.</p>
      <p><strong>🗂️ What Is It?</strong></p>
      <ul>
        <li>A flashcard system using multiple 'boxes' or piles.</li>
        <li>Correctly answered cards move to a 'less frequent' review box.</li>
        <li>Incorrect cards move back to the 'more frequent' review box.</li>
        <li>Optimizes study time by focusing on harder material for exams.</li>
      </ul>
    `,
    category: StrategyCategory.MEMORY_ENHANCEMENT,
    icon: ClipboardListIcon,
    visualExplainerComponent: FlashcardsIcon,
    visualExplainerCaption: "Visualizing Leitner System: Flashcards moving between review boxes based on recall success.",
    howTo: [
      "**1. Create Flashcards:** For key terms, formulas, dates, etc., crucial for your exam.",
      "**2. Set Up Boxes (3-5):** Box 1 (review daily), Box 2 (review every 2 days), Box 3 (every 4 days), etc.",
      "**3. Start with Box 1:** Review all cards. If correct, move to Box 2. If incorrect, it stays in Box 1.",
      "**4. Review Systematically:** On scheduled days, review cards in their respective boxes, moving them up or down based on recall."
    ],
    benefits: [],
    realWorldExamples: [
      "<em>Learning vocabulary for a language exam:</em> New words start in Box 1. As you learn them, they progress to boxes reviewed less frequently.",
      "<em>Memorizing historical dates or chemical formulas for an exam:</em> The Leitner system ensures you drill the ones you struggle with more often.",
      "<em>Preparing for a medical exam with many anatomical terms:</em> This system helps manage a large volume of information efficiently."
    ],
    examPrepFocus: []
  },
  {
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
    icon: UsersIcon, // Placeholder, TeacherIcon is better
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
  },
  {
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
    icon: ZapIcon, // Placeholder, BrainArrows or similar for recall
    visualExplainerComponent: BrainArrowsIcon, // Same as Active Recall
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
  },
  {
    id: "spaced-repetition",
    title: "Spaced Repetition (Smart Reviewing)",
    description: "Review material at increasing intervals to combat forgetting.",
    longDescription: `
      <p><strong>Quick Take for Your Exams:</strong> Stop cramming! This smart technique helps you remember information for the long haul (and for your exams) by reviewing it just as you're about to forget it.</p>
      <p><strong>🗓️ What Is It?</strong></p>
      <ul>
        <li>A learning technique that involves reviewing information at gradually increasing intervals.</li>
        <li>Based on the 'forgetting curve' – we forget things over time if not reviewed.</li>
        <li>By timing reviews strategically, you strengthen memory traces efficiently for exams.</li>
      </ul>
    `,
    category: StrategyCategory.MEMORY_ENHANCEMENT,
    icon: RepeatIcon,
    visualExplainerComponent: CalendarSpacedIcon,
    visualExplainerCaption: "Visualizing Spaced Repetition: Reviewing material at increasing time intervals.",
    howTo: [
      "**1. Learn It First:** Understand the material initially.",
      "**2. First Review (Soon):** Review it shortly after (e.g., end of the day or next day).",
      "**3. Space It Out:** Subsequent reviews are spaced further apart (e.g., after 3 days, then a week, then 2 weeks, etc.).",
      "**4. Use Tools (Optional):** Flashcard apps like Anki often have built-in spaced repetition algorithms, great for exam vocab or facts."
    ],
    benefits: [],
    realWorldExamples: [
      "<em>Learning new vocabulary for a language exam:</em> Review new words the next day, then a few days later, then a week later, and so on.",
      "<em>Memorizing key historical dates for an exam:</em> Create a review schedule that spaces out your recall attempts for these dates.",
      "<em>Studying important formulas for a Physics exam:</em> Instead of looking at them daily, review them at increasing intervals to strengthen long-term memory."
    ],
    examPrepFocus: []
  },
  {
    id: "interleaving",
    title: "Interleaving (Mix It Up!)",
    description: "Mix different types of problems or subjects in one study session.",
    longDescription: `
      <p><strong>Quick Take for Your Exams:</strong> Prepares your brain for the mixed-up nature of real exams! Instead of studying one topic to death (blocking), you switch between different topics or problem types.</p>
      <p><strong>🔄 What Is It?</strong></p>
      <ul>
        <li>A study strategy where you mix, or 'interleave,' different topics or types of problems within a single study session.</li>
        <li>Contrasts with 'blocked practice' (studying one topic fully before moving to another).</li>
        <li>Helps the brain learn to differentiate between concepts and choose the right solution strategy, crucial for exams.</li>
      </ul>
    `,
    category: StrategyCategory.LEARNING_TECHNIQUES,
    icon: UsersIcon, // Represents mixing different things
    visualExplainerComponent: UsersIcon, // Re-use for now, could be better
    visualExplainerCaption: "Visualizing Interleaving: Switching between different topics or problem types in a study session.",
    howTo: [
      "**1. Identify Related Topics/Problem Types:** For example, different types of algebra problems, or different but related science concepts for your exam.",
      "**2. Mix Them Up:** Instead of doing 20 problems of Type A, then 20 of Type B, do a few of A, a few of B, a few of A again, etc.",
      "**3. Embrace the Initial Difficulty:** It might feel harder at first than blocked practice, but the long-term learning and exam adaptability are greater.",
      "**4. Space It Out Too:** Combine interleaving with spaced repetition for even better results for your exams."
    ],
    benefits: [],
    realWorldExamples: [
      "<em>Studying for a Math exam:</em> Instead of doing all 'addition' problems then all 'subtraction', mix them up. For higher levels, mix different types of integration or equation solving.",
      "<em>Preparing for a Chemistry exam covering different reaction types:</em> Practice identifying and solving problems from various reaction types jumbled together, rather than one type at a time.",
      "<em>Learning different artistic styles for an Art History exam:</em> Review examples from different periods or artists in a mixed order, rather than studying one artist completely before moving to the next."
    ],
    examPrepFocus: []
  },
  {
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
    icon: LightbulbIcon, // Placeholder, MindMapIcon is better
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
  }
];

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
