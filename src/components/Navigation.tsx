import { useState, useEffect } from 'react'
import { Download } from 'lucide-react'

const NAV_LINKS = ['About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'] as const

/**
 * Fixed top navigation bar. Becomes opaque with a backdrop blur after the
 * user scrolls past 50 px. Includes a resume download button on desktop and
 * a collapsible hamburger menu on mobile.
 */
export function Navigation() {
  const [isScrolled,   setIsScrolled]   = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-950/88 backdrop-blur-2xl border-b border-slate-800/50 shadow-2xl shadow-black/30'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="text-xl font-bold shimmer-gradient tracking-tight">
            SB
          </a>

          {/* Desktop links + resume button */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="/Sangeeth_resume.pdf"
              download="Sangeeth_Bijukumar_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-medium text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen((open) => !open)}
            className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Toggle navigation"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2'    : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-opacity  duration-300 ${isMobileOpen ? 'opacity-0'               : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800/70">
            <div className="flex flex-col gap-4 pt-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="/Sangeeth_resume.pdf"
                download="Sangeeth_Bijukumar_Resume.pdf"
                className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
