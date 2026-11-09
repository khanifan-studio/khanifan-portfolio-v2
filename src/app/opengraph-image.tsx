import { ImageResponse } from "next/og";

export const alt = "Khanifan's Portfolio";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #f8f7ff 0%, #f0f4ff 100%)",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <div style={{ fontSize: 100, fontWeight: 700, color: "#1e1b4b", letterSpacing: "-5px" }}>
                    Khanifan
                </div>
                <div style={{ marginTop: 24, fontSize: 36, fontWeight: 500, color: "#6366f1" }}>AI Engineer</div>
                <div style={{ position: "absolute", bottom: 56, fontSize: 24, color: "#6366f1" }}>
                    khanifan.my.id
                </div>
            </div>
        ),
        size
    );
}
