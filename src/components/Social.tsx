import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Social() {
  return (
    <div className="home_social">
      <div className="home_social-icons">
        <motion.a
          href="https://github.com/sulabhkatila"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.25, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub color="#1b1b1b" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/katila100"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.25, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram color="#1b1b1b" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/sulabhkatila"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.25, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin color="#1b1b1b" />
        </motion.a>
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
