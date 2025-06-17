import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { APP_NAME } from '../constants';
import SparklesIcon from './icons/SparklesIcon'; 
import ZapIcon from './icons/ZapIcon';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg text-base font-semibold transition-all duration-200 mx-1 ${
      isActive
        ? 'bg-sky-100 text-blue-900 shadow-sm'
        : 'text-blue-700 hover:bg-sky-50 hover:text-blue-900'
    }`;

  const sosNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg text-base font-semibold flex items-center transition-all duration-200 mx-1 shadow-md ${
      isActive
        ? 'bg-red-100 text-red-700 animate-pulse'
        : 'bg-red-500 text-white hover:bg-red-600'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200 ${
      isActive
        ? 'bg-sky-100 text-blue-900 shadow-sm'
        : 'text-blue-700 hover:bg-sky-50 hover:text-blue-900'
    }`;

  const mobileSosNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 rounded-lg text-lg font-semibold flex items-center transition-all duration-200 ${
      isActive
        ? 'bg-red-100 text-red-700 animate-pulse'
        : 'bg-red-500 text-white hover:bg-red-600'
    }`;

  return (
    <nav className="backdrop-blur-md bg-white/80 border-b border-sky-100 shadow-lg sticky top-0 z-50 rounded-b-2xl mx-auto max-w-7xl mt-2">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center text-blue-900">
              <SparklesIcon className="h-10 w-10 mr-3 text-sky-400" />
              <span className="font-extrabold text-3xl tracking-tight drop-shadow-sm">{APP_NAME}</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <NavLink to="/" className={navLinkClass}>
                <span className="text-lg md:text-xl">Home</span>
              </NavLink>
              <NavLink to="/manage-subjects" className={navLinkClass}>
                <span className="text-lg md:text-xl">Planner</span>
              </NavLink>
              <NavLink to="/subject-mastery" className={navLinkClass}>
                <span className="text-lg md:text-xl">Mastery</span>
              </NavLink>
              <NavLink to="/strategies" className={navLinkClass}>
                <span className="text-lg md:text-xl">Strategies</span>
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                <span className="text-lg md:text-xl">Contact</span>
              </NavLink>
              <NavLink to="/quick-prep" className={sosNavLinkClass}>
                <ZapIcon className="h-6 w-6 mr-2" /> <span className="text-lg md:text-xl">Exam SOS</span>
              </NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-white/70 inline-flex items-center justify-center p-2 rounded-lg text-blue-400 hover:text-blue-900 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-sky-300 shadow"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full z-50">
          <div className="mx-4 rounded-2xl shadow-2xl bg-white/90 border border-sky-100 p-4 space-y-2 backdrop-blur-md">
            <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/manage-subjects" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Planner
            </NavLink>
            <NavLink to="/subject-mastery" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Mastery
            </NavLink>
            <NavLink to="/strategies" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Strategies
            </NavLink>
            <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/quick-prep" className={mobileSosNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
               <ZapIcon className="h-5 w-5 mr-1" /> Exam SOS
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
