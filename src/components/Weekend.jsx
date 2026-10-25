import SectionLabel from './SectionLabel.jsx'
import { wedding } from '../data/wedding.js'

export default function Weekend() {
  return (
    <section className="sec" id="weekend">
      <div className="wrap">
        <SectionLabel n="02">The weekend</SectionLabel>
        <h2 className="h2">Two days of celebration.</h2>
        <p className="lede muted">
          Come for both, or whichever you can manage. Our coordinators will keep everyone updated on WhatsApp if the
          programme shifts.
        </p>
        <div className="cards2">
          {wedding.events.map((e) => (
            <article className="card" key={e.title}>
              <div className="card-top" aria-hidden="true" />
              <div className="bigdate">
                <b>{e.day}</b>
                <span>
                  {e.weekday}
                  <br />
                  {e.month}
                </span>
              </div>
              <h3 className="disp card-title">{e.title}</h3>
              <p className="muted card-venue">{e.venue}</p>
              <ul className="tl">
                {e.timeline.map(([time, text]) => (
                  <li key={time}>
                    <time>{time}</time>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
