import React from 'react';

const AngleBottomLeftSvg: React.FC = () => {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute', bottom: '0', boxSizing: 'content-box', right: '0'}}>
            <path d="M0 100 v-100 h100" fill="none" stroke="black" strokeWidth="2" />
        </svg>
    );
};

export default AngleBottomLeftSvg;