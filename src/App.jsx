import Header from "./components/Header";
import Hero from "./components/Hero";
import MyAbout from './components/MyAbout';
import MyProject from "./components/MyProject";
import ParticleBack from "./components/ParticleBack";
import Skill from "./components/Skill";
import SkillsCarousal from "./components/SkillsCarousal";



const App = ()=>{

  

  
  return(
    <>
    <ParticleBack/>
    <Header/>
    <main>
      <Hero/>
      <MyAbout />
      <Skill />
      <MyProject/>
      <SkillsCarousal/>
    </main>
  </>
  ) 
  
  
}

export default App;