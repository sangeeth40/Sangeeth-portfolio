import { useState, useEffect, useRef } from 'react'

/**
 * Counts from 0 to `target` with an ease-out-cubic curve once `isVisible`
 * becomes true. Runs once and never restarts.
 */
export function useAnimatedCounter(target: number, isVisible: boolean, duration = 2000) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!isVisible || started.current) return
    started.current = true

    const startTime = performance.now()
    let raf: number

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isVisible, target, duration])

  return value
}
