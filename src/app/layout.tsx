import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";
import AosInitializer from "@/components/AosInitializer"; // Adjust path as needed
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import AboutHeaderLayout from "@/components/AboutLayout";
import HeroImage from "@/components/HeroImage";
import IsLocalStorage from "@/components/ShowTermsModal";
import ShowTermsModal from "@/components/ShowTermsModal";

export const metadata: Metadata = {
  title: {
    default: "טל מושל",
    template:
      "%s - טל מושל" /*this is for /posts... for example*/,
  },
    openGraph: {
    title: "טל מושל | אתר רשמי",
    description: "ברוך הבא לאתר הרשמי של טל מושל",
    url: "https://www.talmoshel.co.il/",
    siteName: "talmoshel.co.il",
    images: [
      {
        url: "https://www.talmoshel.co.il/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "טל מושל",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
  description:
    "מתכנת React" /* this is the default text shown when posting a link to our website in social media */,

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {




  
  return (
    <html lang="he" style={{ direction: "ltr", boxSizing: 'border-box' }}>
      <body
        style={{
          minHeight: "100svh",
          position: "relative",
          height: "fit-content",
          boxSizing: "border-box",
          backgroundColor: "black",

          display: "flex",
          flexDirection: "column",
          // border: '10px solid green'
        }}
      >
        <AosInitializer>
          <main
            style={{
              zIndex: "1",
              width: "100%",
              flexGrow: "1",
              overflow: "hidden",
              paddingBottom: "0px !important",
              flexShrink:'0',
              display:'flex',
              flexDirection:'column',
              minHeight:'100svh'
            }}
          >
                      <ShowTermsModal />

            {/* <AboutHeaderLayout/> */}
            {/* <Navbar /> */}

            {children}
          </main>
        </AosInitializer>
        {/* <SendQuestionToTal /> */}
        <Footer />
      </body>
    </html>
  );
}
