import { useState } from 'react'

// Google Maps without an API key: the public embed URL plus plain links.
// To use the paid Maps Embed API instead, swap `embedSrc` for
// https://www.google.com/maps/embed/v1/place?key=YOUR_KEY&q=...
const embedSrc = (q) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&z=15&output=embed`
const openUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`
const directionsUrl = (q) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`

export default function VenueMap({ venues }) {
  const [activeId, setActiveId] = useState(venues[0].id)
  const active = venues.find((v) => v.id === activeId) ?? venues[0]

  return (
    <div className="venue-map">
      <div className="venue-list" role="tablist" aria-label="Choose a venue">
        {venues.map((v) => {
          const selected = v.id === active.id
          return (
            <button
              key={v.id}
              type="button"
              role="tab"
              id={`tab-${v.id}`}
              aria-selected={selected}
              aria-controls="venue-panel"
              tabIndex={selected ? 0 : -1}
              className={`venue-tab${selected ? ' is-active' : ''}`}
              onClick={() => setActiveId(v.id)}
              onKeyDown={(e) => {
                const i = venues.findIndex((x) => x.id === v.id)
                if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                  e.preventDefault()
                  const next = venues[(i + 1) % venues.length]
                  setActiveId(next.id)
                  document.getElementById(`tab-${next.id}`)?.focus()
                }
                if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                  e.preventDefault()
                  const prev = venues[(i - 1 + venues.length) % venues.length]
                  setActiveId(prev.id)
                  document.getElementById(`tab-${prev.id}`)?.focus()
                }
              }}
            >
              <span className="venue-when">{v.when}</span>
              <span className="venue-name">{v.name}</span>
              <span className="venue-addr">{v.address}</span>
            </button>
          )
        })}
      </div>

      <div className="map-panel" id="venue-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`}>
        <div className="map-frame">
          <iframe
            key={active.id}
            title={`Map of ${active.name}`}
            src={embedSrc(active.mapQuery)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="map-actions">
          <a className="btn btn-dark" href={directionsUrl(active.mapQuery)} target="_blank" rel="noopener noreferrer">
            Get directions
          </a>
          <a className="btn btn-outline" href={openUrl(active.mapQuery)} target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  )
}
