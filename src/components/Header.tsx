'use client'
import HeroImage from "@/components/HeroImage";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import { Varela_Round } from "next/font/google";

import SvgBottomShapedCorner from "@/components/SvgBottomShapedCorner";
import BackgroundImageSelector from "@/components/BackgroundImageSelector";

import "../components-css/AboutLayout.css";
import CallToActionSection from "./CallToActionSection";

export const inter = Inter({ subsets: ["latin"] });

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

const Header: React.FC = () => {
  return (
    <header
      className="header"
      style={{ position: "relative", overflow: "hidden", width: "100vw" }}
    >
      <BackgroundImageSelector />

      <Navbar />

      <div
        style={{
          width: "100%",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          zIndex: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          flexDirection: "row",
          gap: "2rem",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "100%",
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          // Conditionally apply the 'animate' class to trigger the CSS animation
        >
          <h1
            style={{
              zIndex: 4,
              position: "relative",
              top: "55%", // This will be the start for the CSS animation
              left: "0",
              textAlign: "center",
              fontSize: "2rem",
              margin: "auto",
              width: "90%",
            }}
            className={`${varela.className} call-to-action-h1`}
          >
            אתר איטי זה הפסד — תהפוך אותו לנכס שמביא לקוחות מגוגל. 
          </h1>
          <button
            style={{
              padding: "0.75em",
              color: "black",
              backgroundColor: "#FFFF00",
              fontSize: "1rem",
              fontWeight: 700,
              transition: "background-color 0.5s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#FFDD00")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#FFFF00")
            }
          >
            <a
              style={{ display: "block", width: "100%", height: "100%" }}
              href="#contact-form"
            >
              - נתחיל לשפר
            </a>
          </button>
        </div>
      </div>
      {/* <CallToActionSection /> */}
      <div
        style={{
          backgroundColor: "rgba(77, 125, 238, 0.5)",
          width: "100vw",
          height: "25rem",
          position: "absolute",
          top: "0",
          zIndex: 3,
        }}
      >
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <div
            style={{
              position: "absolute",
              bottom: "-1px",
              height: "fit-content",
              width: "100%",
              zIndex: 3,
            }}
          >
            <SvgBottomShapedCorner />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
