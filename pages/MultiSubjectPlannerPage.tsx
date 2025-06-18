import React, { useState, useEffect, KeyboardEvent } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import PomodoroTimer from '../components/PomodoroTimer';

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
  const [newSubject, setNewSubject] = useState('');
  const [showOnboarding, setShowOnboarding] = useState(() => {
    return localStorage.getItem('plannerOnboarded') !== 'true';
  });
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [todayPlan, setTodayPlan] = useState<string[]>([]);
  const [weekPlan, setWeekPlan] = useState<string[][]>([]);
  const [topicPage, setTopicPage] = useState<{ [subjectIdx: number]: number }>({});
  const [resourceModal, setResourceModal] = useState<{ subjectIdx: number; topicIdx: number } | null>(null);

  // Gamification state
  const [badges, setBadges] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [lastCheckDate, setLastCheckDate] = useState<string | null>(null);

  // Sidebar navigation state
  const [selectedTab, setSelectedTab] = useState<'dashboard' | number>('dashboard'); // 'dashboard' or subject index

  // Add state for editing
  const [editingSubjectIdx, setEditingSubjectIdx] = useState<number | null>(null);
  const [editingSubjectName, setEditingSubjectName] = useState('');
  const [editingTopicIdx, setEditingTopicIdx] = useState<{ subjectIdx: number; topicIdx: number } | null>(null);
  const [editingTopicName, setEditingTopicName] = useState('');

  // Add exam date state
  const [examDate, setExamDate] = useState<string>('');

  // Add missing state variables
  const [planView, setPlanView] = useState<'daily' | 'weekly'>('daily');
  const [topicSearch, setTopicSearch] = useState('');
  const [topicFilter, setTopicFilter] = useState<{ status?: string; difficulty?: string; strategy?: string }>({});
  const [focusMode, setFocusMode] = useState(false);
  const [focusList, setFocusList] = useState<{ subject: string; topic: string }[]>([]);

  // Add state for mobile Pomodoro modal
  const [showPomodoro, setShowPomodoro] = useState(false);

  // Add state for mobile subject input
  const [showMobileAdd, setShowMobileAdd] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(subjects));
  }, [subjects]);

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

  // Handler to set topic difficulty
  const setTopicDifficulty = (subjectIdx: number, topicIdx: number, difficulty: 'Easy' | 'Medium' | 'Hard') => {
    const updated = [...subjects];
    updated[subjectIdx].topics[topicIdx].difficulty = difficulty;
    setSubjects(updated);
  };

  // Handler to set topic status
  const setTopicStatus = (subjectIdx: number, topicIdx: number, status: Topic['status']) => {
    const updated = [...subjects];
    updated[subjectIdx].topics[topicIdx].status = status;
    setSubjects(updated);
  };

  // Handler to open resource modal
  const openResourceModal = (subjectIdx: number, topicIdx: number) => {
    setResourceModal({ subjectIdx, topicIdx });
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

  // Helper: get all remaining topics with difficulty
  function getAllRemainingTopicsWithDifficulty() {
    const result: { subject: string; topic: string; difficulty: 'Easy' | 'Medium' | 'Hard' }[] = [];
    subjects.forEach(subj => {
      subj.topics.forEach(t => {
        if (!t.done) result.push({ subject: subj.name, topic: t.name, difficulty: t.difficulty || 'Medium' });
      });
    });
    return result;
  }

  // Adaptive auto-schedule topics based on exam date, plan view, and topic difficulty
  useEffect(() => {
    if (!examDate || subjects.length === 0) return;
    const remaining = getAllRemainingTopicsWithDifficulty();
    if (remaining.length === 0) {
      setTodayPlan([]);
      setWeekPlan([]);
      return;
    }
    const now = new Date();
    const exam = new Date(examDate);
    const daysLeft = Math.max(1, Math.ceil((exam.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
    // Assign weights: Hard=2, Medium=1.5, Easy=1
    const getWeight = (d: string) => d === 'Hard' ? 2 : d === 'Medium' ? 1.5 : 1;
    const totalWeight = remaining.reduce((sum, t) => sum + getWeight(t.difficulty), 0);
    if (planView === 'daily') {
      // Calculate how many weighted topics per day
      const perDayWeight = totalWeight / daysLeft;
      let plan: string[] = [];
      let accWeight = 0;
      for (let i = 0; i < remaining.length; i++) {
        if (accWeight < perDayWeight) {
          plan.push(`${remaining[i].subject}: ${remaining[i].topic}`);
          accWeight += getWeight(remaining[i].difficulty);
        }
      }
      setTodayPlan(plan);
    } else {
      // Weekly plan: group by week using weights
      const weeksLeft = Math.max(1, Math.ceil(daysLeft / 7));
      const perWeekWeight = totalWeight / weeksLeft;
      let plan: string[][] = [];
      let week: string[] = [];
      let accWeight = 0;
      for (let i = 0; i < remaining.length; i++) {
        week.push(`${remaining[i].subject}: ${remaining[i].topic}`);
        accWeight += getWeight(remaining[i].difficulty);
        if (accWeight >= perWeekWeight || i === remaining.length - 1) {
          plan.push(week);
          week = [];
          accWeight = 0;
        }
      }
      setWeekPlan(plan);
    }
  }, [examDate, subjects, planView]);

  // Helper to get paginated topics
  function getFilteredPaginatedTopics(subject: Subject, idx: number) {
    let topics = subject.topics;
    if (topicSearch.trim()) {
      topics = topics.filter(t => t.name.toLowerCase().includes(topicSearch.toLowerCase()));
    }
    if (topicFilter.status) {
      topics = topics.filter(t => t.status === topicFilter.status);
    }
    if (topicFilter.difficulty) {
      topics = topics.filter(t => t.difficulty === topicFilter.difficulty);
    }
    if (topicFilter.strategy) {
      topics = topics.filter(t => t.strategy === topicFilter.strategy);
    }
    const page = topicPage[idx] || 0;
    const start = page * TOPICS_PER_PAGE;
    return topics.slice(start, start + TOPICS_PER_PAGE);
  }

  // Resource Modal Implementation
  const [resourceValue, setResourceValue] = useState('');

  function removeResource(subjectIdx: number, topicIdx: number, resIdx: number) {
    const updated = [...subjects];
    updated[subjectIdx].topics[topicIdx].resources!.splice(resIdx, 1);
    setSubjects(updated);
  }

  // Helper: get today's/this week's plan topics as focus list
  useEffect(() => {
    if (!focusMode) return;
    if (planView === 'daily') {
      setFocusList(todayPlan.map(item => {
        const [subject, ...topicArr] = item.split(': ');
        return { subject, topic: topicArr.join(': ') };
      }));
    } else {
      // For weekly, flatten all topics for the week
      setFocusList(weekPlan.flat().map(item => {
        const [subject, ...topicArr] = item.split(': ');
        return { subject, topic: topicArr.join(': ') };
      }));
    }
  }, [focusMode, todayPlan, weekPlan, planView]);

  // Track streak and award badges
  useEffect(() => {
    // Streak logic: if any topic is checked today, increment streak
    const today = new Date().toISOString().slice(0, 10);
    let checkedToday = false;
    subjects.forEach(subj => {
      subj.topics.forEach(t => {
        if (t.done && (!lastCheckDate || lastCheckDate !== today)) checkedToday = true;
      });
    });
    if (checkedToday && lastCheckDate !== today) {
      setStreak(s => s + 1);
      setLastCheckDate(today);
    }
    // Award badges
    let newBadges: string[] = [];
    if (subjects.some(s => s.topics.some(t => t.done))) newBadges.push('First Topic Done');
    if (subjects.every(s => s.progress === 100 && s.topics.length > 0)) newBadges.push('All Subjects Complete');
    if (streak >= 3) newBadges.push('3-Day Streak');
    if (streak >= 7) newBadges.push('7-Day Streak');
    setBadges(newBadges);
  }, [subjects, streak, lastCheckDate]);

  // Edit handlers
  const saveEditSubject = (idx: number) => {
    if (editingSubjectName.trim()) {
      updateSubject(idx, { name: editingSubjectName });
      setEditingSubjectIdx(null);
      setEditingSubjectName('');
    }
  };

  const startEditSubject = (idx: number) => {
    setEditingSubjectIdx(idx);
    setEditingSubjectName(subjects[idx].name);
  };

  const deleteSubject = (idx: number) => {
    const updated = subjects.filter((_, i) => i !== idx);
    setSubjects(updated);
    setSelectedTab('dashboard');
  };

  const saveEditTopic = (subjectIdx: number, topicIdx: number) => {
    if (editingTopicName.trim()) {
      const updated = [...subjects];
      updated[subjectIdx].topics[topicIdx].name = editingTopicName;
      setSubjects(updated);
      setEditingTopicIdx(null);
      setEditingTopicName('');
    }
  };

  const startEditTopic = (subjectIdx: number, topicIdx: number) => {
    setEditingTopicIdx({ subjectIdx, topicIdx });
    setEditingTopicName(subjects[subjectIdx].topics[topicIdx].name);
  };

  const deleteTopic = (subjectIdx: number, topicIdx: number) => {
    const updated = [...subjects];
    updated[subjectIdx].topics.splice(topicIdx, 1);
    setSubjects(updated);
  };

  return (
    <div className="animate-fadeIn min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 py-12 px-2 md:px-0">
      {/* For Help (?) modal: */}
      {showOnboarding && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={e => { if (e.target === e.currentTarget) setShowOnboarding(false); }}
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Escape') setShowOnboarding(false); }}
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full animate-fadeIn" tabIndex={0}>
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
        <div className="flex gap-6 flex-col md:flex-row">
          {/* Sidebar: Subject List & Dashboard */}
          <aside className="w-full md:w-64 min-w-[200px] bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-2 h-fit md:sticky md:top-8 transition-all duration-200">
            <button
              className={`w-full text-left px-3 py-2 rounded-lg font-bold mb-2 transition-colors duration-150 ${selectedTab === 'dashboard' ? 'bg-blue-100 text-blue-800 shadow' : 'hover:bg-blue-50'}`}
              onClick={() => setSelectedTab('dashboard')}
              title="View overall progress and stats"
            >📊 Dashboard</button>
            {subjects.map((subject, idx) => (
              <div key={idx} className="relative group">
                {editingSubjectIdx === idx ? (
                  <input
                    className="border rounded-lg px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={editingSubjectName}
                    onChange={e => setEditingSubjectName(e.target.value)}
                    onBlur={() => saveEditSubject(idx)}
                    onKeyDown={e => e.key === 'Enter' && saveEditSubject(idx)}
                    autoFocus
                  />
                ) : (
                  <button
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors duration-150 ${selectedTab === idx ? 'bg-indigo-100 text-indigo-800 shadow' : 'hover:bg-indigo-50'}`}
                    onClick={() => setSelectedTab(idx)}
                    title={`View ${subject.name}`}
                  >
                    <span>{subject.name}</span>
                    <span className="ml-2 text-xs bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded-full font-bold">{subject.progress}%</span>
                  </button>
                )}
                {/* Edit/Delete icons for subjects */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-gray-500 hover:text-blue-600 p-1" onClick={() => startEditSubject(idx)} title="Rename subject"><span aria-label="Edit" role="img">✏️</span></button>
                  <button className="text-red-600 hover:bg-red-100 p-1 rounded-full transition" onClick={() => deleteSubject(idx)} title="Delete subject">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M9 7V5a3 3 0 013-3v0a3 3 0 013 3v2m2 0v12a2 2 0 01-2 2H8a2 2 0 01-2-2V7h12z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 11v6m4-6v6" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            {/* Add Subject Input (desktop only) */}
            <div className="hidden md:flex mt-4 gap-2">
              <input
                className="border rounded-lg px-2 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                placeholder="Add subject"
                value={newSubject}
                onChange={e => setNewSubject(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addSubject()}
                title="Type and press Enter to add"
              />
              <button className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold hover:bg-blue-700 transition" onClick={addSubject} title="Add subject">+</button>
            </div>
            {/* Mobile Add Subject Input (show when floating + is pressed) */}
            {showMobileAdd && (
              <div className="fixed inset-0 z-50 flex items-end justify-center md:hidden pb-32" style={{background: 'rgba(0,0,0,0.2)'}} onClick={e => { if (e.target === e.currentTarget) setShowMobileAdd(false); }}>
                <div className="bg-white rounded-t-2xl shadow-2xl p-4 w-full max-w-md mx-auto animate-fadeIn flex gap-2">
                  <input
                    className="border rounded-lg px-2 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    placeholder="Add subject"
                    value={newSubject}
                    onChange={e => setNewSubject(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && (addSubject(), setShowMobileAdd(false))}
                    autoFocus
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition" onClick={() => { addSubject(); setShowMobileAdd(false); }} title="Add subject">Add</button>
                </div>
              </div>
            )}
            {/* Floating Action Button for Add Subject (mobile only, only on dashboard tab) */}
            {selectedTab === 'dashboard' && (
              <button
                className="flex md:hidden absolute bottom-6 right-6 z-[100] bg-blue-600 text-white rounded-full w-16 h-16 items-center justify-center text-4xl shadow-2xl hover:bg-blue-700 transition border-4 border-white"
                style={{ boxShadow: '0 8px 32px 0 rgba(59,130,246,0.25)' }}
                onClick={() => setShowMobileAdd(true)}
                title="Quick add subject"
                aria-label="Quick add subject"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span className="sr-only">Add Subject</span>
                <span className="block md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold pointer-events-none select-none">+</span>
              </button>
            )}
          </aside>
          {/* Main Content: Dashboard or Selected Subject */}
          <main className="flex-1 w-full">
            <div className="bg-white/80 rounded-2xl shadow-2xl p-6 md:p-10 transition-all duration-200 min-h-[400px]">
              {selectedTab === 'dashboard' ? (
                // Dashboard view: show overall progress, badges, streak, and summary stats
                <div>
                  <h2 className="text-2xl font-bold text-indigo-800 mb-4">📊 Dashboard</h2>
                  <div className="mb-6 flex flex-wrap gap-4 items-center">
                    {/* Badges, Streak, Progress Chart (already implemented) */}
                    {badges.length > 0 && (
                      <div className="flex gap-2 items-center">
                        {badges.map(badge => (
                          <span key={badge} className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full font-bold shadow animate-bounce">🏅 {badge}</span>
                        ))}
                      </div>
                    )}
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">🔥 Streak: {streak} day{streak !== 1 ? 's' : ''}</div>
                    {/* Simple Progress Chart */}
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-500 mb-1">Overall Progress</span>
                      <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-3 bg-blue-500 rounded-full transition-all"
                          style={{ width: `${subjects.length ? Math.round(subjects.reduce((sum, s) => sum + s.progress, 0) / subjects.length) : 0}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-blue-700 mt-1 font-bold">{subjects.length ? Math.round(subjects.reduce((sum, s) => sum + s.progress, 0) / subjects.length) : 0}%</span>
                    </div>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-blue-700 mb-2">Subjects Overview</h3>
                    <ul className="space-y-2">
                      {subjects.map((subject, idx) => (
                        <li key={idx} className="flex items-center gap-3 bg-blue-50 rounded px-3 py-2">
                          <span className="font-semibold text-indigo-800">{subject.name}</span>
                          <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded-full font-bold">{subject.progress}%</span>
                          <button className="ml-auto text-blue-600 underline text-xs" onClick={() => setSelectedTab(idx)}>View</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Optionally, add more stats/charts here */}
                </div>
              ) : (
                // Single Subject View
                <div>
                  {/* Only render the selected subject's card and topics */}
                  <h2 className="text-2xl font-bold text-indigo-800 mb-4">{subjects[selectedTab as number]?.name}</h2>
                  {/* Render only the selected subject's details and topics, reusing the existing UI for a single subject */}
                  <div className="mb-2">
                    <div className="text-xs text-gray-500 mb-1">Example: Algebra, Geometry, Trigonometry</div>
                    <input
                      className="border rounded px-2 py-1 w-full mb-2"
                      placeholder="Add topic/chapter"
                      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleTopicInput(e, selectedTab as number)}
                    />
                    {window.innerWidth < 768 && (
                      <button
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold hover:bg-blue-700 transition mt-1 mb-2 w-full"
                        onClick={() => {
                          const input = document.querySelector('input[placeholder=\'Add topic/chapter\']') as HTMLInputElement;
                          if (input && input.value.trim()) {
                            addTopic(selectedTab as number, input.value);
                            input.value = '';
                          }
                        }}
                      >Add Topic</button>
                    )}
                    <ul className="space-y-2">
                      {getFilteredPaginatedTopics(subjects[selectedTab as number], selectedTab as number).map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2 bg-sky-50 rounded px-2 py-1 group relative">
                          <input
                            type="checkbox"
                            checked={topic.done}
                            onChange={() => toggleTopic(selectedTab as number, tIdx + (topicPage[selectedTab as number] || 0) * TOPICS_PER_PAGE)}
                            className="accent-blue-600"
                          />
                          {editingTopicIdx && editingTopicIdx.subjectIdx === selectedTab && editingTopicIdx.topicIdx === tIdx + (topicPage[selectedTab as number] || 0) * TOPICS_PER_PAGE ? (
                            <input
                              className="border rounded px-1 py-0.5 text-sm w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              value={editingTopicName}
                              onChange={e => setEditingTopicName(e.target.value)}
                              onBlur={() => saveEditTopic(selectedTab as number, tIdx + (topicPage[selectedTab as number] || 0) * TOPICS_PER_PAGE)}
                              onKeyDown={e => e.key === 'Enter' && saveEditTopic(selectedTab as number, tIdx + (topicPage[selectedTab as number] || 0) * TOPICS_PER_PAGE)}
                              autoFocus
                            />
                          ) : (
                            <span className={topic.done ? 'line-through text-gray-400' : ''}>{topic.name}</span>
                          )}
                          {/* Difficulty Chip */}
                          <select
                            className="ml-2 border rounded px-1 py-0.5 text-xs bg-white text-green-700"
                            value={topic.difficulty || ''}
                            onChange={e => setTopicDifficulty(selectedTab as number, tIdx + (topicPage[selectedTab as number] || 0) * TOPICS_PER_PAGE, e.target.value as 'Easy' | 'Medium' | 'Hard')}
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
                            onChange={e => setTopicStatus(selectedTab as number, tIdx + (topicPage[selectedTab as number] || 0) * TOPICS_PER_PAGE, e.target.value as Topic['status'])}
                          >
                            <option value="Not Started">Not Started</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Needs Review">Needs Review</option>
                            <option value="Done">Done</option>
                          </select>
                          {/* Add Resource Button */}
                          <button
                            className="ml-2 text-blue-500 hover:underline text-xs"
                            onClick={() => openResourceModal(selectedTab as number, tIdx + (topicPage[selectedTab as number] || 0) * TOPICS_PER_PAGE)}
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
                                  <button className="text-red-500 ml-1" onClick={() => removeResource(selectedTab as number, tIdx + (topicPage[selectedTab as number] || 0) * TOPICS_PER_PAGE, resIdx)} title="Remove">✕</button>
                                </div>
                              ))}
                            </div>
                          )}
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-gray-500 hover:text-blue-600 p-1" onClick={() => startEditTopic(selectedTab as number, tIdx + (topicPage[selectedTab as number] || 0) * TOPICS_PER_PAGE)} title="Rename topic"><span aria-label="Edit" role="img">✏️</span></button>
                            <button className="text-red-600 hover:bg-red-100 p-1 rounded-full transition" onClick={() => deleteTopic(selectedTab as number, tIdx + (topicPage[selectedTab as number] || 0) * TOPICS_PER_PAGE)} title="Delete topic">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M9 7V5a3 3 0 013-3v0a3 3 0 013 3v2m2 0v12a2 2 0 01-2 2H8a2 2 0 01-2-2V7h12z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 11v6m4-6v6" />
                              </svg>
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {/* Pagination Controls */}
                    {subjects[selectedTab as number].topics.length > TOPICS_PER_PAGE && (
                      <div className="flex gap-2 mt-2">
                        <button
                          className="px-2 py-1 bg-gray-100 rounded hover:bg-blue-100"
                          disabled={(topicPage[selectedTab as number] || 0) === 0}
                          onClick={() => setTopicPage(p => ({ ...p, [selectedTab as number]: (p[selectedTab as number] || 0) - 1 }))}
                        >Prev</button>
                        <span className="text-xs text-gray-600">Page {(topicPage[selectedTab as number] || 0) + 1} of {Math.ceil(subjects[selectedTab as number].topics.length / TOPICS_PER_PAGE)}</span>
                        <button
                          className="px-2 py-1 bg-gray-100 rounded hover:bg-blue-100"
                          disabled={((topicPage[selectedTab as number] || 0) + 1) * TOPICS_PER_PAGE >= subjects[selectedTab as number].topics.length}
                          onClick={() => setTopicPage(p => ({ ...p, [selectedTab as number]: (p[selectedTab as number] || 0) + 1 }))}
                        >Next</button>
                      </div>
                    )}
                  </div>
                  {/* Step 3: Set Goal & Priority */}
                  <div className="mb-2">
                    <input
                      className="border rounded px-2 py-1 w-full mb-1"
                      placeholder="Set your goal (e.g. Score 80%)"
                      value={subjects[selectedTab as number].goal}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateSubject(selectedTab as number, { goal: e.target.value })}
                    />
                    <select
                      className="border rounded px-2 py-1 w-full"
                      value={subjects[selectedTab as number].priority}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateSubject(selectedTab as number, { priority: e.target.value })}
                    >
                      {priorities.map(p => <option key={p} value={p}>{p} Priority</option>)}
                    </select>
                  </div>
                  {/* Step 4: Notes/Reflection */}
                  <textarea
                    className="border rounded px-2 py-1 w-full mt-2 text-sm"
                    placeholder="Reflection, notes, or reminders..."
                    value={subjects[selectedTab as number].notes}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateSubject(selectedTab as number, { notes: e.target.value })}
                    rows={2}
                  />
                  {/* Progress Bar */}
                  <div className="w-full bg-indigo-100 rounded-full h-2 mt-3">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${subjects[selectedTab as number].progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </main>
          {/* Right Sidebar: Pomodoro Timer (desktop only) */}
          <aside className="hidden md:block w-80 min-w-[300px] ml-2">
            <div className="sticky top-8">
              <div className="bg-gradient-to-r from-yellow-50 via-white to-blue-50 border border-yellow-200 shadow-xl rounded-2xl p-4 flex flex-col items-center">
                <span className="text-lg font-bold text-yellow-700 mb-2 flex items-center gap-2">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Pomodoro Focus Timer
                </span>
                <PomodoroTimer />
              </div>
            </div>
          </aside>
          {/* Floating Pomodoro Button for mobile */}
          <button
            className="fixed md:hidden bottom-6 right-6 z-50 bg-yellow-400 text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg hover:bg-yellow-500 transition"
            style={{ boxShadow: '0 4px 24px 0 rgba(251,191,36,0.25)' }}
            onClick={() => setShowPomodoro(true)}
            title="Open Pomodoro Timer"
            aria-label="Open Pomodoro Timer"
          >
            <span className="sr-only">Open Pomodoro Timer</span>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>
          {/* Pomodoro Modal for mobile */}
          {showPomodoro && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
              onClick={e => { if (e.target === e.currentTarget) setShowPomodoro(false); }}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Escape') setShowPomodoro(false); }}
              aria-modal="true"
              role="dialog"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xs animate-fadeIn" tabIndex={0}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold text-yellow-700 flex items-center gap-2">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Pomodoro Timer
                  </span>
                  <button className="text-gray-500 hover:text-red-600 text-2xl font-bold" onClick={() => setShowPomodoro(false)} title="Close" tabIndex={0}>×</button>
                </div>
                <PomodoroTimer />
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>
      {/* Persistent Help Button */}
      <button
        className="fixed left-6 bottom-6 z-50 bg-yellow-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg hover:bg-yellow-500 transition"
        style={{ boxShadow: '0 4px 24px 0 rgba(251,191,36,0.25)' }}
        onClick={() => setShowOnboarding(true)}
        title="Show planner walkthrough"
        aria-label="Show planner walkthrough"
      >
        ?
      </button>
    </div>
  );
};

export default MultiSubjectPlannerPage;
