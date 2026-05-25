import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTilt }          from '@/hooks/useTilt'
import { EXPERIENCES }      from '@/data'
import type { Experience }  from '@/types'

// ─── ExperienceCard ────────────────────────────────────────────────────────────

interface ExperienceCardProps {
  experience:   Experience
  visible:      boolean
  staggerDelay: string
  isLast:       boolean
}

function ExperienceCard({ experience, visible, staggerDelay, isLast }: ExperienceCardProps) {
  const { ref, style } = useTilt(8)

  return (
    <div
      className={`relative pl-8 ${!isLast ? 'border-l-2 border-slate-700/60' : ''} reveal-hidden ${visible ? 'reveal-visible' : ''}`}
      style={{ transitionDelay: visible ? staggerDelay : '0ms' }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-slate-950 timeline-dot" />

      <div ref={ref} style={style}>
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/60 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-xl glow-hover transition-all duration-300">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div>
              <h4 className="text-xl font-bold text-white">{experience.company}</h4>
              <p className="text-indigo-400 font-medium mt-0.5">{experience.role}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">{experience.period}</p>
              <p className="text-sm text-slate-500 mt-0.5">{experience.location}</p>
            </div>
          </div>
          <ul className="space-y-2.5">
            {experience.highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400/70 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Connector line between cards */}
      {!isLast && <div className="ml-[-2px] w-0.5 h-8 bg-slate-700/60" />}
    </div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────

export function ExperienceSection() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal(0.1)
  const { ref: listRef,   visible: listVisible   } = useScrollReveal(0.05)

  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className={`text-center mb-16 reveal-hidden ${headerVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">Career</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Experience</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Professional experience in AI engineering and research
          </p>
        </div>

        <div ref={listRef} className="space-y-0">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard
              key={i}
              experience={exp}
              visible={listVisible}
              staggerDelay={`${i * 150}ms`}
              isLast={i === EXPERIENCES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
