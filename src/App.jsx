import MyAbout from './components/about/MyAbout';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';
import Hero from './components/hero/Hero';
import Navbar from './components/nav/Navbar';
import ParticleBack from "./components/ParticleBack";
import Portfolio from './components/portfolio/Portfolio';
import JobRole from "./components/role/JobRole";
import Skill from './components/skills/Skill';




const App = ()=>{

  

  
  return(
    <>
    <ParticleBack/>
    {/* <Header/> */}
    
    <main>
    {/* <JobRole/> */}
      {/* <Hero/> */}
      <Navbar/>
      <Hero/>
      <MyAbout/>
      <Skill/>
      <Portfolio/>
      <Gallery />
      <Contact/>
      
      
    </main>
  </>
  ) 
  
  
}

export default App;