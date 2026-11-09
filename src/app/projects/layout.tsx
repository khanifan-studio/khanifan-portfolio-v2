import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Selected AI, machine learning, computer vision, and data projects by Khanifan.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
