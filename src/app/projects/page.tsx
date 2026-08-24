"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/data";
import { ProjectDomain } from "@/types";

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

const filters = [
  { label: "All", value: "all" },
  { label: "Computer Vision", value: "computer-vision" },
  { label: "Data Science", value: "data-science" },
  { label: "Data Analytics", value: "data-analytics" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.domain === active);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ position: "relative", zIndex: 10, maxWidth: 1024, margin: "0 auto", padding: "7rem 1.5rem 5rem" }}>

        <FadeIn delay={0}>
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 8 }}>Portfolio</p>
            <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: "#1e1b4b", margin: "0 0 8px", letterSpacing: "-0.03em" }}>All Projects</h1>
            <p style={{ fontSize: 13, color: "#9ca3af" }}>{projects.length} projects across {new Set(projects.map(p => p.domain)).size} domains</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div style={{ display: "flex", gap: 8, marginBottom: "2.5rem", flexWrap: "wrap" }}>
            {filters.map((f) => (
              <button key={f.value} onClick={() => setActive(f.value)} style={{
                fontSize: 12, fontWeight: 500, padding: "6px 16px", borderRadius: 999, cursor: "pointer", transition: "all 0.2s",
                border: active === f.value ? "1px solid rgba(99,102,241,0.3)" : "1px solid #e5e7eb",
                background: active === f.value ? "rgba(99,102,241,0.08)" : "rgba(255,255,255,0.7)",
                color: active === f.value ? "#6366f1" : "#6b7280",
                boxShadow: active === f.value ? "0 2px 8px rgba(99,102,241,0.12)" : "none",
              }}>
                {f.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 14 }}>
          {filtered.map((project, i) => {
            const accent = domainAccent[project.domain as keyof typeof domainAccent] ?? domainAccent["data-science"];
            return (
              <FadeIn key={project.slug} delay={0.05 + i * 0.05}>
                <a href={`/projects/${project.slug}`} style={{ ...glass, borderRadius: 20, padding: 20, display: "flex", flexDirection: "column", textDecoration: "none", transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px) scale(1.01)"; el.style.boxShadow = "0 12px 40px rgba(99,102,241,0.14), 0 1px 0 rgba(255,255,255,0.9) inset"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = "0 4px 24px rgba(99,102,241,0.08), 0 1px 0 rgba(255,255,255,0.9) inset"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, borderRadius: 999, border: `1px solid ${accent.border}`, background: accent.bg, padding: "3px 10px", fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em", color: accent.color }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: accent.dot }} />
                      {project.domain.replace(/-/g, " ")}
                    </span>
                    {project.featured && (
                      <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 999, border: "1px solid rgba(99,102,241,0.2)", color: "#6366f1", background: "rgba(99,102,241,0.06)", fontWeight: 500 }}>Featured</span>
                    )}
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1e1b4b", marginBottom: 8, lineHeight: 1.3, letterSpacing: "-0.01em" }}>{project.title}</p>
                  <p style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.6, flex: 1 }}>{project.summary}</p>
                  <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.skills.slice(0, 3).map((skill) => (
                      <span key={skill} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 6, border: "1px solid #e5e7eb", color: "#9ca3af", background: "rgba(255,255,255,0.7)" }}>{skill}</span>
                    ))}
                    {project.skills.length > 3 && <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 6, border: "1px solid #e5e7eb", color: "#c4b5fd", background: "rgba(255,255,255,0.7)" }}>+{project.skills.length - 3}</span>}
                  </div>
                  <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between" }}>
                    <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{project.organization}</p>
                    <p style={{ fontSize: 11, color: "#c4b5fd", margin: 0 }}>{project.period}</p>
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </main>
    </div>
  );
}
