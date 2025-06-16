
import React from 'react';

const SegmentedBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5" {...props}>
    <rect x="2" y="10" width="4" height="4" />
    <rect x="7" y="10" width="4" height="4" />
    <rect x="12" y="10" width="4" height="4" />
    <rect x="17" y="10" width="4" height="4" />
  </svg>
);
export default SegmentedBarIcon;