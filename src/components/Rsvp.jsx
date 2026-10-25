import { useState } from 'react'
import SectionLabel from './SectionLabel.jsx'
import Protea from './Protea.jsx'
import { wedding } from '../data/wedding.js'

const { rsvp } = wedding

const empty = {
  name: '',
  email: '',
  attend: 'yes',
  engagement: true,
  wedding: true,
  guests: '1',
  flight: '',
  note: '',
}

// To collect real replies, set VITE_RSVP_ENDPOINT in a .env file to a form
// service URL (Formspree, Getform, a Google Apps Script, your own API).
// With no endpoint the form still works, and just logs the reply in the console.
const endpoint = import.meta.env.VITE_RSVP_ENDPOINT

export default function Rsvp() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
      } else {
        console.info('RSVP (no endpoint configured):', form)
        await new Promise((r) => setTimeout(r, 400))
      }
      setStatus('sent')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section className="sec alt" id="rsvp">
      <div className="wrap two top">
        <div>
          <SectionLabel n="08">RSVP</SectionLabel>
          <h2 className="h2">Will you join us?</h2>
          <p className="lede muted narrow">
            Please reply by <b>{rsvp.deadline}</b>. One reply per household, adding everyone named on your invitation.
          </p>
          <p className="script come-hungry">Please come hungry.</p>
          <p className="muted small-print">
            Questions? Our coordinator, {rsvp.coordinator}, is on WhatsApp at {rsvp.phone}.
          </p>
        </div>

        <div className="card form-card">
          <div className="card-top" aria-hidden="true" />
          {status === 'sent' ? (
            <div className="thanks" role="status">
              <Protea size={80} style={{ color: '#8a5a12' }} />
              <h3 className="disp">Thank you.</h3>
              <p className="muted">Your reply has been received. We cannot wait to celebrate with you.</p>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  setForm(empty)
                  setStatus('idle')
                }}
              >
                Reply again
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rsvp-form">
              <label className="fld first">
                <span>Full name</span>
                <input className="inp" type="text" name="name" autoComplete="name" required value={form.name} onChange={set('name')} />
              </label>
              <label className="fld">
                <span>Email</span>
                <input className="inp" type="email" name="email" autoComplete="email" required value={form.email} onChange={set('email')} />
              </label>

              <fieldset className="group">
                <legend>Will you attend?</legend>
                <div className="pills">
                  <label className="pill">
                    <input type="radio" name="attend" value="yes" checked={form.attend === 'yes'} onChange={set('attend')} />
                    <span>Joyfully accept</span>
                  </label>
                  <label className="pill">
                    <input type="radio" name="attend" value="no" checked={form.attend === 'no'} onChange={set('attend')} />
                    <span>Regretfully decline</span>
                  </label>
                </div>
              </fieldset>

              {form.attend === 'yes' && (
                <>
                  <fieldset className="group">
                    <legend>Which days?</legend>
                    <div className="pills">
                      <label className="pill">
                        <input type="checkbox" checked={form.engagement} onChange={set('engagement')} />
                        <span>Engagement, 12 Dec</span>
                      </label>
                      <label className="pill">
                        <input type="checkbox" checked={form.wedding} onChange={set('wedding')} />
                        <span>White wedding, 13 Dec</span>
                      </label>
                    </div>
                  </fieldset>

                  <label className="fld">
                    <span>Number of guests</span>
                    <select className="inp" name="guests" value={form.guests} onChange={set('guests')}>
                      {Array.from({ length: rsvp.maxGuests }, (_, i) => (
                        <option key={i + 1} value={String(i + 1)}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="fld">
                    <span>Arrival flight, if you want a pickup (optional)</span>
                    <input
                      className="inp"
                      type="text"
                      name="flight"
                      placeholder="Airline, flight number, arrival date and time"
                      value={form.flight}
                      onChange={set('flight')}
                    />
                  </label>
                </>
              )}

              <label className="fld">
                <span>Dietary needs or a note for us</span>
                <textarea className="inp" name="note" rows="4" value={form.note} onChange={set('note')} />
              </label>

              <button className="btn btn-dark submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send my reply'}
              </button>
              <p className="form-error" role="alert" hidden={status !== 'error'}>
                Sorry, something went wrong. Please try again, or message {rsvp.coordinator} on WhatsApp.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
