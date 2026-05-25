import { useState, useEffect, useRef } from 'react'

/**
 * Cycles through an array of strings with a typing and deleting animation.
 * State lives in refs so the setTimeout callback never captures stale values.
 */
export function useTypewriter(words: string[], speed = 95, pause = 2300) {
  const [display, setDisplay] = useState('')

  // Mutable state lives in a ref so the timer callback is always current.
  const state = useRef({ wordIdx: 0, charIdx: 0, deleting: false, words, speed, pause })
  useEffect(() => { Object.assign(state.current, { words, speed, pause }) })

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const s = state.current

    const tick = () => {
      const word = s.words[s.wordIdx]

      if (!s.deleting) {
        if (s.charIdx < word.length) {
          s.charIdx++
          setDisplay(word.slice(0, s.charIdx))
          timer = setTimeout(tick, s.speed)
        } else {
          timer = setTimeout(() => { s.deleting = true; tick() }, s.pause)
        }
      } else {
        if (s.charIdx > 0) {
          s.charIdx--
          setDisplay(word.slice(0, s.charIdx))
          timer = setTimeout(tick, s.speed / 2)
        } else {
          s.deleting  = false
          s.wordIdx   = (s.wordIdx + 1) % s.words.length
          timer = setTimeout(tick, 380)
        }
      }
    }

    timer = setTimeout(tick, 900)
    return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return display
}
