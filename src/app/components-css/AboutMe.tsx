import React from 'react';
import './AboutMe.css'; // Import the CSS file for styling

function AboutMe() {
    return (
        <div id='about-me-container' style={{marginInline: 'auto', padding:'1rem',  textAlign:'center', marginBlock:'2em' }} className='about-me-container'>
                      <h2 style={{ fontSize: "2rem", fontWeight: "900", color: 'rgb(122, 153, 226)'}}>About me</h2>
                        <p>I am a Fullstack developer focused on creating products that improve businesses.</p>
                      <div style={{color: 'rgba(122, 153, 226, 1)'}}>
                      <p>I specialize in bridging backend logic with intuitive frontend design to create seamless user experiences.</p>
                      <p>Passionate about creating real world products.</p>
                      <p>Exoerienced in working on legacy code.</p>
                      </div>


    

        </div>
    );
}

export default AboutMe;