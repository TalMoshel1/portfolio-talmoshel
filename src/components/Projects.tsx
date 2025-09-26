'use client' 
import React, { useEffect, useState } from 'react';
import AnimatedOnScrollButNotOnLoad from "@/components/AnimatedOnScrollButNotOnLoad";
import HorizontalScroll from "@/components/HorizontalScroll";
import ServicesForBigScreen from "@/components/ServicesForBigScreen";
import './components-css/Projects.css';

const ProjectsSection = () => {
      const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
       useEffect(() => {
    let lastScroll = window.scrollY;
        console.log('??')
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        setScrollDirection("down");
      } else if (currentScroll < lastScroll) {
        setScrollDirection("up");
      }

      lastScroll = currentScroll <= 0 ? 0 : currentScroll; 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(()=>{
    console.log('scrollDirection: ', scrollDirection)
  },[scrollDirection])


  return (
    <div 
    id='projects-container'
  className={`projects-container ${
    scrollDirection === "down" ? "show" : scrollDirection === null? "hide": "show"
  }`}
        >
                      {/* <AnimatedOnScrollButNotOnLoad> */}
                             <header
        style={{
          fontSize: "2rem",
          backgroundColor: "transparent",
          textAlign: "center",
          marginTop: "2em",
          color: 'rgb(77, 125, 238);',
           fontWeight:'900'
        }}
      >
        Projects
      </header>
      <main id='main-services'>
        <div
          className="services-container-wrapper"
          style={{
            flexDirection: "column",
            position: "relative",
            width: "100%",
            right: "0",
            marginTop: "2em",
            marginBottom: "4em",
            marginInline: "0",
            gap: "1rem",
            height: "fit-content",
          }}
        >
          {/* <AnimatedOnScrollButNotOnLoad> */}
            <HorizontalScroll />
          {/* </AnimatedOnScrollButNotOnLoad> */}
        </div>
        <div
          style={{
            height: "fit-content",
            margin: "2em auto",
            width: "calc(90vw - 4rem)",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="ul-for-pc-screen"
        >
          {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
            <div
              className="services-ul-container"
              style={{
                position: "relative",
                marginBlock: "0",
                width: "fit-content",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                marginInline: "auto",
              }}
            >
              <ul
                style={{
                  width: "fit-content",
                  height: "100%",
                  gap: "1rem",
                  listStyleType: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  flexWrap: "wrap",
                  marginBottom:'2em'
                }}
                className="services"
              >
                <div
                  className="fake-border-horizontal"
                  style={{ top: "-1rem", right: "-1rem" }}
                ></div>
                <div
                  className="fake-border-vertical"
                  style={{ top: "-1rem", right: "-1rem" }}
                ></div>
                <ServicesForBigScreen />
                <div
                  className="fake-border-horizontal"
                  style={{ bottom: "1rem", left: "-1rem" }}
                ></div>
                <div
                  className="fake-border-vertical"
                  style={{ bottom: "1rem", left: "-1rem" }}
                ></div>
              </ul>
            </div>
          {/* </AnimatedOnScrollButNotOnLoad> */}
        </div>
      </main>
{/* </ AnimatedOnScrollButNotOnLoad > */}
 
    </div>
  );
};

export default ProjectsSection;