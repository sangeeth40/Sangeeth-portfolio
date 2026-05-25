import { useMouseParallax } from '@/hooks/useMouseParallax'
import { PARTICLES } from '@/data'

// Each orb's position, size, colour, and how strongly it reacts to the mouse
const ORBS = [
  { width: 640, height: 640, color: 'rgba(99,102,241,0.16)',  top:  '2%', left:  '-4%', factorX:  0.5, factorY:  0.5 },
  { width: 520, height: 520, color: 'rgba(139,92,246,0.13)', bottom:'8%', right: '-3%', factorX: -0.4, factorY: -0.4 },
  { width: 420, height: 420, color: 'rgba(34,211,238,0.09)',  top: '38%', left:  '38%', factorX:  0.3, factorY:  0.3 },
]

/**
 * Fixed full-screen decorative layer: gradient base, mouse-parallax orbs,
 * a perspective grid, a sweeping scan-line, and drifting particles.
 * Sits behind all content with pointer-events disabled.
 */
export function AnimatedBackground() {
  const mouse = useMouseParallax()
  const dx    = (mouse.x - 0.5) * 50
  const dy    = (mouse.y - 0.5) * 50

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/35 to-slate-950" />

      {/* Mouse-reactive parallax orbs */}
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width:      orb.width,
            height:     orb.height,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            top:        (orb as any).top,
            bottom:     (orb as any).bottom,
            left:       (orb as any).left,
            right:      (orb as any).right,
            transform:  `translate(${dx * orb.factorX}px, ${dy * orb.factorY}px)`,
            transition: 'transform 0.12s ease-out',
          }}
        />
      ))}

      {/* Perspective grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f16_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f16_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Animated scan line */}
      <div className="scan-line" />

      {/* Drifting particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          style={{
            position:               'absolute',
            left:                   p.left,
            top:                    p.top,
            width:                  p.size,
            height:                 p.size,
            borderRadius:           '50%',
            background:             p.color,
            animationName:          'particleDrift',
            animationDuration:      p.duration,
            animationDelay:         p.delay,
            animationTimingFunction:'ease-in-out',
            animationIterationCount:'infinite',
            animationFillMode:      'forwards',
          }}
        />
      ))}
    </div>
  )
}
