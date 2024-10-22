import Header from "./components/header";
import Hero from "./components/Hero";
import MyAbout from './components/MyAbout';
import Skill from "./components/Skill";


const App = ()=>{
  return(
    <>
    <Header/>
    <main>
      <Hero/>
      <MyAbout />
      <Skill />
    </main>
  </>
  ) 
  
  
}

export default App;