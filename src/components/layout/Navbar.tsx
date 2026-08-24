"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/certifications", label: "Certifications" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(window.location.pathname);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? "10px 24px" : "16px 24px",
      transition: "padding 0.3s ease",
    }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <div style={{
          background: "rgba(255,255,255,0.72)",
          border: "1px solid rgba(255,255,255,0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: 16,
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: scrolled
            ? "0 8px 32px rgba(99,102,241,0.08), 0 1px 0 rgba(255,255,255,0.8) inset"
            : "0 2px 16px rgba(99,102,241,0.05), 0 1px 0 rgba(255,255,255,0.8) inset",
          transition: "box-shadow 0.3s ease",
        }}>
          <a href="/" style={{ fontSize: 15, fontWeight: 700, color: "#1e1b4b", textDecoration: "none", letterSpacing: "-0.02em" }}>
            khanifan<span style={{ color: "#6366f1" }}>.</span>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 13, fontWeight: path === link.href ? 500 : 400,
                  color: path === link.href ? "#6366f1" : "#6b7280",
                  textDecoration: "none",
                  padding: "5px 12px",
                  borderRadius: 8,
                  background: path === link.href ? "rgba(99,102,241,0.08)" : "transparent",
                  transition: "all 0.15s ease",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:khanifan.mail@gmail.com"
            style={{
              fontSize: 12, fontWeight: 500,
              padding: "7px 16px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "white",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(99,102,241,0.25)",
              transition: "all 0.2s ease",
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
