import HeroImage from "@/components/HeroImage";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import { Varela_Round } from "next/font/google";

import SvgTopShapedCorner from "@/components/SvgTopShapedCorner";
import ContainerLaptop from "./ContainerLaptop";
import "../components-css/AboutLayout.css";
import "../components-css/FormContainer.css";

import CallToActionSection from "./CallToActionSection";
import SvgBottomShapedCorner from "@/components/SvgBottomShapedCorner";
import Form from "./Form";

export const inter = Inter({ subsets: ["latin"] });

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

const FormContainer: React.FC = () => {
  return (
    <div style={{ position: "relative", 
    // height: "34rem" , 
        height: "40rem" , 

    maxWidth: '100vw'}}>
      <HeroImage src="/dark-background.webp" width="100%" />

      {/* <CallToActionSection /> */}
      <div
        style={{
          backgroundColor: "rgba(77, 125, 238, 0.5)",
            // background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255)), black',
          width: "100vw",
          height: "100%",
          position: "absolute",
          top: "0",
          zIndex: 3,
          display: "flex",
          justifyContent: "center",
          flexDirection:'column'
        }}
      >
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
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
          >
            {/* <SvgBottomShapedCorner container='formContainer' /> */}
          </div>
        </div>

        {/* <h2
          className={`${varela.className} contact-h2`}
          style={{
            // fontSize: "2rem",
            marginTop: "2rem",
            textAlign: "center",
            position: "absolute",
            color: "white",
          }}

         
        >
          השאר פרטים ונחזור אליך!
        </h2> */}

        <Form />
      </div>
    </div>
  );
};

export default FormContainer;
