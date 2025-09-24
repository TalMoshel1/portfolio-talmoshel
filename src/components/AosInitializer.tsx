// components/AosInitializer.tsx
'use client'; // This directive is crucial!

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget to import the AOS CSS!

interface AosInitializerProps {
  children: React.ReactNode;
}

export default function AosInitializer({ children }: AosInitializerProps) {
  useEffect(() => {
    AOS.init({
      // You can add global settings here
      duration: 800, // values from 50 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element should trigger the animation
      // ... more options
    });

    // Optional: Call AOS.refresh() on route changes if you're using the Pages Router
    // or if dynamic content loads
    // For App Router, AOS usually handles DOM changes automatically with MutationObserver
    // If not, you might need:
    // AOS.refresh(); 
  }, []);

  return <>{children}</>;
}