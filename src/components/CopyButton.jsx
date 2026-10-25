import { useState } from 'react'

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked: the value is still visible to copy by hand */
    }
  }
  return (
    <button type="button" className="copy-btn" onClick={copy}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}
