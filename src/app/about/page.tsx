"use client";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import { skillGroups } from "@/data";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
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
        title: "Started Information Systems at President University",
        image: "/images/journey/2023.jpg",
        imagePosition: "top",
        before: "Before university, I didn't have a clear direction, just a general interest in computers and problem-solving.",
        after: "Enrolling in Information Systems gave that interest a shape. I started learning how software and data actually work together: databases, basic programming, systems analysis. It didn't take long before I wanted to build things beyond what was being taught in class, so I started picking up side material on my own, mostly Python and the math behind machine learning, without really knowing yet where it would lead.",
    },
    {
        year: "2024",
        title: "Completed 15 certifications in AWS & Dicoding",
        image: "/images/journey/2024.png",
        before: "Coming out of the first year, I could follow along in class but hadn't built anything real on my own.",
        after: "I spent the year deliberately building a foundation before jumping into real projects. On Dicoding, that meant working through Python fundamentals (OOP, unit testing, common libraries) and core SQL. On AWS, it meant going through the machine learning learning plan end to end: framing a problem, understanding the ML process, and getting hands-on with services like Redshift, Glue, Athena, EMR, and OpenSearch for handling data at scale. None of it was glamorous. It was closer to studying the plumbing before trying to build a house, but it meant that when real projects came, I wasn't learning the basics and the problem at the same time.",
    },
    {
        year: "May 2025",
        title: "Student Performance Classification, first ML project",
        image: "/images/journey/2025-05.png",
        before: "I had the fundamentals, but no proof I could apply them to an actual problem end to end.",
        after: "This was my first machine learning project, built to predict student academic performance and recommend tailored learning paths. I handled the full pipeline myself: cleaning the dataset, encoding categorical features with One-Hot Encoding, scaling numeric features with MinMax Scaling, and training a classification model in Scikit-learn. It reached 90% accuracy, but the number mattered less than the process. It was the first time I went from a raw dataset to a working model without a course structure telling me what step came next.",
    },
    {
        year: "Jun 2025",
        title: "Marketing Dashboard & Funnel Prediction, President University",
        before: "Up to this point, everything I'd built was for grading: evaluated once and then forgotten.",
        after: "I designed an interactive analytics dashboard paired with a predictive funnel model for the university's marketing division, built on Django with a REST API backend. I also added role-based authentication so different staff members only saw the data relevant to them. This was the first project meant to actually be used by a team on an ongoing basis, which changed how carefully I thought about things like edge cases, access control, and what happens when the data isn't clean.",
    },
    {
        year: "Sep 2025",
        title: "Early Warning Medical Project, PT Salam Pacific Indonesia Lines",
        before: "I wanted experience outside campus, working with data that had real consequences attached to it.",
        after: "I built a system to monitor regions with a high frequency of disease cases. Exploratory data analysis showed that most identified cases were respiratory-related, which shaped a data mining process to trace the contributing factors behind that pattern. I integrated the project with an external API to pull real-time updates every 15 minutes, so the monitoring wasn't based on a static snapshot but something that stayed current. It was my first time working with data where the stakes felt higher than a grade.",
    },
    {
        year: "Oct 2025",
        title: "Ship Operation Systems, PT Salam Pacific Indonesia Lines",
        before: "I assumed most of my work going forward would look like modeling: training something, evaluating it, moving on.",
        after: "This project was almost entirely data engineering, not modeling. I took raw ship operation data stored in Excel files with multi-row, multi-header layouts, and transformed them into clean, analysis-ready CSV datasets. That meant standardizing column structures, cleaning inconsistent categorical fields, and resolving conflicting date formats across sheets that had clearly been maintained by different people over time. It wasn't exciting work, but it recalibrated how much I respect data preparation. No model is better than the data feeding it.",
    },
    {
        year: "Jan 2026",
        title: "Capstone with Dishub Central Aceh, computer vision",
        before: "Everything before this had been either academic or internal to one company. I hadn't worked directly with government stakeholders.",
        after: "The capstone with the Department of Transportation of Central Aceh changed that. I led the development of a real-time traffic analysis prototype for the Takengon and Lake Laut Tawar tourist areas, implementing a YOLOv8 object detection model integrated into an OpenCV video pipeline for vehicle counting and traffic density estimation. The output fed into PostgreSQL-backed dashboards that were actually used in policy discussions about traffic management in those areas, not just presented once and shelved. It was the first project where the audience wasn't a professor or a manager, but people making decisions that affect a whole region.",
    },
    {
        year: "2026",
        title: "Graduated with a final GPA of 3.49",
        before: "Through most of this, I was still a student first and an engineer second.",
        after: "I finished my degree with a final GPA of 3.49, but the bigger shift was in priorities, not the number itself. Every project on this timeline happened alongside coursework, not instead of it, which meant a lot of late nights balancing both. Now that the degree is done, I'm putting full focus into the software house and treating AI engineering as an actual career to build, not a student project with a deadline attached to it.",
    },
];

