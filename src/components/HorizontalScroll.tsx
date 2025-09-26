import React from "react";
import Image from "next/image";
import "../app/components-css/HorizontalScroll.css";
import ProjectPreview from "./ProjectPerview";

export const items = [
  {
    name: "Smart Lead Bot",
    type: "Backend",
    githubUrl: "https://github.com/TalMoshel1/server-automation",
    websiteUrl: "",
    technologies: [
      "Node.js",
      "TypeScript",
      "GreenAPI",
      "Google API Speed Insight",
      "ICalendar.js",
      "OpenAI",
    ],
  },
  {
    name: "Portfolio",
    type: "Frontend",
    githubUrl: "https://github.com/TalMoshel1/talmoshel-portfolio",
    websiteUrl: "",
    technologies: ["Next.js", "TypeScript", "CSS", "HTML"],
  },

  {
    name: "Track and request boxing classes",
    type: "Frontend",
    githubUrl: "https://github.com/TalMoshel1/BoxingSchedule",
    websiteUrl:
      "https://scheduleandrequest-boxingclasses.onrender.com/calendar",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Luxon.js"],
  },
  {
    name: "Manage Boxing classes and Accept requests for private lessons",
    type: "Frontend",
    githubUrl: "https://github.com/TalMoshel1/appointment-admin",
    websiteUrl: "https://appointment-back-qd2z.onrender.com/calendar",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Luxon.js"],
  },
];

const HorizontalScroll: React.FC = () => (
  <div
    style={{
      overflowX: "auto",
      width: "100%",
      whiteSpace: "normal",
      boxSizing: "border-box",
    }}
    className="display-none"
  >
    <ul
      className="scrollingList"
      style={{
        display: "flex",
        gap: "5vw",
        marginBottom: "1em",
        boxSizing: "border-box",
        justifyContent: "start",
      }}
      dir="ltr"
    >
      {items.map((item, i) => (
        <li
          key={i}
          className="scrollisgListItem"
          style={{
            // backgroundColor:'rgba(255, 255, 255, 0.5)',
            // alignContent: "center",
                        alignContent: "start",
                        display:'flex',
                        gap:'1em',

            height:'fit-content',
            // height: "-webkit-fill-available",

            // minHeight: '34.35rem',
            border: "1px solid black",
            padding: "1rem",
            flexGrow: "1",
            flexDirection: "column",
            justifyContent: "start !important",
          }}
        >
          <ProjectPreview {...item} />
        </li>
      ))}
    </ul>
  </div>
);

export default HorizontalScroll;
