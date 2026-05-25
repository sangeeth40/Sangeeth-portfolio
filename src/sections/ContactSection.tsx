import { Mail, Github, Linkedin, Download } from 'lucide-react'
import type { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTilt }          from '@/hooks/useTilt'

// ─── ContactCard ───────────────────────────────────────────────────────────────

interface ContactCardProps {
  href:      string
  icon:      ReactNode
  label:     string
  sub:       string
  external?: boolean
}

function ContactCard({ href, icon, label, sub, external }: ContactCardProps) {
  const { ref, style } = useTilt(12)

  return (
    <a
      ref={ref}
      style={style}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group block p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/60 rounded-2xl border border-slate-700/50 hover:border-indigo-500/35 transition-all duration-300 glow-hover"
    >
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-slate-700/40 group-hover:bg-indigo-500/10 transition-colors duration-300">
        <span className="text-slate-400 group-hover:text-indigo-400 transition-colors duration-300">
          {icon}
        </span>
      </div>
      <h4 className="font-semibold text-white text-center mb-1">{label}</h4>
      <p className="text-sm text-slate-400 text-center group-hover:text-slate-300 transition-colors">
        {sub}
      </p>
    </a>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────

const CONTACT_CARDS: ContactCardProps[] = [
  { href: 'mailto:sangeethb10@gmail.com', icon: <Mail     className="w-6 h-6" />, label: 'Email',    sub: 'sangeethb10@gmail.com' },
  { href: 'https://github.com/sangeeth40', icon: <Github   className="w-6 h-6" />, label: 'GitHub',   sub: '@sangeeth40', external: true },
  { href: '#',                              icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', sub: 'Sangeeth Bijukumar' },
]

export function ContactSection() {
  const { ref, visible } = useScrollReveal(0.1)

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={ref} className={`reveal-hidden ${visible ? 'reveal-visible' : ''}`}>
          <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">Get In Touch</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Let's Work Together</h3>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
            I'm always interested in discussing AI projects, collaboration opportunities, or just having a
            conversation about technology.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {CONTACT_CARDS.map((card) => (
              <ContactCard key={card.label} {...card} />
            ))}
          </div>

          {/* Resume download CTA */}
          <div className="inline-flex flex-col items-center gap-3">
            <p className="text-sm text-slate-500">Or grab a copy of my resume</p>
            <a
              href="/Sangeeth_resume.pdf"
              download="Sangeeth_Bijukumar_Resume.pdf"
              className="flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-medium text-white hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
