import TopNavbar from "./components/TopNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './index.css'

function App(){
  return(
    <div className="bg-black text-white min-h-screen scroll-smooth">
      <TopNavbar/>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App