import React from 'react';

interface SectionWrapperProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, subtitle, children, className = '', id }) => {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-6 text-2xl text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="text-lg md:text-xl">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
