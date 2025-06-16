
import React from 'react';

const PyramidIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
    <path d="M12 2L2 22h20L12 2zm0 3.84L17.11 20H6.89L12 5.84zM12 12.5l-3.46 5.5H15.46L12 12.5z" />
    <path d="M4 20h16v1H4z" /> 
    <path d="M7 16h10v1H7z" />
    <path d="M10 12h4v1h-4z" />
  </svg>
);
// A simpler pyramid:
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
//   <path d="M12 2L2 22h20L12 2zM12 6.85L16.31 20H7.69L12 6.85z" />
// </svg>
export default PyramidIcon;