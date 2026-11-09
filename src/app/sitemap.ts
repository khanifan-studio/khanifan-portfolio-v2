import type { MetadataRoute } from "next";
import { projects } from "@/data";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ["/", "/projects", "/about", "/certifications", "/experience"];

    return [
        ...routes.map(route => ({ url: `${siteUrl}${route}` })),
        ...projects.map(project => ({ url: `${siteUrl}/projects/${project.slug}` })),
    ];
}
