# Sangeeth Bijukumar — Portfolio Website

Personal portfolio website built with React, TypeScript, and Tailwind CSS. Features 3D animations, interactive elements, and a clean modular codebase.

**Live sections:** Hero · About · Projects · Skills · Experience · Certifications · Contact

---

## About Me

I'm **Sangeeth Bijukumar**, a Full-Stack and AI Engineer passionate about building production-ready LLM-powered applications. My work spans RAG pipelines, multi-agent systems, cloud deployments, and AI security research.

- **Email:** sangeethb10@gmail.com
- **GitHub:** [@sangeeth40](https://github.com/sangeeth40)
- **LinkedIn:** Sangeeth Bijukumar

---

## Experience

### AI Engineer Intern — Stirrup Communications
*August 2025 – January 2026 · Ernakulam, India*

- Built RAG and Agentic RAG solutions using Anthropic Claude models
- Experimented with LightRAG implementations for efficiency comparison across architectures
- Designed LLM-driven agents for multi-step reasoning and data interaction
- Collaborated with AI team to evaluate prompt engineering strategies

### Research Intern — Cyber Security Research Lab, CUSAT
*December 2024 – May 2025 · CUSAT, Kerala*

- Developed a Python-based watermarking system for deep neural networks
- Integrated chaotic sequences using logistic maps into model weights
- Achieved 98% model accuracy while maintaining robustness against fine-tuning attacks
- Created an ownership verification method using genetic algorithms

---

## Projects

### AskDocs — AI-Powered Document Intelligence System
Production-ready multi-agent RAG system for querying documents with real-time streaming, hybrid search, and scalable ingestion.

| Feature | Details |
|---|---|
| Architecture | Multi-agent (Supervisor + Tool Agents) |
| Retrieval | Hybrid — Vector + Keyword + RRF fusion |
| Streaming | Server-Sent Events (SSE) |
| Guardrails | PII, Prompt Injection, Toxicity detection |
| Formats | PDFs, DOCX, PPTX, Markdown |
| Infrastructure | AWS S3 + Supabase |

**Stack:** FastAPI · Celery · Redis · pgvector · OpenAI GPT · Unstructured · Docker · AWS

[View Source on GitHub](https://github.com/sangeeth40/AskDocs-server)

---

### DNN Watermarking with Chaotic Sequences — Published Research
An efficient and resilient white-box watermarking framework that embeds ownership information into deep neural networks using chaotic sequences and genetic algorithms.

**Key results:**

| Metric | Value |
|---|---|
| MNIST Accuracy | 98% |
| CIFAR-10 Accuracy | 73% |
| Parameter Recovery Error | ~0.01 |
| Resistance to Fine-tuning | Robust |

---

## Skills

| Category | Technologies |
|---|---|
| **Programming** | Python, JavaScript, Java, SQL |
| **AI & ML** | NLP, Hugging Face, OpenAI, Claude, LangChain, LangGraph, RAGAS, GuardRails |
| **Web Development** | React, Next.js, Express, Node.js, FastAPI, Celery, Redis |
| **Cloud & DevOps** | AWS (EC2, S3, ECS, Fargate), Docker, Kubernetes |
| **Databases** | PostgreSQL, pgvector, MongoDB, Neo4j |

---

## Certifications

| Certificate | Provider | Year |
|---|---|---|
| IBM AI Engineering | Coursera | 2024 |
| IoT Essentials for Industry 4.0 | AICTE, CUSAT | 2024 |
| Google Cybersecurity | Coursera | 2024 |
| Python Basics | University of Michigan | 2023 |
| Python for Data Science | IBM | 2023 |

---

## Tech Stack (This Website)

| Tool | Version |
|---|---|
| React | 18.3.1 |
| TypeScript | 5.6.2 |
| Vite | 6.0.1 |
| Tailwind CSS | 3.4.16 |
| Lucide React | icons |

**Notable features:**
- Interactive 3D rotating cube with pointer/touch drag and physics (velocity + friction)
- CSS `perspective` 3D tilt on cards using `requestAnimationFrame`
- Scroll-reveal animations via `IntersectionObserver`
- Typewriter effect with multi-word cycling
- Parallax animated background orbs
- Resume download from the navbar and contact section

---

## Project Structure

```
src/
├── types/          # Shared TypeScript interfaces
├── data/           # Static content (skills, experience, certifications)
├── hooks/          # useTilt, useScrollReveal, useTypewriter, useAnimatedCounter, useMouseParallax
├── components/     # AnimatedBackground, Navigation, Footer, RotatingCube
├── sections/       # One file per page section
└── App.tsx         # Root component
```

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build
```
