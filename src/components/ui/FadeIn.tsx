"use client";
import { useRef, useEffect, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function FadeIn({ children, delay = 0, direction = "up" }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const transform = {
    up: "translateY(24px)",
    left: "translateX(-24px)",
    right: "translateX(24px)",
  }[direction];

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transform,
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
