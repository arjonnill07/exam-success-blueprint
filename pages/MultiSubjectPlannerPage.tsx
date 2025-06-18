import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import SectionWrapper from '../components/SectionWrapper';

interface Topic {
  name: string;
  done: boolean;
  strategy: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  status?: 'Not Started' | 'In Progress' | 'Needs Review' | 'Done';
  resources?: { type: 'link' | 'note'; value: string }[];
}

interface Subject {
  name: string;
  topics: Topic[];
  progress: number;
  goal: string;
  notes: string;
  priority: string;
  strategies: string[];
  collapsed?: boolean;
}

const LOCAL_STORAGE_KEY = 'examSuccessPlanner';

const MOTIVATIONAL_QUOTES = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "The secret to getting ahead is getting started.",
  "Don't watch the clock; do what it does. Keep going.",
  "Strive for progress, not perfection.",
  "Every accomplishment starts with the decision to try. Use these techniques as your starting point."
];

const priorities = ['High', 'Medium', 'Low'];

const strategies = [
  'Pomodoro',
  'Leitner System',
  'Active Recall',
  'Chunking',
  'Spaced Repetition',
  'Visualization',
  'Feynman Technique',
];

// Onboarding steps for the animated walkthrough
const ONBOARDING_STEPS = [
  {
    title: 'Welcome to Your Exam Success Blueprint!',
    content: 'This planner will help you break down every subject, every topic, and ace your exams with proven strategies. Let’s get started!'
  },
  {
    title: 'Add Your Subjects',
    content: 'List all your exam subjects. You can add, remove, and collapse them for focus.'
  },
  {
    title: 'Bulk Add Topics',
    content: 'Paste or import a list of topics for each subject. You can always edit or add more later.'
  },
  {
    title: 'Assign Strategies',
    content: 'Pick the best study strategy for each topic. Hover the ? for a quick tip.'
  },
  {
    title: 'Track Progress & Celebrate',
    content: 'Check off topics, watch your progress grow, and celebrate milestones with badges and confetti!'
  },
  {
    title: 'Get Daily/Weekly Plans',
    content: 'Let the planner suggest what to study each day or week, based on your goals and deadlines.'
  },
  {
    title: 'Reflect & Adjust',
    content: 'After each session, jot down what worked and what to try next. You’re in control!'
  }
];

const TOPICS_PER_PAGE = 10;

