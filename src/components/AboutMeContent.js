import React from "react";

export default function AboutMeContent() {
    return (
        <section id="about">
            <div className="aboutme">
                <header><span className="sectheaders">About Me</span></header>
                <div>
                <img src="./publicimages/profpicture.jpg" className="profpic" alt="Not Found"></img>
                    <h2 className="aboutmetext">
                    Based in Singapore,<br/>
                    NUS EE, 
                    SWE (Robotics) Intern @STEngi
                        <h2 className="view"><a href="#education">View Education</a></h2>
                        <h2 className="view"><a href="#experience">View Experience</a></h2>
                    </h2>
                </div>
                <p style={{ display: 'flex', flexDirection: 'column' }}>
                    I am a third-year university undergraduate at the National University of Singapore (NUS),
                    majoring in Electrical Engineering (EE) and specializing in the Internet of Things (IoT).  
                    <br/><br/>
                    Whilst taking up computing modules during my studies, I enjoyed programming and took interest in exploring more 
                    about software engineering. Early 2023, I discovered my passion for software development, 
                    and I became deeply fascinated with exploring and understanding about building with different 
                    tools and frameworks.
                    <br/><br/>
                    I am open to software roles and internship opportunities to gain valuable exposure in various 
                    disciplines and to enhance my competencies in software development and engineering. I am eager 
                    to contribute to impactful software solutions.
                </p>
            </div>
        </section>
    )
}