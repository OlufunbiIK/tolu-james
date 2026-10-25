import { useEffect, useState } from 'react'

const pad = (n) => String(n).padStart(2, '0')

export function useCountdown(targetIso) {
  const target = new Date(targetIso).getTime()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = Math.max(0, target - now)
  const day = 86_400_000
  const hr = 3_600_000
  const min = 60_000

  return {
    done: diff === 0,
    units: [
      { n: String(Math.floor(diff / day)), l: 'Days' },
      { n: pad(Math.floor((diff % day) / hr)), l: 'Hours' },
      { n: pad(Math.floor((diff % hr) / min)), l: 'Minutes' },
      { n: pad(Math.floor((diff % min) / 1000)), l: 'Seconds' },
    ],
  }
}
