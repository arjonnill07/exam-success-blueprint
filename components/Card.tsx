import React from 'react';

interface CardProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  id?: string; // Added id prop
}

const Card: React.FC<CardProps> = ({ title, children, className = '', icon, id }) => {
  return (
    <div 
      id={id} // Applied id prop
      className={`bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-xl focus-within:shadow-xl transition-all duration-300 ease-in-out ${className}`}
      tabIndex={id ? 0 : undefined} // Make it focusable if it has an ID, for focus-within
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon && <div className="mr-3 text-blue-600">{icon}</div>}
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <div className="text-gray-600 space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
