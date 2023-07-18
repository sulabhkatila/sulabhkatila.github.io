import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div id='contact' className="footer-container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="footer_social-icons">
        <a
          href="https://github.com/sulabhkatila"
          className="footer_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="#1b1b1b" />
        </a>
        <a
          href="https://www.instagram.com/katila100"
          className="footer_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram color="#1b1b1b" />
        </a>
        <a
          href="https://www.linkedin.com/in/sulabhkatila"
          className="footer_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="#1b1b1b" />
        </a>
      </div>
      <div className="contact-body">
        <div className="contact-text">
          <p>
            I hope you enjoyed exploring my work and getting to know me better.
            I am always eager to take on new challenges, collaborate on exciting
            projects, and continue my growth in the ever-evolving world of
            Computer Science
          </p>
          <p>
            If you have any inquiries, opportunities, or simply want to connect,
            I would love to hear from you. <br />
            Let's create something amazing together.
          </p>
        </div>
        <div className="contact-info-container">
          <div className="contact-info">
            <FaEnvelope className="contact-icon" />
            <span className="contact-email">
              <a id="contact-email-id" href="mailto:katilasulabh@gmail.com">
                katilasulabh@gmail.com
              </a>
            </span>
          </div>
          <div className="contact-info">
            <FaMapMarkerAlt className="contact-icon" />
            <span className="contact-location">New York, USA</span>
          </div>
          <div className="footer-copyright">
            © 2023 Sulabh Katila. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
