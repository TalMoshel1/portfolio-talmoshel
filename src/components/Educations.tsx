import React from "react";
import EducationCard from "./EducationCard";
import "../components-css/Educations.css";

const Educations: React.FC = () => {
  const educations = [
    { title: "Hands-On Academy ", instructor: "Niv Itzhaky", year: "2024" },
    {
      title: "Netcraft Academy ",
      instructor: "Serge Krul and David Levy Meir",
      year: "2022",
    },
 
  ];

  return (
    <section
      style={{
        color: "white",
        width: "fit-content",
        marginInline: "auto",
        textAlign: "center",
        position: "relative",
      }}

      id='education-container'

    >
      <h2 style={{fontSize:'2rem', marginBottom:'1em', color:'rgb(122, 153, 226)', fontWeight:'900'}}>Education</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems:'center',
          listStyleType: "none",
          padding: 0,
          gap: "1em",
          position:'relative',
          marginBottom:'2em'
        }}
      >
        <div style={{position:'absolute', height:'100%', width:'1rem', top:'0', left:'50%', transform:'translateX(-50%)', border:'none'}}></div>
        {educations.map((education, index) => {
          const isEven = index % 2 === 0; // ⬅️ 
          const indexType = isEven ? "zoogi" : "not-zoogi"; 

          return (
            // ➡️ הצגת האינדקס, הפריט וסוג האינדקס
            <li
              key={index}
              style={{
                position: "relative",
                boxSizing: "border-box",
                maxWidth:'40vw',
                height:'fit-content',
                textWrap:'wrap',
                // border:'1px solid green'
                
              }}
              className={`${indexType === 'zoogi' ? 'li-zoogi' : 'li-not-zoogi'}`}
            >
              <EducationCard
                indexType={indexType}
                title={education.title}
                instructor={education.instructor}
                year={education.year}
                
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Educations;
