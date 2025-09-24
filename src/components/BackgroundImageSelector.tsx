"use client"; // Keep this directive as it's a client component

import React, { useEffect } from "react";
import { usePathname } from "next/navigation"; // Changed import
import HeroImage from "@/components/HeroImage";

const BackgroundImageSelector: React.FC = () => {
  const pathname = usePathname(); // Changed hook

  useEffect(()=> {
    console.log('pathname: ', pathname);
  })
  const renderBackground = (): JSX.Element | null => {
    // Added type annotation for robustness
    switch (pathname) {
      case "/":
        return <HeroImage src="" width="100%" />;

      case "/about/":
        return <HeroImage src="/pc-background-image.webp" width="100%" />;
      default:
        return null;
    }
  };

  return <div>{renderBackground()}</div>;
};

export default BackgroundImageSelector;
