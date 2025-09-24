import HeroImage from "@/components/HeroImage";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import { Varela_Round } from "next/font/google";
import '../../components-css/AboutLayout.css';
import '../../components-css/UxUiHeader.css';

import SvgBottomShapedCorner from "@/components/SvgBottomShapedCorner";
import AnimatedLogo from "../AnimatedLogo";

export const inter = Inter({ subsets: ["latin"] });

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

const BotHeader: React.FC = () => {
  return (
    <header
    className='header'
      style={{ position: "relative", overflow: "hidden", width: '100vw',paddingTop: '5rem'}}
    >
      <HeroImage src="/pc-background-image.webp" width="100%" height="100%" />

      <Navbar />


      <div
        style={{
          width: "100%",
          position: "absolute",
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
        }}
      >

               <div>
            <AnimatedLogo  />

            </div>

        <div
        className='dynamic-top'
          style={{
            width: "100%",
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            transform: "translateY(-50%)",
          }}
          // Conditionally apply the 'animate' class to trigger the CSS animation
        >
          <h1
            style={{
              zIndex: 4,
              position: "relative",
              left: "0",
              textAlign: "center",
              fontSize: "2rem",
              margin: "auto",
            }}
            className={`${varela.className} call-to-action-h1 ux-ui-header-h1`}
          >
           בניית בוט ווצאפ שימקסם את התוצאות של העסק שלך
          </h1>
        </div>
      </div>

      <div
              className='dynamic-height'

        style={{
          backgroundColor: "rgba(0, 69, 14, 0.5)",
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
            <SvgBottomShapedCorner />
          </div>
        </div>
      </div>
    </header>
  );
};

export default BotHeader;
