"use client";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import { workExperiences } from "@/data";

const glass = {
    background: "rgba(255,255,255,0.65)",
    border: "1px solid rgba(255,255,255,0.9)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    boxShadow: "0 4px 24px rgba(99,102,241,0.08), 0 1px 0 rgba(255,255,255,0.9) inset",
} as const;

export default function ExperiencePage() {
    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <Navbar />
            <main
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: 1024,
                    margin: "0 auto",
                    padding: "7rem 1.5rem 5rem",
                }}
            >
                <FadeIn delay={0}>
                    <div style={{ marginBottom: "2.5rem" }}>
                        <p
                            style={{
                                fontSize: 10,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                color: "#9ca3af",
                                marginBottom: 8,
                            }}
                        >
                            Career
                        </p>
                        <h1
                            style={{
                                fontSize: "clamp(2rem,5vw,3rem)",
                                fontWeight: 700,
                                color: "#1e1b4b",
                                margin: "0 0 8px",
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Work Experience
                        </h1>
                        <p style={{ fontSize: 13, color: "#9ca3af" }}>
                            {workExperiences.length} {workExperiences.length === 1 ? "role" : "roles"}
                        </p>
                    </div>
                </FadeIn>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {workExperiences.map((experience, index) => (
                        <FadeIn key={experience.slug} delay={0.08 + index * 0.06}>
                            <article
                                style={{
                                    ...glass,
                                    borderRadius: 20,
                                    padding: "clamp(1.25rem, 4vw, 2rem)",
                                    minWidth: 0,
                                }}
                            >
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                                        alignItems: "start",
                                        gap: "12px 20px",
                                        marginBottom: 20,
                                    }}
                                >
                                    <div style={{ minWidth: 0 }}>
                                        <h2
                                            style={{
                                                fontSize: "clamp(1.15rem, 3vw, 1.4rem)",
                                                fontWeight: 700,
                                                color: "#1e1b4b",
                                                lineHeight: 1.35,
                                                letterSpacing: "-0.02em",
                                                overflowWrap: "anywhere",
                                                margin: "0 0 10px",
                                            }}
                                        >
                                            {experience.role}
                                        </h2>
                                        <span
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                border: "1px solid rgba(99,102,241,0.2)",
                                                background: "rgba(99,102,241,0.06)",
                                                borderRadius: 999,
                                                padding: "4px 12px",
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: "#6366f1",
                                            }}
                                        >
                                            {experience.company}
                                        </span>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                        <p
                                            style={{
                                                fontSize: 12,
                                                color: "#9ca3af",
                                                margin: 0,
                                            }}
                                        >
                                            {experience.period}
                                        </p>
                                        {experience.location && (
                                            <p
                                                style={{
                                                    fontSize: 12,
                                                    color: "#9ca3af",
                                                    margin: "4px 0 0",
                                                }}
                                            >
                                                {experience.location}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <p
                                    style={{
                                        fontSize: 13,
                                        lineHeight: 1.75,
                                        color: "#4b5563",
                                        margin: "0 0 24px",
                                    }}
                                >
                                    {experience.summary}
                                </p>

                                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                                    {experience.groups.map(group => (
                                        <section key={group.category}>
                                            <h3
                                                style={{
                                                    fontSize: 10,
                                                    fontWeight: 600,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.08em",
                                                    color: "#9ca3af",
                                                    margin: "0 0 8px",
                                                }}
                                            >
                                                {group.category}
                                            </h3>
                                            <ul
                                                style={{
                                                    paddingLeft: 18,
                                                    margin: 0,
                                                    color: "#4b5563",
                                                }}
                                            >
                                                {group.points.map(point => (
                                                    <li
                                                        key={point}
                                                        style={{
                                                            fontSize: 13,
                                                            lineHeight: 1.7,
                                                            marginBottom: 6,
                                                        }}
                                                    >
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    ))}
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: 8,
                                        marginTop: 24,
                                    }}
                                >
                                    {experience.skills.map(skill => (
                                        <span
                                            key={skill}
                                            style={{
                                                border: "1px solid rgba(99,102,241,0.15)",
                                                background: "rgba(99,102,241,0.05)",
                                                borderRadius: 999,
                                                padding: "5px 10px",
                                                fontSize: 11,
                                                color: "#6366f1",
                                                overflowWrap: "anywhere",
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </main>
        </div>
    );
}
