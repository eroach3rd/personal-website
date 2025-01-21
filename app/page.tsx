import Header from 'app/components/Header'
import Hero from 'app/components/Hero'
import About from 'app/components/About'
import Skills from 'app/components/Skills'
import Experience from 'app/components/Experience'
import Projects from 'app/components/Projects'
import Contact from 'app/components/Contact'
import Footer from 'app/components/Footer'

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
