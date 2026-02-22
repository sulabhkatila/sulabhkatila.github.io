import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const iconVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

export default function Footer() {
  return (
    <div id='contact' className="footer-container">
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <div className="footer_social-icons">
        <motion.a
          href="https://github.com/sulabhkatila"
          className="footer_social-icon"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          whileHover={{ scale: 1.2, y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub color="#1b1b1b" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/katila100"
          className="footer_social-icon"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          whileHover={{ scale: 1.2, y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram color="#1b1b1b" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/sulabhkatila"
          className="footer_social-icon"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          whileHover={{ scale: 1.2, y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin color="#1b1b1b" />
        </motion.a>
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
