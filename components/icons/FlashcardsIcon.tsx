
import React from 'react';

const FlashcardsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <rect x="3" y="6" width="14" height="10" rx="1" stroke="black" strokeWidth="0.5" fillOpacity="0.8" />
    <rect x="5" y="4" width="14" height="10" rx="1" stroke="black" strokeWidth="0.5" fillOpacity="0.6"/>
    <rect x="7" y="2" width="14" height="10" rx="1" stroke="black" strokeWidth="0.5" />
  </svg>
);
export default FlashcardsIcon;