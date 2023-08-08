import React from "react";
import redirect from "../functions/redirect";
import toggle from "../functions/toggle";

export default function EducationContent() {
    return (
        <section id="education">
        <div className="uprightbg"></div>
            <div className="education">
                <header><span className="sectheaders">Education</span></header>
                <div className="edutitle">
                    <p className="school"> 
                        <h2>
                            National University of Singapore
                            <span>AUG 2021 - MAY 2025</span>
                        </h2>
                        <br/>Bachelor of Engineering in Electrical Engineering
                        <ul>
                            <li>Academics: GPA 4.28 / 5.00 (Honours with Distinction)</li>
                            <li>Specialization in the Internet of Things (IoT)</li>
                            <li><span className="coursestaken">Relevant Courses Taken:</span>
                                <ul>
                                    <li className="software"><span className="listheaders"  onClick={toggle.bind(null, '.software')}>Software Fundamentals</span>
                                        <ul className="softwaremodules">
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE3801/data-engineering-principles")}>Data Engineering Principles (Python)</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE4211/data-science-for-the-internet-of-things")}>Data Science for the Internet of Things (Python)</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2028/microcontroller-programming-and-interfacing")}>Microcontroller Programming and Interfacing (C)</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2211/introduction-to-machine-learning")}>Introduction to Machine Learning (Python)</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/CS1010E/programming-methodology")}>Programming Methodology (Python)</li>
                                        </ul>
                                    </li>
                                    <li className="ee"><span className="listheaders" onClick={toggle.bind(null, '.ee')}>Electrical Engineering Fundamentals</span>
                                        <ul className="eemodules">
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/PC2020/electromagnetics-for-electrical-engineers")}>Electromagnetics for Electrical Engineers</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2023/signals-and-systems")}>Signals and Systems</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2022/electrical-energy-systems")}>Electrical Energy Systems</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2027/electronic-circuits")}>Electronic Circuits</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/IE2141/systems-thinking-and-dynamics")}>Systems Thinking and Dynamics</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2111A/electrical-engineering-principles-and-practice-ii")}>Electrical Engineering Principles and Practice II</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE1111A/electrical-engineering-principles-and-practice-i")}>Electrical Engineering Principles and Practice I</li>
                                        </ul>
                                    </li>
                                    <li className="math"><span className="listheaders" onClick={toggle.bind(null, '.math')}>Mathematics and Statistics</span>
                                        <ul className="mathmodules">
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2012/analytical-methods-in-electrical-and-computer-engineering")}>Analytical Methods in Electrical and Computer Engineering</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/MA1508E/linear-algebra-for-engineering")}>Linear Algebra for Engineering</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/MA1512/differential-equations-for-engineering")}>Differential Equations for Engineering</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/MA1511/engineering-calculus")}>Engineering Calculus</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/GEA1000/quantitative-reasoning-with-data")}>Quantitative Reasoning with Data</li>
                                        </ul>

                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            </section>
    )
}