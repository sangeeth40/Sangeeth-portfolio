import { Mail, Github, Linkedin, ChevronDown, ArrowRight } from "lucide-react";
import { RotatingCube } from "@/components/RotatingCube";
import { useTypewriter } from "@/hooks/useTypewriter";

const TYPEWRITER_WORDS = [
  "LLM-powered applications",
  "RAG pipelines",
  "agent-based systems",
  "AI-driven products",
];

const SOCIAL_LINKS = [
  {
    href: "mailto:sangeethb10@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
  },
  {
    href: "https://github.com/sangeeth40",
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/sangeeth-b-81b939316/",
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
  },
];

export function HeroSection() {
  const typedText = useTypewriter(TYPEWRITER_WORDS, 85, 2400);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Interactive 3-D cube */}
        <div className="flex justify-center mb-10">
          <RotatingCube />
        </div>

        {/* Availability badge */}
        <div className="mb-7 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/25 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
          </span>
          <span className="text-sm text-slate-300">
            Available for opportunities
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-7 leading-tight">
          <span className="text-white">Hi, I'm </span>
          <span className="shimmer-gradient">Sangeeth Bijukumar</span>
        </h1>

        {/* Typewriter subtitle */}
        <div className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto h-12 flex items-center justify-center">
          <span>Building&nbsp;</span>
          <span className="text-indigo-400 font-semibold">
            <span className="typewriter-cursor">{typedText || " "}</span>
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-medium text-white hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-slate-700 rounded-xl font-medium text-slate-300 hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/5 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 hover:scale-110 transition-all duration-300 group"
            >
              <span className="text-slate-400 group-hover:text-indigo-400 transition-colors block">
                {icon}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 hover:text-slate-300 transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
