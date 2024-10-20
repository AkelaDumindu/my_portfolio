import About from "./components/about";
import Header from "./components/header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";


const App = ()=>{
  return(
    <>
    <Header/>
    <main>
      <Hero/>
      <About />
      <Skill />
    </main>
  </>
  ) 
  
  
}

export default App;