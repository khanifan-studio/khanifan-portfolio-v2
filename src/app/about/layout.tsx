import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About Khanifan: background, skills, and the journey into AI engineering.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
