import React from "react";
// import '../components-css/EducationCard.css'
import "../components-css/Educations.css";

type EducationCardProps = {
  title: string;
  instructor: string;
  year: number;
  indexType: string;
};

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  instructor,
  year,
  indexType,
}) => (
  <div
    style={{
      borderBlock: "1px solid white",
      //   maxWidth: "40vw",
      height: "fit-content",
      textWrap: "wrap",
      width: "40vw",
      fontSize: "1.5rem",
      paddingBlock: "1em",
    }}
    className={`${indexType}`}
  >
    <p style={{color:'rgb(122, 153, 226)'}}>{year}</p>

    <h3>{title}</h3>
    <p>Instructor: {instructor}</p>
  </div>
);

export default EducationCard;
