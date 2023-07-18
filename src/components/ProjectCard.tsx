import React, { useState } from "react";
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
        {projectData.map((project) => (
          <div
            className="project-card-container"
            key={project.id}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
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
              <button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
