import React from "react";
import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";
import redirect from "../functions/redirect";

export default function HomePageLinks() {
    return (
      <div className="links" id="link">
        < SiLinkedin className="logos" onClick={redirect.bind(null, 'https://www.linkedin.com/in/tanlingjen')}/>
        < SiGmail className="logos" onClick={redirect.bind(null, 'mailto:tanlingjen.tlj@gmail.com')}/>
        < SiGithub className="logos" onClick={redirect.bind(null, 'https://github.com/Jen999')}/>
      </div>
    );
}