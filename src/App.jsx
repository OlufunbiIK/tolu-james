import Hero from './components/Hero.jsx'
import Countdown from './components/Countdown.jsx'
import Story from './components/Story.jsx'
import Welcome from './components/Welcome.jsx'
import Weekend from './components/Weekend.jsx'
import DressCode from './components/DressCode.jsx'
import AsoEbi from './components/AsoEbi.jsx'
import Travel from './components/Travel.jsx'
import WatchLive from './components/WatchLive.jsx'
import People from './components/People.jsx'
import Rsvp from './components/Rsvp.jsx'
import Gifts from './components/Gifts.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()
  return (
    <div className="page">
      <a className="skip" href="#story">
        Skip to content
      </a>
      <Hero />
      <Countdown />
      <main>
        <Story />
        <Welcome />
        <Weekend />
        <DressCode />
        <AsoEbi />
        <Travel />
        <WatchLive />
        <People />
        <Rsvp />
        <Gifts />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
