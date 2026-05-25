import { useState, useEffect, useRef } from 'react'
import {
  Mail, Github, Linkedin, ExternalLink, ChevronDown, Code2, Database,
  Cloud, Brain, Shield, Zap, FileText, Search, Users, AlertTriangle,
  CheckCircle, ArrowRight, Sparkles, Cpu, Layers
} from 'lucide-react'

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-slate-950" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
    </div>
  )
}

// Navigation Component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About', 'Projects', 'Skills', 'Experience', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-indigo-500/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SB
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-slate-400 hover:text-white transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-400 hover:text-white">
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-sm text-slate-300">Available for opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Sangeeth Bijukumar
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Full-Stack & AI Engineer specializing in building
          <span className="text-indigo-400"> LLM-powered applications</span>,
          RAG pipelines, and agent-based systems
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-medium text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center gap-2">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 border border-slate-700 rounded-xl font-medium text-slate-300 hover:border-indigo-500/50 hover:text-white transition-all duration-300">
            Get in Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="mailto:sangeethb10@gmail.com" className="p-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300">
            <Mail className="w-5 h-5 text-slate-400" />
          </a>
          <a href="https://github.com/sangeeth40" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300">
            <Github className="w-5 h-5 text-slate-400" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300">
            <Linkedin className="w-5 h-5 text-slate-400" />
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-500" />
      </a>
    </section>
  )
}

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">About Me</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Building Intelligent Systems</h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a passionate Full-Stack and AI Engineer with hands-on experience building and deploying
                end-to-end LLM-powered applications. My expertise spans RAG pipelines, agent-based systems
                using LangChain and modern AI models.
              </p>
              <p>
                With experience in Dockerized deployments on AWS (ECS, Fargate) and working with vector databases
                for scalable AI solutions, I deliver real-world projects in both industry and research settings.
              </p>
              <p>
                Currently interning at Stirrup Communications, I'm focused on building practical, high-impact
                AI products that solve real problems.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-20" />
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-slate-800/50">
                  <div className="text-3xl font-bold text-indigo-400">5+</div>
                  <div className="text-sm text-slate-400 mt-1">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/50">
                  <div className="text-3xl font-bold text-purple-400">2+</div>
                  <div className="text-sm text-slate-400 mt-1">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/50">
                  <div className="text-3xl font-bold text-cyan-400">10+</div>
                  <div className="text-sm text-slate-400 mt-1">Technologies</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-800/50">
                  <div className="text-3xl font-bold text-pink-400">2</div>
                  <div className="text-sm text-slate-400 mt-1">Research Papers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// AskDocs Project Component
