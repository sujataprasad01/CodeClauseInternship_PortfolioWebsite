import styles from './App.module.css';
import About from './components/About/About';
import { Contact } from './components/Contact/Contact';
import Credit from './components/Credits/Credit';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import { useState } from 'react';
function App() {
      // const [active, setActive]=useState(); 

      // const showactive=(styles)=>{
      //   setActive(`${styles.coloredword}`)
      // } 
  return (
    <div className={styles.App}>
    <Router>
    <Navbar></Navbar>
    <Routes>
          <Route exact path="/" element={
    <Hero></Hero>}></Route>
          <Route exact path="/about" element={
    <About></About>}></Route>
          <Route exact path="/experience" element={
    <Skills></Skills>}></Route>
          <Route exact path="/project" element={
    <Project></Project>}></Route>
          <Route exact path="/contact" element={
    <Contact></Contact>}></Route>
          <Route exact path="/" element={
    <Credit></Credit>}></Route>
    </Routes>
    </Router>

    </div>
  )
}

export default App;
