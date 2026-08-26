"use client";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import { skillGroups } from "@/data";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import Image from "next/image";

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
        detail: "Began studying Information Systems, with an early pull toward how data and software could actually change how decisions get made, not just how they get recorded.",
    },
    {
        year: "2024",
        event: "Completed 15 certifications in AWS & Dicoding",
        detail: "Spent the year building a foundation before jumping into real projects, covering Python programming, SQL, data science basics, and AWS services like Redshift, Glue, Athena, and OpenSearch. Less about collecting badges, more about making sure the fundamentals were solid.",
    },
    {
        year: "May 2025",
        event: "Student Performance Classification — first ML project",
        detail: "Built a machine learning model to predict students' academic performance and recommend tailored learning paths, using One-Hot Encoding and MinMax Scaling for preprocessing. Reached 90% accuracy — the project that proved this could go beyond coursework.",
    },
    {
        year: "Jun 2025",
        event: "Marketing Dashboard & Funnel Prediction, President University",
        detail: "Designed an interactive analytics dashboard paired with a predictive funnel model for the university's marketing division, complete with role-based authentication for secure access. First time building something meant to be used by a team, not just graded.",
    },
    {
        year: "Sep 2025",
        event: "Early Warning Medical Project, PT Salam Pacific Indonesia Lines",
        detail: "Built a system to monitor regions with high frequency of disease cases. Exploratory data analysis showed most cases were respiratory-related, which shaped a data mining process to identify contributing factors, integrated with external APIs pulling real-time updates every 15 minutes.",
    },
    {
        year: "Oct 2025",
        event: "Ship Operation Systems, PT Salam Pacific Indonesia Lines",
        detail: "Took on the less glamorous but necessary work of transforming raw, multi-header Excel ship operation data into clean, analysis-ready datasets, standardizing columns and fixing inconsistent date formats. Learned that a good model means nothing without clean data behind it.",
    },
    {
        year: "Jan 2026",
        event: "Capstone with Dishub Central Aceh — computer vision",
        detail: "Led a capstone project with the Department of Transportation of Central Aceh, building a real-time traffic analysis prototype for the Takengon and Lake Laut Tawar tourist areas. Implemented a YOLOv8 detection pipeline with OpenCV for vehicle counting and density estimation, backed by PostgreSQL dashboards used for actual policy discussions.",
    },
    {
        year: "2026",
        event: "Graduated with a final GPA of 3.49",
        detail: "Finished the degree with grades that reflect four years of actually building things, not just studying them. Now putting full focus into the software house and going deeper into AI engineering as a career, not just a student project.",
    },
];

function TimelineItem({ item, index }: { item: (typeof timeline)[0]; index: number }) {
    const isLast = index === timeline.length - 1;
    return (
        <div style={{ display: "flex", gap: 16, paddingBottom: isLast ? 0 : 28 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 18 }}>
                <div
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#6366f1",
                        border: "2px solid rgba(99,102,241,0.2)",
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
            <div style={{ flex: 1, borderRadius: 12, padding: "2px 0 0" }}>
                <p
                    style={{
                        fontSize: 10,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#6366f1",
                        margin: "0 0 6px",
                    }}
                >
                    {item.year}
                </p>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#1e1b4b", margin: "0 0 6px", lineHeight: 1.4 }}>
                    {item.event}
                </p>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.7 }}>{item.detail}</p>
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
                        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
                            <div
                                style={{
                                    width: 112,
                                    height: 112,
                                    borderRadius: 20,
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
                                <p style={{ fontSize: 13, color: "#6366f1", fontWeight: 500, margin: 0 }}>
                                    AI Engineer · Information Systems
                                </p>
                            </div>
                        </div>
                        <div style={{ fontSize: 13, lineHeight: 1.8, color: "#6b7280" }}>
                            <p style={{ margin: "0 0 12px" }}>
                                I got into AI because I kept seeing problems that felt fixable. Messy data. Processes
                                that took way longer than they should. Systems people just... put up with, instead of
                                fixing.
                            </p>
                            <p style={{ margin: "0 0 12px" }}>
                                I recently finished my degree in Information Systems at President University with a
                                final GPA of 3.49. At the same time, I&apos;m building a software house. The goal is
                                pretty simple: make good technology available to people who normally can&apos;t afford
                                it, not just big companies with enterprise budgets.
                            </p>
                            <p style={{ margin: "0 0 12px" }}>
                                I care more about whether something actually works when real people use it than how it
                                looks in a notebook or a demo. That&apos;s shown up in most of what I&apos;ve built so
                                far, including a computer vision pipeline I built that&apos;s now running for a local
                                government transportation office.
                            </p>
                            <p style={{ margin: 0 }}>
                                Still figuring a lot of this out. That&apos;s probably true for most people my age, I
                                just happen to be doing it in public.
                            </p>
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
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                                gap: 10,
                            }}
                        >
                            {[
                                {
                                    label: "Email",
                                    href: "mailto:khanifan.mail@gmail.com",
                                    icon: Mail,
                                    desc: "For work inquiries, collaboration, or just to say hi.",
                                },
                                {
                                    label: "GitHub",
                                    href: "https://github.com/khanifan-studio",
                                    icon: Github,
                                    desc: "Source code for projects and open-source contributions.",
                                },
                                {
                                    label: "LinkedIn",
                                    href: "https://www.linkedin.com/in/khanifan-khanifan-5a4b23264/",
                                    icon: Linkedin,
                                    desc: "Professional background, experience, and career updates.",
                                },
                                {
                                    label: "YouTube",
                                    href: "https://www.youtube.com/@bykhanifan",
                                    icon: Youtube,
                                    desc: "Videos on projects, builds, and things I'm learning.",
                                },
                            ].map(link => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.label !== "Email" ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        style={{
                                            display: "flex",
                                            gap: 12,
                                            alignItems: "flex-start",
                                            padding: "14px 16px",
                                            borderRadius: 14,
                                            border: "1px solid #e5e7eb",
                                            textDecoration: "none",
                                            background: "rgba(255,255,255,0.8)",
                                            transition: "all 0.2s",
                                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                                        }}
                                        onMouseEnter={e => {
                                            const el = e.currentTarget as HTMLElement;
                                            el.style.borderColor = "rgba(99,102,241,0.3)";
                                            el.style.boxShadow = "0 4px 12px rgba(99,102,241,0.1)";
                                        }}
                                        onMouseLeave={e => {
                                            const el = e.currentTarget as HTMLElement;
                                            el.style.borderColor = "#e5e7eb";
                                            el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 34,
                                                height: 34,
                                                borderRadius: 10,
                                                background: "rgba(99,102,241,0.08)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Icon size={16} color="#6366f1" strokeWidth={2} />
                                        </div>
                                        <div>
                                            <p
                                                style={{
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                    color: "#1e1b4b",
                                                    margin: "0 0 2px",
                                                }}
                                            >
                                                {link.label}
                                            </p>
                                            <p style={{ fontSize: 12, color: "#9ca3af", margin: 0, lineHeight: 1.5 }}>
                                                {link.desc}
                                            </p>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </FadeIn>
            </main>
        </div>
    );
}
