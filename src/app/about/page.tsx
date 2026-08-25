"use client";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import { skillGroups } from "@/data";
import Image from "next/image";
import { useState } from "react";

const glass = {
    background: "rgba(255,255,255,0.65)",
    border: "1px solid rgba(255,255,255,0.9)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    boxShadow: "0 4px 24px rgba(99,102,241,0.08), 0 1px 0 rgba(255,255,255,0.9) inset",
} as const;

const skillAccent: Record<string, { color: string; border: string; bg: string }> = {
    "AI & ML": { color: "#6366f1", border: "rgba(99,102,241,0.2)", bg: "rgba(99,102,241,0.05)" },
    Data: { color: "#7c3aed", border: "rgba(124,58,237,0.2)", bg: "rgba(124,58,237,0.05)" },
    Engineering: { color: "#ea580c", border: "rgba(234,88,12,0.2)", bg: "rgba(234,88,12,0.05)" },
};

const levelStyle: Record<string, { color: string; dot: string }> = {
    "Comfortable with": { color: "#6366f1", dot: "#6366f1" },
    "Working knowledge": { color: "#9ca3af", dot: "#9ca3af" },
    Learning: { color: "#d1d5db", dot: "#d1d5db" },
};

const timeline = [
    {
        year: "2023",
        event: "Started Information Systems at President University",
        detail: "Began the academic journey that would shape a career in AI engineering.",
    },
    {
        year: "2024",
        event: "Completed 15 certifications — AWS & Dicoding",
        detail: "Built foundational knowledge in cloud, ML, and data science through structured learning.",
    },
    {
        year: "May 2025",
        event: "Built Student Performance Classification",
        detail: "First ML project — 90% accuracy predicting academic performance using Scikit-learn.",
    },
    {
        year: "Jun 2025",
        event: "Marketing Dashboard & Funnel Prediction",
        detail: "Designed an interactive analytics dashboard with predictive model for President University.",
    },
    {
        year: "Sep 2025",
        event: "Joined PT Salam Pacific Indonesia Lines",
        detail: "Developed Early Warning Medical system and transformed ship operation data pipelines.",
    },
    {
        year: "Jan 2026",
        event: "Capstone with Dishub Central Aceh",
        detail: "Led YOLOv8 computer vision pipeline for real-time traffic analysis — deployed for government use.",
    },
    {
        year: "2026",
        event: "Expected graduation — pursuing AI Engineer career",
        detail: "Targeting full-time AI Engineering roles in applied ML and computer vision.",
    },
];

function TimelineItem({ item, index }: { item: (typeof timeline)[0]; index: number }) {
    const [hovered, setHovered] = useState(false);
    const isLast = index === timeline.length - 1;
    return (
        <div style={{ display: "flex", gap: 16, paddingBottom: isLast ? 0 : 24 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 18 }}>
                <div
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: hovered ? "#6366f1" : "rgba(99,102,241,0.3)",
                        border: `2px solid ${hovered ? "rgba(99,102,241,0.4)" : "rgba(99,102,241,0.15)"}`,
                        boxShadow: hovered ? "0 0 12px rgba(99,102,241,0.3)" : "none",
                        transition: "all 0.3s ease",
                        marginTop: 4,
                    }}
                />
                {!isLast && (
                    <div
                        style={{
                            width: 1,
                            flex: 1,
                            marginTop: 6,
                            background: "linear-gradient(to bottom, rgba(99,102,241,0.15), rgba(99,102,241,0.03))",
                        }}
                    />
                )}
            </div>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    flex: 1,
                    borderRadius: 12,
                    padding: "10px 14px",
                    background: hovered ? "rgba(99,102,241,0.04)" : "transparent",
                    border: `1px solid ${hovered ? "rgba(99,102,241,0.12)" : "transparent"}`,
                    transition: "all 0.25s ease",
                    cursor: "default",
                }}
            >
                <p
                    style={{
                        fontSize: 10,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#6366f1",
                        margin: "0 0 4px",
                        opacity: hovered ? 1 : 0.6,
                        transition: "opacity 0.25s",
                    }}
                >
                    {item.year}
                </p>
                <p style={{ fontSize: 13, fontWeight: 500, color: "#1e1b4b", margin: "0 0 4px", lineHeight: 1.4 }}>
                    {item.event}
                </p>
                <p
                    style={{
                        fontSize: 12,
                        color: "#6b7280",
                        margin: 0,
                        lineHeight: 1.6,
                        maxHeight: hovered ? 60 : 0,
                        overflow: "hidden",
                        opacity: hovered ? 1 : 0,
                        transition: "all 0.3s ease",
                    }}
                >
                    {item.detail}
                </p>
            </div>
        </div>
    );
}

