import styles from './App.module.css';
import About from './components/About/About';
import { Contact } from './components/Contact/Contact';
import Credit from './components/Credits/Credit';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
    <div className={styles.App}>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    <Project></Project>
    <Contact></Contact>
    <Credit></Credit>
    </div>
    </>
  )
}

export default App;