const MultiSubjectPlannerPage = () => {
  const [subjects, setSubjects] = useState<Subject[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [newSubject, setNewSubject] = useState('');
  const [showOnboarding, setShowOnboarding] = useState(() => {
    return localStorage.getItem('plannerOnboarded') !== 'true';
  });
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [examDate, setExamDate] = useState<string>("");
  const [planView, setPlanView] = useState<'daily' | 'weekly'>('daily');
  const [todayPlan, setTodayPlan] = useState<string[]>([]);
  const [weekPlan, setWeekPlan] = useState<string[][]>([]);
  const [topicPage, setTopicPage] = useState<{ [subjectIdx: number]: number }>({});
  const [resourceModal, setResourceModal] = useState<{ subjectIdx: number; topicIdx: number } | null>(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx(idx => (idx + 1) % MOTIVATIONAL_QUOTES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const addSubject = () => {
    if (newSubject.trim()) {
      setSubjects([...subjects, { name: newSubject, topics: [], progress: 0, goal: '', notes: '', priority: 'Medium', strategies: [] }]);
      setNewSubject('');
    }
  };

  const updateSubject = (idx: number, updated: Partial<Subject>) => {
    setSubjects(subjects.map((s, i) => (i === idx ? { ...s, ...updated } : s)));
  };

  const addTopic = (subjectIdx: number, topic: string) => {
    if (topic.trim()) {
      const updated = [...subjects];
      updated[subjectIdx].topics.push({ name: topic, done: false, strategy: '' });
      updateProgress(updated, subjectIdx);
      setSubjects(updated);
    }
  };

  const toggleTopic = (subjectIdx: number, topicIdx: number) => {
    const updated = [...subjects];
    updated[subjectIdx].topics[topicIdx].done = !updated[subjectIdx].topics[topicIdx].done;
    updateProgress(updated, subjectIdx);
    setSubjects(updated);
  };

  const setTopicStrategy = (subjectIdx: number, topicIdx: number, strategy: string) => {
    const updated = [...subjects];
    updated[subjectIdx].topics[topicIdx].strategy = strategy;
    setSubjects(updated);
  };

  const updateProgress = (arr: Subject[], subjectIdx: number) => {
    const topics = arr[subjectIdx].topics;
    const done = topics.filter((t: Topic) => t.done).length;
    arr[subjectIdx].progress = topics.length ? Math.round((done / topics.length) * 100) : 0;
  };

  const handleTopicInput = (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
    const target = e.target as HTMLInputElement;
    if (e.key === 'Enter' && target.value.trim()) {
      addTopic(idx, target.value);
      target.value = '';
    }
  };

  // Add this helper function at the top or inside the component
  function getStrategyTip(strategy: string) {
    switch (strategy) {
      case 'Pomodoro':
        return 'Pomodoro: Study in focused 25-min bursts, then take a short break.';
      case 'Leitner System':
        return 'Leitner: Use flashcards, review tough ones more often.';
      case 'Active Recall':
        return 'Active Recall: Test yourself, don’t just reread.';
      case 'Chunking':
        return 'Chunking: Break big topics into smaller, manageable parts.';
      case 'Spaced Repetition':
        return 'Spaced Repetition: Review material at increasing intervals.';
      case 'Visualization':
        return 'Visualization: Use diagrams, mind maps, or draw concepts.';
      case 'Feynman Technique':
        return 'Feynman: Explain the topic in simple words as if teaching someone else.';
      default:
        return 'Pick a strategy to see a quick tip!';
    }
  }

  // Bulk add topics
  const [bulkTopics, setBulkTopics] = useState('');
  const [bulkAddIdx, setBulkAddIdx] = useState<number | null>(null);
  const handleBulkAdd = () => {
    if (bulkAddIdx !== null && bulkTopics.trim()) {
      const topics = bulkTopics.split(/\n|,/).map(t => t.trim()).filter(Boolean);
      const updated = [...subjects];
      updated[bulkAddIdx].topics.push(...topics.map(name => ({ name, done: false, strategy: '' })));
      updateProgress(updated, bulkAddIdx);
      setSubjects(updated);
      setBulkTopics('');
      setBulkAddIdx(null);
    }
  };

  // Search/filter subjects
  const [search, setSearch] = useState('');
  const filteredSubjects = subjects.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  // Milestone celebration
  const [milestone, setMilestone] = useState('');
  useEffect(() => {
    subjects.forEach(s => {
      if (s.progress === 100 && milestone !== s.name) {
        setMilestone(s.name);
        setTimeout(() => setMilestone(''), 4000);
      }
    });
  }, [subjects]);

  // Onboarding modal logic
  const closeOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem('plannerOnboarded', 'true');
  };

  // Helper: get all remaining topics
  function getAllRemainingTopics() {
    const result: { subject: string; topic: string }[] = [];
    subjects.forEach(subj => {
      subj.topics.forEach(t => {
        if (!t.done) result.push({ subject: subj.name, topic: t.name });
      });
    });
    return result;
  }

  // Auto-schedule topics based on exam date and plan view
  useEffect(() => {
    if (!examDate || subjects.length === 0) return;
    const remaining = getAllRemainingTopics();
    if (remaining.length === 0) {
      setTodayPlan([]);
      setWeekPlan([]);
      return;
    }
    const now = new Date();
    const exam = new Date(examDate);
    const daysLeft = Math.max(1, Math.ceil((exam.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
    if (planView === 'daily') {
      // Evenly distribute topics per day
      const perDay = Math.ceil(remaining.length / daysLeft);
      setTodayPlan(remaining.slice(0, perDay).map(t => `${t.subject}: ${t.topic}`));
    } else {
      // Weekly plan: group by week
      const weeksLeft = Math.max(1, Math.ceil(daysLeft / 7));
      const perWeek = Math.ceil(remaining.length / weeksLeft);
      const plan: string[][] = [];
      for (let i = 0; i < weeksLeft; i++) {
        plan.push(remaining.slice(i * perWeek, (i + 1) * perWeek).map(t => `${t.subject}: ${t.topic}`));
      }
      setWeekPlan(plan);
    }
  }, [examDate, subjects, planView]);

  // Helper to get paginated topics
  function getPaginatedTopics(subject: Subject, idx: number) {
    const page = topicPage[idx] || 0;
    const start = page * TOPICS_PER_PAGE;
    return subject.topics.slice(start, start + TOPICS_PER_PAGE);
  }

  // Resource Modal Implementation
  const [resourceType, setResourceType] = useState<'link' | 'note'>('link');
  const [resourceValue, setResourceValue] = useState('');

  function addResource() {
    if (!resourceModal || !resourceValue.trim()) return;
    const { subjectIdx, topicIdx } = resourceModal;
    const updated = [...subjects];
    if (!updated[subjectIdx].topics[topicIdx].resources) updated[subjectIdx].topics[topicIdx].resources = [];
    updated[subjectIdx].topics[topicIdx].resources!.push({ type: resourceType, value: resourceValue.trim() });
    setSubjects(updated);
    setResourceValue('');
    setResourceModal(null);
  }
  function removeResource(subjectIdx: number, topicIdx: number, resIdx: number) {
    const updated = [...subjects];
    updated[subjectIdx].topics[topicIdx].resources!.splice(resIdx, 1);
    setSubjects(updated);
  }

  return (
    <div className="animate-fadeIn min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 py-12 px-2 md:px-0">
      {showOnboarding && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full animate-fadeIn">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">{ONBOARDING_STEPS[onboardingStep].title}</h2>
            <p className="text-lg text-gray-700 mb-6">{ONBOARDING_STEPS[onboardingStep].content}</p>
            <div className="flex justify-between">
              <button
                className="text-blue-600 font-bold px-4 py-2 rounded hover:underline"
                onClick={closeOnboarding}
              >Skip</button>
              {onboardingStep < ONBOARDING_STEPS.length - 1 ? (
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
                  onClick={() => setOnboardingStep(s => s + 1)}
                >Next</button>
              ) : (
                <button
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition"
                  onClick={closeOnboarding}
                >Finish</button>
              )}
            </div>
          </div>
        </div>
      )}
      <SectionWrapper
        title={<span className="text-3xl md:text-4xl font-extrabold text-indigo-800 drop-shadow">Your Exam Success Blueprint</span>}
        subtitle={<span className="text-lg md:text-xl text-indigo-700">A step-by-step map to help you plan, track, and ace every subject using proven strategies.</span>}
      >
        {/* Search and Milestone Celebration */}
        <div className="flex items-center gap-4 mb-6">
          <input
            className="border rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search subjects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {milestone && (
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold animate-bounce">🎉 {milestone} Complete!</span>
          )}
        </div>
        {/* How to Use This Planner Info Box */}
        <div className="mb-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 shadow flex flex-col gap-2 animate-fadeIn">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🗺️</span>
              <span className="font-bold text-yellow-800 text-lg">How to use this planner</span>
            </div>
            <ul className="list-disc list-inside text-yellow-900 text-base ml-4">
              <li>Add all your exam subjects (e.g., Math, English, Chemistry).</li>
              <li>For each subject, break it down into chapters or topics you need to cover.</li>
              <li>Set a clear goal for each subject (e.g., “Score 80%”, “Master all formulas”).</li>
              <li>Assign a study strategy to each topic—hover the <span className="font-bold">?</span> for tips!</li>
              <li>Check off topics as you complete them and watch your progress grow.</li>
              <li>Use the notes area to reflect, jot reminders, or plan revision sessions.</li>
              <li>Come back anytime—your plan is saved in your browser.</li>
            </ul>
            <div className="text-yellow-700 text-sm mt-2 italic">Tip: Unsure which strategy to use? Click the <span className="font-bold">?</span> next to the strategy dropdown for a quick explanation!</div>
          </div>
        </div>
        <div className="mb-8 text-center text-xl text-blue-700 font-semibold italic bg-blue-50 rounded-lg py-3 px-4 shadow animate-fadeIn">
          {MOTIVATIONAL_QUOTES[quoteIdx]}
        </div>
        {/* Step 1: Add Subjects */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">1. Add Your Subjects</h2>
          <div className="text-sm text-gray-600 mb-2">Example: Math, English, Chemistry</div>
          <div className="flex gap-2 mb-4">
            <input
              className="border rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. Math, English, Chemistry"
              value={newSubject}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewSubject(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addSubject()}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
              onClick={addSubject}
            >Add</button>
          </div>
          <div className="flex flex-wrap gap-4">
            {subjects.map((subject, idx) => (
              <div key={idx} className="bg-white border-2 border-indigo-100 rounded-2xl shadow-lg p-6 w-full max-w-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-indigo-800 cursor-pointer" onClick={() => updateSubject(idx, { collapsed: !subject.collapsed })}>
                    {subject.name}
                  </span>
                  <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full font-bold">{subject.progress}%</span>
                </div>
                {!subject.collapsed && (
                  <>
                    {/* Step 2: Add Topics */}
                    <div className="mb-2">
                      <div className="text-xs text-gray-500 mb-1">Example: Algebra, Geometry, Trigonometry</div>
                      <input
                        className="border rounded px-2 py-1 w-full mb-2"
                        placeholder="Add topic/chapter"
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleTopicInput(e, idx)}
                      />
                      <ul className="space-y-2">
                        {getPaginatedTopics(subject, idx).map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-center gap-2 bg-sky-50 rounded px-2 py-1">
                            <input
                              type="checkbox"
                              checked={topic.done}
                              onChange={() => toggleTopic(idx, tIdx + (topicPage[idx] || 0) * TOPICS_PER_PAGE)}
                              className="accent-blue-600"
                            />
                            <span className={topic.done ? 'line-through text-gray-400' : ''}>{topic.name}</span>
                            {/* Difficulty Chip */}
                            <select
                              className="ml-2 border rounded px-1 py-0.5 text-xs bg-white text-green-700"
                              value={topic.difficulty || ''}
                              onChange={e => setTopicDifficulty(idx, tIdx + (topicPage[idx] || 0) * TOPICS_PER_PAGE, e.target.value as 'Easy' | 'Medium' | 'Hard')}
                            >
                              <option value="">Difficulty</option>
                              <option value="Easy">Easy</option>
                              <option value="Medium">Medium</option>
                              <option value="Hard">Hard</option>
                            </select>
                            {/* Status Chip */}
                            <select
                              className="ml-2 border rounded px-1 py-0.5 text-xs bg-white text-purple-700"
                              value={topic.status || 'Not Started'}
                              onChange={e => setTopicStatus(idx, tIdx + (topicPage[idx] || 0) * TOPICS_PER_PAGE, e.target.value as Topic['status'])}
                            >
                              <option value="Not Started">Not Started</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Needs Review">Needs Review</option>
                              <option value="Done">Done</option>
                            </select>
                            {/* Add Resource Button */}
                            <button
                              className="ml-2 text-blue-500 hover:underline text-xs"
                              onClick={() => openResourceModal(idx, tIdx + (topicPage[idx] || 0) * TOPICS_PER_PAGE)}
                              title="Add Resource"
                            >📎</button>
                            {/* Attached Resources */}
                            {topic.resources && topic.resources.length > 0 && (
                              <div className="flex flex-col gap-1 ml-8 mt-1">
                                {topic.resources.map((res, resIdx) => (
                                  <div key={resIdx} className="flex items-center gap-2 text-xs bg-yellow-50 rounded px-2 py-1">
                                    {res.type === 'link' ? (
                                      <a href={res.value} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">🔗 Link</a>
                                    ) : (
                                      <span>📝 {res.value}</span>
                                    )}
                                    <button className="text-red-500 ml-1" onClick={() => removeResource(idx, tIdx + (topicPage[idx] || 0) * TOPICS_PER_PAGE, resIdx)} title="Remove">✕</button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                      {/* Pagination Controls */}
                      {subject.topics.length > TOPICS_PER_PAGE && (
                        <div className="flex gap-2 mt-2">
                          <button
                            className="px-2 py-1 bg-gray-100 rounded hover:bg-blue-100"
                            disabled={(topicPage[idx] || 0) === 0}
                            onClick={() => setTopicPage(p => ({ ...p, [idx]: (p[idx] || 0) - 1 }))}
                          >Prev</button>
                          <span className="text-xs text-gray-600">Page {(topicPage[idx] || 0) + 1} of {Math.ceil(subject.topics.length / TOPICS_PER_PAGE)}</span>
                          <button
                            className="px-2 py-1 bg-gray-100 rounded hover:bg-blue-100"
                            disabled={((topicPage[idx] || 0) + 1) * TOPICS_PER_PAGE >= subject.topics.length}
                            onClick={() => setTopicPage(p => ({ ...p, [idx]: (p[idx] || 0) + 1 }))}
                          >Next</button>
                        </div>
                      )}
                    </div>
                    {/* Step 3: Set Goal & Priority */}
                    <div className="mb-2">
                      <input
                        className="border rounded px-2 py-1 w-full mb-1"
                        placeholder="Set your goal (e.g. Score 80%)"
                        value={subject.goal}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateSubject(idx, { goal: e.target.value })}
                      />
                      <select
                        className="border rounded px-2 py-1 w-full"
                        value={subject.priority}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateSubject(idx, { priority: e.target.value })}
                      >
                        {priorities.map(p => <option key={p} value={p}>{p} Priority</option>)}
                      </select>
                    </div>
                    {/* Step 4: Notes/Reflection */}
                    <textarea
                      className="border rounded px-2 py-1 w-full mt-2 text-sm"
                      placeholder="Reflection, notes, or reminders..."
                      value={subject.notes}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateSubject(idx, { notes: e.target.value })}
                      rows={2}
                    />
                    {/* Progress Bar */}
                    <div className="w-full bg-indigo-100 rounded-full h-2 mt-3">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Step 5: Summary & Encouragement */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-2">You’re on your way!</h2>
          <p className="text-lg text-green-800">Keep checking off topics and reflecting on your progress. Every step brings you closer to exam success!</p>
        </div>
        {/* Exam Date Picker and Plan View Switcher */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <div>
            <label className="font-semibold text-indigo-700 mr-2">Exam Date:</label>
            <input
              type="date"
              className="border rounded px-2 py-1"
              value={examDate}
              onChange={e => setExamDate(e.target.value)}
            />
          </div>
          <div>
            <label className="font-semibold text-indigo-700 mr-2">Plan View:</label>
            <select
              className="border rounded px-2 py-1"
              value={planView}
              onChange={e => setPlanView(e.target.value as 'daily' | 'weekly')}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
        </div>
        {/* Daily/Weekly Plan Display */}
        {planView === 'daily' ? (
          <div className="mb-8 bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Today's Plan</h3>
            {todayPlan.length === 0 ? (
              <div className="text-gray-500">All topics are done or no plan generated yet.</div>
            ) : (
              <ul className="list-disc list-inside text-blue-900">
                {todayPlan.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </div>
        ) : (
          <div className="mb-8 bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Weekly Plan</h3>
            {weekPlan.length === 0 ? (
              <div className="text-gray-500">All topics are done or no plan generated yet.</div>
            ) : (
              <div className="flex flex-col gap-4">
                {weekPlan.map((week, wIdx) => (
                  <div key={wIdx}>
                    <div className="font-semibold text-blue-700 mb-1">Week {wIdx + 1}</div>
                    <ul className="list-disc list-inside text-blue-900">
                      {week.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {/* Resource Modal (to be implemented in next steps) */}
        {resourceModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xs animate-fadeIn">
              <h3 className="text-lg font-bold mb-2 text-indigo-800">Attach Resource</h3>
              <div className="mb-3">
                <label className="mr-2 font-semibold">Type:</label>
                <select value={resourceType} onChange={e => setResourceType(e.target.value as 'link' | 'note')} className="border rounded px-2 py-1">
                  <option value="link">Link</option>
                  <option value="note">Note</option>
                </select>
              </div>
              <div className="mb-3">
                <input
                  className="border rounded px-2 py-1 w-full"
                  placeholder={resourceType === 'link' ? 'Paste a URL (https://...)' : 'Write a note...'}
                  value={resourceValue}
                  onChange={e => setResourceValue(e.target.value)}
                />
              </div>
              <div className="flex gap-2 justify-end">
                <button className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300" onClick={() => setResourceModal(null)}>Cancel</button>
                <button className="px-3 py-1 rounded bg-blue-600 text-white font-bold hover:bg-blue-700" onClick={addResource}>Add</button>
              </div>
            </div>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
};

export default MultiSubjectPlannerPage;
