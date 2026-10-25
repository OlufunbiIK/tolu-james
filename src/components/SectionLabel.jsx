export default function SectionLabel({ n, children, color = '#8a5a12', center = false }) {
  return (
    <p className="label" style={{ color, justifyContent: center ? 'center' : undefined }}>
      <b>{n}</b> {children}
    </p>
  )
}
