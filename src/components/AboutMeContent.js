import React from "react";
import redirect from "../functions/redirect";

export default function AboutMeContent() {
    return (
        <section id="about">
            <div className="rotatedbg"></div>
            <div className="aboutme">
                <header><span className="sectheaders">About Me</span></header>
                <div>
                <img src="./publicimages/profpic.jpg" className="profpic" alt="Not Found"></img>
                    <h2 className="aboutmetext">
                    Based in Singapore<br/>
                    NUS EEE | NCS Systems Engineer Intern
                        <h2 className="view"><a href="#education">View Education</a></h2>
                        <h2 className="view"><a href="#experience">View Experience</a></h2>
                    </h2>
                </div>
                <p>
                    I am a third-year university undergraduate at the National University of Singapore (NUS),
                    majoring in Electrical Engineering (EEE) and specializing in the <span className="underline" onClick={redirect.bind(null, 'https://cde.nus.edu.sg/ece/undergraduate/electrical-engineering/specialisations-and-minor/internet-of-things-iot/')}>Internet of Things (IoT)</span>. 
                    Whilst taking up computing modules during my studies, I took interest in exploring more 
                    about software development. 
                    <br/><br/>
                    Early this year, I discovered my passion for programming, and I became deeply fascinated with
                    learning about solving challenging problems with different solutions depending on complexity and constraints.
                    <br/><br/>
                    I am open to software roles and internship opportunities to gain valuable exposure in various 
                    disciplines and to enhance my competencies in software engineering. I enjoy exploring new languages 
                    and frameworks to work with, and I am eager to contribute to impactful software solutions.
                </p>
            </div>
        </section>
    )
}