"use client";
import { notFound, useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/data";

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

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();
  const accent = domainAccent[project.domain] ?? domainAccent["data-science"];

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ position: "relative", zIndex: 10, maxWidth: 768, margin: "0 auto", padding: "7rem 1.5rem 5rem" }}>

        <FadeIn delay={0}>
          <a href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "#6b7280", textDecoration: "none", marginBottom: "1.5rem", fontWeight: 500, transition: "color 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#6366f1"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#6b7280"}
          >
            ← Back to Projects
          </a>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div style={{ ...glass, borderRadius: 24, padding: "2rem", marginBottom: "1rem" }}>
            <div style={{ marginBottom: 16 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 5, borderRadius: 999, border: `1px solid ${accent.border}`, background: accent.bg, padding: "4px 12px", fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em", color: accent.color }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent.dot }} />
                {project.domain.replace(/-/g, " ")}
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(1.5rem,4vw,2.25rem)", fontWeight: 700, color: "#1e1b4b", lineHeight: 1.2, margin: "0 0 12px", letterSpacing: "-0.02em" }}>{project.title}</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px", marginBottom: 16 }}>
              {[project.role, project.organization, project.period].map((item, i) => (
                <span key={i} style={{ fontSize: 13, color: i === 2 ? "#9ca3af" : "#6b7280" }}>{item}</span>
              ))}
            </div>
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{project.summary}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ ...glass, borderRadius: 20, padding: "1.5rem", marginBottom: "1rem" }}>
            <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 12 }}>About this project</p>
            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.8, margin: 0 }}>{project.description}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ ...glass, borderRadius: 20, padding: "1.5rem", marginBottom: "1rem" }}>
            <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 12 }}>Skills & Tools</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.skills.map((skill) => (
                <span key={skill} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 8, border: "1px solid #e5e7eb", color: "#374151", background: "rgba(255,255,255,0.8)" }}>{skill}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ ...glass, borderRadius: 20, padding: "1.5rem" }}>
            <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 12 }}>Links</p>
            <a href={project.github_url} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, padding: "9px 18px", borderRadius: 10, border: "1px solid #e5e7eb", color: "#374151", textDecoration: "none", background: "rgba(255,255,255,0.8)", transition: "all 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(99,102,241,0.3)"; el.style.color = "#6366f1"; el.style.boxShadow = "0 4px 12px rgba(99,102,241,0.1)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#e5e7eb"; el.style.color = "#374151"; el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)"; }}
            >
              ↗ View on GitHub
            </a>
          </div>
        </FadeIn>

      </main>
    </div>
  );
}
