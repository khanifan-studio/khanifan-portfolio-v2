import { Certification, Project, SkillGroup, WorkExperience } from "@/types";

export const projects: Project[] = [
    {
        slug: "kulink",
        title: "Kulink",
        role: "Chief Technology Officer (CTO)",
        organization: "Kulink",
        period: "2026 – Present",
        domain: "ai-product",
        summary:
            "AI-powered project oversight platform for small-to-medium Indonesian contractors, turning everyday site photos into verified progress records. Top 10 finalist at UD Impact 2026.",
        description:
            "Kulink gives contractors, developers, and their stakeholders a single, verified record of what is happening on every site, captured automatically from the field and structured without manual entry. Photographs are already the de facto record of progress on almost every Indonesian construction site, so Kulink is built around the field photo as its primary input: the AI is the workflow, not an add-on.\n\nThe platform targets a recurring problem in the industry: scattered documentation, manual reporting, and limited project visibility that lead to delayed decisions. Spreadsheets and messaging apps were never designed to connect documentation, reporting, and monitoring, while enterprise construction platforms are priced and scoped for far larger portfolios. Kulink is scoped and priced for small-to-medium contractors, from a single site today to a multi-project portfolio as the business grows.\n\nThe platform is currently in development: the workforce management module is live in prototype, while the three AI engines are being built.",
        role_detail:
            "As CTO, I am responsible for the technical direction of Kulink: shaping the product architecture and leading the development of its AI features (progress tracking, documentation, and daily reporting) alongside the workforce management module. Kulink was selected as a Top 10 finalist at UD Impact 2026.",
        features: [
            {
                name: "AI Progress Tracking",
                status: "In development",
                description:
                    "Assesses structural, finishing, and MEP progress directly from field photography, replacing manual percentage entry with a verified, photo-backed record.",
            },
            {
                name: "AI Documentation",
                status: "In development",
                description:
                    "Indexes every photograph and field record automatically by level, trade, and date, forming an audit-ready archive rather than a personal photo library.",
            },
            {
                name: "AI Daily Reporting",
                status: "In development",
                description:
                    "Compiles field activity into a structured daily report without manual input, so the office gets an accurate account of site conditions without chasing updates.",
            },
            {
                name: "Workforce Management",
                status: "Live in prototype",
                description:
                    "Attendance, task assignment, and productivity for every crew member, consolidated into a single view for both site and head-office management.",
            },
        ],
        achievement: "Top 10 Finalist, UD Impact 2026",
        skills: ["Computer Vision", "AI Engineering", "Product Development", "Technical Leadership"],
        live_url: "https://kulink-app.vercel.app/",
        github_url: null,
        featured: true,
    },
    {
        slug: "smart-traffic-management-system",
        title: "Traffic Trend Analysis in Tourist Areas",
        role: "AI Engineer (Computer Vision)",
        organization: "President University x Dishub Central Aceh",
        period: "Jan 2026 – Jul 2026",
        domain: "computer-vision",
        summary: "Real-time vehicle counting and density estimation for tourist-area traffic management using YOLOv8.",
        description:
            "Capstone project with the Department of Transportation (Dishub) of Central Aceh to build an intelligent traffic analysis prototype for the Takengon and Lake Laut Tawar areas. Implemented YOLOv8 object detection integrated into an OpenCV video pipeline for real-time vehicle counting and density estimation, plus PostgreSQL-backed analytics dashboards built to support evidence-based policy-making. The prototype was handed over to Dishub Central Aceh.",
        skills: ["YOLOv8", "OpenCV", "Computer Vision", "PostgreSQL", "Machine Learning"],
        github_url: "https://github.com/Meozee/smart-traffic-management-system-01",
        featured: true,
    },
    {
        slug: "early-warning-medical-project",
        title: "Early Warning Medical Project",
        role: "AI Engineer (Data & Monitoring Systems)",
        organization: "PT Salam Pacific Indonesia Lines",
        period: "Sep 2025 – Oct 2025",
        domain: "data-science",
        summary:
            "Disease monitoring system identifying respiratory illness risk factors via EDA and real-time API data mining.",
        description:
            "Developed to monitor regions with high frequency of disease cases. EDA showed most identified diseases were respiratory-related, leading to a data mining process to determine contributing factors. Integrated the project API with external sources for real-time updates, fetched every 15 minutes.",
        skills: ["EDA", "Data Mining", "API Integration", "Python", "Data Science"],
        github_url: "https://github.com/khanifan-studio/Early-Warning-Medical-Project",
        featured: true,
    },
    {
        slug: "marketing-dashboard-funnel-prediction",
        title: "Marketing Dashboard & Funnel Prediction",
        role: "Machine Learning Engineer",
        organization: "President University",
        period: "Jun 2025 – Aug 2025",
        domain: "data-analytics",
        summary: "Interactive analytics dashboard and predictive funnel model with role-based authentication.",
        description:
            "Designed an interactive analytics dashboard and predictive funnel model for the marketing division, including role-based authentication for secure access to improve decision-making efficiency.",
        skills: ["Machine Learning", "Django", "REST API", "Dashboard Design", "Authentication"],
        github_url: "https://github.com/Meozee/marketing_president_project_S6",
        featured: true,
    },
    {
        slug: "student-performance-classification",
        title: "Student Performance Classification",
        role: "Machine Learning Engineer",
        organization: "President University",
        period: "May 2025 – Jul 2025",
        domain: "data-science",
        summary: "ML model predicting academic performance with tailored learning recommendations, 90% accuracy.",
        description:
            "Built a machine learning model to predict students academic performance and provide tailored learning recommendations. Achieved 90% accuracy after preprocessing with One-Hot Encoding and MinMax Scaling.",
        skills: ["Scikit-learn", "EDA", "One-Hot Encoding", "MinMax Scaling", "Classification"],
        github_url: "https://github.com/khanifan-studio/Student-Performance-Classification",
        featured: false,
    },
    {
        slug: "ship-operation-systems",
        title: "Ship Operation Systems",
        role: "Data Analyst",
        organization: "PT Salam Pacific Indonesia Lines",
        period: "Oct 2025 – Nov 2025",
        domain: "data-analytics",
        summary: "Transformed raw multi-header Excel ship operation data into clean, analysis-ready datasets.",
        description:
            "Prepared raw ship operation data for analysis by transforming complex Excel files with multi-row headers into clean, analysis-ready CSV datasets. Standardized column structures, cleaned categorical fields, and resolved inconsistent date formats.",
        skills: ["Python", "Pandas", "ETL", "Data Cleaning", "PostgreSQL"],
        github_url: "https://github.com/khanifan-studio/Ship-Operation-Systems",
        featured: false,
    },
];

