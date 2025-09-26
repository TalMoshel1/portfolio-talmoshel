import React from 'react';
import './components-css/ProjectPerview.css'

type ProjectPreviewProps = {
    name?: string;
    type?: string;
    githubUrl?: string;
    websiteUrl?: string;
    technologies?: string[];
    view?: string
};

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
    name,
    type,
    githubUrl,
    websiteUrl,
    technologies,
    view
}) => {

    // if (view === 'big-screen') {
    //     return <div>
    //         haha
    //     </div>
    // }
    return (
       <>
             {type && (
                    <strong style={{ alignSelf:'flex-end', backgroundColor:'rgba(77, 125, 238, 0.5)', alignContent:'center', width:'fit-content', padding:'0.25em'}}> {type}</strong>
            )}

         {name && <h2 style={{textWrap:'wrap', fontSize: '1.5rem', textAlign:'left'}}>{name}</h2>}
            <div style={{textWrap:'wrap', backgroundColor:'inherit'}}>
         {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </a>
            )}
            {websiteUrl && (
                    <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                        Live Website
                    </a>
            )}
            </div>
   
            {technologies && technologies.length > 0 && (
                <div className={`technologies-wrapper ${view==='big-screen' && 'technologies-bottom'}`} style={{backgroundColor:'transparent'}}>
                    <strong style={{alignSelf: 'flex-start'}}>Technologies:</strong>
                    <ul style={{display: 'flex', flexDirection:'row',flexWrap: 'wrap' ,justifyContent:'start', gap:'0.5em', listStyleType: 'none', padding: 0, margin: 0}}>
                        {technologies.map((tech) => (
                            <li className='technology' style={{width: 'fit-content',padding:'0.25em',color:'black', backgroundColor:'rgba(77, 125, 238, 0.5)', borderRadius:'none', textWrap:'wrap'}} key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>
            )}
            </>
    );
};

export default ProjectPreview;