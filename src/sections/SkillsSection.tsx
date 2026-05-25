import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useTilt }          from '@/hooks/useTilt'
import { SKILL_CATEGORIES } from '@/data'
import type { SkillCategory } from '@/types'

// Maps the colour key to the corresponding Tailwind classes
const ICON_BG: Record<string, string> = {
  indigo:  'bg-indigo-500/10',
  purple:  'bg-purple-500/10',
  cyan:    'bg-cyan-500/10',
  amber:   'bg-amber-500/10',
  emerald: 'bg-emerald-500/10',
  pink:    'bg-pink-500/10',
}

const ICON_TEXT: Record<string, string> = {
  indigo:  'text-indigo-400',
  purple:  'text-purple-400',
  cyan:    'text-cyan-400',
  amber:   'text-amber-400',
  emerald: 'text-emerald-400',
  pink:    'text-pink-400',
}

const STAGGER_DELAYS = ['0ms', '80ms', '160ms', '240ms', '320ms', '400ms']

// ─── SkillCard ─────────────────────────────────────────────────────────────────

interface SkillCardProps {
  category:   SkillCategory
  visible:    boolean
  staggerDelay: string
}

function SkillCard({ category, visible, staggerDelay }: SkillCardProps) {
  const { ref, style } = useTilt(12)

  return (
    <div
      ref={ref}
      style={{ ...style, transitionDelay: visible ? staggerDelay : '0ms' }}
      className={`reveal-hidden ${visible ? 'reveal-visible' : ''} group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/60 rounded-2xl border border-slate-700/50 hover:border-slate-600/60 transition-all duration-300 glow-hover cursor-default`}
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${ICON_BG[category.color]} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <span className={ICON_TEXT[category.color]}>{category.icon}</span>
      </div>
      <h4 className="text-lg font-semibold text-white mb-4">{category.title}</h4>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span key={i} className="px-3 py-1 text-sm bg-slate-700/30 text-slate-300 rounded-lg hover:bg-slate-700/60 transition-colors duration-200">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────

export function SkillsSection() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal(0.1)
  const { ref: gridRef,   visible: gridVisible   } = useScrollReveal(0.05)

  return (
    <section id="skills" className="relative py-32 px-6 bg-gradient-to-b from-slate-950/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className={`text-center mb-16 reveal-hidden ${headerVisible ? 'reveal-visible' : ''}`}>
          <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">Expertise</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Technical Skills</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern AI-powered applications
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCard
              key={i}
              category={cat}
              visible={gridVisible}
              staggerDelay={STAGGER_DELAYS[i]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