const AskDocsProject = () => {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 md:p-10 border border-slate-700/50 backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-300 rounded-full">Featured Project</span>
          <span className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full">Production Ready</span>
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">AskDocs</h3>
        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
          AI-Powered Document Intelligence System — A production-ready multi-agent RAG system for querying
          documents with real-time streaming, hybrid search, and scalable ingestion.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10">
                <Layers className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Multi-Agent Architecture</div>
                <div className="text-xs text-slate-500">Supervisor + Tool Agents</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Search className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Hybrid Retrieval</div>
                <div className="text-xs text-slate-500">Vector + Keyword + RRF</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Real-time Streaming</div>
                <div className="text-xs text-slate-500">SSE responses</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-pink-500/10">
                <Shield className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Built-in Guardrails</div>
                <div className="text-xs text-slate-500">PII, Prompt Injection, Toxicity</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <FileText className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Multi-format Support</div>
                <div className="text-xs text-slate-500">PDFs, DOCX, PPTX, Markdown</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Cloud className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Cloud Native</div>
                <div className="text-xs text-slate-500">AWS S3 + Supabase</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-sm font-medium text-slate-300 mb-4">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {['FastAPI', 'Celery', 'Redis', 'pgvector', 'OpenAI GPT', 'Unstructured', 'Docker', 'AWS'].map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-sm bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600/50">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/30">
          <h4 className="text-sm font-medium text-slate-300 mb-4">Architecture Pipeline</h4>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/30">
              <FileText className="w-4 h-4 text-indigo-400" />
              <span className="text-slate-300">Upload</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/30">
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="text-slate-300">Process</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/30">
              <Database className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300">Store</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/30">
              <Search className="w-4 h-4 text-pink-400" />
              <span className="text-slate-300">Retrieve</span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/30">
              <Brain className="w-4 h-4 text-amber-400" />
              <span className="text-slate-300">Generate</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <a href="https://github.com/sangeeth40/AskDocs-server" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-medium text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
            <Github className="w-4 h-4" />
            View Source
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

// DNN Watermarking Project Component
const DNNProject = () => {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 md:p-10 border border-slate-700/50 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-300 rounded-full">Research Project</span>
          <span className="px-3 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-300 rounded-full">Published</span>
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">DNN Watermarking with Chaotic Sequences</h3>
        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
          An efficient and resilient white-box watermarking framework that embeds ownership information into
          deep neural networks using chaotic sequences and genetic algorithms for verification.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-medium text-slate-300 mb-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              Key Contributions
            </h4>
            <ul className="space-y-3">
              {[
                'Lightweight white-box watermarking using chaotic sequences',
                'Post-training embedding without retraining requirement',
                'Genetic algorithm-based ownership verification',
                '98% accuracy maintained after watermarking'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
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
              {[
                'Logistic map chaos for watermark generation',
                'Minimal weight perturbation for embedding',
                'Tournament selection with blend crossover',
                'Activation-based detection classifiers'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/30">
          <h4 className="text-sm font-medium text-slate-300 mb-4">Experimental Results</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 rounded-lg bg-slate-700/30">
              <div className="text-2xl font-bold text-emerald-400">98%</div>
              <div className="text-xs text-slate-500">MNIST Accuracy</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-700/30">
              <div className="text-2xl font-bold text-cyan-400">73%</div>
              <div className="text-xs text-slate-500">CIFAR-10 Accuracy</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-700/30">
              <div className="text-2xl font-bold text-indigo-400">~0.01</div>
              <div className="text-xs text-slate-500">Parameter Recovery Error</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-slate-700/30">
              <div className="text-2xl font-bold text-purple-400">Robust</div>
              <div className="text-xs text-slate-500">Against Fine-tuning</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-xl font-medium text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
            <FileText className="w-4 h-4" />
            View Paper
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Projects Section
const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">Portfolio</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Featured Projects</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my work in AI/ML systems, from production-ready applications to academic research
          </p>
        </div>

        <div className="space-y-8">
          <AskDocsProject />
          <DNNProject />
        </div>
      </div>
    </section>
  )
}

// Skills Section
const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code2 className="w-6 h-6" />,
      color: 'indigo',
      skills: ['Python', 'JavaScript', 'Java', 'SQL']
    },
    {
      title: 'AI & ML',
      icon: <Brain className="w-6 h-6" />,
      color: 'purple',
      skills: ['NLP', 'Hugging Face', 'OpenAI', 'Claude', 'LangChain', 'LangGraph', 'RAGAS', 'GuardRails']
    },
    {
      title: 'Web Development',
      icon: <Layers className="w-6 h-6" />,
      color: 'cyan',
      skills: ['React', 'Express', 'Node.js', 'FastApi', 'Celery', 'Redis']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      color: 'amber',
      skills: ['AWS (EC2, S3, ECS, Fargate)', 'Docker', 'Kubernetes']
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      color: 'emerald',
      skills: ['PostgreSQL', 'PGvector', 'MongoDB', 'Neo4j']
    },
    {
      title: 'Security',
      icon: <Shield className="w-6 h-6" />,
      color: 'pink',
      skills: ['DNN Watermarking', 'Chaotic Sequences', 'Genetic Algorithms']
    }
  ]

  return (
    <section id="skills" className="relative py-32 px-6 bg-gradient-to-b from-slate-950/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">Expertise</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Technical Skills</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern AI-powered applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <div key={i} className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${category.color}-500/10 mb-4`}>
                <span className={`text-${category.color}-400`}>{category.icon}</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span key={j} className="px-3 py-1 text-sm bg-slate-700/30 text-slate-300 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Experience Section
const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Stirrup Communications',
      role: 'AI Engineer Intern',
      period: 'August 2025 – Present',
      location: 'Ernakulam, India',
      highlights: [
        'Built RAG and Agentic RAG solutions using Anthropic Claude models',
        'Experimented with LightRAG implementations for efficiency comparison',
        'Designed LLM-driven agents for multi-step reasoning and data interaction',
        'Collaborated with AI team to evaluate prompt engineering strategies'
      ]
    },
    {
      company: 'Cyber Security Research Lab, CUSAT',
      role: 'Research Intern',
      period: 'December 2024 – May 2025',
      location: 'CUSAT, Kerala',
      highlights: [
        'Developed Python-based watermarking system for deep neural networks',
        'Integrated chaotic sequences using logistic maps into model weights',
        'Achieved 98% accuracy while maintaining model robustness',
        'Created verification method using genetic algorithms'
      ]
    }
  ]

  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">Career</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Experience</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Professional experience in AI engineering and research
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-slate-700">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-indigo-500 border-4 border-slate-950" />
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                    <p className="text-indigo-400">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">{exp.period}</p>
                    <p className="text-sm text-slate-500">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-400 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Certifications Section
const CertificationsSection = () => {
  const certs = [
    { name: 'IBM AI Engineering', provider: 'Coursera', year: '2024' },
    { name: 'IOT Essentials for Industry 4.0', provider: 'AICTE, CUSAT', year: '2024' },
    { name: 'Google Cybersecurity', provider: 'Coursera', year: '2024' },
    { name: 'Python Basics', provider: 'University of Michigan', year: '2023' },
    { name: 'Python for Data Science', provider: 'IBM', year: '2023' }
  ]

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">Credentials</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Certifications</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div key={i} className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-white mb-1">{cert.name}</h4>
                  <p className="text-sm text-slate-400">{cert.provider}</p>
                </div>
                <span className="text-xs text-slate-500">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">Get In Touch</h2>
        <h3 className="text-4xl font-bold text-white mb-4">Let's Work Together</h3>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto">
          I'm always interested in discussing AI projects, collaboration opportunities, or just having a conversation about technology.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href="mailto:sangeethb10@gmail.com" className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
            <Mail className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
            <h4 className="font-medium text-white mb-1">Email</h4>
            <p className="text-sm text-slate-400">sangeethb10@gmail.com</p>
          </a>
          <a href="https://github.com/sangeeth40" target="_blank" rel="noopener noreferrer" className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
            <Github className="w-8 h-8 text-slate-400 mx-auto mb-4" />
            <h4 className="font-medium text-white mb-1">GitHub</h4>
            <p className="text-sm text-slate-400">@sangeeth40</p>
          </a>
          <a href="#" className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300">
            <Linkedin className="w-8 h-8 text-slate-400 mx-auto mb-4" />
            <h4 className="font-medium text-white mb-1">LinkedIn</h4>
            <p className="text-sm text-slate-400">Sangeeth Bijukumar</p>
          </a>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2024 Sangeeth Bijukumar. Built with passion for AI.
          </p>
          <div className="flex items-center gap-4">
            <a href="mailto:sangeethb10@gmail.com" className="p-2 text-slate-500 hover:text-slate-300 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/sangeeth40" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-slate-300 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-slate-500 hover:text-slate-300 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App