import React, { useState } from "react";
import { MouseEvent } from "react"

interface SkillProps {
  title: string;
  items: Record<string, string>;
}

export default function Skill({ title, items }: SkillProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setHoveredSkill(name);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div>
      <div className="skills-title-container">{title}</div>
      <div className="skills-container">
        {Object.entries(items).map(([name, img]) => {
          const imagePath = `./skills_pic/${img}`;

          return (
            <div
              className="skill-container"
              key={name}
            >
              <div className="skill-image">
                <img
                onMouseEnter={() => handleMouseEnter(name)}
                onMouseLeave={handleMouseLeave} 
                src={imagePath} alt={name} />
              </div>
              {hoveredSkill === name && (
                <div className="skill-name-tooltip">{name}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}