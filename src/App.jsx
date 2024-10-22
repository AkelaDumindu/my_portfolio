import Header from "./components/Header";
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