import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Achievements } from "./components/Achievements/Achievements";
import { Skills } from "./components/Skills/Skills";
import { Coursework } from "./components/Coursework/Coursework";
import { Community } from "./components/Community/Community";
import { Links } from "./components/Links/Links";
import { Contact } from "./components/Contact/Contact";
import { Studies } from "./components/Studies/Studies";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Skills />
              <Studies />
              <Experience />
              <Projects />
              <Achievements />
              <Coursework />
              <Community />
              <Links />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
