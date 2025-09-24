import React from "react";

const SvgTopShapedCorner: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 10"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100vw",
        border: "none",
        display: "block",
        zIndex:4
      }}
    >
      <path stroke="rgba(244, 241, 238, 1)" stroke-width="1" fill="rgba(244, 241, 238, 1)" d="M0 5 l 50 0 h -50" />
      {/* <path stroke="rgba(244, 241, 238, 1)" stroke-width="1" fill="rgba(244, 241, 238, 1)" d="M100 6 l -50 -6 h 50" /> */}

    </svg>
  );
};

export default SvgTopShapedCorner;
