import { useLayoutEffect } from 'react'

// Fades and lifts sections into view as they scroll on screen.
// Skipped for people who prefer reduced motion, and when IntersectionObserver is missing.
const TARGETS = '.sec .wrap > *, .cards3 > *, .story-fig, .people > *, details'

export default function useReveal() {
  useLayoutEffect(() => {
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (calm || !('IntersectionObserver' in window)) return undefined

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    )
    document.querySelectorAll(TARGETS).forEach((el) => {
      const i = [...el.parentElement.children].indexOf(el)
      el.style.setProperty('--i', i)
      el.classList.add('reveal')
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
}
