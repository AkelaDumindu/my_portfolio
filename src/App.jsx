import MyAbout from './components/about/MyAbout';
import Hero from './components/hero/Hero';
import MyProject from "./components/MyProject";
import Navbar from './components/nav/Navbar';
import ParticleBack from "./components/ParticleBack";
import JobRole from "./components/role/JobRole";
import Skill from './components/skills/Skill';




const App = ()=>{

  

  
  return(
    <>
    <ParticleBack/>
    {/* <Header/> */}
    
    <main>
    <JobRole/>
      {/* <Hero/> */}
      <Navbar/>
      <Hero/>
      <MyAbout/>
      <Skill/>
      <MyProject/>
      
    </main>
  </>
  ) 
  
  
}

export default App;