import React from "react";
import expData from "./ExpData";

export default function Experience() {
  return (
    <div className="education-section">
      <div id="education" className="education-section-title">
        <h1>Experience</h1>
      </div>

      {expData.map((exp) => (
        <div className="container education-card" key={exp.id}>
          <div>
            <img src={exp.image} alt="SJNY" />
          </div>
          <div className="experience-details">
            <div className="experience-name">{exp.company}</div>
            <div className="experience-description">{exp.name}</div>
            <div>{exp.time}</div>

            <div className="experience-bullet">
              {exp.bulletPoints.map((bullet, index) => (
                <div key={index} >{bullet}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
