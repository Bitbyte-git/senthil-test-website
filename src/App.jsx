import { useEffect, useState } from 'react'
import { initSmoothScroll } from './lib/smooth'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import About from './components/About'
import Stats from './components/Stats'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => initSmoothScroll(), [])

  return (
    <>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero start={loaded} />
        <Marquee />
        <Services />
        <About />
        <Stats />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
