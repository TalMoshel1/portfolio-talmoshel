"use client";

import { useState, useEffect } from "react";

/**

  @returns {boolean} 
 */
const useScrollBeyond20svh = (): boolean => {
  const [scrolledBeyond, setScrolledBeyond] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY: number = window.scrollY;

      const twentySvhInPixels: number = window.innerHeight * 0.1;

      setScrolledBeyond(scrollY > twentySvhInPixels);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return scrolledBeyond;
};

export default useScrollBeyond20svh;
