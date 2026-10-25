import SectionLabel from './SectionLabel.jsx'
import { wedding } from '../data/wedding.js'

export default function WatchLive() {
  const { live } = wedding
  return (
    <section className="sec live" id="live">
      <div className="wrap center">
        <SectionLabel n="06" color="var(--gold)" center>Watch live</SectionLabel>
        <h2 className="h2">{live.title}</h2>
        <p className="lede on-dark mx-auto">{live.text}</p>
        <div className="zones" role="list" aria-label="Ceremony start time in different cities">
          {live.zones.map(([time, city]) => (
            <div className="zone" role="listitem" key={city}>
              <b>{time}</b>
              <span>{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
