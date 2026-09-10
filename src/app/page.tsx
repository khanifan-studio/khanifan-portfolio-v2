"use client";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import { currentlyBuilding, featuredProjects, skillGrowthData } from "@/data";
import {
    CategoryScale,
    Chart,
    Filler,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Tooltip,
} from "chart.js";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Filler);

const glass = {
    background: "rgba(255,255,255,0.65)",
    border: "1px solid rgba(255,255,255,0.9)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    boxShadow: "0 4px 24px rgba(99,102,241,0.08), 0 1px 0 rgba(255,255,255,0.9) inset",
};

const domainColor: Record<string, { bg: string; color: string; border: string }> = {
    "computer-vision": { bg: "rgba(99,102,241,0.1)", color: "#4f46e5", border: "rgba(99,102,241,0.2)" },
    "data-analytics": { bg: "rgba(139,92,246,0.1)", color: "#7c3aed", border: "rgba(139,92,246,0.2)" },
    "data-science": { bg: "rgba(59,130,246,0.1)", color: "#2563eb", border: "rgba(59,130,246,0.2)" },
};

const statusStyle: Record<string, { color: string; bg: string; border: string }> = {
    "In Progress": { color: "#6366f1", bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.2)" },
    Learning: { color: "#7c3aed", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)" },
    "Queued Up": { color: "#9ca3af", bg: "rgba(156,163,175,0.08)", border: "rgba(156,163,175,0.2)" },
};

