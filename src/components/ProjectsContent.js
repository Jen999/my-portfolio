import React from "react";
import redirect from "../functions/redirect";
import {FaGithub} from "react-icons/fa";
import {BsGlobe} from "react-icons/bs";

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
                            <FaGithub className="github" onClick={redirect.bind(null, "https://github.com/Jen999/my-portfolio")}/>
                            <BsGlobe className="website" onClick={redirect.bind(null, "https://jen999.github.io/my-portfolio/")}/>
                        </h2>
                        <ul>
                            <li>Self-directed digital portfolio website showcasing work experiences, skills, and achievements.</li>
                            <li>Learnt front-end tech stack independently and developed a functioning portfolio website to hone web development skills.</li>
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
