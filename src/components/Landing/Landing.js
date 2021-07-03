import React from "react";
import "./Landing.css";
import focus from "../../img/focus.png";
import Typed from "react-typed";
import { SOCIAL_LINKS, RESUME_LINK, FULL_NAME } from "../../Util/data";

const Landing = () => {
  return (
    <section className="landing">
      <div>
        <h1>{FULL_NAME}</h1>
        <h4>
          <span className="typing">
            <Typed
              strings={[
                "Open-Source Enthusiast",
                "Software Engineer - Android",
                "Information Technology Undergrad",
                "Web Developer",
                "Java/Kotlin",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></Typed>
          </span>
        </h4>
        <ul className="social-links">
          {SOCIAL_LINKS.map((social) => (
            <li>
              <a
                href={social.link}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </a>
            </li>
          ))}
        </ul>
        <h4>
          <a
            id="resume"
            href={RESUME_LINK}
            rel="noopener noreferrer"
            target="blank"
          >
            Resume
          </a>
        </h4>
      </div>
      <div>
        <img id="dp" src={focus} alt="illustration" />
      </div>
    </section>
  );
};

export default Landing;