const skillGrowthOrder = [
    { slug: "student-performance-classification", label: "Student Perf.\n(May '25)" },
    { slug: "marketing-dashboard-funnel-prediction", label: "Marketing\n(Jun '25)" },
    { slug: "early-warning-medical-project", label: "Early Warning\n(Sep '25)" },
    { slug: "ship-operation-systems", label: "Ship Ops\n(Oct '25)" },
    { slug: "smart-traffic-management-system", label: "Smart Traffic\n(Jan '26)" },
];

export const skillGrowthData: { labels: string[]; data: number[] } = (() => {
    const uniqueSkills = new Set<string>();
    const data = skillGrowthOrder.map(({ slug }) => {
        const project = projects.find(project => project.slug === slug);
        if (!project) {
            throw new Error(`Skill growth project not found: ${slug}`);
        }
        project.skills.forEach(skill => uniqueSkills.add(skill));
        return uniqueSkills.size;
    });

    return {
        labels: skillGrowthOrder.map(({ label }) => label),
        data,
    };
})();

export const featuredProjects = projects.filter(p => p.featured);

export const skillGroups: SkillGroup[] = [
    {
        category: "AI & ML",
        skills: [
            { name: "Python", level: "Comfortable with" },
            { name: "Scikit-learn", level: "Comfortable with" },
            { name: "PyTorch", level: "Working knowledge" },
            { name: "YOLOv8", level: "Working knowledge" },
            { name: "OpenCV", level: "Working knowledge" },
        ],
    },
    {
        category: "Data",
        skills: [
            { name: "Pandas", level: "Comfortable with" },
            { name: "NumPy", level: "Comfortable with" },
            { name: "SQL", level: "Comfortable with" },
            { name: "PostgreSQL", level: "Comfortable with" },
            { name: "EDA", level: "Comfortable with" },
        ],
    },
    {
        category: "Engineering",
        skills: [
            { name: "Django", level: "Comfortable with" },
            { name: "REST API", level: "Comfortable with" },
            { name: "Docker", level: "Comfortable with" },
            { name: "ETL", level: "Working knowledge" },
            { name: "Next.js", level: "Working knowledge" },
            { name: "React", level: "Working knowledge" },
            { name: "TypeScript", level: "Working knowledge" },
            { name: "Supabase", level: "Working knowledge" },
            { name: "Git & GitHub", level: "Comfortable with" },
        ],
    },
];

