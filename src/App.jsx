import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MyAbout from './components/about/MyAbout';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';
import Hero from './components/hero/Hero';
import Navbar from './components/nav/Navbar';
import ParticleBack from "./components/ParticleBack";
import Portfolio from './components/portfolio/Portfolio';
import Skill from './components/skills/Skill';
import ProjectDetails from './components/portfolio/ProjectDetails';

// Custom wrapper to manage Navbar visibility
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/project/");

  return (
    <>
      <ParticleBack />
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <section id="home">
                  <Hero />
                </section>
                <section id="about">
                  <MyAbout />
                </section>
                <section id="skills">
                  <Skill />
                </section>
                <section id="portfolio">
                  <Portfolio />
                </section>
                <section id="gallery">
                  <Gallery />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </main>
            }
          />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
