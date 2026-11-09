import type { Metadata } from "next";
import { projects } from "@/data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find(item => item.slug === slug);

    if (!project) {
        return {};
    }

    return {
        title: project.title,
        description: project.summary,
    };
}

export function generateStaticParams() {
    return projects.map(project => ({ slug: project.slug }));
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
    return children;
}
