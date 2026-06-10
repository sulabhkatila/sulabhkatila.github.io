import { motion } from "framer-motion";
import { useState } from "react";

export default function Awards() {
    const [celebrated, setCelebrated] = useState<number | null>(null);

    const awards = [
        { text: "Valedictorian, SJNY", icon: "🎓", accent: "gold" },
        { text: "Winner, HackNYU 2025", icon: "🏆", accent: "gold" },
        { text: "Hon. Mention, CalHacks 12.0", icon: "⭐", accent: "silver" },
        { text: "8 x Dean's List, SJNY", icon: "🎓", accent: "blue" },
        { text: "Kappa Gamma Pi, SJNY", icon: "🎓", accent: "blue" },
        { text: "Delta Epsilon Sigma, SJNY", icon: "🎓", accent: "blue" },
        {
            text: "Esse Non Videri Scholarship, SJNY",
            icon: "🎓",
            accent: "blue",
        },
        { text: "Mr. St. Joe's Scholarship, SJNY", icon: "🎓", accent: "blue" },
    ];

    return (
        <div id="awards" className="education-section awards-section">
            <div className="education-section-title">
                <h1>Honors and Awards</h1>
            </div>

            <div className="awards-grid">
                {awards.map((award, index) => (
                    <motion.div
                        key={index}
                        className={`award-card award-card--${award.accent}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                            setCelebrated(index === celebrated ? null : index)
                        }
                        animate={
                            celebrated === index
                                ? { scale: [1, 1.08, 1], rotate: [0, -3, 3, 0] }
                                : {}
                        }
                        transition={{ duration: 0.5 }}
                    >
                        <motion.span
                            className="award-icon"
                            aria-hidden="true"
                            animate={
                                celebrated === index
                                    ? {
                                          scale: [1, 1.3, 1],
                                          rotate: [0, 10, -10, 0],
                                      }
                                    : {}
                            }
                            transition={{ duration: 0.5 }}
                        >
                            {award.icon}
                        </motion.span>
                        <span className="award-text">{award.text}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
