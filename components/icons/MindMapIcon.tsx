
import React from 'react';

const MindMapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="2.5" stroke="currentColor" fill="currentColor" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12L8 8m4 4l4-4m-4 4l-4 4m4-4l4 4" />
    <circle cx="8" cy="8" r="1.5" stroke="currentColor" fill="currentColor" opacity="0.7"/>
    <circle cx="16" cy="8" r="1.5" stroke="currentColor" fill="currentColor" opacity="0.7"/>
    <circle cx="8" cy="16" r="1.5" stroke="currentColor" fill="currentColor" opacity="0.7"/>
    <circle cx="16" cy="16" r="1.5" stroke="currentColor" fill="currentColor" opacity="0.7"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 8L5 5m3 3l-3 3M16 8l3-3m-3 3l3 3M8 16L5 19M16 16l3 3" />
  </svg>
);
export default MindMapIcon;