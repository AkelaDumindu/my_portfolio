import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import MyAbout from "./components/about/MyAbout";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Navbar from "./components/nav/Navbar";
import ParticleBack from "./components/ParticleBack";
import Portfolio from "./components/portfolio/Portfolio";
import Skill from "./components/skills/Skill";
import ProjectDetails from "./components/portfolio/ProjectDetails";
import Loading from "./components/loading/Loading"; // Import the Loading component

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/project/");
  const hideParticleBack = location.pathname.startsWith("/project/");

  return (
    <>
      {!hideParticleBack && <ParticleBack />}
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to loading page */}
        <Route path="/" element={<Navigate to="/loading" />} />

        {/* Loading page route */}
        <Route path="/loading" element={<Loading />} />

        {/* Main application layout */}
        <Route
          path="/homePage"
          element={
            <Layout>
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
            </Layout>
          }
        />

        {/* Dynamic project details route */}
        <Route
          path="/project/:id"
          element={
            <Layout>
              <ProjectDetails />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
