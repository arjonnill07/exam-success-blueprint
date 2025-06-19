import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MultiSubjectPlannerPage from './pages/MultiSubjectPlannerPage';
import SingleSubjectMasteryPage from './pages/SingleSubjectMasteryPage';
import StrategiesDirectoryPage from './pages/StrategiesDirectoryPage';
import ContactPage from './pages/ContactPage';
import QuickPrepPage from './pages/QuickPrepPage'; // Import the new QuickPrepPage
import PomodoroTimer from './components/PomodoroTimer';

const App: React.FC = () => {
  const location = useLocation();

  // Collapsible Pomodoro Timer state
  const [pomodoroOpen, setPomodoroOpen] = React.useState(false);
  // Mobile Pomodoro modal state
  const [pomodoroMobileOpen, setPomodoroMobileOpen] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-100 to-sky-100">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manage-subjects" element={<MultiSubjectPlannerPage />} />
          <Route path="/subject-mastery" element={<SingleSubjectMasteryPage />} />
          <Route path="/strategies" element={<StrategiesDirectoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quick-prep" element={<QuickPrepPage />} /> {/* Add route for QuickPrepPage */}
        </Routes>
      </main>
      <Footer />
      {/* Collapsible Floating Pomodoro Timer (always mounted, toggled by CSS) - Desktop only */}
      <div className="fixed bottom-6 right-6 z-50 w-[350px] max-w-full hidden md:block">
        <div className={pomodoroOpen ? 'relative' : 'hidden'}>
          <button
            className="absolute -top-3 -right-3 bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-yellow-500 transition"
            onClick={() => setPomodoroOpen(false)}
            title="Collapse Pomodoro Timer"
            aria-label="Collapse Pomodoro Timer"
          >
            &minus;
          </button>
          <PomodoroTimer />
        </div>
        {!pomodoroOpen && (
          <button
            className="bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg hover:bg-yellow-500 transition"
            onClick={() => setPomodoroOpen(true)}
            title="Expand Pomodoro Timer"
            aria-label="Expand Pomodoro Timer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>
        )}
      </div>
      {/* Mobile: Small floating button and modal for Pomodoro Timer */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <button
          className="bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg hover:bg-yellow-500 transition"
          onClick={() => setPomodoroMobileOpen(true)}
          title="Open Pomodoro Timer"
          aria-label="Open Pomodoro Timer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </button>
        {/* Modal (always mounted, toggled by CSS) */}
        <div className={pomodoroMobileOpen ? 'fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50' : 'hidden'}
          onClick={e => { if (e.target === e.currentTarget) setPomodoroMobileOpen(false); }}
          tabIndex={0}
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-4 w-full max-w-xs animate-fadeIn relative" tabIndex={0}>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold"
              onClick={() => setPomodoroMobileOpen(false)}
              title="Close"
              tabIndex={0}
            >×</button>
            <PomodoroTimer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;