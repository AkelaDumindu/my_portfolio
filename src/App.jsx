import Header from "./components/Header";
import Hero from "./components/Hero";
import MyAbout from './components/MyAbout';
import MyProject from "./components/MyProject";
import ParticleBack from "./components/ParticleBack";
import Skill from "./components/Skill";



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
    </main>
  </>
  ) 
  
  
}

export default App;