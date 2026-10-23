import React from "react";
import redirect from "../functions/redirect";
import gcihLogo from "../assets/logos/gcih.png"
import giacLogo from "../assets/logos/giac.png"

export default function Certifications() {
    return (
        <section id="experience">
            <div className="experience">
                <header><span className="sectheaders">Certifications & Achievements</span></header>
                <div className="exptitle">
                    <p className="cards" onClick={redirect.bind(null, "https://www.credly.com/badges/2b69f6d0-3a67-4695-bdb3-05b28c1e8cd3/public_url")}> 
                        <div className="jobcard">
                            <img src={gcihLogo} alt="gcihLogo" className="company-logo" />
                            <div className="jobinfo">
                                <h2>GIAC Certified Incident Handler</h2>
                                <h3>
                                <br/>Issued by Global Information ASsurance Certification (GIAC)
                                </h3>
                                <ul>
                                    <li>Passed with a score of 99%</li>
                                </ul>
                                <ol>
                                    <li>Incident Response</li>
                                    <li>Incident Handling</li>
                                    <li>Vulnerability Assessment</li>
                                    <li>Threat Investigation</li>
                                    <li>Network Forensics</li>
                                    <li>Cybersecurity</li>
                                </ol>
                            </div>
                        </div>
                    </p>
                    <p className="cards" onClick={redirect.bind(null, "https://www.credly.com/badges/067b1267-2756-49d0-bfe5-abbb764a8531/public_url")}> 
                        <div className="jobcard">
                            <img src={giacLogo} alt="giacLogo" className="company-logo" />
                            <div className="jobinfo">
                                <h2>GIAC Advisory Board</h2>
                                <h3>
                                <br/>Issued by Global Information ASsurance Certification (GIAC)
                                </h3>
                                <ul>
                                    <li>Member of the GIAC Advisory Board</li>
                                </ul>
                                <ol>
                                    <li>Cybersecurity</li>
                                    <li>Information Security</li>
                                </ol>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
            </section>
    )
}