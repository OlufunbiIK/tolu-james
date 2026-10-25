import { useCountdown } from '../hooks/useCountdown.js'
import { wedding } from '../data/wedding.js'

export default function Countdown() {
  const { units, done } = useCountdown(wedding.dates.countdownTo)

  return (
    <>
      <div className="oke ribbon" aria-hidden="true" />
      <div className="cdbar" role="timer" aria-label="Countdown to the engagement ceremony">
        <p>{done ? 'Today we say yes' : wedding.dates.countdownLabel}</p>
        <div className="count">
          {units.map((u) => (
            <div key={u.l}>
              <b>{u.n}</b>
              <span>{u.l}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
