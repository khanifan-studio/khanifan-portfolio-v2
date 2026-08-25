export type ProjectDomain = "computer-vision" | "data-analytics" | "data-science";

export interface Project {
    slug: string;
    title: string;
    role: string;
    organization: string;
    period: string;
    domain: ProjectDomain;
    summary: string;
    description: string;
    skills: string[];
    github_url: string;
    featured: boolean;
    hero_image?: string | null;
    architecture_diagram?: string | null;
}

export interface Certification {
    id: number;
    name: string;
    issuer: string;
    year: string;
    credential_url?: string | null;
    description?: string;
    pdf_url?: string | null;
}

export interface Skill {
    name: string;
    level: "Comfortable with" | "Working knowledge" | "Learning";
}

export interface SkillGroup {
    category: string;
    skills: Skill[];
}
