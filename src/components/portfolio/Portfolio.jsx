import './portfolio.css'; 
import PortfolioCard from './PortfolioCard'; 
import { IoLogoGithub, IoLogoTwitter, IoLogoReact } from 'react-icons/io5'; 
import { useState } from 'react';

const portfolioData = [
  {
    title: "SUJS Journal app",
    typeName: "Group Project | Web Site",
    category: "web",
    url: "../images/portfolio/image1.jpg",
    des: "A website is a set of web pages grouped together under one domain.",
  },
  {
    title: "Derma App",
    typeName: "Individual Project | App",
    category: "app",
    url: "../images/portfolio/image1.jpg",
    des: "A mobile application for skin disease detection.",
  },
  {
    title: "Portfolio Website",
    typeName: "Individual Project | Web Site",
    category: "app",
    url: "../images/portfolio/image1.jpg",
    des: "A personal portfolio website showcasing projects and skills.",
    icons: [
      { component: <IoLogoGithub size={40} />, alt: "GitHub" },
      { component: <IoLogoTwitter size={40} />, alt: "Twitter" },
      { component: <IoLogoReact size={40} />, alt: "React" },
    ],
  },
  {
    title: "Task Manager App",
    typeName: "Group Project | App",
    category: "app",
    url: "../images/portfolio/image1.jpg",
    des: "A mobile application to manage tasks efficiently.",
    icons: [
      { component: <IoLogoGithub size={40} />, alt: "GitHub" },
      { component: <IoLogoTwitter size={40} />, alt: "Twitter" },
      { component: <IoLogoReact size={40} />, alt: "React" },
    ],
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = portfolioData.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

  return (
    <section className="section">
      <div className="container">
        <div className="portfolio-section">
          <div className="flex flex-col items-center mb-5">
            <h2 className="headline-2">Portfolio</h2>
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons flex justify-center gap-4 mb-8">
            <button
              className={` ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={` ${filter === "web" ? "active" : ""}`}
              onClick={() => setFilter("web")}
            >
              Web
            </button>
            <button
              className={` ${filter === "app" ? "active" : ""}`}
              onClick={() => setFilter("app")}
            >
              App
            </button>
          </div>

          <div className="portfolio-outer grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <PortfolioCard
                key={index}
                title={project.title}
                typeName={project.typeName}
                url={project.url}
                des={project.des}
                icons={project.icons}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
