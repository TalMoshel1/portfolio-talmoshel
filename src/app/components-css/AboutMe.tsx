import React from 'react';
import './AboutMe.css'; // Import the CSS file for styling

function AboutMe() {
    return (
        <div style={{marginInline: 'auto'}} className='about-me-container'>
                      <h2 style={{ fontSize: "1.5rem", fontWeight: "900", textAlign:'center' }}>About me</h2>
                      <p>I specialize in bridging backend logic with intuitive frontend design to create seamless user experiences.</p>
                      <p>Passionate about creating real world products.</p>
                      <p>Exoerienced in working on legacy code.</p>
        </div>
    );
}

export default AboutMe;