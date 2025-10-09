
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About/About'
// import Achivements from './components/achivement/Achivements'
import Header from './components/core/Header'
import HeroSection from './components/core/Hero'
import LetsTalk from './components/core/LetsTalk'
// import Coursework from './components/coursework/Coursework'
import TechStack from './components/tech stack/TechStack'
// import {Main} from './components/main/Main'
// import {Skiper16} from './components/projects/Project'
import Timeline from './components/experience/Experience'
import Projects from './components/projects/Project'
import Footer from './components/core/Footer'
import Community from './components/community/Community'
import Links from './components/links/Links'
import AllProjects from './components/projects/AllProjects'


function App() {


  return (
    <BrowserRouter>
      <div className='bg-black min-h-screen'>
        <Header />
        
        <Routes>
          {/* Main homepage route */}
          <Route path="/" element={
            <>
              <HeroSection />
              <About />
              <TechStack />
              <Projects />
              <Timeline />
              <Community />
              <Links />
              <LetsTalk />
            </>
          } />
          
          {/* Projects routes */}
          <Route path="/projects" element={<AllProjects />} />
          
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
