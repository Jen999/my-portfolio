import React from "react";
import redirect from "../functions/redirect";
import {FaGithub} from "react-icons/fa";
import {BsGlobe} from "react-icons/bs";


export default function ProjectsContent() {
    return (
        <section id="projects">
            <div className="projects">
                <header><span className="sectheaders">Projects</span></header>
                <div className="projtitle">
                    <p className="projcards">
                        <div className="cardheader">
                            <div className="vis2">
                                <ol>
                                    <li>React Native</li>
                                    <li>JavaScript</li>
                                    <li>Firebase</li>
                                    <li>Figma</li>
                                </ol>
                                <h2>
                                <FaGithub className="github" onClick={redirect.bind(null, "https://github.com/Jen999/spending-tracker")}/>
                                </h2>
                            </div>
                            <img src="./publicimages/spendingtracker.png" className="projpics" alt="Not Found"/>
                            <div className="sidebar">
                                <h2>Spending Tracker App</h2>
                                <h3>A mobile application aimed to tackle unhealthy habitual spending habits.</h3>
                                <div className="vis1">
                                    <ol>
                                        <li>React Native</li>
                                        <li>JavaScript</li>
                                        <li>Firebase</li>
                                        <li>Figma</li>
                                    </ol>
                                    <h2>
                                        <FaGithub className="github" onClick={redirect.bind(null, "https://github.com/Jen999/spending-tracker")}/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>Designed and developed an Android app to make budgeting of habitual expenses convenient and efficient, with the goal of empowering users to take control, make informed decisions, and build a secure financial future.</li>
                                <li>Conducted user research and designed user interface utilizing UI/UX research methodologies and Figma software, under expert supervision as an NUS credit-bearing module EG2606B.</li>
                                <li>Learnt and applied full-stack mobile application development independently using React Native and Firebase.</li>
                            </ul>
                        </div>
                    </p>
                    <p className="projcards">
                        <div className="cardheader">
                            <div className="vis2">
                                <ol>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ol>
                                <h2>
                                    <FaGithub className="github" onClick={redirect.bind(null, "https://github.com/Jen999/my-portfolio")}/>
                                    <BsGlobe className="website" onClick={redirect.bind(null, "https://jen999.github.io/my-portfolio/")}/>
                                </h2>
                            </div>
                            <img src="./publicimages/portfolioweb.png" className="projpics" alt="Not Found"/>
                            <div className="sidebar">
                                <h2>Portfolio Website</h2>
                                <h3>My personal website. You're on it right now.</h3>
                                <div className="vis1">
                                    <ol>
                                        <li>React</li>
                                        <li>JavaScript</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                    </ol>
                                    <h2>
                                        <FaGithub className="github" onClick={redirect.bind(null, "https://github.com/Jen999/my-portfolio")}/>
                                        <BsGlobe className="website" onClick={redirect.bind(null, "https://jen999.github.io/my-portfolio/")}/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>Self-directed digital portfolio website showcasing my education, work experiences, skills, and projects.</li>
                                <li>Learnt and applied front-end tech stack independently for web development. Implemented interactive and responsive design to enhance visual appeal and user experience.</li>
                            </ul>
                        </div>
                    </p>
                </div>
            </div>
        </section>
    )
}
