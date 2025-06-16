
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { APP_NAME } from '../constants';
import SparklesIcon from './icons/SparklesIcon'; 
import ZapIcon from './icons/ZapIcon'; // For SOS link

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive
        ? 'bg-blue-700 text-white'
        : 'text-gray-300 hover:bg-blue-600 hover:text-white'
    } transition-colors`;
  
  const sosNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium flex items-center ${
      isActive
        ? 'bg-red-600 text-white animate-pulse'
        : 'bg-red-500 text-white hover:bg-red-600'
    } transition-colors shadow-md`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium ${
      isActive
        ? 'bg-blue-700 text-white'
        : 'text-gray-300 hover:bg-blue-600 hover:text-white'
    } transition-colors`;
  
  const mobileSosNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium flex items-center ${
      isActive
        ? 'bg-red-600 text-white animate-pulse'
        : 'bg-red-500 text-white hover:bg-red-600'
    } transition-colors`;

  return (
    <nav className="bg-blue-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center text-white">
              <SparklesIcon className="h-8 w-8 mr-2 text-yellow-400" />
              <span className="font-bold text-xl">{APP_NAME}</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/manage-subjects" className={navLinkClass}>
                Multi-Subject Plan
              </NavLink>
              <NavLink to="/subject-mastery" className={navLinkClass}>
                Subject Mastery
              </NavLink>
              <NavLink to="/strategies" className={navLinkClass}>
                Study Strategies
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
              <NavLink to="/quick-prep" className={sosNavLinkClass}>
                <ZapIcon className="h-5 w-5 mr-1" /> Exam SOS!
              </NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/manage-subjects" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Multi-Subject Plan
            </NavLink>
            <NavLink to="/subject-mastery" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Subject Mastery
            </NavLink>
            <NavLink to="/strategies" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Study Strategies
            </NavLink>
            <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/quick-prep" className={mobileSosNavLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
               <ZapIcon className="h-5 w-5 mr-1" /> Exam SOS!
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
