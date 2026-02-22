import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/Sulabh_Katila_resume.pdf";
import Picture from "./Picture";
import Social from "./Social";
import Typewriter from "./Typewriter";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function NewHome() {
  return (
    <div className="new-home-wrapper">
      <div className="hero-mesh-bg" aria-hidden="true" />
      <div className="new-home-container new-home-content">
        <motion.div
          className="home-social-container"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Social />
        </motion.div>
        <motion.div
          className="home-details-container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="home-title-container" variants={item}>
            Sulabh Katila
          </motion.div>
          <motion.div className="home-description-container" variants={item}>
            <p>
              <Typewriter
                text="I'm a computer science student, and I solve problems with code."
                speed={35}
                delay={800}
              />
            </p>
          </motion.div>
          <motion.p className="home_data-location" variants={item}>
            Location: New York, USA
          </motion.p>
          <motion.div className="home_resume" variants={item}>
            <motion.a
              href={resume}
              className="home_resume-button"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDownload className="home_resume-icon" />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="home-picture-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <Picture />
        </motion.div>
      </div>
    </div>
  );
}
