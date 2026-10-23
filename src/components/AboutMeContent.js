import React from "react";

export default function AboutMeContent() {
    return (
        <section id="about">
            <div className="aboutme">
                <header><span className="sectheaders">About Me</span></header>
                <div>
                <img src="./publicimages/profpicture2.jpg" className="profpic" alt="Not Found"></img>
                    <h2 className="aboutmetext">
                    Based in Singapore,<br/>
                    NUS EE & Computing<br/>
                        {/* <h2 className="view"><a href="#education">View Education</a></h2>
                        <h2 className="view"><a href="#experience">View Experience</a></h2> */}
                    </h2>
                </div>
                <p style={{ display: 'flex', flexDirection: 'column' }}>
                    I'm a cybersecurity professional with a software engineering background, focused on incident response, threat investigation, and penetration testing.  
                    <br/><br/>
                    I recently achieved the GIAC Certified Incident Handler (GCIH) certification with a score of 99%, following the SANS SEC504: Hacker Tools, Techniques, and Incident Handling course. I'm also a member of the GIAC Advisory Board and continue to develop my practical skills through hands-on labs and CTF environments.
                    <br/><br/>
                    I graduated from the National University of Singapore (NUS) with a Bachelor's degree in Electrical Engineering with Honours and a Second Major in Computing. My engineering background spans secure data infrastructure, privacy and data governance automation, and multi-region Go microservices, giving me a multidisciplinary foundation across hardware, software, systems, and computing.
                    <br/><br/>
                    My earlier experiences also include robotics and hardware acceleration research. I implemented 3D path planning and terrain traversability algorithms for unmanned ground vehicles using ROS and C++, and developed optimized matrix multiplication software for specialized hardware to accelerate large language model workloads.
                    <br/><br/>
                    Across these experiences, I've consistently been drawn to technically challenging problems where software, systems, and security intersect. I'm continuing to deepen my cybersecurity expertise and looking for opportunities to apply my engineering background to understanding, defending, and securing real-world systems.       
                </p>
            </div>
        </section>
    )
}