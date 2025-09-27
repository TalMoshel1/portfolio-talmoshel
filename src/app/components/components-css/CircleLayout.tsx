import React from "react";
import './CircleLayout.css'

interface CircleLayoutProps {
  items: any[];
  radius?: number;
}

export const CircleLayout: React.FC<CircleLayoutProps> = ({
  items,
  radius = 120,
}) => {
  const size = 350;        // הגודל המקורי של ה־viewBox
  const center = size / 2; // מרכז הגרף

  return (
    <svg
      // width="35vw"   
      // height="35vh"  
      viewBox={`0 0 ${size} ${size}`} // שומר יחס נכון
      className="circle"
    >
      {/* גבול המעגל */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke="rgba(255,255,255,0.1)"
        strokeWidth={2}
        fill="none"
      />

      {items.map((item, i) => {
        const angle = (i / items.length) * 2 * Math.PI;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);

        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            alignmentBaseline="middle"
            // fontSize="24"
            fill="white"
            className='skill-name'
          >
            {item}
          </text>
        );
      })}
    </svg>
  );
};
