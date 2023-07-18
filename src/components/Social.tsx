import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Social() {
  return (
    <div className="home_social">
      <div className="home_social-icons">
        <a
          href="https://github.com/sulabhkatila"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="#1b1b1b" />
        </a>
        <a
          href="https://www.instagram.com/katila100"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram color="#1b1b1b" />
        </a>
        <a
          href="https://www.linkedin.com/in/sulabhkatila"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="#1b1b1b" />
        </a>
      </div>
    </div>
  );
}

/*

.section-title {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 5px;
}

.education-card {
  
}
*/
