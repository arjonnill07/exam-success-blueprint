
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { STRATEGIES, MOTIVATIONAL_QUOTES, APP_NAME } from '../constants';
import BookOpenIcon from '../components/icons/BookOpenIcon';
import TargetIcon from '../components/icons/TargetIcon';
import ClipboardListIcon from '../components/icons/ClipboardListIcon';
import ZapIcon from '../components/icons/ZapIcon'; // For SOS link

const HomePage: React.FC = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);
  }, []);

  const featuredStrategies = STRATEGIES.slice(0, 3);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center" id="hero">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Your Exam Success Guide!
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto drop-shadow-md">
          Welcome to <strong>{APP_NAME}</strong>! This platform's mission is to help you master exams using proven strategies, effective planning, and a confident mindset. Let's turn exam stress into exam success!
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Ready to make the best use of your time and build a solid foundation for those great grades you deserve?
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/strategies"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-transform transform hover:scale-105"
          >
            Explore Strategies
          </Link>
          <Link
            to="/manage-subjects"
            className="inline-block bg-transparent hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-8 rounded-lg border-2 border-yellow-400 text-lg shadow-md transition-transform transform hover:scale-105"
          >
            Plan Your Studies
          </Link>
          <Link
            to="/quick-prep"
            className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-transform transform hover:scale-105 animate-pulse"
          >
            <ZapIcon className="w-5 h-5 mr-2" /> Exam SOS!
          </Link>
        </div>
      </SectionWrapper>

      {/* Motivational Quote Section */}
      {quote && (
        <SectionWrapper className="bg-indigo-50" id="motivation">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg max-w-2xl mx-auto">
            <p className="text-gray-500 text-sm mb-2">Words of Wisdom:</p>
            <p className="text-2xl italic text-gray-700">"{quote}"</p>
          </div>
        </SectionWrapper>
      )}

      {/* Core Features Section */}
      <SectionWrapper title="How This App Helps Unlock Your Potential" subtitle="Discover the tools and techniques prepared to ensure academic success. You're supported every step of the way!" id="features">
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/manage-subjects" className="block hover:no-underline group">
            <Card title="Multi-Subject Planning" icon={<ClipboardListIcon className="w-10 h-10" />}>
              <p>Organize study schedules, balance coursework, and track progress across all subjects efficiently. Let's build a solid plan.</p>
              <span className="mt-4 inline-block text-blue-600 font-semibold group-hover:underline">Plan Studies &rarr;</span>
            </Card>
          </Link>
          <Link to="/subject-mastery" className="block hover:no-underline group">
            <Card title="Subject-Specific Mastery" icon={<BookOpenIcon className="w-10 h-10" />}>
              <p>Dive deep into individual subjects. Discover tailored techniques to overcome test anxiety and achieve true understanding for each one.</p>
              <span className="mt-4 inline-block text-blue-600 font-semibold group-hover:underline">Master Subjects &rarr;</span>
            </Card>
          </Link>
          <Link to="/strategies" className="block hover:no-underline group">
            <Card title="Proven Study Strategies" icon={<TargetIcon className="w-10 h-10" />}>
              <p>Explore a comprehensive library of scientifically-backed study methods curated to boost retention and performance, explained clearly.</p>
              <span className="mt-4 inline-block text-blue-600 font-semibold group-hover:underline">Discover Techniques &rarr;</span>
            </Card>
          </Link>
        </div>
      </SectionWrapper>

      {/* Featured Strategies Section */}
      <SectionWrapper title="Featured Techniques" subtitle="Here's a glimpse of powerful strategies recommended to start using today. They are designed to make a difference." className="bg-sky-50" id="featured-strategies">
        <div className="grid md:grid-cols-3 gap-8">
          {featuredStrategies.map((strategy) => {
            const IconComponent = strategy.icon;
            return (
              <Link key={strategy.id} to="/strategies" state={{ scrollToId: strategy.id }} className="block hover:no-underline group">
                <Card title={strategy.title} icon={<IconComponent className="w-8 h-8" />}>
                  <p>{strategy.description}</p>
                  <span className="mt-4 inline-block text-blue-600 font-semibold group-hover:underline">
                    Learn More &rarr;
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </SectionWrapper>

       {/* Call to Action Section */}
      <SectionWrapper className="bg-blue-700 text-white" id="cta">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Study Habits?</h2>
          <p className="text-lg mb-8">
            Join countless students achieving their academic goals with smarter study strategies. It's time to study smarter, not just harder, with this guide by your side.
          </p>
          <Link
            to="/strategies"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-4 px-10 rounded-lg text-xl shadow-lg transition-transform transform hover:scale-105"
          >
            Let's Get Started!
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HomePage;
