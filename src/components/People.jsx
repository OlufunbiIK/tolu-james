import SectionLabel from './SectionLabel.jsx'
import { wedding } from '../data/wedding.js'

export default function People() {
  return (
    <section className="sec" id="people">
      <div className="wrap">
        <SectionLabel n="07">The people beside us</SectionLabel>
        <h2 className="h2">Our family and friends.</h2>
        <ul className="people">
          {wedding.people.map(([name, role]) => (
            <li className="person" key={name}>
              <div className="mono" aria-hidden="true">
                {name[0]}
              </div>
              <div>
                <h3>{name}</h3>
                <p>{role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
