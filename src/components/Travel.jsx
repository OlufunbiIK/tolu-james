import SectionLabel from './SectionLabel.jsx'
import VenueMap from './VenueMap.jsx'
import { wedding } from '../data/wedding.js'

export default function Travel() {
  return (
    <section className="sec" id="travel">
      <div className="wrap">
        <SectionLabel n="05">Travel and stay</SectionLabel>
        <h2 className="h2">Coming from far? We have you.</h2>
        <p className="lede muted">
          For guests flying in from the UK, US, Canada, the Gulf and beyond, here is everything in one place.
        </p>

        <VenueMap venues={wedding.venues} />

        <div className="cards2 travel-cards">
          {wedding.travel.map((t) => (
            <article className="card" key={t.title}>
              <div className="card-top" aria-hidden="true" />
              <h3 className="disp card-title small">{t.title}</h3>
              {t.paragraphs?.map((p, i) => (
                <p className="muted" key={i}>
                  {p}
                </p>
              ))}
              {t.hotels?.map((h) => (
                <p className="muted" key={h.name}>
                  <b>{h.name}</b>
                  <br />
                  {h.note}
                </p>
              ))}
              {t.footer && <p className="muted">{t.footer}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
