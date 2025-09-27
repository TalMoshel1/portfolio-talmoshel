'use client'
import React from 'react';

const CallToActionButton = () => (
    <button
        style={{
            padding: "0.75em",
            color: "black",
            backgroundColor: 'rgb(231 255 0)',
            fontSize: "1rem",
            fontWeight: 700,
            transition: 'background-color 0.3s ease',
        }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = 'rgba(231 255 0,0.8)')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = 'rgb(231 255 0)')}
    >
        <a
            style={{ display: 'block', width: '100%', height: '100%', color: 'inherit', textDecoration: 'none' }}
            href="#contact-form"
        >
           Download CV
        </a>
    </button>
);

export default CallToActionButton;