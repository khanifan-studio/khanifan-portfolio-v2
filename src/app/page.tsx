"use client";
import { useEffect, useRef } from "react";
import { Chart, LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Filler } from "chart.js";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import { featuredProjects, skillGrowthData, currentlyBuilding } from "@/data";

Chart.register(LineController, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Filler);

const glass = {
  background: "rgba(255,255,255,0.65)",
  border: "1px solid rgba(255,255,255,0.9)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  boxShadow: "0 4px 24px rgba(99,102,241,0.08), 0 1px 0 rgba(255,255,255,0.9) inset",
} as const;

const domainAccent: Record<string, { bg: string; border: string; color: string; dot: string }> = {
  "computer-vision": { bg: "rgba(234,88,12,0.08)", border: "rgba(234,88,12,0.2)", color: "#ea580c", dot: "#ea580c" },
  "data-analytics":  { bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)", color: "#7c3aed", dot: "#7c3aed" },
  "data-science":    { bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.2)", color: "#6366f1", dot: "#6366f1" },
};

const statusStyle: Record<string, { color: string; bg: string; border: string }> = {
  "In Progress": { color: "#6366f1", bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.2)" },
  "Exploring":   { color: "#7c3aed", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)" },
  "Planned":     { color: "#9ca3af", bg: "rgba(156,163,175,0.08)", border: "rgba(156,163,175,0.2)" },
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
        datasets: [{
          data: skillGrowthData.data,
          borderColor: "#6366f1",
          backgroundColor: "rgba(99,102,241,0.06)",
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#6366f1",
          pointBorderColor: "white",
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgba(255,255,255,0.95)",
            borderColor: "rgba(99,102,241,0.15)",
            borderWidth: 1,
            titleColor: "#1e1b4b",
            bodyColor: "#6366f1",
            padding: 10,
            boxShadow: "0 4px 16px rgba(99,102,241,0.1)",
            callbacks: { label: (item) => `  ${item.parsed.y} unique skills` },
          },
        },
        scales: {
          x: {
            ticks: { color: "#9ca3af", font: { size: 10 } },
            grid: { color: "rgba(99,102,241,0.05)" },
            border: { color: "rgba(99,102,241,0.08)" },
          },
          y: {
            beginAtZero: true,
            ticks: { color: "#9ca3af", stepSize: 5 },
            grid: { color: "rgba(99,102,241,0.05)" },
            border: { color: "rgba(99,102,241,0.08)" },
          },
        },
      },
    });
    return () => { chartRef.current?.destroy(); };
  }, []);

  return <canvas ref={ref} />;
}

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ position: "relative", zIndex: 10, maxWidth: 1024, margin: "0 auto", padding: "7rem 1.5rem 5rem" }}>

        {/* Hero */}
        <section style={{ marginBottom: "5rem" }}>
          <FadeIn delay={0}>
            <div style={{ ...glass, borderRadius: 24, padding: "2rem" }}>
              <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>

                {/* Photo */}
                <div style={{ flexShrink: 0 }}>
                  <div style={{
                    width: 100, height: 120, borderRadius: 18,
                    background: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
                    border: "2px solid rgba(255,255,255,0.9)",
                    boxShadow: "0 8px 24px rgba(99,102,241,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 36,
                  }}>
                    👤
                  </div>
                </div>

                {/* Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: 12, display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 999, border: "1px solid rgba(99,102,241,0.2)", background: "rgba(99,102,241,0.06)", padding: "4px 12px" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1", animation: "pulse 2s infinite" }} />
                    <span style={{ fontSize: 11, color: "#6366f1", fontWeight: 500 }}>Available for opportunities</span>
                  </div>
                  <h1 style={{ fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 700, color: "#1e1b4b", lineHeight: 1.05, margin: "0 0 2px", letterSpacing: "-0.03em" }}>Khanifan</h1>
                  <p style={{ fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 700, lineHeight: 1.05, margin: "0 0 16px", letterSpacing: "-0.03em", background: "linear-gradient(135deg,#6366f1,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>AI Engineer</p>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#6b7280", marginBottom: 20, maxWidth: 440 }}>
                    Building intelligent systems — from machine learning models and computer vision pipelines to production-ready AI applications.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["AI Engineering", "Machine Learning", "Computer Vision"].map((tag) => (
                      <span key={tag} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 999, border: "1px solid #e5e7eb", color: "#6b7280", background: "rgba(255,255,255,0.8)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
                  {[{ value: "5", label: "Projects" }, { value: "3", label: "Domains" }, { value: "AI/DS", label: "Focus" }].map((stat) => (
                    <div key={stat.label} style={{
                      background: "rgba(255,255,255,0.8)",
                      border: "1px solid rgba(255,255,255,0.9)",
                      borderRadius: 14, padding: "12px 18px", textAlign: "center", minWidth: 80,
                      boxShadow: "0 2px 8px rgba(99,102,241,0.06)",
                    }}>
                      <p style={{ fontSize: 20, fontWeight: 700, color: "#1e1b4b", margin: 0, letterSpacing: "-0.02em" }}>{stat.value}</p>
                      <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginTop: 3 }}>{stat.label}</p>
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
            <div style={{ ...glass, borderRadius: 20, padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20 }}>
                <div>
                  <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 4 }}>By the Numbers</p>
                  <h2 style={{ fontSize: 17, fontWeight: 600, color: "#1e1b4b", margin: 0, letterSpacing: "-0.02em" }}>Skill Growth</h2>
                </div>
                <p style={{ fontSize: 11, color: "#9ca3af" }}>Cumulative unique skills across projects</p>
              </div>
              <div style={{ height: 200 }}>
                <SkillGrowthChart />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Featured Projects */}
        <section style={{ marginBottom: "5rem" }}>
          <FadeIn delay={0.05}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20 }}>
              <div>
                <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 4 }}>Selected Work</p>
                <h2 style={{ fontSize: 17, fontWeight: 600, color: "#1e1b4b", margin: 0, letterSpacing: "-0.02em" }}>Featured Projects</h2>
              </div>
              <a href="/projects" style={{ fontSize: 12, color: "#6366f1", textDecoration: "none", fontWeight: 500 }}>View all →</a>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 14 }}>
            {featuredProjects.map((project, i) => {
              const accent = domainAccent[project.domain];
              return (
                <FadeIn key={project.slug} delay={0.1 + i * 0.07}>
                  <a
                    href={`/projects/${project.slug}`}
                    style={{ ...glass, borderRadius: 20, padding: 20, display: "flex", flexDirection: "column", textDecoration: "none", transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-4px) scale(1.01)";
                      el.style.boxShadow = "0 12px 40px rgba(99,102,241,0.14), 0 1px 0 rgba(255,255,255,0.9) inset";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "none";
                      el.style.boxShadow = "0 4px 24px rgba(99,102,241,0.08), 0 1px 0 rgba(255,255,255,0.9) inset";
                    }}
                  >
                    <div style={{ marginBottom: 14 }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 5, borderRadius: 999, border: `1px solid ${accent.border}`, background: accent.bg, padding: "3px 10px", fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em", color: accent.color }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: accent.dot }} />
                        {project.domain.replace(/-/g, " ")}
                      </span>
                    </div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#1e1b4b", marginBottom: 8, lineHeight: 1.3, letterSpacing: "-0.01em" }}>{project.title}</p>
                    <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.6, flex: 1 }}>{project.summary}</p>
                    <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {project.skills.slice(0, 3).map((skill) => (
                        <span key={skill} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 6, border: "1px solid #e5e7eb", color: "#9ca3af", background: "rgba(255,255,255,0.7)" }}>
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 6, border: "1px solid #e5e7eb", color: "#c4b5fd", background: "rgba(255,255,255,0.7)" }}>
                          +{project.skills.length - 3}
                        </span>
                      )}
                    </div>
                    <p style={{ marginTop: 10, fontSize: 11, color: "#9ca3af" }}>{project.organization}</p>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* Currently Building */}
        <section>
          <FadeIn delay={0.05}>
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 4 }}>What I am Working On</p>
              <h2 style={{ fontSize: 17, fontWeight: 600, color: "#1e1b4b", margin: 0, letterSpacing: "-0.02em" }}>Currently Building</h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 }}>
            {currentlyBuilding.map((item, i) => {
              const s = statusStyle[item.status];
              return (
                <FadeIn key={item.title} delay={0.1 + i * 0.07}>
                  <div style={{ ...glass, borderRadius: 20, padding: 20, transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-3px)";
                      el.style.boxShadow = "0 10px 32px rgba(99,102,241,0.12), 0 1px 0 rgba(255,255,255,0.9) inset";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "none";
                      el.style.boxShadow = "0 4px 24px rgba(99,102,241,0.08), 0 1px 0 rgba(255,255,255,0.9) inset";
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <p style={{ fontSize: 14, fontWeight: 600, color: "#1e1b4b", margin: 0, flex: 1, paddingRight: 10, letterSpacing: "-0.01em" }}>{item.title}</p>
                      <span style={{ fontSize: 10, padding: "3px 9px", borderRadius: 999, border: `1px solid ${s.border}`, background: s.bg, color: s.color, fontWeight: 500, whiteSpace: "nowrap" }}>
                        {item.status}
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

      </main>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
