import React, { useState } from "react";
import { motion } from "framer-motion";
import projectData from "./ProjectData";

export default function ProjectCard() {
  const [hoveredProjectId, setHoveredProjectId] = useState(-1);

  const handleMouseEnter = (projectId: number) => {
    setHoveredProjectId(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProjectId(-1);
  };

  return (
    <div id="project" className="project-section">
      <div className="project-section-title">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        {projectData.map((project, i) => (
          <motion.div
            className="project-card-container"
            key={project.id}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="project-image-container">
              <img
                src={
                  hoveredProjectId === project.id ? project.gif : project.image
                }
                alt={project.name}
                height={400}
                width="100%"
              />
            </div>
            <div className="project-card-content">
              <div className="project-card-title">
                <h3>{project.name}</h3>
              </div>
              <div className="project-card-body">
                <p className="project-tech">{project.tech}</p>
                <p> {project.description} </p>
              </div>
            </div>
            <div className="project-btn-link">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-view-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
