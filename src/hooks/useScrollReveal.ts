import { useState, useEffect, useRef } from 'react'

/**
 * Returns a ref and a boolean that flips to true once the element
 * enters the viewport. Fires only once — elements stay visible after reveal.
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<any>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}
