import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Experience from './component/Experience'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
