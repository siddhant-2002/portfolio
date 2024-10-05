import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import{Achievements} from "./components/Achievements/Achievements";
import {Skills} from "./components/Skills/Skills"
import { Coursework } from "./components/Coursework/Coursework";
import { Community } from "./components/Community/Community";
import { Links } from "./components/Links/Links";
import { Contact } from "./components/Contact/Contact";
// import {Studies} from "./components/Studies/Studies"

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      {/* <Studies/> */}
      <Experience />
      <Projects />
      <Achievements/>
      <Coursework/>
      <Community/>
      <Links/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
