import React from "react";

interface Props {
  container?: string; // אופציונלי
}

const SvgBottomShapedCorner: React.FC<Props> = ({ container }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 10"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100vw",
        display: "block",
        zIndex: 4,
        transform: container === "formContainer" ? "rotate(180deg)" : undefined,
      }}
      // className='projects-backgroundColor'
    >
      <path
        stroke="rgba(249, 248, 247, 1)"
        stroke-width="1"
        fill="rgba(249, 248, 247, 1)"
        d="M0 6 v0 6 h50 Z"

      />
      <path
        stroke="rgba(249, 248, 247, 1)"
        stroke-width="1"
        fill="rgba(249, 248, 247, 1)"
        d="M100 6 v0 6 h-50 Z"
              

      />
    </svg>
  );
};

export default SvgBottomShapedCorner;