function SkillGrowthChart() {
    const ref = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (!ref.current) return;
        if (chartRef.current) chartRef.current.destroy();
        chartRef.current = new Chart(ref.current, {
            type: "line",
            data: {
                labels: skillGrowthData.labels,
                datasets: [
                    {
                        data: skillGrowthData.data,
                        borderColor: "#6366f1",
                        backgroundColor: "rgba(99,102,241,0.08)",
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: "#6366f1",
                        pointBorderColor: "#fff",
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: "rgba(30,27,75,0.9)",
                        padding: 10,
                        callbacks: { label: item => `  ${item.parsed.y} unique skills` },
                    },
                },
                scales: {
                    x: {
                        ticks: { color: "#9ca3af", font: { size: 10 } },
                        grid: { color: "rgba(99,102,241,0.06)" },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: { color: "#9ca3af", stepSize: 5 },
                        grid: { color: "rgba(99,102,241,0.06)" },
                    },
                },
            },
        });
        return () => {
            chartRef.current?.destroy();
        };
    }, []);

    return <canvas ref={ref} />;
}

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <Navbar />
            <main
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: 900,
                    margin: "0 auto",
                    padding: isMobile ? "6.5rem 1.25rem 4rem" : "7.5rem 2rem 5rem",
                }}
            >
                {/* Hero */}
                <section style={{ marginBottom: "5rem" }}>
                    <FadeIn delay={0}>
                        <div style={{ ...glass, borderRadius: 24, padding: isMobile ? "1.5rem" : "2rem" }}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: isMobile ? "column" : "row",
                                    gap: isMobile ? "1.25rem" : "2rem",
                                    alignItems: isMobile ? "center" : "flex-start",
                                    textAlign: isMobile ? "center" : "left",
                                }}
                            >
                                {/* Photo */}
                                <div style={{ flexShrink: 0 }}>
                                    <div
                                        style={{
                                            width: isMobile ? 84 : 100,
                                            height: isMobile ? 100 : 120,
                                            borderRadius: 18,
                                            border: "2px solid rgba(255,255,255,0.9)",
                                            boxShadow: "0 8px 24px rgba(99,102,241,0.15)",
                                            overflow: "hidden",
                                            position: "relative",
                                            margin: isMobile ? "0 auto" : undefined,
                                        }}
                                    >
                                        <Image
                                            src="/images/profile.jpg"
                                            alt="Khanifan"
                                            fill
                                            style={{ objectFit: "cover" }}
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Info */}
                                <div style={{ flex: 1, width: "100%" }}>
                                    <div
                                        style={{
                                            marginBottom: 12,
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 6,
                                            borderRadius: 999,
                                            border: "1px solid rgba(99,102,241,0.2)",
                                            background: "rgba(99,102,241,0.06)",
                                            padding: "4px 12px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: 6,
                                                height: 6,
                                                borderRadius: "50%",
                                                background: "#6366f1",
                                                animation: "pulse 2s infinite",
                                            }}
                                        />
                                        <span style={{ fontSize: 11, color: "#6366f1", fontWeight: 500 }}>
                                            Available for opportunities
                                        </span>
                                    </div>
                                    <h1
                                        style={{
                                            fontSize: "clamp(1.75rem,7vw,3.25rem)",
                                            fontWeight: 700,
                                            color: "#1e1b4b",
                                            lineHeight: 1.05,
                                            margin: "0 0 2px",
                                            letterSpacing: "-0.03em",
                                        }}
                                    >
                                        Khanifan
                                    </h1>
                                    <p
                                        style={{
                                            fontSize: "clamp(1.75rem,7vw,3.25rem)",
                                            fontWeight: 700,
                                            lineHeight: 1.05,
                                            margin: "0 0 16px",
                                            letterSpacing: "-0.03em",
                                            background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >
                                        AI Engineer
                                    </p>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            lineHeight: 1.7,
                                            color: "#6b7280",
                                            marginBottom: 20,
                                            maxWidth: 440,
                                            marginLeft: isMobile ? "auto" : 0,
                                            marginRight: isMobile ? "auto" : 0,
                                        }}
                                    >
                                        Focused on machine learning and AI, turning messy data into systems people
                                        actually use, with a growing interest in how these systems hold up outside the
                                        notebook.
                                    </p>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 8,
                                            justifyContent: isMobile ? "center" : "flex-start",
                                        }}
                                    >
                                        {["AI Engineering", "Machine Learning", "Computer Vision"].map(tag => (
                                            <span
                                                key={tag}
                                                style={{
                                                    fontSize: 11,
                                                    padding: "4px 12px",
                                                    borderRadius: 999,
                                                    border: "1px solid #e5e7eb",
                                                    color: "#6b7280",
                                                    background: "rgba(255,255,255,0.8)",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: isMobile ? "row" : "column",
                                        gap: 10,
                                        flexShrink: 0,
                                        width: isMobile ? "100%" : undefined,
                                    }}
                                >
                                    {[
                                        { value: "5", label: "Projects" },
                                        { value: "3", label: "Domains" },
                                        { value: "AI/DS", label: "Focus" },
                                    ].map(stat => (
                                        <div
                                            key={stat.label}
                                            style={{
                                                background: "rgba(255,255,255,0.8)",
                                                border: "1px solid rgba(255,255,255,0.9)",
                                                borderRadius: 14,
                                                padding: isMobile ? "10px 8px" : "12px 18px",
                                                textAlign: "center",
                                                minWidth: isMobile ? 0 : 80,
                                                flex: isMobile ? 1 : undefined,
                                                boxShadow: "0 2px 8px rgba(99,102,241,0.06)",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    fontSize: isMobile ? 16 : 20,
                                                    fontWeight: 700,
                                                    color: "#1e1b4b",
                                                    margin: 0,
                                                    letterSpacing: "-0.02em",
                                                }}
                                            >
                                                {stat.value}
                                            </p>
                                            <p
                                                style={{
                                                    fontSize: 9,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.08em",
                                                    color: "#9ca3af",
                                                    marginTop: 3,
                                                }}
                                            >
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Skill Growth Chart */}
                <section style={{ marginBottom: "5rem" }}>
                    <FadeIn delay={0.1}>
                        <div style={{ ...glass, borderRadius: 24, padding: isMobile ? "1.25rem" : "1.75rem" }}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: isMobile ? "column" : "row",
                                    justifyContent: "space-between",
                                    alignItems: isMobile ? "flex-start" : "flex-end",
                                    gap: isMobile ? 4 : 0,
                                    marginBottom: 20,
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            fontSize: 10,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.08em",
                                            color: "#9ca3af",
                                            marginBottom: 4,
                                        }}
                                    >
                                        By the Numbers
                                    </p>
                                    <h2
                                        style={{
                                            fontSize: 17,
                                            fontWeight: 600,
                                            color: "#1e1b4b",
                                            margin: 0,
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        Skill Growth
                                    </h2>
                                </div>
                                <p style={{ fontSize: 11, color: "#9ca3af" }}>
                                    Cumulative unique skills across projects
                                </p>
                            </div>
                            <div style={{ height: 200 }}>
                                <SkillGrowthChart />
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Featured Projects */}
                <section style={{ marginBottom: "5rem" }}>
                    <FadeIn delay={0.15}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-end",
                                marginBottom: 20,
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        fontSize: 10,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.08em",
                                        color: "#9ca3af",
                                        marginBottom: 4,
                                    }}
                                >
                                    Selected Work
                                </p>
                                <h2
                                    style={{
                                        fontSize: 17,
                                        fontWeight: 600,
                                        color: "#1e1b4b",
                                        margin: 0,
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    Featured Projects
                                </h2>
                            </div>
                            <a
                                href="/projects"
                                style={{ fontSize: 12, color: "#6366f1", textDecoration: "none", fontWeight: 500 }}
                            >
                                View all →
                            </a>
                        </div>
                    </FadeIn>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit,minmax(260px,1fr))",
                            gap: 16,
                        }}
                    >
                        {featuredProjects.map((project, i) => {
                            const c = domainColor[project.domain] ?? domainColor["data-science"];
                            return (
                                <FadeIn key={project.slug} delay={0.2 + i * 0.05}>
                                    <a
                                        href={`/projects/${project.slug}`}
                                        style={{
                                            ...glass,
                                            borderRadius: 20,
                                            padding: "1.25rem",
                                            display: "block",
                                            textDecoration: "none",
                                            height: "100%",
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: "inline-block",
                                                fontSize: 10,
                                                fontWeight: 600,
                                                padding: "3px 10px",
                                                borderRadius: 999,
                                                background: c.bg,
                                                color: c.color,
                                                border: `1px solid ${c.border}`,
                                                marginBottom: 10,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.04em",
                                            }}
                                        >
                                            {project.domain.replace(/-/g, " ")}
                                        </span>
                                        <p
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: "#1e1b4b",
                                                marginBottom: 6,
                                                lineHeight: 1.35,
                                            }}
                                        >
                                            {project.title}
                                        </p>
                                        <p
                                            style={{
                                                fontSize: 12.5,
                                                color: "#6b7280",
                                                lineHeight: 1.6,
                                                marginBottom: 12,
                                            }}
                                        >
                                            {project.summary}
                                        </p>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 10 }}>
                                            {project.skills.slice(0, 3).map(s => (
                                                <span
                                                    key={s}
                                                    style={{
                                                        fontSize: 10,
                                                        padding: "2px 8px",
                                                        borderRadius: 999,
                                                        background: "rgba(0,0,0,0.03)",
                                                        color: "#6b7280",
                                                    }}
                                                >
                                                    {s}
                                                </span>
                                            ))}
                                            {project.skills.length > 3 && (
                                                <span style={{ fontSize: 10, padding: "2px 8px", color: "#9ca3af" }}>
                                                    +{project.skills.length - 3}
                                                </span>
                                            )}
                                        </div>
                                        <p style={{ fontSize: 11, color: "#9ca3af" }}>{project.organization}</p>
                                    </a>
                                </FadeIn>
                            );
                        })}
                    </div>
                </section>

                {/* Currently Building */}
                <section>
                    <FadeIn delay={0.1}>
                        <p
                            style={{
                                fontSize: 10,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                color: "#9ca3af",
                                marginBottom: 4,
                            }}
                        >
                            What I am Working On
                        </p>
                        <h2
                            style={{
                                fontSize: 17,
                                fontWeight: 600,
                                color: "#1e1b4b",
                                margin: "0 0 20px",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Currently Building
                        </h2>
                    </FadeIn>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit,minmax(240px,1fr))",
                            gap: 16,
                        }}
                    >
                        {currentlyBuilding.map((item, i) => {
                            const s = statusStyle[item.status];
                            return (
                                <FadeIn key={item.title} delay={0.15 + i * 0.05}>
                                    <div style={{ ...glass, borderRadius: 20, padding: "1.25rem" }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                marginBottom: 8,
                                            }}
                                        >
                                            <p style={{ fontSize: 14, fontWeight: 600, color: "#1e1b4b", margin: 0 }}>
                                                {item.title}
                                            </p>
                                            <span
                                                style={{
                                                    fontSize: 9,
                                                    fontWeight: 600,
                                                    padding: "2px 8px",
                                                    borderRadius: 999,
                                                    background: s.bg,
                                                    color: s.color,
                                                    border: `1px solid ${s.border}`,
                                                    whiteSpace: "nowrap",
                                                    marginLeft: 8,
                                                }}
                                            >
                                                {item.status}
                                            </span>
                                        </div>
                                        <p style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.6 }}>{item.desc}</p>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}
