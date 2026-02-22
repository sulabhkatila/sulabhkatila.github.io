import { motion } from "framer-motion";
import expData from "./ExpData";

type Exp = (typeof expData)[number];
type DateTuple = [number, number];

function toMonths([y, m]: DateTuple): number {
  return y * 12 + m;
}

function sortAndLane(experiences: Exp[]) {
  const sorted = [...experiences].sort(
    (a, b) => toMonths(a.start as DateTuple) - toMonths(b.start as DateTuple)
  );

  // Assign lanes: alternate left/right for visual balance
  const result: { exp: Exp; lane: "left" | "right"; isOngoing: boolean }[] = [];
  sorted.forEach((exp, i) => {
    const isOngoing = !exp.end;
    const lane = i % 2 === 0 ? "left" : "right";
    result.push({ exp, lane, isOngoing });
  });

  return { sorted, result };
}

export default function Experience() {
  const { result } = sortAndLane(expData);
  const n = result.length;
  const positions =
    n === 1
      ? [50]
      : result.map((_, i) => (i / (n - 1)) * 100);

  return (
    <div id="experience" className="experience-section">
      <div className="experience-section-title">
        <h1>Experience</h1>
      </div>

      <div className="timeline-container">
        <div className="timeline-spine" aria-hidden="true" />

        {/* Ongoing role ribbons (concurrent tracks) */}
        {result
          .filter((r) => r.isOngoing)
          .map(({ exp }, i) => {
            const idx = result.findIndex((r) => r.exp.id === exp.id);
            const startY = positions[idx];
            return (
              <div
                key={exp.id}
                className="timeline-ongoing-ribbon"
                style={{
                  top: `${startY}%`,
                  left: i === 0 ? "calc(50% - 56px)" : "calc(50% - 28px)",
                  width: "6px",
                  height: `${100 - startY}%`,
                  opacity: i === 0 ? 0.14 : 0.09,
                }}
                aria-hidden="true"
              />
            );
          })}

        {result.map(({ exp, lane, isOngoing }, i) => {
          const topY = positions[i];

          return (
            <motion.div
              key={exp.id}
              className={`timeline-node timeline-node--${lane} ${isOngoing ? "timeline-node--ongoing" : ""}`}
              style={{ top: `${topY}%` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="timeline-branch" />
              <motion.div
                className="timeline-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="timeline-card-dot" />
                <div className="timeline-card-image">
                  <img src={exp.image} alt={exp.company} />
                </div>
                <div className="timeline-card-content">
                  <div className="experience-name">
                    {exp.company}
                    {exp.location && (
                      <span className="experience-location">
                        {" "}
                        · {exp.location}
                      </span>
                    )}
                  </div>
                  <div className="experience-description">{exp.name}</div>
                  <div className="timeline-card-time">
                    {exp.time}
                    {isOngoing && (
                      <span className="timeline-ongoing-badge">ongoing</span>
                    )}
                  </div>
                  <div className="experience-bullet">
                    {exp.bulletPoints.map((bullet, idx) => (
                      <div key={idx}>{bullet}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
