import {
  Github,
  ExternalLink,
  ArrowRight,
  Layers,
  Search,
  Zap,
  Shield,
  FileText,
  Cloud,
  Database,
  Brain,
  CheckCircle,
  Cpu,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";

// ─── AskDocs ───────────────────────────────────────────────────────────────────

const ASKDOCS_FEATURES = [
  {
    icon: <Layers className="w-5 h-5 text-indigo-400" />,
    bg: "bg-indigo-500/10",
    title: "Multi-Agent Architecture",
    sub: "Supervisor + Tool Agents",
  },
  {
    icon: <Search className="w-5 h-5 text-purple-400" />,
    bg: "bg-purple-500/10",
    title: "Hybrid Retrieval",
    sub: "Vector + Keyword + RRF",
  },
  {
    icon: <Zap className="w-5 h-5 text-cyan-400" />,
    bg: "bg-cyan-500/10",
    title: "Real-time Streaming",
    sub: "SSE responses",
  },
  {
    icon: <Shield className="w-5 h-5 text-pink-400" />,
    bg: "bg-pink-500/10",
    title: "Built-in Guardrails",
    sub: "PII, Prompt Injection, Toxicity",
  },
  {
    icon: <FileText className="w-5 h-5 text-amber-400" />,
    bg: "bg-amber-500/10",
    title: "Multi-format Support",
    sub: "PDFs, DOCX, PPTX, Markdown",
  },
  {
    icon: <Cloud className="w-5 h-5 text-emerald-400" />,
    bg: "bg-emerald-500/10",
    title: "Cloud Native",
    sub: "AWS S3 + Supabase",
  },
];

const ASKDOCS_PIPELINE = [
  { icon: <FileText className="w-4 h-4 text-indigo-400" />, label: "Upload" },
  { icon: <Layers className="w-4 h-4 text-purple-400" />, label: "Process" },
  { icon: <Database className="w-4 h-4 text-cyan-400" />, label: "Store" },
  { icon: <Search className="w-4 h-4 text-pink-400" />, label: "Retrieve" },
  { icon: <Brain className="w-4 h-4 text-amber-400" />, label: "Generate" },
];

const ASKDOCS_STACK = [
  "FastAPI",
  "Celery",
  "Redis",
  "pgvector",
  "OpenAI GPT",
  "Unstructured",
  "Docker",
  "AWS",
];

function AskDocsProject() {
  const { ref: revealRef, visible } = useScrollReveal(0.08);
  const { ref: tiltRef, style: tiltStyle } = useTilt(7);

  return (
    <div
      ref={revealRef}
      className={`reveal-hidden ${visible ? "reveal-visible" : ""}`}
    >
      <div ref={tiltRef} style={tiltStyle}>
        <div className="relative rounded-3xl p-8 md:p-10 border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/60 backdrop-blur-xl overflow-hidden group hover:border-indigo-500/40 transition-all duration-500 glow-hover">
          {/* Hover glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/14 to-purple-500/14 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative z-10">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="px-3 py-1 text-xs font-semibold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/20">
                Featured Project
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20   text-cyan-300   rounded-full border border-cyan-500/20">
                Production Ready
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">AskDocs</h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              AI-Powered Document Intelligence System — A production-ready
              multi-agent RAG system for querying documents with real-time
              streaming, hybrid search, and scalable ingestion.
            </p>

            {/* Feature grid */}
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {ASKDOCS_FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700/20 transition-colors duration-200"
                >
                  <div className={`p-2 rounded-lg ${f.bg} flex-shrink-0`}>
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      {f.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {ASKDOCS_STACK.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm bg-slate-700/40 text-slate-300 rounded-lg border border-slate-600/40 hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Pipeline */}
            <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/30">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Architecture Pipeline
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {ASKDOCS_PIPELINE.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/60 transition-colors">
                      {step.icon}
                      <span className="text-sm text-slate-300">
                        {step.label}
                      </span>
                    </div>
                    {i < ASKDOCS_PIPELINE.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <a
                href="https://github.com/sangeeth40/AskDocs-server"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-medium text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Github className="w-4 h-4" />
                View Source
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DNN Watermarking ──────────────────────────────────────────────────────────

const DNN_CONTRIBUTIONS = [
  "Lightweight white-box watermarking using chaotic sequences",
  "Post-training embedding without retraining requirement",
  "Genetic algorithm-based ownership verification",
  "98% accuracy maintained after watermarking",
];

const DNN_APPROACH = [
  "Logistic map chaos for watermark generation",
  "Minimal weight perturbation for embedding",
  "Tournament selection with blend crossover",
  "Activation-based detection classifiers",
];

const DNN_RESULTS = [
  { value: "98%", label: "MNIST Accuracy", colorClass: "text-emerald-400" },
  { value: "73%", label: "CIFAR-10 Accuracy", colorClass: "text-cyan-400" },
  {
    value: "~0.01",
    label: "Parameter Recovery Error",
    colorClass: "text-indigo-400",
  },
  {
    value: "Robust",
    label: "Against Fine-tuning",
    colorClass: "text-purple-400",
  },
];

function DNNProject() {
  const { ref: revealRef, visible } = useScrollReveal(0.08);
  const { ref: tiltRef, style: tiltStyle } = useTilt(7);

  return (
    <div
      ref={revealRef}
      className={`reveal-hidden ${visible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: "0.1s" }}
    >
      <div ref={tiltRef} style={tiltStyle}>
        <div className="relative rounded-3xl p-8 md:p-10 border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/60 backdrop-blur-xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-500 glow-hover">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-500/14 to-emerald-500/14 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20    text-cyan-300    rounded-full border border-cyan-500/20">
                Research Project
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              DNN Watermarking with Chaotic Sequences
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              An efficient and resilient white-box watermarking framework that
              embeds ownership information into deep neural networks using
              chaotic sequences and genetic algorithms for verification.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Key Contributions
                </h4>
                <ul className="space-y-3">
                  {DNN_CONTRIBUTIONS.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-400" />
                  Technical Approach
                </h4>
                <ul className="space-y-3">
                  {DNN_APPROACH.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results */}
            <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/30 mb-7">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Experimental Results
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {DNN_RESULTS.map((r, i) => (
                  <div
                    key={i}
                    className="text-center p-3 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors"
                  >
                    <div className={`text-2xl font-bold ${r.colorClass}`}>
                      {r.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <a
                href="https://github.com/sangeeth40/DNN_Watermark_research_project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-medium text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Github className="w-4 h-4" />
                View Source
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section wrapper ───────────────────────────────────────────────────────────

export function ProjectsSection() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 reveal-hidden ${visible ? "reveal-visible" : ""}`}
        >
          <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">
            Portfolio
          </h2>
          <h3 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my work in AI/ML systems, from production-ready
            applications to academic research
          </p>
        </div>
        <div className="space-y-8">
          <AskDocsProject />
          <DNNProject />
        </div>
      </div>
    </section>
  );
}