export default function AboutPage() {
    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <Navbar />
            <main
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: 768,
                    margin: "0 auto",
                    padding: "7rem 1.5rem 5rem",
                }}
            >
                <FadeIn delay={0}>
                    <div style={{ ...glass, borderRadius: 24, padding: "2rem", marginBottom: "1rem" }}>
                        <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                            <div
                                style={{
                                    width: 80,
                                    height: 96,
                                    borderRadius: 16,
                                    border: "2px solid rgba(255,255,255,0.9)",
                                    boxShadow: "0 6px 20px rgba(99,102,241,0.12)",
                                    flexShrink: 0,
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                            >
                                <Image src="/images/profile.jpg" alt="Khanifan" fill style={{ objectFit: "cover" }} />
                            </div>
                            <div>
                                <p
                                    style={{
                                        fontSize: 10,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.08em",
                                        color: "#9ca3af",
                                        marginBottom: 8,
                                    }}
                                >
                                    About Me
                                </p>
                                <h1
                                    style={{
                                        fontSize: "clamp(1.75rem,4vw,2.5rem)",
                                        fontWeight: 700,
                                        color: "#1e1b4b",
                                        margin: "0 0 4px",
                                        letterSpacing: "-0.03em",
                                    }}
                                >
                                    Khanifan
                                </h1>
                                <p style={{ fontSize: 13, color: "#6366f1", fontWeight: 500, margin: "0 0 12px" }}>
                                    AI Engineer · Information Systems
                                </p>
                                <div style={{ fontSize: 13, lineHeight: 1.8, color: "#6b7280" }}>
                                    <p style={{ margin: "0 0 12px" }}>
                                        I got into AI because I kept seeing problems that felt fixable. Messy data.
                                        Processes that took way longer than they should. Systems people just... put up
                                        with, instead of fixing.
                                    </p>
                                    <p style={{ margin: "0 0 12px" }}>
                                        Right now I&apos;m finishing my degree in Information Systems at President
                                        University (GPA 3.46, still waiting on final grades). At the same time, I&apos;m
                                        building a software house. The goal is pretty simple: make good technology
                                        available to people who normally can&apos;t afford it, not just big companies
                                        with enterprise budgets.
                                    </p>
                                    <p style={{ margin: "0 0 12px" }}>
                                        I care more about whether something actually works when real people use it than
                                        how it looks in a notebook or a demo. That&apos;s shown up in most of what
                                        I&apos;ve built so far, including a computer vision pipeline I built that&apos;s
                                        now running for a local government transportation office.
                                    </p>
                                    <p style={{ margin: 0 }}>
                                        Still figuring a lot of this out. That&apos;s probably true for most people my
                                        age, I just happen to be doing it in public.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <div style={{ ...glass, borderRadius: 20, padding: "1.5rem", marginBottom: "1rem" }}>
                        <p
                            style={{
                                fontSize: 10,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                color: "#9ca3af",
                                marginBottom: 16,
                            }}
                        >
                            Technical Skills
                        </p>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 14,
                                marginBottom: 18,
                                fontSize: 11,
                                color: "#9ca3af",
                            }}
                        >
                            {Object.entries(levelStyle).map(([label, s]) => (
                                <div key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                                    <span
                                        style={{
                                            width: 6,
                                            height: 6,
                                            borderRadius: "50%",
                                            background: s.dot,
                                            flexShrink: 0,
                                        }}
                                    />
                                    {label}
                                </div>
                            ))}
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                                gap: 10,
                            }}
                        >
                            {skillGroups.map(group => {
                                const a = skillAccent[group.category] ?? {
                                    color: "#374151",
                                    border: "rgba(55,65,81,0.2)",
                                    bg: "rgba(55,65,81,0.04)",
                                };
                                return (
                                    <div
                                        key={group.category}
                                        style={{
                                            borderRadius: 14,
                                            border: `1px solid ${a.border}`,
                                            background: a.bg,
                                            padding: "14px 16px",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: 10,
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.08em",
                                                color: a.color,
                                                margin: "0 0 10px",
                                            }}
                                        >
                                            {group.category}
                                        </p>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                            {group.skills.map(skill => {
                                                const s = levelStyle[skill.level];
                                                return (
                                                    <div
                                                        key={skill.name}
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "space-between",
                                                            gap: 8,
                                                            fontSize: 13,
                                                            color: "#374151",
                                                        }}
                                                    >
                                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                                            <span
                                                                style={{
                                                                    width: 6,
                                                                    height: 6,
                                                                    borderRadius: "50%",
                                                                    background: s.dot,
                                                                    flexShrink: 0,
                                                                }}
                                                            />
                                                            {skill.name}
                                                        </div>
                                                        <span style={{ fontSize: 10, color: s.color, flexShrink: 0 }}>
                                                            {skill.level}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.15}>
                    <div style={{ ...glass, borderRadius: 20, padding: "1.5rem", marginBottom: "1rem" }}>
                        <p
                            style={{
                                fontSize: 10,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                color: "#9ca3af",
                                marginBottom: 20,
                            }}
                        >
                            Journey
                        </p>
                        <div>
                            {timeline.map((item, i) => (
                                <TimelineItem key={i} item={item} index={i} />
                            ))}
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div style={{ ...glass, borderRadius: 20, padding: "1.5rem" }}>
                        <p
                            style={{
                                fontSize: 10,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                color: "#9ca3af",
                                marginBottom: 16,
                            }}
                        >
                            Get in Touch
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                            {[
                                { label: "Email", href: "mailto:khanifan.mail@gmail.com" },
                                { label: "GitHub", href: "https://github.com/khanifan-studio" },
                                { label: "LinkedIn", href: "https://www.linkedin.com/in/khanifan-khanifan-5a4b23264/" },
                            ].map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.label !== "Email" ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 500,
                                        padding: "8px 18px",
                                        borderRadius: 10,
                                        border: "1px solid #e5e7eb",
                                        color: "#374151",
                                        textDecoration: "none",
                                        background: "rgba(255,255,255,0.8)",
                                        transition: "all 0.2s",
                                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.borderColor = "rgba(99,102,241,0.3)";
                                        el.style.color = "#6366f1";
                                        el.style.boxShadow = "0 4px 12px rgba(99,102,241,0.1)";
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.borderColor = "#e5e7eb";
                                        el.style.color = "#374151";
                                        el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </main>
        </div>
    );
}
