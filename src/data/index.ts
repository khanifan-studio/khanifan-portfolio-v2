import { Project, Certification, SkillGroup } from "@/types";

export const projects: Project[] = [
  {
    slug: "smart-traffic-management-system",
    title: "Traffic Trend Analysis in Tourist Areas",
    role: "AI Engineer (Computer Vision)",
    organization: "President University x Dishub Central Aceh",
    period: "Jan 2026 – Jul 2026",
    domain: "computer-vision",
    summary: "Real-time vehicle counting and density estimation for tourist-area traffic management using YOLOv8.",
    description: "Capstone project with the Department of Transportation (Dishub) of Central Aceh to build an intelligent traffic analysis prototype for the Takengon and Lake Laut Tawar areas. Implemented YOLOv8 object detection integrated into an OpenCV video pipeline for real-time vehicle counting and density estimation, plus PostgreSQL-backed analytics dashboards used for evidence-based policy-making.",
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
    summary: "Disease monitoring system identifying respiratory illness risk factors via EDA and real-time API data mining.",
    description: "Developed to monitor regions with high frequency of disease cases. EDA showed most identified diseases were respiratory-related, leading to a data mining process to determine contributing factors. Integrated the project API with external sources for real-time updates, fetched every 15 minutes.",
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
    description: "Designed an interactive analytics dashboard and predictive funnel model for the marketing division, including role-based authentication for secure access to improve decision-making efficiency.",
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
    description: "Built a machine learning model to predict students academic performance and provide tailored learning recommendations. Achieved 90% accuracy after preprocessing with One-Hot Encoding and MinMax Scaling.",
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
    description: "Prepared raw ship operation data for analysis by transforming complex Excel files with multi-row headers into clean, analysis-ready CSV datasets. Standardized column structures, cleaned categorical fields, and resolved inconsistent date formats.",
    skills: ["Python", "Pandas", "ETL", "Data Cleaning", "PostgreSQL"],
    github_url: "https://github.com/khanifan-studio/Ship-Operation-Systems",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const skillGroups: SkillGroup[] = [
  { category: "AI & ML", skills: ["Python", "Scikit-learn", "YOLOv8", "OpenCV", "PyTorch"] },
  { category: "Data", skills: ["Pandas", "NumPy", "SQL", "PostgreSQL", "EDA"] },
  { category: "Engineering", skills: ["Django", "REST API", "Docker", "ETL", "Next.js"] },
];

export const certifications: Certification[] = [
  { id: 1, name: "AWS Cloud Practitioner Essentials", issuer: "AWS Training & Certification", year: "2025", description: "Foundational AWS Cloud concepts: core services, security, architecture, pricing, and support." },
  { id: 2, name: "Machine Learning Learning Plan", issuer: "AWS Training & Certification", year: "2025", description: "Structured AWS learning path covering the building blocks of machine learning." },
  { id: 3, name: "Machine Learning Terminology and Process", issuer: "AWS Training & Certification", year: "2025", description: "Core ML vocabulary and the end-to-end ML process from framing to deployment." },
  { id: 4, name: "Planning a Machine Learning Project", issuer: "AWS Training & Certification", year: "2025", description: "How to scope an ML project: defining success criteria and data requirements." },
  { id: 5, name: "Introduction to Machine Learning: Art of the Possible", issuer: "AWS Training & Certification", year: "2025", description: "Building intuition for where ML fits in solving real problems." },
  { id: 6, name: "Machine Learning Essentials for Business and Technical Decision Makers", issuer: "AWS Training & Certification", year: "2025", description: "ML fundamentals framed for decision-making and business impact." },
  { id: 7, name: "Amazon Redshift Getting Started", issuer: "AWS Training & Certification", year: "2025", description: "Introduction to Amazon Redshift for running analytics at scale." },
  { id: 8, name: "Amazon EMR Getting Started", issuer: "AWS Training & Certification", year: "2025", description: "Running big data frameworks (Spark, Hadoop) at scale on AWS." },
  { id: 9, name: "AWS Glue Getting Started", issuer: "AWS Training & Certification", year: "2025", description: "Serverless ETL service for discovering, preparing, and combining data." },
  { id: 10, name: "Introduction to Amazon Athena", issuer: "AWS Training & Certification", year: "2025", description: "Running SQL queries directly against data stored in S3." },
  { id: 11, name: "Amazon OpenSearch Service Getting Started", issuer: "AWS Training & Certification", year: "2025", description: "Search, log analytics, and real-time application monitoring." },
  { id: 12, name: "Serverless Analytics", issuer: "AWS Training & Certification", year: "2025", description: "Building analytics pipelines using AWS serverless services." },
  { id: 13, name: "Memulai Pemrograman dengan Python", issuer: "Dicoding", year: "2024", credential_url: "https://www.dicoding.com/certificates/GRX54RR3YP0M", description: "Python fundamentals: OOP, unit testing, and popular data science libraries. 35 hours." },
  { id: 14, name: "Belajar Dasar Structured Query Language (SQL)", issuer: "Dicoding", year: "2024", credential_url: "https://www.dicoding.com/certificates/N9ZOY1R2DPG5", description: "Core SQL for data analysis: DDL, DML, and constraints." },
  { id: 15, name: "Belajar Dasar Data Science", issuer: "Dicoding", year: "2024", credential_url: "https://www.dicoding.com/certificates/KEXLYQ790ZG2", description: "Foundations of data science: analysis cycle, tools, and ML basics." },
];

export const skillGrowthData = {
  labels: ["Student Perf.\n(May '25)", "Marketing\n(Jun '25)", "Early Warning\n(Sep '25)", "Ship Ops\n(Oct '25)", "Smart Traffic\n(Jan '26)"],
  data: [5, 9, 13, 16, 21],
};

export const currentlyBuilding = [
  { title: "Deep Learning with PyTorch", status: "In Progress", desc: "Learning CNN architectures and transformer basics for future CV projects." },
  { title: "LLM Integration", status: "Exploring", desc: "Exploring how to integrate large language models into production AI systems." },
  { title: "MLOps Fundamentals", status: "Planned", desc: "Model versioning, monitoring, and CI/CD pipelines for ML." },
];
