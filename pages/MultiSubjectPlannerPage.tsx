
import React, { useState, useEffect, useMemo } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { Subject, PlannerTask, Strategy } from '../types';
import ClipboardListIcon from '../components/icons/ClipboardListIcon';
import BarChartIcon from '../components/icons/BarChartIcon';
import { MOTIVATIONAL_QUOTES, STRATEGIES } from '../constants';
import ClockIcon from '../components/icons/ClockIcon'; 
import UsersIcon from '../components/icons/UsersIcon'; 
import ListChecksIcon from '../components/icons/ListChecksIcon';
import LightbulbIcon from '../components/icons/LightbulbIcon'; // For linked strategies
import PuzzleIcon from '../components/icons/PuzzleIcon';
import RepeatIcon from '../components/icons/RepeatIcon'; // Added import


// Mock local storage hook
const useLocalStorage = <T,>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) { // Corrected: Added braces for the catch block
      console.error(error);
    } // Corrected: Added braces for the catch block
  };
  return [storedValue, setValue];
};

const CheckCircleIconSolid: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);


const MultiSubjectPlannerPage: React.FC = () => {
  const [subjects, setSubjects] = useLocalStorage<Subject[]>('subjects', []);
  const [tasks, setTasks] = useLocalStorage<PlannerTask[]>('plannerTasks', []);
  
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectNotes, setNewSubjectNotes] = useState('');
  const [newSubjectExamDate, setNewSubjectExamDate] = useState('');
  
  const [newTaskName, setNewTaskName] = useState('');
  const [selectedSubjectForTask, setSelectedSubjectForTask] = useState<string>('');
  const [newTaskDueDate, setNewTaskDueDate] = useState<string>('');
  const [newTaskPriority, setNewTaskPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [selectedStrategiesForTask, setSelectedStrategiesForTask] = useState<string[]>([]);


  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);
  const [editingTask, setEditingTask] = useState<PlannerTask | null>(null);

  const [motivationalQuote, setMotivationalQuote] = useState('');

  const [taskFilter, setTaskFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [taskSort, setTaskSort] = useState<'dueDate' | 'priority' | 'default'>('default');


  useEffect(() => {
    setMotivationalQuote(MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);
  }, []);

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSubjectName.trim() === '') return;
    if (editingSubject) {
      setSubjects(subjects.map(s => s.id === editingSubject.id ? { ...s, name: newSubjectName, notes: newSubjectNotes, examDate: newSubjectExamDate } : s));
      setEditingSubject(null);
    } else {
      const newSubject: Subject = { 
        id: Date.now().toString(), 
        name: newSubjectName.trim(), 
        progress: 0, 
        notes: newSubjectNotes,
        examDate: newSubjectExamDate 
      };
      setSubjects([...subjects, newSubject]);
    }
    setNewSubjectName('');
    setNewSubjectNotes('');
    setNewSubjectExamDate('');
  };

  const handleDeleteSubject = (id: string) => {
    if(window.confirm("Please confirm: Are you sure you want to delete this subject and all its tasks? This can't be undone.")) {
        setSubjects(subjects.filter(s => s.id !== id));
        setTasks(tasks.filter(t => t.subjectId !== id));
    }
  };

  const handleEditSubject = (subject: Subject) => {
    setNewSubjectName(subject.name);
    setNewSubjectNotes(subject.notes || '');
    setNewSubjectExamDate(subject.examDate || '');
    setEditingSubject(subject);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };
  
  const handleUpdateSubjectProgress = (id: string, progress: number) => {
    setSubjects(subjects.map(s => s.id === id ? { ...s, progress: Math.max(0, Math.min(100, progress)) } : s));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskName.trim() === '') return;
     if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, taskName: newTaskName, subjectId: selectedSubjectForTask || undefined, dueDate: newTaskDueDate, priority: newTaskPriority, linkedStrategyIds: selectedStrategiesForTask } : t));
      setEditingTask(null);
    } else {
      const newTask: PlannerTask = { 
        id: Date.now().toString(), 
        taskName: newTaskName.trim(), 
        subjectId: selectedSubjectForTask || undefined, 
        dueDate: newTaskDueDate,
        priority: newTaskPriority,
        isCompleted: false,
        linkedStrategyIds: selectedStrategiesForTask,
      };
      setTasks([...tasks, newTask]);
    }
    setNewTaskName('');
    setSelectedSubjectForTask('');
    setNewTaskDueDate('');
    setNewTaskPriority('medium');
    setSelectedStrategiesForTask([]);
  };

  const handleToggleTask = (id: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  const handleDeleteTask = (id: string) => {
     if(window.confirm("Confirm: Are you sure you want to delete this task?")) {
        setTasks(tasks.filter(t => t.id !== id));
    }
  };
  
  const handleEditTask = (task: PlannerTask) => {
    setNewTaskName(task.taskName);
    setSelectedSubjectForTask(task.subjectId || '');
    setNewTaskDueDate(task.dueDate || '');
    setNewTaskPriority(task.priority);
    setSelectedStrategiesForTask(task.linkedStrategyIds || []);
    setEditingTask(task);
    const taskFormElement = document.getElementById('task-form-card');
    if (taskFormElement) {
        taskFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStrategySelectionForTask = (strategyId: string) => {
    setSelectedStrategiesForTask(prev => 
      prev.includes(strategyId) 
        ? prev.filter(id => id !== strategyId) 
        : [...prev, strategyId]
    );
  };

  const subjectOptions = subjects.map(subject => ({ value: subject.id, label: subject.name }));

  const pendingTasksCount = useMemo(() => tasks.filter(task => !task.isCompleted).length, [tasks]);
  const completedTasksCount = useMemo(() => tasks.filter(task => task.isCompleted).length, [tasks]);

  const priorityColorMap = {
    low: 'border-green-500',
    medium: 'border-yellow-500',
    high: 'border-red-500',
  };
  const priorityBgColorMap = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };


  const filteredAndSortedTasks = useMemo(() => {
    let currentTasks = [...tasks];
    if (taskFilter === 'pending') {
      currentTasks = currentTasks.filter(task => !task.isCompleted);
    } else if (taskFilter === 'completed') {
      currentTasks = currentTasks.filter(task => task.isCompleted);
    }

    if (taskSort === 'dueDate') {
      currentTasks.sort((a, b) => {
        if (!a.dueDate) return 1; 
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      });
    } else if (taskSort === 'priority') {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      currentTasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    }
    return currentTasks;
  }, [tasks, taskFilter, taskSort]);


  return (
    <div className="animate-fadeIn">
      <SectionWrapper 
        title="Your Multi-Subject Dashboard" 
        subtitle="Welcome! This planner is here to help organize academic life. Let's manage subjects, plan tasks, and track progress together for exam success."
      >
        
        <Card title="Study Overview" icon={<BarChartIcon className="w-8 h-8 text-indigo-600"/>} className="mb-8 bg-indigo-50 border border-indigo-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-white rounded-lg shadow">
                    <UsersIcon className="w-8 h-8 mx-auto text-blue-500 mb-1"/>
                    <p className="text-2xl font-bold">{subjects.length}</p>
                    <p className="text-sm text-gray-600">Subjects</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow">
                    <ListChecksIcon className="w-8 h-8 mx-auto text-yellow-500 mb-1"/>
                    <p className="text-2xl font-bold">{pendingTasksCount}</p>
                    <p className="text-sm text-gray-600">Pending Tasks</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow">
                    <CheckCircleIconSolid className="w-8 h-8 mx-auto text-green-500 mb-1"/>
                    <p className="text-2xl font-bold">{completedTasksCount}</p>
                    <p className="text-sm text-gray-600">Completed Tasks</p>
                </div>
                 <div className="p-3 bg-white rounded-lg shadow col-span-2 md:col-span-1">
                    <ClockIcon className="w-8 h-8 mx-auto text-purple-500 mb-1"/>
                    <p className="text-xs text-gray-500 italic mt-1 h-16 overflow-y-auto">{motivationalQuote || "Keep up the great work!"}</p>
                </div>
            </div>
        </Card>

        <Card title="Manage Your Subjects" icon={<ClipboardListIcon className="w-8 h-8" />} className="mb-8">
          <form onSubmit={handleAddSubject} className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="flex-grow">
              <label htmlFor="subjectName" className="block text-sm font-medium text-gray-700 mb-1">Subject Name*</label>
              <input
                type="text"
                id="subjectName"
                value={newSubjectName}
                onChange={(e) => setNewSubjectName(e.target.value)}
                placeholder="e.g., Calculus II"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex-grow">
              <label htmlFor="subjectExamDate" className="block text-sm font-medium text-gray-700 mb-1">Exam Date (Optional)</label>
              <input
                type="date"
                id="subjectExamDate"
                value={newSubjectExamDate}
                onChange={(e) => setNewSubjectExamDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
             <div className="flex-grow md:col-span-3">
              <label htmlFor="subjectNotes" className="block text-sm font-medium text-gray-700 mb-1">Notes for This Subject (Optional)</label>
              <textarea
                id="subjectNotes"
                value={newSubjectNotes}
                onChange={(e) => setNewSubjectNotes(e.target.value)}
                placeholder="e.g., Key formulas, important chapters mentioned"
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-3 flex gap-2 justify-end">
                <button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors">
                {editingSubject ? 'Update Subject Details' : 'Add Subject to Plan'}
                </button>
                {editingSubject && (
                <button type="button" onClick={() => { setEditingSubject(null); setNewSubjectName(''); setNewSubjectNotes(''); setNewSubjectExamDate('');}} className="w-full sm:w-auto bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors">
                    Cancel Edit
                </button>
                )}
            </div>
          </form>

          {subjects.length === 0 ? (
            <p className="text-gray-500 text-center py-4">It looks like no subjects have been added yet. Suggestion: start by adding courses above to plan effectively! This planner is ready to help.</p>
          ) : (
            <ul className="space-y-4">
              {subjects.map(subject => (
                <li key={subject.id} className="p-4 bg-gray-50 rounded-lg shadow">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="flex-grow">
                        <span className="text-lg font-medium text-gray-800">{subject.name}</span>
                        {subject.examDate && (
                            <p className="text-xs text-red-600 font-semibold mt-1 flex items-center">
                                <ClockIcon className="w-3 h-3 mr-1"/> 
                                Exam: {new Date(subject.examDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                            </p>
                        )}
                        {subject.notes && <p className="text-xs text-gray-600 mt-1 whitespace-pre-wrap">{subject.notes}</p>}
                    </div>
                    <div className="flex space-x-2 flex-shrink-0 self-end sm:self-center">
                        <button onClick={() => handleEditSubject(subject)} className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-md shadow">Edit</button>
                        <button onClick={() => handleDeleteSubject(subject.id)} className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md shadow">Delete</button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <label htmlFor={`progress-${subject.id}`} className="text-xs text-gray-500">Progress: {subject.progress}%</label>
                    <input 
                        type="range" 
                        id={`progress-${subject.id}`}
                        min="0" 
                        max="100" 
                        value={subject.progress} 
                        onChange={(e) => handleUpdateSubjectProgress(subject.id, parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1 accent-blue-500"
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>

        {/* Task Planner */}
        <Card title="Study Task Planner" icon={<BarChartIcon className="w-8 h-8" />} className="mb-8" id="task-form-card">
          <form onSubmit={handleAddTask} className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
            <div className="lg:col-span-2">
              <label htmlFor="taskName" className="block text-sm font-medium text-gray-700 mb-1">New Task*</label>
              <input
                type="text"
                id="taskName"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="e.g., Read Chapter 3, Practice Algebra Problems"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
               <label htmlFor="taskSubject" className="block text-sm font-medium text-gray-700 mb-1">Subject (Optional)</label>
              <select 
                id="taskSubject"
                value={selectedSubjectForTask} 
                onChange={(e) => setSelectedSubjectForTask(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 h-[42px]"
              >
                <option value="">General Task</option>
                {subjectOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
             <div>
              <label htmlFor="taskDueDate" className="block text-sm font-medium text-gray-700 mb-1">Due Date (Optional)</label>
              <input
                type="date"
                id="taskDueDate"
                value={newTaskDueDate}
                onChange={(e) => setNewTaskDueDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
             <div className="lg:col-span-2">
              <label htmlFor="taskPriority" className="block text-sm font-medium text-gray-700 mb-1">Priority Level</label>
              <select 
                id="taskPriority"
                value={newTaskPriority} 
                onChange={(e) => setNewTaskPriority(e.target.value as 'low' | 'medium' | 'high')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 h-[42px]"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
             <div className="lg:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Link Study Strategies (Optional)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-3 border border-gray-200 rounded-lg max-h-40 overflow-y-auto bg-gray-50">
                    {STRATEGIES.map(strategy => (
                        <label key={strategy.id} className="flex items-center space-x-2 p-1 hover:bg-gray-100 rounded text-xs cursor-pointer">
                            <input 
                                type="checkbox"
                                checked={selectedStrategiesForTask.includes(strategy.id)}
                                onChange={() => handleStrategySelectionForTask(strategy.id)}
                                className="form-checkbox h-3.5 w-3.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 accent-blue-500"
                            />
                            <span>{strategy.title}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-4 flex gap-2 justify-end items-end pt-2">
                <button type="submit" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors">
                {editingTask ? 'Update This Task' : 'Add This Task'}
                </button>
                {editingTask && (
                <button type="button" onClick={() => { setEditingTask(null); setNewTaskName(''); setSelectedSubjectForTask(''); setNewTaskDueDate(''); setNewTaskPriority('medium'); setSelectedStrategiesForTask([]);}} className="w-full sm:w-auto bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors">
                    Cancel Edit
                </button>
                )}
            </div>
          </form>

          <div className="my-6 flex flex-col sm:flex-row justify-between items-center gap-4 p-3 bg-gray-50 rounded-lg">
            <div>
              <span className="text-sm font-medium text-gray-700 mr-2">Filter tasks:</span>
              {['all', 'pending', 'completed'].map(filter => (
                <button 
                  key={filter} 
                  onClick={() => setTaskFilter(filter as 'all' | 'pending' | 'completed')}
                  className={`mr-2 px-3 py-1 text-xs rounded-md ${taskFilter === filter ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
             <div>
              <span className="text-sm font-medium text-gray-700 mr-2">Sort tasks:</span>
               {([['default', 'Default'], ['dueDate', 'Due Date'], ['priority', 'Priority']] as const).map(([sortKey, sortLabel]) => (
                <button 
                  key={sortKey} 
                  onClick={() => setTaskSort(sortKey)}
                  className={`mr-2 px-3 py-1 text-xs rounded-md ${taskSort === sortKey ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {sortLabel}
                </button>
              ))}
            </div>
          </div>

          {filteredAndSortedTasks.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              {tasks.length === 0 ? "No tasks planned yet. This planner is ready when you are! Let's add the first task above to build the plan." : "No tasks match your current filter/sort selection. Try adjusting them, or let us know if you need help finding something!"}
            </p>
          ) : (
            <ul className="space-y-3">
              {filteredAndSortedTasks.map(task => {
                const linkedStrategiesDetails = task.linkedStrategyIds
                  ?.map(id => STRATEGIES.find(s => s.id === id))
                  .filter(Boolean) as Strategy[] | undefined;
                
                return (
                <li key={task.id} className={`p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-start gap-3 transition-all border-l-4 ${priorityColorMap[task.priority]} ${task.isCompleted ? 'bg-green-50 opacity-75' : 'bg-white'}`}>
                  <div className="flex items-start flex-grow">
                    <input 
                      type="checkbox" 
                      checked={task.isCompleted} 
                      onChange={() => handleToggleTask(task.id)}
                      className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3 flex-shrink-0 accent-blue-600 mt-1"
                      aria-labelledby={`task-name-${task.id}`}
                    />
                    <div className="flex-grow">
                      <span id={`task-name-${task.id}`} className={`text-base sm:text-lg ${task.isCompleted ? 'line-through text-gray-500' : 'text-gray-800'}`}>{task.taskName}</span>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs mt-1">
                        {task.subjectId && subjects.find(s => s.id === task.subjectId) && (
                          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                            {subjects.find(s => s.id === task.subjectId)?.name}
                          </span>
                        )}
                        {task.dueDate && (
                           <span className="text-gray-500 flex items-center">
                               <ClockIcon className="w-3 h-3 mr-1" /> {new Date(task.dueDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                           </span>
                        )}
                        <span className={`px-2 py-0.5 rounded-full font-medium ${priorityBgColorMap[task.priority]}`}>{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</span>
                      </div>
                       {linkedStrategiesDetails && linkedStrategiesDetails.length > 0 && (
                        <div className="mt-2">
                          <p className="text-xs text-gray-500 mb-0.5 flex items-center">
                            <PuzzleIcon className="w-3 h-3 mr-1 text-purple-500"/>
                            Chosen strategies for this task:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {linkedStrategiesDetails.map(strat => (
                              <span key={strat.id} className="text-xs bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded-full">{strat.title}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                   <div className="flex space-x-2 flex-shrink-0 self-end sm:self-center mt-2 sm:mt-0">
                     <button onClick={() => handleEditTask(task)} className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-md shadow">Edit</button>
                    <button onClick={() => handleDeleteTask(task.id)} className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md shadow">Delete</button>
                  </div>
                </li>
              )})}
            </ul>
          )}
        </Card>
        
        <SectionWrapper title="Tips for Balancing Coursework & Exams" subtitle="Key strategies for effectively managing multiple subjects and exam preparation timelines." className="pt-8">
            <div className="grid md:grid-cols-2 gap-6">
                <Card title="Prioritize Based on Exam Dates & Difficulty" className="bg-orange-50" icon={<LightbulbIcon className="w-6 h-6 text-orange-600"/>}>
                    <p>It's recommended to use the exam dates added to guide focus. Tackle subjects with nearer exams or those found more challenging first. Use task priorities to reflect this plan.</p>
                </Card>
                <Card title="Time Blocking with Exam Focus" className="bg-teal-50" icon={<ClockIcon className="w-6 h-6 text-teal-600"/>}>
                    <p>Allocate specific blocks of time in the schedule for each subject, prioritizing those with upcoming exams. It's advisable to treat these blocks as non-negotiable appointments. A planner or calendar app can be very helpful here.</p>
                </Card>
                <Card title="Regular Review for All Subjects" className="bg-lime-50" icon={<RepeatIcon className="w-6 h-6 text-lime-600"/>}>
                    <p>Don't wait until a week before exams. It's advisable to schedule short, regular review sessions (e.g., daily or weekly) for each subject to reinforce learning and combat the forgetting curve (more about Spaced Repetition later!). Even 15-30 minutes per subject regularly can make a huge difference for exams.</p>
                </Card>
                <Card title="Interleave Study for Exam Readiness" className="bg-cyan-50" icon={<UsersIcon className="w-6 h-6 text-cyan-600"/>}>
                    <p>Consider mixing up the subjects or topics studied in one session (e.g., 30 mins Math, 30 mins History). This can improve retention and ability to switch between different types of problems, just like in a real exam (check out 'Interleaving' in Study Strategies!).</p>
                </Card>
            </div>
        </SectionWrapper>

      </SectionWrapper>
    </div>
  );
};

export default MultiSubjectPlannerPage;
