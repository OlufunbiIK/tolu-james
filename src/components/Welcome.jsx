import { wedding } from '../data/wedding.js'

export default function Welcome() {
  const { greeting, line } = wedding.welcome
  return (
    <div className="welcome" role="note" aria-label={`${greeting}, welcome`}>
      <span className="script">{greeting}</span>
      <p>{line}</p>
    </div>
  )
}
