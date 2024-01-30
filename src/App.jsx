import { ContactForm } from './components/contact-form/ContactForm'
import { Navbar } from './components/navbar/Navbar'
import { Gallery } from './sections/Gallery'
import { Footer } from './sections/Footer'
import { Home } from './sections/Home'
import { SiteVisit } from './sections/SiteVisit'
import { Overview } from './sections/Overview'
import { Contact } from './sections/Contact'
import { Amenities } from './components/amenities/Amenities'
import { Location } from './sections/Location'
import { MsitePlan } from './sections/MsitePlan'
import { FloorPlan } from './sections/FloorPlan'
import { FAQs } from './sections/FAQs'
import { Features } from './sections/Features'


function App() {

  return (
    <div className='tracking-tighter text-lg'>
      <Navbar />
      <Home />
      <Features />
      <Overview />
      <Amenities />
      <Location />
      <Contact />
      <MsitePlan />
      <FloorPlan />
      <Gallery />
      {/* <SiteVisit /> */}
      {/* <SiteVisit /> */}
      <FAQs />
      <Footer />
    </div>
  )
}

export default App
