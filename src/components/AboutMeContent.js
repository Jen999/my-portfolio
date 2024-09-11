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
                    NUS EE & Computing<br/>
                        <h2 className="view"><a href="#education">View Education</a></h2>
                        <h2 className="view"><a href="#experience">View Experience</a></h2>
                    </h2>
                </div>
                <p style={{ display: 'flex', flexDirection: 'column' }}>
                    I am a final year university undergraduate at the National University of Singapore (NUS)
                    pursuing a Double Major in Electrical Engineering (EE) and Computing (D&E).  
                    <br/><br/>
                    I have a keen interest for programming and I am deeply fascinated by the fast-growing advancements and 
                    applications of Robotics and AI. I am passionate about learning, exploring, and experiencing new and emerging 
                    technologies that have the potential to further the capabilites of modern day solutions.
                    <br/><br/>
                    I am open to Robotics and AI projects and opportunities to gain valuable exposure and to enhance my technical expertise 
                    and knowledge in engineering. I am eager to contribute to developing impactful solutions.
                </p>
            </div>
        </section>
    )
}