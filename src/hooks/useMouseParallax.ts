import { useState, useEffect } from 'react'

/**
 * Tracks the mouse position as a normalised 0–1 value on each axis.
 * Defaults to the centre of the screen (0.5, 0.5) before the first move.
 */
export function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) =>
      setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return pos
}
