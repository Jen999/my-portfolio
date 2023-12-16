import React from "react";
import redirect from "../functions/redirect";


export default function ExperienceContent() {
    return (
        <section id="experience">
            <div className="experience">
                <header><span className="sectheaders">Work Experience</span></header>
                <div className="exptitle">
                    <p className="cards" onClick={redirect.bind(null, "https://www.dso.org.sg/")}> 
                        <h2>FPGA Engineer, Intern<span>MAY 2024 - AUG 2024</span></h2>
                        <h3>
                        <br/>DSO National Laboratories
                        </h3>
                        <ul>
                            <li>Summer Internship to begin in May 2024.</li>
                            <li>Training on the latest high-end FPGA structure, logic, memory performance, and high-speed data interfaces.</li>
                            <li>Implementation and testing of FPGA architecture design on LLM’s computing intensive modules.</li>
                        </ul>
                        <ol>
                            <li>LLM Architecture and Processing Flow</li>
                            <li>FPGA Development</li>
                            <li>Verilog/VHDL</li>
                        </ol>
                    </p>
                    <p className="cards" onClick={redirect.bind(null, "https://www.stengg.com/en/defence/land/land-defence-systems/")}> 
                        <h2>Software Engineer (Robotics), Intern<span>JAN 2024 - MAY 2024</span></h2>
                        <h3>
                        <br/>ST Engineering (Land Systems)
                        </h3>
                        <ul>
                            <li>Internship (credit-bearing Industrial Attachment) to begin in January 2024.</li>
                            <li>Development of algorithms to enhance multi-agent exploration system.</li>
                            <li>Rigorous software and hardware validation.</li>
                        </ul>
                        <ol>
                            <li>C++</li>
                            <li>Python</li>
                            <li>ROS</li>
                        </ol>
                    </p>
                    <p className="cards" onClick={redirect.bind(null, "https://www.ncs.co/en-sg/")}> 
                        <h2>Systems Engineer, Intern<span>MAY 2023 - JUL 2023</span></h2>
                        <h3>
                        <br/>NCS Group (NCS Engineering)
                        </h3>
                        <ul>
                            <li>Constructed interactive front-end UI for an active enterprise-level web application project utilizing React.</li>
                            <li>Developed RESTful API endpoints in ASP.NET Core with error handling and response mechanisms implemented.</li>
                            <li>Efficiently managed systems hardening of macOS devices for project deployments utilizing bash scripting.</li>
                            <li>Troubleshooting and maintenance of hardware systems deployed across multiple exhibitions.</li>
                        </ul>
                        <ol>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>ASP.NET Core</li>
                            <li>C#</li>
                            <li>HTML</li>
                            <li>OS Hardening</li>
                            <li>Troubleshooting</li>
                            <li>Bash</li>
                        </ol>
                    </p>
                    <p className="cards" onClick={redirect.bind(null, "https://research.sg.panasonic.com/")}>
                        <h2>R&D (Business Solutions), Intern<span>MAY 2022 - JUL 2022</span></h2>
                        <h3>
                        <br/>Panasonic R&D Center Singapore
                        </h3>
                        <ul>
                            <li>Managed the Requirements Analysis and System Architecture documentation.</li>
                            <li>Co-authored the UI and Wireframe Design documentation.</li>
                            <li>Modeled the prototyping and testing of LED display panel (Soft Soldering).</li>
                        </ul>
                        <ol>
                            <li>Technical Documentation</li>
                            <li>Requirements Analysis</li>
                            <li>System Architecture</li>
                        </ol>
                    </p>
                    <h2 className="view"><a target="_blank" rel="noopener noreferrer" href="./Tan_Ling_Jen_Resume.pdf">View Full Résumé</a></h2>
                </div>
            </div>
            
        </section>
    )
}