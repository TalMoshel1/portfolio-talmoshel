"use client";
import React, { useEffect, useState, useRef } from "react";
import "../components-css/Navbar.css";
import useScrollBeyond20svh from "@/hooks/useScrollBeyond20svh";
import Logo from "./Logo";
import TemporaryLogo from "./TemporaryLogo";
import LateralUlNavbar from "./LateralUlNavbar";
import Image from "next/image";

const Navbar: React.FC = () => {
  const scrolledBeyond = useScrollBeyond20svh();
  const [lateralUlOpen, setLateralUlOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // פונקציית טוגל ששומרת את הפוקוס על הכפתור לאחר הסגירה
  const toggleMenu = () => {
    setLateralUlOpen(prevState => {
      const newState = !prevState;
      // אם התפריט נסגר, החזר את הפוקוס לכפתור ההמבורגר
      if (prevState && menuButtonRef.current) {
        menuButtonRef.current.focus();
      }
      return newState;
    });
  };

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: scrolledBeyond ? "#F7F6F5" : "transparent",
        color: scrolledBeyond ? "rgba(0, 0, 120, 1)" : "white",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: 5,
        height: scrolledBeyond ? "3rem" : "5rem",
        transition: "height 0.5s ease-in-out, background-color 0.3s ease-in-out",
      }}
      id="main-menu"
      aria-label="Main navigation menu"
    >
      <div className="navbar-ul-container">
        <LateralUlNavbar
          isOpen={lateralUlOpen}
          toggle={toggleMenu}
        />
        <button
          ref={menuButtonRef}
          className="hamburger-display-none"
          style={{ width: "1.5rem" }}
          onClick={toggleMenu}
          aria-expanded={lateralUlOpen}
          aria-controls="lateral-ul-navbar"
          aria-label="Open menu"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M20 7L4 7"
                stroke={scrolledBeyond ? "rgba(0, 0, 120, 1)" : "white"}
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M20 12L4 12"
                stroke={scrolledBeyond ? "rgba(0, 0, 120, 1)" : "white"}
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M20 17L4 17"
                stroke={scrolledBeyond ? "rgba(0, 0, 120, 1)" : "white"}
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
        </button>
        {!lateralUlOpen && (
          <ul className="navbar-links ul-display-none ul-shown">
            <li>
              <a href="/">בית</a>
            </li>
            <li>
              <a href="/privacy">פרטיות</a>
            </li>
            <li>
              <a style={{}} href="#contact-form">
                צור קשר
              </a>
            </li>
            <li>
              <a href="/terms-of-use">תנאי שימוש</a>
            </li>
          </ul>
        )}
        <TemporaryLogo />
      </div>
    </nav>
  );
};

export default Navbar;