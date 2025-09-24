import React from "react";

const MySvg: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 100 20"

      style={{
        border: "green solid",
        boxSizing: "border-box",

        zIndex: 3,
      }}
    >
      <path stroke="green" stroke-width=".2" d="M10 0 V100" />
      <path stroke="green" stroke-width=".2" d="M20 0 V100" />
      <path stroke="green" stroke-width=".2" d="M30 0 V100" />
      <path stroke="green" stroke-width=".2" d="M40 0 V100" />
      <path stroke="green" stroke-width=".2" d="M50 0 V100" />
      <path stroke="green" stroke-width=".2" d="M60 0 V100" />
      <path stroke="green" stroke-width=".2" d="M70 0 V100" />
      <path stroke="green" stroke-width=".2" d="M80 0 V100" />
      <path stroke="green" stroke-width=".2" d="M90 0 V100" />
      <path stroke="green" stroke-width=".2" d="M100 0 V100" />

      <path stroke="green" stroke-width=".2" d="M0 10 H100" />
      <path stroke="green" stroke-width=".2" d="M0 20 H100" />
      {/* <path stroke="green" stroke-width=".2" d="M0 30 H100" />
      <path stroke="green" stroke-width=".2" d="M0 40 H100" /> */}
      {/* <path stroke="green" stroke-width=".2" d="M0 50 H100" /> */}
      {/* <path stroke="green" stroke-width=".2" d="M0 60 H100" />
      <path stroke="green" stroke-width=".2" d="M0 70 H100" />
      <path stroke="green" stroke-width=".2" d="M0 80 H100" />
      <path stroke="green" stroke-width=".2" d="M0 90 H100" />
      <path stroke="green" stroke-width=".2" d="M0 100 H100" /> */}

      {/* <path stroke="green" stroke-width='1' d='M20 10 H50'/>  */}
      {/* <path stroke="green" stroke-width='1' fill='green' d='M20 10 H50 V0 L80 20 L50 40 V30 H20 Z'/>  */}
      <path stroke="red" stroke-width='1' fill='none'  d="M0 0 h100 "/>

      {/* <path stroke="green" stroke-width='1' fill='none'  d="M0"/> */}
    </svg>
  );
};

export default MySvg;
