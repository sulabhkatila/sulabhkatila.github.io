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

    // Timeline scale: 2026 at top, 2023 at bottom; keep topMargin + span <= 100 so 2023 is visible
    const topMargin = 8;
    const span = 92;
    const dateToY = (months: number) => {
        const clamped = Math.max(minDate, Math.min(maxDate, months));
        return topMargin + ((maxDate - clamped) / range) * span;
    };

    // Position experiences by end date
    const positions = result.map((r) => dateToY(getEndMonths(r.exp)));

    // Year checkpoints: 2024 through maxYear (2023 excluded)
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

                {/* Year checkpoints - clustered around center so 2026 and 2024 sit closer to 2025 */}
                {yearCheckpoints.map((year, i) => {
                    const cpInset = 14;
                    const cpTop = topMargin + cpInset;
                    const cpSpan = span - cpInset * 2;
                    const topY =
                        yearCheckpoints.length === 1
                            ? cpTop + cpSpan / 2
                            : cpTop +
                              (i / (yearCheckpoints.length - 1)) * cpSpan;
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
                    const baseY = positions[i];
                    const lift =
                        exp.company === "TransPerfect"
                            ? -3 // lower (closer to 2024/2023)
                            : exp.company === "HealthStream"
                              ? -13 // higher on the spine
                              : exp.company === "Boys Hope Girls Hope"
                                ? -10
                                : exp.name === "Undergraduate Researcher"
                                  ? -18 // higher on the spine
                                  : exp.name === "Tutor"
                                    ? 0 // lower on the spine
                                    : 0;
                    const topY = baseY + lift;

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
