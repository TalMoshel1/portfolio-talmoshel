'use client';

import React, { useState, useEffect } from 'react';
import ContainerLaptop from './ContainerLaptop';



const AnimatedLogo: React.FC = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Set isAnimated to true after the initial render, triggering both animations
        setIsAnimated(true);
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div>

<ContainerLaptop isAnimated={isAnimated}/>

        </div>
        
    );
};

export default AnimatedLogo;