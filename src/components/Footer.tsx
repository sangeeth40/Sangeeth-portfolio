import { Mail, Github, Linkedin } from 'lucide-react'

const SOCIAL_LINKS = [
  { href: 'mailto:sangeethb10@gmail.com', icon: <Mail     className="w-5 h-5" />, label: 'Email',    external: false },
  { href: 'https://github.com/sangeeth40', icon: <Github   className="w-5 h-5" />, label: 'GitHub',   external: true  },
  { href: '#',                              icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', external: false },
]

export function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © 2025 Sangeeth Bijukumar. Built with passion for AI.
        </p>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ href, icon, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-2 text-slate-500 hover:text-slate-300 transition-colors rounded-lg hover:bg-slate-800/50"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