export const certifications: Certification[] = [
    {
        id: 1,
        name: "AWS Cloud Practitioner Essentials",
        issuer: "AWS Training & Certification",
        year: "2025",
        description: "Foundational AWS Cloud concepts: core services, security, architecture, pricing, and support.",
        image: "/images/certifications/1.jpg",
    },
    {
        id: 2,
        name: "Machine Learning Learning Plan",
        issuer: "AWS Training & Certification",
        year: "2025",
        description: "Structured AWS learning path covering the building blocks of machine learning.",
        image: "/images/certifications/2.jpg",
    },
    {
        id: 3,
        name: "Machine Learning Terminology and Process",
        issuer: "AWS Training & Certification",
        year: "2025",
        description: "Core ML vocabulary and the end-to-end ML process from framing to deployment.",
        image: "/images/certifications/3.jpg",
    },
    {
        id: 4,
        name: "Planning a Machine Learning Project",
        issuer: "AWS Training & Certification",
        year: "2025",
        description: "How to scope an ML project: defining success criteria and data requirements.",
        image: "/images/certifications/4.jpg",
    },
    {
        id: 5,
        name: "Introduction to Machine Learning: Art of the Possible",
        issuer: "AWS Training & Certification",
        year: "2025",
        description: "Building intuition for where ML fits in solving real problems.",
        image: "/images/certifications/5.jpg",
    },
    {
        id: 6,
        name: "Machine Learning Essentials for Business and Technical Decision Makers",
        issuer: "AWS Training & Certification",
        year: "2025",
        description: "ML fundamentals framed for decision-making and business impact.",
        image: "/images/certifications/6.jpg",
    },
    {
        id: 7,
        name: "Amazon Redshift Getting Started",
        issuer: "AWS Training & Certification",
        year: "2025",
        description: "Introduction to Amazon Redshift for running analytics at scale.",
        image: "/images/certifications/7.jpg",
    },
    {
        id: 8,
        name: "Amazon EMR Getting Started",
        issuer: "AWS Training & Certification",
        year: "2025",
        description: "Running big data frameworks (Spark, Hadoop) at scale on AWS.",
        image: "/images/certifications/8.jpg",
    },
    {
        id: 9,
        name: "AWS Glue Getting Started",
        issuer: "AWS Training & Certification",
        year: "2025",
        description: "Serverless ETL service for discovering, preparing, and combining data.",
        image: "/images/certifications/9.jpg",
    },
    {
        id: 10,
        name: "Introduction to Amazon Athena",
        issuer: "AWS Training & Certification",
        year: "2025",
        description: "Running SQL queries directly against data stored in S3.",
        image: "/images/certifications/10.jpg",
    },
    {
        id: 11,
        name: "Amazon OpenSearch Service Getting Started",
        issuer: "AWS Training & Certification",
        year: "2025",
        description: "Search, log analytics, and real-time application monitoring.",
        image: "/images/certifications/11.jpg",
    },
    {
        id: 12,
        name: "Serverless Analytics",
        issuer: "AWS Training & Certification",
        year: "2025",
        description: "Building analytics pipelines using AWS serverless services.",
        image: "/images/certifications/12.jpg",
    },
    {
        id: 13,
        name: "Memulai Pemrograman dengan Python",
        issuer: "Dicoding",
        year: "2024",
        credential_url: "https://www.dicoding.com/certificates/GRX54RR3YP0M",
        description: "Python fundamentals: OOP, unit testing, and popular data science libraries. 35 hours.",
        image: "/images/certifications/13.jpg",
    },
    {
        id: 14,
        name: "Belajar Dasar Structured Query Language (SQL)",
        issuer: "Dicoding",
        year: "2024",
        credential_url: "https://www.dicoding.com/certificates/N9ZOY1R2DPG5",
        description: "Core SQL for data analysis: DDL, DML, and constraints.",
        image: "/images/certifications/14.jpg",
    },
    {
        id: 15,
        name: "Belajar Dasar Data Science",
        issuer: "Dicoding",
        year: "2024",
        credential_url: "https://www.dicoding.com/certificates/KEXLYQ790ZG2",
        description: "Foundations of data science: analysis cycle, tools, and ML basics.",
        image: "/images/certifications/15.jpg",
    },
];

