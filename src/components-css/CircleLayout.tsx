import React from "react";

interface CircleLayoutProps {
  items: any[];
  radius?: number;
}

export const CircleLayout: React.FC<CircleLayoutProps> = ({ items, radius = 120 }) => {
  const center = 150; // מרכז ה־SVG

  return (
    <svg width="300" height="300" style={{ border: "1px solid #ddd" }}>
      {items.map((item, i) => {
        const angle = (i / items.length) * 2 * Math.PI; // זווית לכל אלמנט
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);

        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="50"
            fill="black"
            style={{fontSize:'5.5rem'}}
          >
            {/* {item} */}
          </text>
        );
      })}
    </svg>
  );
};


