import React, { useState } from "react";
import { motion } from "framer-motion";

interface SkillProps {
  title: string;
  items: Record<string, string>;
}

export default function Skill({ title, items }: SkillProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div>
      <div className="skills-title-container">{title}</div>
      <div className="skills-container">
        {Object.entries(items).map(([name, img], i) => {
          const imagePath = `./skills_pic/${img}`;

          return (
            <motion.div
              className="skill-container"
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03 }}
            >
              <motion.div
                className="skill-image"
                onMouseEnter={() => setHoveredSkill(name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9, rotate: 5 }}
              >
                <img src={imagePath} alt={name} />
              </motion.div>
              {hoveredSkill === name && (
                <motion.div
                  className="skill-name-tooltip"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {name}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}