import React from "react";
// import SkillCard from './SkillCard.tsx'
import { CircleLayout } from "./components-css/CircleLayout";
import './Skills.css'

const Skills: React.FC = () => {
  const backend = ["Node.js", "Nest.js", "MongoDB", "SQL", "Docker"];

  const frontEnd = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "CSS",
    "HTML",
  ];

  const others = ["Rest API's", "Git"];

  return (
    <main id='skills-main' style={{ color: "white", marginInline: "auto", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "900", marginTop:'3em', marginBottom:'1em'}}>
        My Skills
      </h2>
      <div
      className='skills-container'
        style={{
          display: "flex",
          justifyContent: "start",
          width: "100%",
          gap:'2.5em'
        //   height: "100rem",
        }}
      >
           <div style={{    display: 'flex',

    flexDirection: 'column',
    alignItems: 'center'
    }}>            <h3 style={{fontSize: '1.5rem'}}>BACKEND</h3>
        <CircleLayout items={backend} />

        </div>

           <div style={{    display: 'flex',

    flexDirection: 'column',
    alignItems: 'center'
    }}>            <h3 style={{fontSize: '1.5rem'}}>FRONTEND</h3>
        <CircleLayout items={frontEnd} />

        </div>


           <div style={{    display: 'flex',

    flexDirection: 'column',
    alignItems: 'center'
    }}>
            <h3 style={{fontSize: '1.5rem'}}>OTHERS</h3>
        <CircleLayout items={others} />
        </div>

      </div>
    </main>
  );
};

export default Skills;
