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
                {/* iOS-style ambient orbs */}
                <div
                    style={{
                        position: "fixed",
                        borderRadius: "50%",
                        width: 600,
                        height: 600,
                        background: "radial-gradient(circle, rgba(165,180,252,0.35) 0%, rgba(165,180,252,0) 70%)",
                        top: -200,
                        right: -150,
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />
                <div
                    style={{
                        position: "fixed",
                        borderRadius: "50%",
                        width: 500,
                        height: 500,
                        background: "radial-gradient(circle, rgba(196,181,253,0.3) 0%, rgba(196,181,253,0) 70%)",
                        bottom: -150,
                        left: -100,
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />
                <div
                    style={{
                        position: "fixed",
                        borderRadius: "50%",
                        width: 350,
                        height: 350,
                        background: "radial-gradient(circle, rgba(224,231,255,0.4) 0%, rgba(224,231,255,0) 70%)",
                        top: "40%",
                        left: "30%",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />

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
