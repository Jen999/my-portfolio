import React from "react";
import redirect from "../functions/redirect";
import toggle from "../functions/toggle";

export default function EducationContent() {
    return (
        <section id="education">
            <div className="education">
                <header><span className="sectheaders">Education</span></header>
                <div className="edutitle">
                    <p className="school"> 
                        <h2>
                            National University of Singapore
                            <span>AUG 2021 - MAY 2025 (Expected)</span>
                        </h2>
                        <h3>
                        <br/>Bachelor of Engineering (Honours)
                        </h3>
                        <ul>
                            <li>Major in Electrical Engineering</li>
                            <li>2nd Major in Computing</li>
                            <li>Grades: CGPA 4.27 / 5.00 (Honours with Distinction; Second Class Upper)</li>
                            <li><span className="coursestaken">Certifications:</span>
                                <ul className="softwaremodules">
                                    <li onClick={redirect.bind(null, "https://courses.edx.org/certificates/88d4c2eee3504a609ac5758b9d0ca7f8")}>Machine Learning and AI with Python by HarvardX</li>
                                    <li onClick={redirect.bind(null, "https://courses.edx.org/certificates/019555f326c94469b9f06cdc01153d58")}>Introduction to Java Programming I by HKUSTx</li>
                                </ul>
                            </li>
                            <li><span className="coursestaken">Relevant Courses Taken:</span>
                                <ul>
                                    <li className="software"><span className="listheaders"  onClick={toggle.bind(null, '.software')}>Computing Modules</span>
                                        <ul className="softwaremodules">
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/CS2040DE/data-structures-and-algorithms")}>Data Structures and Algorithms (Java)</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE3801/data-engineering-principles")}>Data Engineering Principles (Python)</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE4211/data-science-for-the-internet-of-things")}>Data Science for the Internet of Things (Python)</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2028/microcontroller-programming-and-interfacing")}>Microcontroller Programming and Interfacing (ARM Assembly, C)</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2211/introduction-to-machine-learning")}>Introduction to Machine Learning (Python)</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/CS2030DE/programming-methodology-ii")}>Programming Methodology II (Python, OOP)</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/CS1010E/programming-methodology")}>Programming Methodology I (Python)</li>
                                        </ul>
                                    </li>
                                    <li className="ee"><span className="listheaders" onClick={toggle.bind(null, '.ee')}>Electrical Engineering Modules</span>
                                        <ul className="eemodules">
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE4204/computer-networks")}>Computer Networks</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE3731C/signal-analytics")}>Signal Analytics</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/PC2020/electromagnetics-for-electrical-engineers")}>Electromagnetics for Electrical Engineers</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2023/signals-and-systems")}>Signals and Systems</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2022/electrical-energy-systems")}>Electrical Energy Systems</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2027/electronic-circuits")}>Electronic Circuits</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/IE2141/systems-thinking-and-dynamics")}>Systems Thinking and Dynamics</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2111A/electrical-engineering-principles-and-practice-ii")}>Electrical Engineering Principles and Practice II</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE1111A/electrical-engineering-principles-and-practice-i")}>Electrical Engineering Principles and Practice I</li>
                                        </ul>
                                    </li>
                                    {/* <li className="math"><span className="listheaders" onClick={toggle.bind(null, '.math')}>Mathematics and Statistics</span>
                                        <ul className="mathmodules">
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/EE2012/analytical-methods-in-electrical-and-computer-engineering")}>Analytical Methods in Electrical and Computer Engineering</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/MA1508E/linear-algebra-for-engineering")}>Linear Algebra for Engineering</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/MA1512/differential-equations-for-engineering")}>Differential Equations for Engineering</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/MA1511/engineering-calculus")}>Engineering Calculus</li>
                                            <li onClick={redirect.bind(null, "https://nusmods.com/courses/GEA1000/quantitative-reasoning-with-data")}>Quantitative Reasoning with Data</li>
                                        </ul>

                                    </li> */}
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            </section>
    )
}