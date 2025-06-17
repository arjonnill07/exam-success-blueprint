import React from 'react';

interface CardProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  id?: string;
  badge?: React.ReactNode; // New: badge for gamification
  tagline?: React.ReactNode; // New: tagline/why try this
  highlight?: React.ReactNode; // New: eureka or student quote
  onClick?: () => void; // For clickable/expandable
  isLocked?: boolean; // For locked state
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
  icon,
  id,
  badge,
  tagline,
  highlight,
  onClick,
  isLocked = false,
}) => {
  return (
    <div
      id={id}
      className={`relative bg-gradient-to-br from-white via-sky-50 to-blue-50 shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 hover:shadow-2xl focus-within:shadow-2xl transition-all duration-300 ease-in-out border-2 border-sky-100 ${isLocked ? 'opacity-60 grayscale pointer-events-none' : ''} ${className}`}
      tabIndex={id ? 0 : undefined}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {badge && (
        <div className="absolute top-4 right-4 bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold shadow animate-fadeIn">
          {badge}
        </div>
      )}
      <div className="p-7 flex flex-col items-center">
        {icon && <div className="mb-3 text-blue-600 text-4xl animate-bounce-once group-hover:animate-bounce-once">{icon}</div>}
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-1">{title}</h3>
        {tagline && <div className="text-sky-700 text-base font-semibold mb-2 text-center">{tagline}</div>}
        <div className="text-lg text-gray-700 space-y-3 text-center">
          {children}
        </div>
        {highlight && <div className="mt-4 bg-sky-100 rounded-lg px-4 py-2 text-blue-800 text-sm font-medium shadow-inner animate-fadeIn">{highlight}</div>}
        {isLocked && (
          <div className="flex flex-col items-center mt-4">
            <span className="text-3xl text-gray-400 mb-1">🔒</span>
            <span className="font-semibold text-gray-400">Locked</span>
            <span className="text-xs text-gray-400 mt-1">Discover more to unlock!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
