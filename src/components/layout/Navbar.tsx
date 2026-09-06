"use client";
import { useEffect, useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/certifications", label: "Certifications" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [path, setPath] = useState("/");
    const [isMobile, setIsMobile] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        setPath(window.location.pathname);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = drawerOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [drawerOpen]);

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    padding: scrolled ? "10px 24px" : "16px 24px",
                    transition: "padding 0.3s ease",
                }}
            >
                <div style={{ maxWidth: 1024, margin: "0 auto" }}>
                    <div
                        style={{
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
                        }}
                    >
                        <a
                            href="/"
                            style={{
                                fontSize: 15,
                                fontWeight: 700,
                                color: "#1e1b4b",
                                textDecoration: "none",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            khanifan<span style={{ color: "#6366f1" }}>.</span>
                        </a>

                        {!isMobile && (
                            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                                {links.map(link => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        style={{
                                            fontSize: 13,
                                            fontWeight: path === link.href ? 500 : 400,
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
                        )}

                        {!isMobile && (
                            <a
                                href="mailto:khanifan.mail@gmail.com"
                                style={{
                                    fontSize: 12,
                                    fontWeight: 500,
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
                        )}

                        {isMobile && (
                            <button
                                onClick={() => setDrawerOpen(true)}
                                aria-label="Open menu"
                                style={{
                                    width: 34,
                                    height: 34,
                                    borderRadius: 9,
                                    border: "1px solid rgba(99,102,241,0.15)",
                                    background: "rgba(99,102,241,0.06)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 3,
                                    cursor: "pointer",
                                }}
                            >
                                <span style={{ width: 16, height: 2, borderRadius: 2, background: "#6366f1" }} />
                                <span style={{ width: 16, height: 2, borderRadius: 2, background: "#6366f1" }} />
                                <span style={{ width: 16, height: 2, borderRadius: 2, background: "#6366f1" }} />
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {/* Backdrop */}
            {isMobile && (
                <div
                    onClick={() => setDrawerOpen(false)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 60,
                        background: "rgba(30,27,75,0.25)",
                        backdropFilter: "blur(4px)",
                        opacity: drawerOpen ? 1 : 0,
                        pointerEvents: drawerOpen ? "auto" : "none",
                        transition: "opacity 0.3s ease",
                    }}
                />
            )}

            {/* Slide-in drawer */}
            {isMobile && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 70,
                        width: "78%",
                        maxWidth: 300,
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        borderLeft: "1px solid rgba(255,255,255,0.9)",
                        boxShadow: "-8px 0 32px rgba(30,27,75,0.12)",
                        padding: "20px 20px",
                        display: "flex",
                        flexDirection: "column",
                        transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
                        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 28,
                        }}
                    >
                        <span style={{ fontSize: 15, fontWeight: 700, color: "#1e1b4b", letterSpacing: "-0.02em" }}>
                            khanifan<span style={{ color: "#6366f1" }}>.</span>
                        </span>
                        <button
                            onClick={() => setDrawerOpen(false)}
                            aria-label="Close menu"
                            style={{
                                width: 32,
                                height: 32,
                                borderRadius: 8,
                                border: "1px solid #e5e7eb",
                                background: "white",
                                color: "#6b7280",
                                fontSize: 14,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            ✕
                        </button>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        {links.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setDrawerOpen(false)}
                                style={{
                                    fontSize: 15,
                                    fontWeight: path === link.href ? 600 : 500,
                                    color: path === link.href ? "#6366f1" : "#374151",
                                    textDecoration: "none",
                                    padding: "12px 14px",
                                    borderRadius: 10,
                                    background: path === link.href ? "rgba(99,102,241,0.08)" : "transparent",
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <a
                        href="mailto:khanifan.mail@gmail.com"
                        onClick={() => setDrawerOpen(false)}
                        style={{
                            marginTop: 20,
                            fontSize: 14,
                            fontWeight: 600,
                            padding: "12px 16px",
                            borderRadius: 12,
                            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                            color: "white",
                            textDecoration: "none",
                            textAlign: "center",
                            boxShadow: "0 4px 14px rgba(99,102,241,0.3)",
                        }}
                    >
                        Contact Me
                    </a>
                </div>
            )}
        </>
    );
}
