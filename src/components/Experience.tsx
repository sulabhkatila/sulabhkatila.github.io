import { motion } from "framer-motion";
import expData from "./ExpData";

type Exp = (typeof expData)[number];
type DateTuple = [number, number];

function toMonths([y, m]: DateTuple): number {
    return y * 12 + m;
}

const NOW: DateTuple = [2026, 2]; // approximate "present" for positioning

function getEndMonths(exp: Exp): number {
    return exp.end ? toMonths(exp.end as DateTuple) : toMonths(NOW);
}

function sortAndLane(experiences: Exp[]) {
    // Sort by end date, newest first (then by start for tiebreaker)
    const sorted = [...experiences].sort((a, b) => {
        const diff = getEndMonths(b) - getEndMonths(a);
        if (diff !== 0) return diff;
        return toMonths(b.start as DateTuple) - toMonths(a.start as DateTuple);
    });

    const result: { exp: Exp; lane: "left" | "right"; isOngoing: boolean }[] =
        [];
    const laneOrder: ("left" | "right")[] = ["left", "right", "left", "right"];
    sorted.forEach((exp, i) => {
        const isOngoing = !exp.end;
        const lane = laneOrder[i] ?? (i % 2 === 0 ? "left" : "right");
        result.push({ exp, lane, isOngoing });
    });

    return { sorted, result };
}

export default function Experience() {
    const { result } = sortAndLane(expData);
    const endMonthsList = result.map((r) => getEndMonths(r.exp));
    const startMonthsList = result.map((r) =>
        toMonths(r.exp.start as DateTuple),
    );
    const minEnd = Math.min(...endMonthsList);
    const maxEnd = Math.max(...endMonthsList);
    const minStart = Math.min(...startMonthsList);
    const minDate = Math.min(minStart, minEnd);
    const maxDate = maxEnd;
    const range = maxDate - minDate || 1;

    // Timeline scale: Jan 2024 to present
    const topMargin = 24;
    const span = 55;
    const dateToY = (months: number) => {
        const clamped = Math.max(minDate, Math.min(maxDate, months));
        return topMargin + ((maxDate - clamped) / range) * span;
    };

    // Position experiences by end date
    const positions = result.map((r) => dateToY(getEndMonths(r.exp)));

    // Year checkpoints: 2024–maxYear (exclude 2023)
    const minYear = Math.max(2024, Math.floor(minDate / 12));
    const maxYear = Math.floor(maxDate / 12);
    const yearCheckpoints = Array.from(
        { length: maxYear - minYear + 1 },
        (_, i) => maxYear - i,
    );

    return (
        <div id="experience" className="experience-section">
            <div className="experience-section-title">
                <h1>Experience</h1>
            </div>

            <div className="timeline-container">
                <div className="timeline-spine" aria-hidden="true" />

                {/* Year checkpoints - evenly spaced (equal distance between each) */}
                {yearCheckpoints.map((year, i) => {
                    const topY =
                        yearCheckpoints.length === 1
                            ? topMargin + span / 2
                            : topMargin + (i / (yearCheckpoints.length - 1)) * span;
                    return (
                        <div
                            key={year}
                            className="timeline-checkpoint"
                            style={{ top: `${topY}%` }}
                        >
                            <span className="timeline-checkpoint-year">
                                {year}
                            </span>
                        </div>
                    );
                })}

                {/* Ongoing role ribbons: span from start date to end date (now) */}
                {result
                    .filter((r) => r.isOngoing)
                    .map(({ exp }, i) => {
                        const idx = result.findIndex(
                            (r) => r.exp.id === exp.id,
                        );
                        const endY = positions[idx];
                        const startMonths = toMonths(exp.start as DateTuple);
                        const startY = dateToY(startMonths);
                        const ribbonTop = Math.min(startY, endY);
                        const ribbonHeight = Math.abs(startY - endY);
                        return (
                            <div
                                key={exp.id}
                                className="timeline-ongoing-ribbon"
                                style={{
                                    top: `${ribbonTop}%`,
                                    left:
                                        i === 0
                                            ? "calc(50% - 56px)"
                                            : "calc(50% - 28px)",
                                    width: "6px",
                                    height: `${ribbonHeight}%`,
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
                                        <div>{exp.company}</div>
                                        {exp.location && (
                                            <div className="experience-location">
                                                {exp.location}
                                            </div>
                                        )}
                                    </div>
                                    <div className="experience-description">
                                        {exp.name}
                                    </div>
                                    <div className="timeline-card-time">
                                        {exp.time}
                                        {isOngoing && (
                                            <span className="timeline-ongoing-badge">
                                                ongoing
                                            </span>
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
