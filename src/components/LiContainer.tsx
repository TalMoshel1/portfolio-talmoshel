import React from 'react';

interface LiContainerProps {
    children: React.ReactNode;
}

const LiContainer: React.FC<LiContainerProps> = ({ children }) => {
    return <div className="LiContainer" style={{width: 'fit-content', height: 'fit-content'}}>{children}</div>;
};

export default LiContainer;