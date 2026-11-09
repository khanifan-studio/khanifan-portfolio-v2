import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Certifications",
    description: "AWS and Dicoding certifications earned by Khanifan.",
};

export default function CertificationsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