function JourneyModal({ item, onClose }: { item: (typeof timeline)[0]; onClose: () => void }) {
    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 24,
                background: "rgba(30,27,75,0.15)",
                backdropFilter: "blur(12px)",
            }}
        >
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    ...glass,
                    borderRadius: 24,
                    padding: "2rem",
                    maxWidth: 520,
                    width: "100%",
                    maxHeight: "85vh",
                    overflowY: "auto",
                    animation: "modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 20,
                    }}
                >
                    <div style={{ flex: 1, paddingRight: 16 }}>
                        <span
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 5,
                                fontSize: 10,
                                fontWeight: 500,
                                color: "#6366f1",
                                border: "1px solid rgba(99,102,241,0.2)",
                                background: "rgba(99,102,241,0.06)",
                                borderRadius: 999,
                                padding: "2px 10px",
                                marginBottom: 8,
                            }}
                        >
                            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#6366f1" }} />
                            {item.year}
                        </span>
                        <h2
                            style={{
                                fontSize: 16,
                                fontWeight: 700,
                                color: "#1e1b4b",
                                margin: 0,
                                lineHeight: 1.3,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {item.title}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            border: "1px solid #e5e7eb",
                            background: "rgba(255,255,255,0.8)",
                            color: "#6b7280",
                            fontSize: 14,
                            cursor: "pointer",
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        ✕
                    </button>
                </div>
                <div
                    style={{
                        width: "100%",
                        aspectRatio: "16/9",
                        borderRadius: 14,
                        background: item.image ? "#e5e7eb" : "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
                        border: "1px solid rgba(255,255,255,0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    {item.image ? (
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            style={{ objectFit: "cover", objectPosition: item.imagePosition ?? "center" }}
                        />
                    ) : (
                        <span style={{ fontSize: 13, color: "#6366f1", fontWeight: 500, opacity: 0.6 }}>
                            📷 Photo coming soon
                        </span>
                    )}
                </div>
                <div
                    style={{
                        borderRadius: 14,
                        border: "1px solid #e5e7eb",
                        background: "rgba(255,255,255,0.6)",
                        padding: "14px 16px",
                        marginBottom: 12,
                    }}
                >
                    <p
                        style={{
                            fontSize: 10,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "#9ca3af",
                            marginBottom: 8,
                        }}
                    >
                        Before this
                    </p>
                    <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, margin: 0 }}>{item.before}</p>
                </div>
                <div
                    style={{
                        borderRadius: 14,
                        border: "1px solid rgba(99,102,241,0.15)",
                        background: "rgba(99,102,241,0.04)",
                        padding: "14px 16px",
                    }}
                >
                    <p
                        style={{
                            fontSize: 10,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "#6366f1",
                            marginBottom: 8,
                        }}
                    >
                        What changed
                    </p>
                    <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, margin: 0 }}>{item.after}</p>
                </div>
            </div>
        </div>
    );
}

function TimelineItem({ item, index, onClick }: { item: (typeof timeline)[0]; index: number; onClick: () => void }) {
    const isLast = index === timeline.length - 1;
    return (
        <div style={{ display: "flex", gap: 16, paddingBottom: isLast ? 0 : 8 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 18 }}>
                <div
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#6366f1",
                        border: "2px solid rgba(99,102,241,0.2)",
                        marginTop: 18,
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
            <button
                onClick={onClick}
                style={{
                    flex: 1,
                    textAlign: "left",
                    cursor: "pointer",
                    borderRadius: 14,
                    padding: "14px 16px",
                    marginBottom: 10,
                    background: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(255,255,255,0.9)",
                    transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = "0 8px 20px rgba(99,102,241,0.12)";
                    el.style.borderColor = "rgba(99,102,241,0.2)";
                }}
                onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "none";
                    el.style.boxShadow = "none";
                    el.style.borderColor = "rgba(255,255,255,0.9)";
                }}
            >
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
                <p style={{ fontSize: 14, fontWeight: 600, color: "#1e1b4b", margin: 0, lineHeight: 1.4 }}>
                    {item.title}
                </p>
                <p style={{ fontSize: 11, color: "#9ca3af", margin: "6px 0 0" }}>Click to read the full story ↗</p>
            </button>
        </div>
    );
}

export default function AboutPage() {
    const [selected, setSelected] = useState<(typeof timeline)[0] | null>(null);
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
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                marginBottom: 24,
                            }}
                        >
                            <div
                                style={{
                                    width: 160,
                                    height: 160,
                                    borderRadius: "50%",
                                    border: "3px solid rgba(255,255,255,0.9)",
                                    boxShadow: "0 8px 28px rgba(99,102,241,0.15)",
                                    flexShrink: 0,
                                    overflow: "hidden",
                                    position: "relative",
                                    marginBottom: 16,
                                }}
                            >
                                <Image src="/images/profile.jpg" alt="Khanifan" fill style={{ objectFit: "cover" }} />
                            </div>
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
                        <div style={{ fontSize: 13, lineHeight: 1.8, color: "#6b7280" }}>
                            <p style={{ margin: "0 0 12px" }}>
                                I got into AI by running into problems that felt solvable: messy data, slow processes,
                                and systems people simply worked around instead of fixing.
                            </p>
                            <p style={{ margin: "0 0 12px" }}>
                                I recently completed my degree in Information Systems at President University with a
                                final GPA of 3.49. Alongside that, I&apos;m building a software house with a clear goal:
                                making capable technology accessible to organizations that don&apos;t typically have the
                                budget for enterprise solutions.
                            </p>
                            <p style={{ margin: "0 0 12px" }}>
                                What matters most to me is whether something actually holds up in the hands of real
                                users, not just in a notebook or a demo. That principle has guided most of my work so
                                far, including a computer vision pipeline I built that&apos;s currently in use by a
                                local government transportation office.
                            </p>
                            <p style={{ margin: 0 }}>
                                I&apos;m still early in this field, and I&apos;d rather build that experience openly
                                than wait until I feel fully ready.
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
                                <TimelineItem key={i} item={item} index={i} onClick={() => setSelected(item)} />
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

            <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

            {selected && <JourneyModal item={selected} onClose={() => setSelected(null)} />}
        </div>
    );
}
