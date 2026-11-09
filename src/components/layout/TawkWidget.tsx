"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
    interface Window {
        Tawk_API?: Record<string, unknown>;
        Tawk_LoadStart?: Date;
    }
}

export default function TawkWidget() {
    const embedPath = process.env.NEXT_PUBLIC_TAWK_EMBED_PATH?.trim();

    useEffect(() => {
        if (!embedPath) return;
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();
    }, [embedPath]);

    if (!embedPath) return null;

    return (
        <Script
            src={`https://embed.tawk.to/${embedPath}`}
            strategy="lazyOnload"
            charSet="UTF-8"
            crossOrigin={"*" as "anonymous"}
        />
    );
}
