import SectionLabel from './SectionLabel.jsx'
import { images } from '../assets/images.js'
import { wedding } from '../data/wedding.js'

export default function DressCode() {
  const { dress } = wedding
  return (
    <section className="sec adire" id="dress">
      <div className="wrap">
        <SectionLabel n="03" color="var(--gold)">Dress code</SectionLabel>
        <h2 className="h2">Wear your best cloth.</h2>
        <p className="lede on-dark">{dress.intro}</p>
        <div className="cards2">
          {dress.looks.map((look) => (
            <div className="dress-card" key={look.title}>
              <p className="eyebrow gold">{look.day}</p>
              <h3 className="disp dress-title">{look.title}</h3>
              <p className="on-dark dress-text">{look.text}</p>
              <div className="swatches">
                {look.swatches.map((s) => (
                  <div className="swatch" key={s.key}>
                    <img src={images.swatches[s.key]} width="88" height="88" loading="lazy" alt={s.label} />
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="script dress-note">{dress.note}</p>
        <p className="center dress-cta">
          <a className="btn btn-gold" href="#asoebi">
            How to get your aso-ebi
          </a>
        </p>
      </div>
    </section>
  )
}
