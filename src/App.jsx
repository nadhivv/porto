import Nav from './components/layout/Nav.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Education from './components/sections/Education.jsx'
import Experience from './components/sections/Experience.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Certificates from './components/sections/Certificates.jsx'
import Contact from './components/sections/Contact.jsx'

function App() {
  return (
    <div className="relative bg-cream text-ink antialiased">
      {/* Cahaya hangat di belakang hero, memudar ke bawah.
          Tidak bisa diklik dan tidak ikut ter-scroll. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[75vh] bg-linear-to-b from-cream-2 to-transparent"
      />

      <Nav />

      {/* Tanpa max-w dan tanpa mx-auto: isinya memakai seluruh lebar layar.
          overflow-x-clip menahan elemen yang meluncur dari kiri/kanan
          supaya tidak memunculkan scrollbar horizontal. */}
      <main className="overflow-x-clip px-6 sm:px-10 lg:px-16">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  )
}

export default App
