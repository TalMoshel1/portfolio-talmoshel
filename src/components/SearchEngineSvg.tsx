import React from "react";

const SearchEngineSvg: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="49" fill="rgba(255,255,255,0.09)" stroke='rgba(0,0,0,0.09)' />
      <polygon points="34,40 49,50 34,60" fill="rgba(0,0,0,0.09)" />
      <polygon points="51,40 66,50 51,60" fill="rgba(255,255,255,0.09)" />
    </svg>
  );
};

export default SearchEngineSvg;
