import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work Experience",
    description: "Work experience of Khanifan across AI, full-stack development, and data roles.",
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
    return children;
}
