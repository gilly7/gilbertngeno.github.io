import React, { useState } from "react";
import "./Header.css";
import menuIcon from "../../img/menu2.png";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <header>
      <nav>
        <img
          src={menuIcon}
          onClick={() => setShowLinks(!showLinks)}
          className="menu-icon"
          alt="menu-icon"
        />
        <ul className="nav-menu" id={showLinks ? "hidden" : ""}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://ngeno.hashnode.dev/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