export const workExperiences: WorkExperience[] = [
    {
        slug: "kulink",
        role: "Chief Technology Officer (CTO)",
        company: "CV. KULINKINDONESIA",
        period: "September 2026 – Present",
        location: "Indonesia · Hybrid",
        summary: "Chief Technology Officer of KULINK, Top 10 Finalist at UD Impact 2026.",
        groups: [
            {
                category: "Key Contributions",
                points: [
                    "Led early-stage technical exploration for the product.",
                    "Evaluated potential AI use cases for the product.",
                    "Led development of the AI features: progress tracking, documentation, and daily reporting. These are in development.",
                    "Contributed to a web-based product prototype. The workforce management module is live in prototype.",
                ],
            },
        ],
        skills: ["Technical Leadership", "Product Development", "AI Use Case Evaluation"],
    },
    {
        slug: "zettapola",
        role: "Lead Full-Stack & AI Developer (Project-Based)",
        company: "ZettaPola",
        period: "July 2026 – Present",
        summary:
            "Designed, built, and operate ZettaPola, a curation platform and automation service for prompt engineering and modern web infrastructure, built to make digital marketing of local MSME products more efficient and to manage affiliate content.",
        groups: [
            {
                category: "Backend & AI Systems",
                points: [
                    "Designed structured prompt engineering workflows for generative AI to produce accurate marketing visuals of products, without visual exaggeration.",
                    "Integrated a Python and PostgreSQL based system architecture for data processing and automated content management.",
                ],
            },
            {
                category: "Frontend & Modern UX",
                points: [
                    "Built a responsive, well-structured web interface with TypeScript, React, Next.js, and Supabase, including Role-Based Access Control (RBAC).",
                    "Optimized state management in custom form components using window event listeners (pagehide and visibilitychange) to keep local storage in sync and prevent data loss when users switch browser tabs.",
                ],
            },
            {
                category: "Operations & Infrastructure",
                points: [
                    "Set ongoing content curation targets and manage platform operations, including registering the .my.id domain and integrating an official email service at zettapola@gmail.com.",
                    "Manage the source code with Git and GitHub, applying privacy and security policies before deployment to production.",
                ],
            },
        ],
        skills: [
            "Prompt Engineering",
            "Python",
            "PostgreSQL",
            "TypeScript",
            "React",
            "Next.js",
            "Supabase",
            "RBAC",
            "Git & GitHub",
        ],
    },
    {
        slug: "kupu-id",
        role: "Data Annotator (Contract)",
        company: "KUPU ID",
        period: "October 2026 – November 2026",
        location: "Jakarta Raya, Indonesia · On Site",
        summary: "Annotated traffic lights in road video keyframes with bounding boxes and context labels.",
        groups: [
            {
                category: "Traffic Light Annotation",
                points: [
                    "Annotated traffic lights with bounding boxes on video keyframes, with 9 to 13 keyframes per video.",
                    "Labeled the direction of each traffic light and whether it affects the ego vehicle, the vehicle recording the road.",
                ],
            },
            {
                category: "Ego Context Labeling",
                points: [
                    "For traffic lights that affect the ego vehicle, annotated the directions the ego vehicle is allowed to take, such as right, left, straight, and U-turn.",
                    "Marked whether the ego vehicle was inside an intersection, such as at a junction or in a roundabout.",
                ],
            },
            {
                category: "Reporting",
                points: [
                    "Reported work using the spreadsheet provided for the project.",
                ],
            },
        ],
        skills: [
            "Data Annotation",
            "Bounding Box Annotation",
            "Traffic Light Labeling",
            "Spreadsheet Reporting",
        ],
    },
    {
        slug: "jatiwangi-motor",
        role: "IT Team Intern",
        company: "Jatiwangi Motor",
        period: "January 2026 – April 2026",
        location: "Cikarang Barat, Jawa Barat, Indonesia · On Site",
        summary:
            "Built an internal web application to replace manual purchase and sales records, covering purchasing, inventory, finance, point of sale, and master data.",
        groups: [
            {
                category: "System Development",
                points: [
                    "Replaced manual recording of purchases and sales with an internal web application covering purchasing, inventory, finance, point of sale, and master data.",
                    "Built the application with Python, Django, and React, working alongside one other intern.",
                ],
            },
            {
                category: "Infrastructure",
                points: [
                    "Deployed the application with Docker on a local computer connected to a single Wi-Fi network, so any device on the same network can access it through the host's IP address.",
                ],
            },
            {
                category: "Access Control & Audit",
                points: [
                    "Implemented Role-Based Access Control: superadmins have full CRUD access, while admins have create, read, and update access only.",
                    "Added a dedicated page for system logs to support auditing.",
                ],
            },
            {
                category: "Inventory Insights & Testing",
                points: [
                    "Connected the point of sale to inventory so users can see which products need restocking and which have the highest demand in a selected period.",
                    "Tested the system with the people who handled these processes before: the owner and technicians (2 to 4 people).",
                ],
            },
        ],
        skills: [
            "Python",
            "Django",
            "React",
            "Docker",
            "RBAC",
            "Audit Logging",
            "Inventory Management",
        ],
    },
    {
        slug: "salam-pacific",
        role: "Artificial Intelligence Intern",
        company: "PT Salam Pacific Indonesia Lines",
        period: "September 2025 – December 2025",
        location: "Jakarta Utara, Jakarta Raya, Indonesia · On Site",
        summary:
            "Worked on two data projects during an on-site internship: a disease monitoring system and the preparation of ship operation data for analysis.",
        groups: [
            {
                category: "Data & Monitoring Systems",
                points: [
                    "Built a disease monitoring system to track regions with a high frequency of disease cases.",
                    "Ran exploratory data analysis (EDA) that showed most of the identified diseases were respiratory-related, then applied data mining to determine the contributing factors.",
                    "Integrated the project API with external data sources for real-time updates, fetched every 15 minutes.",
                ],
            },
            {
                category: "Data Preparation",
                points: [
                    "Transformed raw ship operation Excel files with multi-row headers into clean, analysis-ready CSV datasets.",
                    "Standardized column structures, cleaned categorical fields, and resolved inconsistent date formats.",
                ],
            },
        ],
        skills: [
            "Python",
            "Pandas",
            "EDA",
            "Data Mining",
            "API Integration",
            "ETL",
            "Data Cleaning",
            "PostgreSQL",
        ],
    },
    {
        slug: "san-kopi",
        role: "Content Creator",
        company: "San Kopi",
        period: "April 2023 – September 2023",
        location: "Takengon, Indonesia · On Site",
        summary:
            "Handled video editing and live-stream sales for San Kopi, a coffee business in Takengon, and supported the team as a barista at wedding events.",
        groups: [
            {
                category: "Content Production",
                points: [
                    "Edited videos shot by other team members into short-form content using CapCut and other editing tools, published on TikTok and Shopee.",
                ],
            },
            {
                category: "Live Commerce",
                points: [
                    "Hosted live-stream sales on TikTok using a phone and tripod, with a laptop to monitor sales during the session and read questions from the live chat.",
                    "Averaged around 2 kg of coffee sold per day across different variants.",
                ],
            },
            {
                category: "Event Support",
                points: [
                    "Assisted as a barista at several wedding events, serving at San Kopi's tenant.",
                ],
            },
        ],
        skills: [
            "Video Editing",
            "CapCut",
            "TikTok Live Selling",
            "Shopee",
            "Sales Monitoring",
            "Customer Interaction",
        ],
    },
];

export const currentlyBuilding = [
    {
        title: "Building a Software House",
        status: "In Progress",
        desc: "Working toward a vision of making technology adoption more accessible and equitable.",
    },
    {
        title: "AI Development",
        status: "Learning",
        desc: "Going deeper into AI development, from fundamentals to real-world application.",
    },
    {
        title: "MLOps Fundamentals",
        status: "Queued Up",
        desc: "Model versioning, monitoring, and CI/CD pipelines for ML — next area I'm diving into.",
    },
];
