"use client";
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import { skillGroups } from "@/data";

const glass = {
  background: "rgba(255,255,255,0.65)",
  border: "1px solid rgba(255,255,255,0.9)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  boxShadow: "0 4px 24px rgba(99,102,241,0.08), 0 1px 0 rgba(255,255,255,0.9) inset",
} as const;

const skillAccent: Record<string, { color: string; border: string; bg: string }> = {
  "AI & ML":     { color: "#6366f1", border: "rgba(99,102,241,0.2)",  bg: "rgba(99,102,241,0.05)"  },
  "Data":        { color: "#7c3aed", border: "rgba(124,58,237,0.2)",  bg: "rgba(124,58,237,0.05)"  },
  "Engineering": { color: "#ea580c", border: "rgba(234,88,12,0.2)",   bg: "rgba(234,88,12,0.05)"   },
};

const timeline = [
  { year: "2023", event: "Started Information Systems at President University", detail: "Began the academic journey that would shape a career in AI engineering." },
  { year: "2024", event: "Completed 15 certifications — AWS & Dicoding", detail: "Built foundational knowledge in cloud, ML, and data science through structured learning." },
  { year: "May 2025", event: "Built Student Performance Classification", detail: "First ML project — 90% accuracy predicting academic performance using Scikit-learn." },
  { year: "Jun 2025", event: "Marketing Dashboard & Funnel Prediction", detail: "Designed an interactive analytics dashboard with predictive model for President University." },
  { year: "Sep 2025", event: "Joined PT Salam Pacific Indonesia Lines", detail: "Developed Early Warning Medical system and transformed ship operation data pipelines." },
  { year: "Jan 2026", event: "Capstone with Dishub Central Aceh", detail: "Led YOLOv8 computer vision pipeline for real-time traffic analysis — deployed for government use." },
  { year: "2026", event: "Expected graduation — pursuing AI Engineer career", detail: "Targeting full-time AI Engineering roles in applied ML and computer vision." },
];

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const isLast = index === timeline.length - 1;
  return (
    <div style={{ display: "flex", gap: 16, paddingBottom: isLast ? 0 : 24 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 18 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: hovered ? "#6366f1" : "rgba(99,102,241,0.3)", border: `2px solid ${hovered ? "rgba(99,102,241,0.4)" : "rgba(99,102,241,0.15)"}`, boxShadow: hovered ? "0 0 12px rgba(99,102,241,0.3)" : "none", transition: "all 0.3s ease", marginTop: 4 }} />
        {!isLast && <div style={{ width: 1, flex: 1, marginTop: 6, background: "linear-gradient(to bottom, rgba(99,102,241,0.15), rgba(99,102,241,0.03))" }} />}
      </div>
      <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{ flex: 1, borderRadius: 12, padding: "10px 14px", background: hovered ? "rgba(99,102,241,0.04)" : "transparent", border: `1px solid ${hovered ? "rgba(99,102,241,0.12)" : "transparent"}`, transition: "all 0.25s ease", cursor: "default" }}
      >
        <p style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6366f1", margin: "0 0 4px", opacity: hovered ? 1 : 0.6, transition: "opacity 0.25s" }}>{item.year}</p>
        <p style={{ fontSize: 13, fontWeight: 500, color: "#1e1b4b", margin: "0 0 4px", lineHeight: 1.4 }}>{item.event}</p>
        <p style={{ fontSize: 12, color: "#6b7280", margin: 0, lineHeight: 1.6, maxHeight: hovered ? 60 : 0, overflow: "hidden", opacity: hovered ? 1 : 0, transition: "all 0.3s ease" }}>{item.detail}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ position: "relative", zIndex: 10, maxWidth: 768, margin: "0 auto", padding: "7rem 1.5rem 5rem" }}>

        <FadeIn delay={0}>
          <div style={{ ...glass, borderRadius: 24, padding: "2rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ width: 80, height: 96, borderRadius: 16, background: "linear-gradient(135deg,#e0e7ff,#c7d2fe)", border: "2px solid rgba(255,255,255,0.9)", boxShadow: "0 6px 20px rgba(99,102,241,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, flexShrink: 0 }}>👤</div>
              <div>
                <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 8 }}>About Me</p>
                <h1 style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 700, color: "#1e1b4b", margin: "0 0 4px", letterSpacing: "-0.03em" }}>Khanifan</h1>
                <p style={{ fontSize: 13, color: "#6366f1", fontWeight: 500, margin: "0 0 12px" }}>AI Engineer · Information Systems</p>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "#6b7280", margin: 0 }}>
                  Student at President University (Expected 2026, GPA 3.47). Building intelligent systems — from computer vision pipelines to production-ready AI applications — for government and industry clients.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ ...glass, borderRadius: 20, padding: "1.5rem", marginBottom: "1rem" }}>
            <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 16 }}>Technical Skills</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 10 }}>
              {skillGroups.map((group) => {
                const a = skillAccent[group.category] ?? { color: "#374151", border: "rgba(55,65,81,0.2)", bg: "rgba(55,65,81,0.04)" };
                return (
                  <div key={group.category} style={{ borderRadius: 14, border: `1px solid ${a.border}`, background: a.bg, padding: "14px 16px" }}>
                    <p style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: a.color, margin: "0 0 10px" }}>{group.category}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {group.skills.map((skill) => (
                        <div key={skill} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#374151" }}>
                          <span style={{ width: 10, height: 1, background: "rgba(99,102,241,0.2)", flexShrink: 0 }} />{skill}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ ...glass, borderRadius: 20, padding: "1.5rem", marginBottom: "1rem" }}>
            <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 20 }}>Journey</p>
            <div>
              {timeline.map((item, i) => <TimelineItem key={i} item={item} index={i} />)}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ ...glass, borderRadius: 20, padding: "1.5rem" }}>
            <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 16 }}>Get in Touch</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                { label: "Email", href: "mailto:khanifan.mail@gmail.com" },
                { label: "GitHub", href: "https://github.com/khanifan-studio" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/khanifan-khanifan-5a4b23264/" },
              ].map((link) => (
                <a key={link.label} href={link.href} target={link.label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ fontSize: 13, fontWeight: 500, padding: "8px 18px", borderRadius: 10, border: "1px solid #e5e7eb", color: "#374151", textDecoration: "none", background: "rgba(255,255,255,0.8)", transition: "all 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(99,102,241,0.3)"; el.style.color = "#6366f1"; el.style.boxShadow = "0 4px 12px rgba(99,102,241,0.1)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#e5e7eb"; el.style.color = "#374151"; el.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)"; }}
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
