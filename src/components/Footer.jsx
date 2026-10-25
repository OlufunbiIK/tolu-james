import Protea from './Protea.jsx'
import { wedding } from '../data/wedding.js'

export default function Footer() {
  const { couple, dates, designer } = wedding
  return (
    <footer className="adire footer">
      <div className="oke ribbon" aria-hidden="true" />
      <div className="footer-inner">
        <Protea size={76} style={{ color: 'var(--gold)' }} />
        <p className="disp footer-names">
          {couple.first} <span className="amp">&amp;</span> {couple.second}
        </p>
        <p className="eyebrow footer-date">
          {dates.short} &nbsp;·&nbsp; {couple.hashtag}
        </p>
        <p className="footer-credit">
          Digital invitation designed by <span className="disp">{designer}</span>
        </p>
      </div>
    </footer>
  )
}
