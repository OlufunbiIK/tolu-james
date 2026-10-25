import { useEffect, useRef, useState } from 'react'
import Protea from './Protea.jsx'
import { images } from '../assets/images.js'
import { wedding } from '../data/wedding.js'

const { couple, dates, nav } = wedding

export default function Hero() {
  const [open, setOpen] = useState(false)
  const heroRef = useRef(null)

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Gentle scroll parallax: the portrait drifts a little slower than the page.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        heroRef.current?.style.setProperty('--sy', Math.min(window.scrollY, 900))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header className="hero" id="top" ref={heroRef}>
      <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Main">
        <a href="#top" className="brand">
          <Protea size={34} style={{ flex: 'none' }} />
          <span>
            {couple.first} &amp; {couple.second}
          </span>
        </a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="bars" aria-hidden="true" />
        </button>
        <div className="nav-links" id="nav-links">
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-gold nav-rsvp" href="#rsvp" onClick={() => setOpen(false)}>
            RSVP
          </a>
        </div>
      </nav>

      <div className="hero-body">
        <div className="inner">
          <p className="eyebrow h-eyebrow">Together with their families</p>
          <h1>
            {couple.first}
            <span className="l2">
              <span className="amp">&amp;</span>
              {couple.second}
            </span>
          </h1>
          <div className="meta">
            <p className="date">
              <small>{dates.city}</small>
              {dates.long[0]}
              <br />
              {dates.long[1]}
            </p>
            <div className="cta">
              <a className="btn btn-dark" href="#rsvp">
                Kindly reply
              </a>
              <a className="btn btn-outline" href="#weekend">
                See the weekend
              </a>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <figure className="hero-portrait">
            <div className="hero-clip">
              <img
                src={images.couple}
                width="735"
                height="1029"
                fetchpriority="high"
                alt={`${couple.first} and ${couple.second} seated together, smiling at each other`}
              />
            </div>
          </figure>
          <div className="seal" aria-hidden="true">
            <span>{couple.monogram}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
