import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AIChatbot from '@/components/AIChatbot'
import RevealInit from '@/components/RevealInit'

export default function Home() {
  return (
    <>
      <div className="bg-field" />
      <div className="noise" />
      <RevealInit />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </>
  )
}
