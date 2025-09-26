import AboutHeaderLayout from "@/components/AboutLayout";
import { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import Image from "next/image";
import "./page.css";
import FormContainer from "@/components/FormContainer";
import AnimatedOnScrollButNotOnLoad from "@/components/AnimatedOnScrollButNotOnLoad";
import "./components-css/AboutIndex.css";
import AngleTopRightSvg from "@/components/AngleTopRightSvg";
import AngleBottomLeftSvg from "@/components/AngleBottomLeftSvg";
import HorizontalScroll from "@/components/HorizontalScroll";
import dynamic from "next/dynamic";

import Form from "@/components/Form";
import ServicesForBigScreen from "@/components/ServicesForBigScreen";
import Link from "next/link";
import HeroImage from "@/components/HeroImage";
import SvgBottomShapedCorner from "@/components/SvgBottomShapedCorner";
import AboutMe from "./components-css/AboutMe";
import Skills from "./components/Skills";

import Projects from "@/components/Projects";
import Educations from "@/components/Educations";
export const metadata: Metadata = {
  title:
    "טל מושל - בוט עסקי - עמודי נחיתה - תיקון באגים - נגישות - חווית משתמש",
};

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

export default function AboutPage() {
  return (
    <>

      <AboutHeaderLayout />

      <main
        className={varela.className}
        style={{
          position: "relative",
          top: "0",
          // minHeight: "70svh",
          height: "fit-content",
          // overflow: 'hidden'
          paddingBottom: "0px !important",
        }}
      >
        <div
          className="about-background-container"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            minHeight: "100%",
            height: "fit-content",
            paddingBottom: "0px !important",
          }}
        >
          <Image
            src={"/sofa-living-room-with-copy-space2.webp"}
            alt={"living room"}
            fill={true}
          />
        </div>

        <div
          style={{
            position: "relative",
            top: "0",
            // backgroundColor: "rgba(255,255,255,0.8)",
                        backgroundColor: "rgba(255,255,255,0.8)",

            minHeight: "70svh",

            // width: "100%",
            // minHeight: "100svh",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "0px !important",
          }}
          // className='projects-backgroundColor'
        >
          {/* <main style={{ minHeight: "200vh", position: "relative" }}> */}
          <AnimatedOnScrollButNotOnLoad >
          <Projects />

          </AnimatedOnScrollButNotOnLoad>

          {/* </main> */}
        </div>
      </main>

      <main
        className={varela.className}
        style={{
          position: "relative",
          top: "0",
          // minHeight: "70svh",
          height: "fit-content",
          // overflow: 'hidden'
          paddingBottom: "0px !important",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-1px",
            height: "fit-content",
            width: "100%",
            zIndex: 3,
          }}
          className="svg-top-corner-container"
        >
          <SvgBottomShapedCorner container="formContainer" />
        </div>

        <div
          style={{
            position: "relative",
            top: "0",
            minHeight: "70svh",

            // width: "100%",
            // minHeight: "100svh",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "0px !important",
          }}
        >
          <HeroImage src="/dark-background.webp" width="100%" />
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          ></div>

          <div
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
            }}
          ></div>

          <main id="">
            <AnimatedOnScrollButNotOnLoad>
            <AboutMe />

            </AnimatedOnScrollButNotOnLoad>

                     {/* <AnimatedOnScrollButNotOnLoad> */}
                               <AnimatedOnScrollButNotOnLoad >

            <Educations />
                </AnimatedOnScrollButNotOnLoad >

            <div style={{position:'relative', height:'fit-content', width:'100%'}}>
                                 
                                  {/* <AnimatedOnScrollButNotOnLoad > */}

                                  <Skills />
                                {/* </ AnimatedOnScrollButNotOnLoad> */}
            </div>




            {/* </AnimatedOnScrollButNotOnLoad> */}
          </main>
        </div>
      </main>
    </>
  );
}
