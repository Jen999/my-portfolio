import React from "react";
import redirect from "../functions/redirect";
import tiktokLogo from "../assets/logos/tiktok-logo.png";
import dsoLogo from "../assets/logos/dso-logo.png";
import stenggLogo from "../assets/logos/stengg-logo.png";
import ncsLogo from "../assets/logos/ncs-logo.png";
import panasonicLogo from "../assets/logos/panasonic-logo.png";


export default function ExperienceContent() {
    return (
        <section id="experience">
            <div className="experience">
                <header><span className="sectheaders">Work Experience</span></header>
                <div className="exptitle">
                    <p className="cards" onClick={redirect.bind(null, "https://www.tiktok.com/en/")}> 
                        <div className="jobcard">
                            <img src={tiktokLogo} alt="tiktokLogo" className="company-logo" />
                            <div className="jobinfo">
                                <h2>Software Development Engineer in Test, Intern<span>Jan 2025 - Jun 2025</span></h2>
                                <h3>
                                <br/>TikTok
                                </h3>
                                <ul>
                                    <li>Privacy and security data validation</li>
                                </ul>
                                <ol>
                                    <li>Go (Golang)</li>
                                    <li>SQL</li>
                                </ol>
                            </div>
                        </div>
                    </p>
                    <p className="cards" onClick={redirect.bind(null, "https://www.dso.org.sg/")}>
                        <div className="jobcard">
                            <img src={dsoLogo} alt="dsoLogo" className="company-logo" />
                            <div className="jobinfo">
                                <h2>Engineer, Intern<span>MAY 2024 - AUG 2024</span></h2>
                                <h3>
                                <br/>DSO National Laboratories
                                </h3>
                                <ul>
                                    <li>Explored in-memory computing for hardware acceleration of Large Language Models (LLMs).</li>
                                    <li>Developed software for the computation of matrix multiplication on the Gemini Associative Processing Unit (APU).</li>
                                    <li>Conducted thorough performance profiling of software to evaluate optimization opportunities.</li>
                                </ul>
                                <ol>
                                    <li>C Programming</li>
                                    <li>In-memory Computing</li>
                                    <li>LLM Processing Flow</li>
                                    <li>Transformer Architecture</li>
                                </ol>
                            </div>
                        </div>
                    </p>
                    <p className="cards" onClick={redirect.bind(null, "https://www.stengg.com/en/defence/land/land-defence-systems/")}> 
                        <div className="jobcard">
                            <img src={stenggLogo} alt="stenggLogo" className="company-logo" />
                            <div className="jobinfo">
                                <h2>Software Engineer (Robotics), Intern<span>JAN 2024 - MAY 2024</span></h2>
                                <h3>
                                <br/>ST Engineering (Land Systems)
                                </h3>
                                <ul>
                                    <li>Awarded with the ST Engineering Intern Award.</li>
                                    <li>Implemented and integrated modules for 3D path planning and navigation of Q-UGVs.</li>
                                    <li>Developed algorithms for effective and robust traversability analysis of terrain.</li>
                                </ul>
                                <ol>
                                    <li>C++</li>
                                    <li>ROS</li>
                                    <li>Ubuntu</li>
                                    <li>Robotics Navigation</li>
                                    <li>Bash</li>
                                </ol>
                            </div>
                        </div>
                    </p>
                    <p className="cards" onClick={redirect.bind(null, "https://www.ncs.co/en-sg/")}> 
                        <div className="jobcard">
                            <img src={ncsLogo} alt="ncsLogo" className="company-logo" />
                            <div className="jobinfo">
                                <h2>Systems Engineer, Intern<span>MAY 2023 - JUL 2023</span></h2>
                                <h3>
                                <br/>NCS Group (NCS Engineering)
                                </h3>
                                <ul>
                                    <li>Constructed interactive front-end UI for an active enterprise-level web application project utilizing React.</li>
                                    <li>Efficiently managed systems hardening of macOS devices for project deployments utilizing bash scripting.</li>
                                    <li>Troubleshooting and maintenance of hardware systems deployed across multiple exhibitions.</li>
                                </ul>
                                <ol>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>OS Hardening</li>
                                    <li>Bash</li>
                                    <li>C#</li>
                                    <li>Troubleshooting</li>
                                </ol>
                            </div>
                        </div>
                    </p>
                    <p className="cards" onClick={redirect.bind(null, "https://research.sg.panasonic.com/")}>
                        <div className="jobcard">
                            <img src={panasonicLogo} alt="panasonicLogo" className="company-logo" />
                            <div className="jobinfo">
                                <h2>R&D Engineer, Intern<span>MAY 2022 - JUL 2022</span></h2>
                                <h3>
                                <br/>Panasonic R&D Center Singapore
                                </h3>
                                <ul>
                                    <li>Managed and co-authored the requirements analysis, system architecture, and wireframe design documentation.</li>
                                    <li>Modelled the prototyping and testing of LED display panel (Soft Soldering).</li>
                                </ul>
                                <ol>
                                    <li>Technical Documentation</li>
                                    <li>Requirements Analysis</li>
                                    <li>System Architecture</li>
                                </ol>
                            </div>
                        </div>
                    </p>
                    <h2 className="view"><a target="_blank" rel="noopener noreferrer" href="./Tan_Ling_Jen_Resume.pdf">View Full Résumé</a></h2>
                </div>
            </div>
            
        </section>
    )
}