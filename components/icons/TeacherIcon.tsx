
import React from 'react';

const TeacherIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    {/* Teacher */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    {/* Pointer / Board context (simplified) */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 10.5L21 7.5m-3.75 3V15" />
    <rect x="2" y="5" width="6" height="8" rx="1" stroke="currentColor" fill="none" strokeWidth="1" />
  </svg>
);
export default TeacherIcon;