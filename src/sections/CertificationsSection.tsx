import { useScrollReveal }  from '@/hooks/useScrollReveal'
import { useTilt }           from '@/hooks/useTilt'
import { CERTIFICATIONS }    from '@/data'
import type { Certification } from '@/types'

const STAGGER_DELAYS = ['0ms', '70ms', '140ms', '210ms', '280ms']

// ─── CertCard ──────────────────────────────────────────────────────────────────

interface CertCardProps {
  cert:         Certification
  visible:      boolean
  staggerDelay: string
}

function CertCard({ cert, visible, staggerDelay }: CertCardProps) {
  const { ref, style } = useTilt(10)

  return (
    <div
      ref={ref}
      style={{ ...style, transitionDelay: visible ? staggerDelay : '0ms' }}
      className={`reveal-hidden ${visible ? 'reveal-visible' : ''} p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/50 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 glow-hover cursor-default`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-white mb-1 text-sm leading-snug">{cert.name}</h4>
          <p className="text-xs text-slate-400">{cert.provider}</p>
        </div>
        <span className="text-xs text-slate-500 flex-shrink-0 mt-0.5 px-2 py-0.5 rounded-md bg-slate-700/40 border border-slate-600/30">
          {cert.year}
        </span>
      </div>
    </div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────

export function CertificationsSection() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal(0.1)
  const { ref: gridRef,   visible: gridVisible   } = useScrollReveal(0.05)

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className={`text-center mb-16 reveal-hidden ${headerVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">Credentials</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Certifications</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Continuous learning across AI, cloud, and security domains
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard
              key={i}
              cert={cert}
              visible={gridVisible}
              staggerDelay={STAGGER_DELAYS[i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
