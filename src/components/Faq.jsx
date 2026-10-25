import SectionLabel from './SectionLabel.jsx'
import { wedding } from '../data/wedding.js'

export default function Faq() {
  return (
    <section className="sec alt" id="faq">
      <div className="wrap narrow-wrap">
        <SectionLabel n="10">Questions</SectionLabel>
        <h2 className="h2 faq-title">Good to know.</h2>
        {wedding.faq.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
