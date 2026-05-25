import { useState, useEffect, useRef, useCallback } from 'react'
import type { CSSProperties } from 'react'

/**
 * Adds a real-time 3-D tilt effect to an element driven by mouse position.
 * All DOM mutations run inside requestAnimationFrame to stay off the main thread.
 */
export function useTilt(strength = 14) {
  const ref    = useRef<any>(null)
  const rafRef = useRef<number>(0)
  const [style, setStyle] = useState<CSSProperties>({})

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const { left, top, width, height } = el.getBoundingClientRect()
        const x =  ((e.clientX - left) / width  - 0.5) * strength
        const y = -((e.clientY - top)  / height - 0.5) * strength
        setStyle({
          transform: `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.025, 1.025, 1.025)`,
          transition: 'transform 0.08s ease-out',
          willChange: 'transform',
        })
      })
    },
    [strength],
  )

  const onMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    setStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.65s cubic-bezier(0.23, 1, 0.32, 1)',
    })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('mousemove',  onMouseMove  as EventListener)
    el.addEventListener('mouseleave', onMouseLeave)
    return () => {
      el.removeEventListener('mousemove',  onMouseMove  as EventListener)
      el.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [onMouseMove, onMouseLeave])

  return { ref, style }
}
