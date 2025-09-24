"use client";

import React from "react";
import { Varela_Round } from "next/font/google";
import useScrollBeyond20svh from "@/hooks/useScrollBeyond20svh";
import "../components-css/Logo.css";
import HeroImage from "./HeroImage";

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

const Logo: React.FC = () => {
  const scrolledBeyond = useScrollBeyond20svh();

  return (
    <div
      className="logo-section-container"
      style={{
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        flex: "1",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      <span
        style={{
          position: "absolute",
          height: "100%",
          left: "0",
          // top: scrolledBeyond ? "150%" : "0",
          transition: "top 0.5s ease-in-out",
          fontWeight: "700",
          // transform: "translateY(-50%)",
          // order: scrolledBeyond ? "2" : "1",
        }}
        className={` logo-size first-logo-container`}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <span
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              fontSize: scrolledBeyond? '1.1rem': '2rem',
              color: scrolledBeyond? 'rgba(0, 0, 120, 1)': 'white'
            }}

            className={`${scrolledBeyond? 'span-text-scrolledBeyond': 'span-text-no-scrolledBeyond'}`}
          >
            {/* Tal M */}
            <div style={{position: 'relative',
            // right:'0.5px',
            // right:'0px',
             bottom: '0px'}}
                          className={`${scrolledBeyond ? 'svg-container-scrolledBeyond' : 'svg-container-no-scrolledBeyond'}`}
>
    <svg
              className={`svg-width svg`}
              width="0"
              height="0"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{     position: 'absolute',       top: scrolledBeyond?'0.08rem': '0.025rem', 
                left: '80%', 
                transform: scrolledBeyond?'translate(-50%, -50%)': 'translate(-50%, -50%)',
 width: scrolledBeyond? '0.8rem': '1.3rem',
//  border: '1px solid red'
}}

            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke={scrolledBeyond? "rgba(0, 0, 120, 1)": 'white'}
                strokeWidth="10"
                fill="white"
              />
              <polygon
                points="35,30 35,70 55,50"
                fill="rgba(0, 0, 120, 1)"
              />
              <polygon
                points="55,30 55,70 75,50"
                fill="rgba(41, 41, 121, 0.9)"
              />
            </svg>
            </div>
        
            {/* shel */}
            <br />
          </span>


        </div>
      </span>

            {/* <HeroImage src="/Tal-Moshel-big-white-nav-removebg-preview (1).png" width="90.66px" height='16px'/> */}

   
    </div>
  );
};

export default Logo;