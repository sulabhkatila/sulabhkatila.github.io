import { motion } from "framer-motion";
import expData from "./ExpData";

export default function Experience() {
  return (
    <div id="experience" className="experience-section">
      <div className="experience-section-title">
        <h1>Experience</h1>
      </div>

      {expData.map((exp, i) => (
        <motion.div
          className="container education-card"
          key={exp.id}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
          <div>
            <img src={exp.image} alt="SJNY" />
          </div>
          <div className="experience-details">
            <div className="experience-name">
              {exp.company}
              {exp.location && <span className="experience-location"> · {exp.location}</span>}
            </div>
            <div className="experience-description">{exp.name}</div>
            <div>{exp.time}</div>

            <div className="experience-bullet">
              {exp.bulletPoints.map((bullet, index) => (
                <div key={index}>{bullet}</div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
