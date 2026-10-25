import SectionLabel from './SectionLabel.jsx'
import CopyButton from './CopyButton.jsx'
import { wedding } from '../data/wedding.js'

export default function Gifts() {
  const { gifts } = wedding
  return (
    <section className="sec" id="gifts">
      <div className="wrap center">
        <SectionLabel n="09" center>Gifts</SectionLabel>
        <h2 className="h2">Your presence is the gift.</h2>
        <p className="lede muted mx-auto">{gifts.intro}</p>
        <div className="cards3 left">
          {gifts.options.map((g) => (
            <div className="gift" key={g.title}>
              <h3>{g.title}</h3>
              <p>{g.line}</p>
              <span className={`acct${g.small ? ' small' : ''}`}>{g.value}</span>
              {g.foot && <p className="foot">{g.foot}</p>}
              {g.copy && <CopyButton text={g.value} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
