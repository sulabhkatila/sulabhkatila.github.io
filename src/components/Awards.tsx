export default function Awards() {
    const awards = [
        { text: "Winner, HackNYU 2025", icon: "🏆", accent: "gold" },
        { text: "Hon. Mention, CalHacks 12.0", icon: "⭐", accent: "silver" },
        { text: "7x Dean's List, SJNY", icon: "🎓", accent: "blue" },
    ];

    return (
        <div id="awards" className="education-section awards-section">
            <div className="education-section-title">
                <h1>Awards</h1>
            </div>

            <div className="awards-grid">
                {awards.map((award, index) => (
                    <div
                        key={index}
                        className={`award-card award-card--${award.accent}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <span className="award-icon" aria-hidden="true">
                            {award.icon}
                        </span>
                        <span className="award-text">{award.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
