import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Khanifan's Portfolio",
    description: "AI Engineering, Machine Learning, and Computer Vision portfolio of Khanifan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                style={{
                    background: "linear-gradient(145deg, #f8f7ff 0%, #f0f4ff 35%, #faf8ff 65%, #f5f3ff 100%)",
                    minHeight: "100vh",
                    color: "#1e1b4b",
                    position: "relative",
                    overflowX: "hidden",
                }}
            >
                {/* subtle dot grid texture */}
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 0,
                        pointerEvents: "none",
                        backgroundImage: "radial-gradient(rgba(99,102,241,0.18) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                        maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 90%)",
                        WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, black 40%, transparent 90%)",
                    }}
                />

                {/* iOS-style ambient orbs */}
                <div
                    style={{
                        position: "fixed",
                        borderRadius: "50%",
                        width: "min(600px, 85vw)",
                        height: "min(600px, 85vw)",
                        background: "radial-gradient(circle, rgba(165,180,252,0.4) 0%, rgba(165,180,252,0) 70%)",
                        top: "-15vw",
                        right: "-20vw",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />
                <div
                    style={{
                        position: "fixed",
                        borderRadius: "50%",
                        width: "min(500px, 75vw)",
                        height: "min(500px, 75vw)",
                        background: "radial-gradient(circle, rgba(196,181,253,0.35) 0%, rgba(196,181,253,0) 70%)",
                        bottom: "-15vw",
                        left: "-20vw",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />
                <div
                    style={{
                        position: "fixed",
                        borderRadius: "50%",
                        width: "min(350px, 60vw)",
                        height: "min(350px, 60vw)",
                        background: "radial-gradient(circle, rgba(224,231,255,0.5) 0%, rgba(224,231,255,0) 70%)",
                        top: "40%",
                        left: "30%",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />
                <div
                    style={{
                        position: "fixed",
                        borderRadius: "50%",
                        width: "min(400px, 70vw)",
                        height: "min(400px, 70vw)",
                        background: "radial-gradient(circle, rgba(216,180,254,0.3) 0%, rgba(216,180,254,0) 70%)",
                        bottom: "10%",
                        right: "-15vw",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />

                {/* faint neural-network motif, ties visually to AI/ML subject */}
                <svg
                    style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.5 }}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <pattern id="nodes" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="30" r="2" fill="rgba(99,102,241,0.35)" />
                            <circle cx="100" cy="15" r="2" fill="rgba(139,92,246,0.3)" />
                            <circle cx="70" cy="90" r="2" fill="rgba(99,102,241,0.3)" />
                            <circle cx="120" cy="110" r="2" fill="rgba(139,92,246,0.28)" />
                            <line x1="20" y1="30" x2="100" y2="15" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
                            <line x1="20" y1="30" x2="70" y2="90" stroke="rgba(99,102,241,0.12)" strokeWidth="1" />
                            <line x1="70" y1="90" x2="120" y2="110" stroke="rgba(139,92,246,0.12)" strokeWidth="1" />
                            <line x1="100" y1="15" x2="120" y2="110" stroke="rgba(99,102,241,0.08)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#nodes)" />
                </svg>

                {/* Tawk.to chat widget */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/YOUR_TAWK_ID/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `,
                    }}
                />

                {children}
            </body>
        </html>
    );
}
