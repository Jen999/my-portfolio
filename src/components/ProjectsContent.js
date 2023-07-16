import React from "react";

export default function ProjectsContent() {
    return (
        <section id="projects">
            <div className="uprightbg"></div>
            <div className="projects">
                <header><span className="sectheaders">Projects</span></header>
                <div className="projtitle">
                    <p className="projcards">
                        <img src="./publicimages/portfoliowebsite.PNG" className="projpics" alt="Not Found"/>
                        <h2>Portfolio Website 
                            <img src="./publicimages/github.png" className="github" alt="Not Found"/>
                            <img src="./publicimages/website.png" className="website" alt="Not Found"/>
                        </h2>
                        <ul>
                            <li>Self-directed digital portfolio website showcasing a comprehensive overview of experiences, skills, and achievements.</li>
                            <li>Learnt front-end tech stack independently and developed a functioning portfolio website to hone programming and web development skills.</li>
                            <li>Implemented interactive and dynamic design to enhance visual appeal and user engagement.</li>
                            <li>Incorporated responsive and mobile-friendly design for the website to function seamlessly on different devices.</li>
                            <ol>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ol>
                        </ul>
                        
                    </p>
                </div>
            </div>
        </section>
    )
}
