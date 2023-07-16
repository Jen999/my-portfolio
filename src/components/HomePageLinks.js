import React from "react";
import redirect from "../functions/redirect";

export default function HomePageLinks() {
    return (
      <div className="links" id="link">
        <p>
          Get In Touch
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </p>
        <div className="get-in-touch-menu">
          <button
            type="button"
            onClick={redirect.bind(null, 'https://www.linkedin.com/in/tanlingjen')}
          >
            <span></span>LinkedIn
          </button>
          <button
            type="button"
            onClick={redirect.bind(null, 'mailto:tanlingjen.tlj@gmail.com')}
          >
            <span></span>Gmail
          </button>
          <button
            type="button"
            onClick={redirect.bind(null, 'https://github.com/Jen999')}
          >
            <span></span>GitHub
          </button>
        </div>
      </div>
    );
}