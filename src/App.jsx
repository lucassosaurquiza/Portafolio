import './App.css'
import Header from './components/header.jsx'
import AboutSection from './components/sections/AboutSection.jsx'
import ContactSection from './components/sections/ContactSection.jsx'
import EducationSection from './components/sections/EducationSection.jsx'
import Footer from './components/sections/Footer.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import ProcessSection from './components/sections/ProcessSection.jsx'
import ProjectsSection from './components/sections/ProjectsSection.jsx'
import StackSection from './components/sections/StackSection.jsx'

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ProjectsSection />
        <StackSection />
        <EducationSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App
