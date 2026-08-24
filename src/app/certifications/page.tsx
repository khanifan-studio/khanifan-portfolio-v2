"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";
import { certifications } from "@/data";
import { Certification } from "@/types";

const glass = {
  background: "rgba(255,255,255,0.65)",
  border: "1px solid rgba(255,255,255,0.9)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  boxShadow: "0 4px 24px rgba(99,102,241,0.08), 0 1px 0 rgba(255,255,255,0.9) inset",
} as const;

const issuerAccent: Record<string, { color: string; dot: string; border: string; bg: string }> = {
  "AWS Training & Certification": { color: "#ea580c", dot: "#ea580c", border: "rgba(234,88,12,0.2)", bg: "rgba(234,88,12,0.06)" },
  "Dicoding": { color: "#6366f1", dot: "#6366f1", border: "rgba(99,102,241,0.2)", bg: "rgba(99,102,241,0.06)" },
};

function Modal({ cert, onClose }: { cert: Certification; onClose: () => void }) {
  const accent = issuerAccent[cert.issuer] ?? { color: "#374151", dot: "#374151", border: "#e5e7eb", bg: "rgba(255,255,255,0.5)" };
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "rgba(30,27,75,0.15)", backdropFilter: "blur(12px)" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ ...glass, borderRadius: 24, padding: "2rem", maxWidth: 500, width: "100%", maxHeight: "85vh", overflowY: "auto", animation: "modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div style={{ flex: 1, paddingRight: 16 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 500, color: accent.color, border: `1px solid ${accent.border}`, background: accent.bg, borderRadius: 999, padding: "2px 10px", marginBottom: 8 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: accent.dot }} />{cert.issuer}
            </span>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1e1b4b", margin: "0 0 4px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>{cert.name}</h2>
            <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>{cert.year}</p>
          </div>
          <button onClick={onClose} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid #e5e7eb", background: "rgba(255,255,255,0.8)", color: "#6b7280", fontSize: 14, cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}>✕</button>
        </div>
        {cert.description && (
          <div style={{ borderRadius: 14, border: "1px solid #e5e7eb", background: "rgba(255,255,255,0.6)", padding: "14px 16px", marginBottom: 16 }}>
            <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 8 }}>What this covers</p>
            <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, margin: 0 }}>{cert.description}</p>
          </div>
        )}
        {cert.credential_url && (
          <a href={cert.credential_url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, padding: "7px 14px", borderRadius: 8, border: "1px solid rgba(99,102,241,0.25)", color: "#6366f1", textDecoration: "none", background: "rgba(99,102,241,0.05)" }}>
            ↗ Verify credential
          </a>
        )}
      </div>
    </div>
  );
}

export default function CertificationsPage() {
  const [selected, setSelected] = useState<Certification | null>(null);
  const awsCerts = certifications.filter(c => c.issuer === "AWS Training & Certification");
  const dicodingCerts = certifications.filter(c => c.issuer === "Dicoding");

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ position: "relative", zIndex: 10, maxWidth: 1024, margin: "0 auto", padding: "7rem 1.5rem 5rem" }}>

        <FadeIn delay={0}>
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "#9ca3af", marginBottom: 8 }}>Credentials</p>
            <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, color: "#1e1b4b", margin: "0 0 8px", letterSpacing: "-0.03em" }}>Certifications</h1>
            <p style={{ fontSize: 13, color: "#9ca3af" }}>{certifications.length} certifications — click any card to learn more</p>
          </div>
        </FadeIn>

        {[
          { issuer: "AWS Training & Certification", certs: awsCerts, accent: issuerAccent["AWS Training & Certification"] },
          { issuer: "Dicoding", certs: dicodingCerts, accent: issuerAccent["Dicoding"] },
        ].map((group, gi) => (
          <FadeIn key={group.issuer} delay={0.08 + gi * 0.06}>
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: group.accent.dot }} />
                <p style={{ fontSize: 13, fontWeight: 600, color: group.accent.color, margin: 0 }}>{group.issuer}</p>
                <span style={{ fontSize: 11, color: "#9ca3af" }}>({group.certs.length})</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 10 }}>
                {group.certs.map((cert, i) => (
                  <FadeIn key={cert.id} delay={0.04 + i * 0.03}>
                    <button onClick={() => setSelected(cert)}
                      style={{ ...glass, borderRadius: 14, padding: "14px 16px", textAlign: "left", cursor: "pointer", transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)", width: "100%", border: "1px solid rgba(255,255,255,0.9)" }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 8px 24px rgba(99,102,241,0.12), 0 1px 0 rgba(255,255,255,0.9) inset"; el.style.borderColor = group.accent.border; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = "0 4px 24px rgba(99,102,241,0.08), 0 1px 0 rgba(255,255,255,0.9) inset"; el.style.borderColor = "rgba(255,255,255,0.9)"; }}
                    >
                      <p style={{ fontSize: 12, fontWeight: 600, color: "#1e1b4b", margin: "0 0 4px", lineHeight: 1.4 }}>{cert.name}</p>
                      <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>{cert.year}{cert.credential_url ? " · Verify ↗" : ""}</p>
                    </button>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}

      </main>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      {selected && <Modal cert={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
