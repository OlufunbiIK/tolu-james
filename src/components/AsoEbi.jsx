import SectionLabel from './SectionLabel.jsx'
import CopyButton from './CopyButton.jsx'
import { wedding } from '../data/wedding.js'

export default function AsoEbi() {
  const { asoebi } = wedding
  const { contact } = asoebi
  const wa = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.message)}`

  return (
    <section className="sec alt" id="asoebi">
      <div className="wrap">
        <SectionLabel n="04">Aso-ebi</SectionLabel>
        <h2 className="h2">Wear the family cloth.</h2>
        <p className="lede muted">{asoebi.intro}</p>

        <div className="cards2">
          {asoebi.options.map((o) => (
            <div className="card" key={o.title}>
              <div className="card-top" aria-hidden="true" />
              <p className="eyebrow gold-dk">{o.day}</p>
              <h3 className="disp card-title small">{o.title}</h3>
              <p className="muted aso-fabric">{o.fabric}</p>
              <ul className="prices">
                {o.prices.map(([who, price]) => (
                  <li key={who}>
                    <span>{who}</span>
                    <b>{price}</b>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="disp aso-how">How to get yours</h3>
        <ol className="steps">
          {asoebi.steps.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step-n" aria-hidden="true">{i + 1}</span>
              <h4>{s.title}</h4>
              <p className="muted">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="aso-contact">
          <div>
            <p className="eyebrow gold">{contact.role}</p>
            <p className="disp aso-name">{contact.name}</p>
            <p className="on-dark aso-lines">
              {contact.display} · {contact.email}
              <br />
              {contact.pickup}
            </p>
            <p className="aso-deadline">Orders close {asoebi.deadline}.</p>
          </div>
          <div className="aso-pay">
            <a className="btn btn-gold" href={wa} target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
            <div className="aso-acct">
              <span className="eyebrow gold">{contact.bank.label}</span>
              <span className="acct on-dark-acct">{contact.bank.value}</span>
              <span className="aso-foot">{contact.bank.foot}</span>
              <CopyButton text={contact.bank.value.replace(/\s/g, '')} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
