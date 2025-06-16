
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

const App: React.FC = () => {
  const location = useLocation();

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
    </div>
  );
};

export default App;