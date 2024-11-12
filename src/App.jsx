import Hero from "./components/Hero";
import MyAbout from './components/MyAbout';
import MyProject from "./components/MyProject";
import ParticleBack from "./components/ParticleBack";
import JobRole from "./components/role/JobRole";
import Skill from "./components/Skill";



const App = ()=>{

  

  
  return(
    <>
    <ParticleBack/>
    {/* <Header/> */}
    
    <main>
    <JobRole/>
      <Hero/>
      <MyAbout />
      <Skill />
      <MyProject/>
      
    </main>
  </>
  ) 
  
  
}

export default App;