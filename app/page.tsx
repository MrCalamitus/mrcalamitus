import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
