import { ContactForm } from './components/contact-form/ContactForm'
import { Navbar } from './components/navbar/Navbar'
import { Gallery } from './sections/Gallery'
import { Footer } from './sections/Footer'
import { Home } from './sections/Home'
import { Overview } from './sections/Overview'
import { Contact } from './sections/Contact'
import { Amenities } from './sections/Amenities'
import { Location } from './sections/Location'
import { MsitePlan } from './sections/MsitePlan'
import { FloorPlan } from './sections/FloorPlan'
import { FAQs } from './sections/FAQs'
import { Features } from './sections/Features'
import { LocationAdvantages } from './sections/LocationAdvantages'
import { KeyHighlights } from './sections/KeyHighlights'
import { WAContact } from './components/floating/WAContact'


function App() {

  return (
    <div className='tracking-tighter text-lg'>
      <Navbar />
      <Home />
      <Features />
      <Overview />
      <KeyHighlights />
      <LocationAdvantages />
      <Amenities />
      <MsitePlan />
      <Location />
      <Contact />
      {/* <FloorPlan /> */}
      {/* <Gallery /> */}
      {/* <FAQs /> */}
      {/* <POIEmbed /> */}
      <Footer />
      <WAContact />
    </div>
  )
}

export default App
