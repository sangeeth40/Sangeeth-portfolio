import { Code2, Brain, Layers, Cloud, Database, Shield } from "lucide-react";
import type {
  SkillCategory,
  Experience,
  Education,
  Certification,
  Particle,
} from "@/types";

// ─── Background particles ──────────────────────────────────────────────────────
// Positions and timings are derived deterministically from the index so the
// output is stable across re-renders (no Math.random() at module level).

export const PARTICLES: Particle[] = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${4 + ((i * 37.31) % 91)}%`,
  top: `${4 + ((i * 61.73) % 91)}%`,
  size: `${1.5 + ((i * 3) % 3)}px`,
  duration: `${13 + ((i * 6.7) % 17)}s`,
  delay: `${-(i * 4.37) % 14}s`,
  color:
    i % 3 === 0
      ? "rgba(99,102,241,0.75)"
      : i % 3 === 1
        ? "rgba(139,92,246,0.75)"
        : "rgba(34,211,238,0.65)",
}));

// ─── Skills ────────────────────────────────────────────────────────────────────

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    color: "indigo",
    skills: ["Python", "JavaScript", "Java", "SQL"],
  },
  {
    title: "AI & ML",
    icon: <Brain className="w-6 h-6" />,
    color: "purple",
    skills: [
      "NLP",
      "Hugging Face",
      "OpenAI",
      "Claude",
      "LangChain",
      "LangGraph",
      "RAGAS",
      "GuardRails",
    ],
  },
  {
    title: "Web Development",
    icon: <Layers className="w-6 h-6" />,
    color: "cyan",
    skills: [
      "React",
      "Next.js",
      "Express",
      "Node.js",
      "FastAPI",
      "Celery",
      "Redis",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    color: "amber",
    skills: ["AWS (EC2, S3, ECS, Fargate)", "Docker", "Kubernetes"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    color: "emerald",
    skills: ["PostgreSQL", "PGvector", "MongoDB", "Neo4j"],
  },
];

// ─── Experience ────────────────────────────────────────────────────────────────

export const EXPERIENCES: Experience[] = [
  {
    company: "Stirrup Communications",
    role: "AI Engineer Intern",
    period: "August 2025 – January 2026",
    location: "Ernakulam, India",
    highlights: [
      "Built RAG and Agentic RAG solutions using Anthropic Claude models",
      "Experimented with LightRAG implementations for efficiency comparison across architectures",
      "Designed LLM-driven agents for multi-step reasoning and data interaction",
      "Collaborated with AI team to evaluate prompt engineering strategies",
    ],
  },
  {
    company: "Cyber Security Research Lab, CUSAT",
    role: "Research Intern",
    period: "December 2024 – May 2025",
    location: "CUSAT, Kerala",
    highlights: [
      "Developed Python-based watermarking system for deep neural networks",
      "Integrated chaotic sequences using logistic maps into model weights",
      "Achieved 98% accuracy while maintaining model robustness against attacks",
      "Created ownership verification method using genetic algorithms",
    ],
  },
];

// ─── Education ─────────────────────────────────────────────────────────────────

export const EDUCATION: Education[] = [
  {
    institution: "SCMS School of Engineering & Technology",
    university: "KTU University",
    degree: "Master of Computer Applications",
    period: "2023 – 2025",
    location: "Ernakulam, Kerala",
  },
  {
    institution: "Amrita Vishwa Vidyapeetham",
    university: "Amrita University",
    degree: "Bachelor of Computer Applications",
    period: "2020 – 2023",
    location: "Kollam, Kerala",
  },
];

// ─── Certifications ────────────────────────────────────────────────────────────

export const CERTIFICATIONS: Certification[] = [
  { name: "IBM AI Engineering", provider: "Coursera", year: "2024" },
  {
    name: "IOT Essentials for Industry 4.0",
    provider: "AICTE, CUSAT",
    year: "2024",
  },
  { name: "Google Cybersecurity", provider: "Coursera", year: "2024" },
  { name: "Python Basics", provider: "University of Michigan", year: "2023" },
  { name: "Python for Data Science", provider: "IBM", year: "2023" },
];
