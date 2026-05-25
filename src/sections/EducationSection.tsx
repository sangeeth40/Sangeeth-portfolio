import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTilt }          from '@/hooks/useTilt'
import { EDUCATION }        from '@/data'
import type { Education }   from '@/types'

// ─── EducationCard ─────────────────────────────────────────────────────────────

interface EducationCardProps {
  education:    Education
  visible:      boolean
  staggerDelay: string
  isLast:       boolean
}

function EducationCard({ education, visible, staggerDelay, isLast }: EducationCardProps) {
  const { ref, style } = useTilt(8)

  return (
    <div
      className={`relative pl-8 ${!isLast ? 'border-l-2 border-slate-700/60' : ''} reveal-hidden ${visible ? 'reveal-visible' : ''}`}
      style={{ transitionDelay: visible ? staggerDelay : '0ms' }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 border-4 border-slate-950 timeline-dot" />

      <div ref={ref} style={style}>
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/60 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-xl glow-hover transition-all duration-300">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold text-white">{education.institution}</h4>
              <p className="text-xs text-slate-500 mt-0.5">{education.university}</p>
              <p className="text-indigo-400 font-medium mt-2">{education.degree}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">{education.period}</p>
              <p className="text-sm text-slate-500 mt-0.5">{education.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Connector line between cards */}
      {!isLast && <div className="ml-[-2px] w-0.5 h-8 bg-slate-700/60" />}
    </div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────

export function EducationSection() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal(0.1)
  const { ref: listRef,   visible: listVisible   } = useScrollReveal(0.05)

  return (
    <section id="education" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className={`text-center mb-16 reveal-hidden ${headerVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">Academic</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Education</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Academic foundation in computer science and software engineering
          </p>
        </div>

        <div ref={listRef} className="space-y-0 max-w-3xl mx-auto">
          {EDUCATION.map((edu, i) => (
            <EducationCard
              key={i}
              education={edu}
              visible={listVisible}
              staggerDelay={`${i * 150}ms`}
              isLast={i === EDUCATION.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
