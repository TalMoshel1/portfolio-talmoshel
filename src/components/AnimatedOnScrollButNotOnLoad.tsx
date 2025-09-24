'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './AnimatedOnScrollButNotOnLoad.module.css';


interface AnimatedOnScrollButNotOnLoadProps {
  children: ReactNode; 
  threshold?: number; 
}

const AnimatedOnScrollButNotOnLoad: React.FC<AnimatedOnScrollButNotOnLoadProps> = ({ children, threshold = 0.2 }) => {
  const [shouldPlayAnimation, setShouldPlayAnimation] = useState<boolean>(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: threshold,
  });


  const hasInitialCheckOccurred = useRef<boolean>(false);

  useEffect(() => {
    if (!hasInitialCheckOccurred.current) {

      if (!inView) {
        setShouldPlayAnimation(true);
      }
      hasInitialCheckOccurred.current = true;
    }
  }, [inView]);

  const animationStateClass = shouldPlayAnimation
    ? (inView ? styles.visible : styles.hidden) 
    : styles.initial; 

  return (
    <div   style={{position:'relative', width: '100%', height: '100%', zIndex:'4'}} ref={ref} className={`${styles.base} ${animationStateClass} animatedDiv` }>
      {children}
    </div>
  );
};

export default AnimatedOnScrollButNotOnLoad;