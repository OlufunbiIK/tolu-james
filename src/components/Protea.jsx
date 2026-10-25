// The Eventlybuilt protea mark: two rings of pointed bracts around a centre.
const ring = (count, d, offset = 0) =>
  Array.from({ length: count }, (_, i) => (
    <path key={`${d}-${i}`} d={d} transform={`rotate(${offset + (i * 360) / count})`} />
  ))

export default function Protea({ size = 34, className = '', style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-60 -60 120 120"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
        {ring(12, 'M0 -16 C-9 -28 -9 -46 0 -58 C9 -46 9 -28 0 -16Z')}
        {ring(12, 'M0 -11 C-5 -19 -5 -30 0 -37 C5 -30 5 -19 0 -11Z', 15)}
        <circle r="7.5" />
      </g>
    </svg>
  )
}
