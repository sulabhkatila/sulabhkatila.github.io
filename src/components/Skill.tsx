import React from "react";

interface SkillProps {
  title: string;
  items: Record<string, string>;
}

export default function Skill({ title, items }: SkillProps) {
  return (
    <div>
      <div className="skills-title-container">{title}</div>
      <div className="skills-container">
        {Object.entries(items).map(([name, img]) => {
          const imagePath = `./skills_pic/${img}`;

          return (
            <div className="skill-container" key={name}>
              <div className="skill-image">
                <img src={imagePath} alt={name} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}