import SectionLabel from './SectionLabel.jsx'
import { images } from '../assets/images.js'
import { wedding } from '../data/wedding.js'

const { story, couple } = wedding

export default function Story() {
  return (
    <section className="sec" id="story">
      <div className="wrap two">
        <figure className="story-fig">
          <div className="arch">
            <div className="arch-clip">
              <img
                src={images.couple}
                width="735"
                height="1029"
                loading="lazy"
                alt={`${couple.first} and ${couple.second} seated together, smiling at each other`}
              />
            </div>
          </div>
          <figcaption className="cap">{story.photoCaption}</figcaption>
        </figure>
        <div>
          <SectionLabel n="01">Our story</SectionLabel>
          <h2 className="h2">Two families, one long-awaited yes.</h2>
          {story.paragraphs.map((p, i) => (
            <p key={i} className={`muted story-p${i === 0 ? ' dropcap' : ''}`}>
              {p}
            </p>
          ))}
          <blockquote className="quote">
            <span className="script quote-mark" aria-hidden="true">&ldquo;</span>
            {story.quote}
          </blockquote>
          <p className="script signature">
            {couple.first} &amp; {couple.second}
          </p>
        </div>
      </div>
    </section>
  )
}
