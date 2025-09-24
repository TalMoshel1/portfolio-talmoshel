import HeroImage from "@/components/HeroImage";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import { Varela_Round } from "next/font/google";

import SvgBottomShapedCorner from "@/components/SvgBottomShapedCorner";
import "../components-css/AboutLayout.css";
import CallToActionSection from "./CallToActionSection";
import AnimatedLogo from "./AnimatedLogo";

export const inter = Inter({ subsets: ["latin"] });

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

const AboutHeaderLayout: React.FC = () => {
  return (
    <header
    className='header'
      style={{ position: "relative"}}
    >
      <HeroImage src="/pc-background-image.webp" width="100%" />

      <Navbar />


      <CallToActionSection />
      <div
        className='dynamic-height'
        style={{
          backgroundColor: "rgba(77, 125, 238, 0.5)",
          width: "100vw",
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
            <div style={{rotate: 'deg(180deg)'}}>
            <SvgBottomShapedCorner />

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeaderLayout;
