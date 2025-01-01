import './portfolio.css'; 
import PortfolioCard from './PortfolioCard'; 
import { IoLogoGithub, IoLogoTwitter, IoLogoReact } from 'react-icons/io5'; 
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

export const portfolioData = [
  {
    id: "sujcs-journal",
    title: "SUJCS Journal",
    typeName: "Group Project | Web Site",
    demoVideo:"../video/campinga-demo.mp4",
    screenshots: ['../images/portfolio/sujcs/sujcs_ss1.jpeg', '../images/portfolio/sujcs/sujcs_ss2.jpeg', '../images/portfolio/sujcs/sujcs_ss3.jpeg', '../images/portfolio/sujcs/sujcs_ss4.jpeg', '../images/portfolio/sujcs/sujcs_ss5.jpeg'],
    category: "Web",
    url: "../images/portfolio/sujcs_mock.png",
    des: "A website is a set of web pages grouped together under one domain.",
    teamMembers: ['Tharushi Wijethunga', 'Tharindu Lakamal', 'Kalpani Ariyawansha', 'Buddhini Yallarawewa'],
    role: 'Full Stack Development',
    duration: '3 months',
  },
  {
    id: "derma-app",
    title: "Derma App",
    typeName: "Individual Project | App",
    demoVideo:"../video/campinga-demo.mp4",
    screenshots: ['../images/screenshot/sujcs-1.png', '../images/screenshot/sujcs-2.png', '../images/screenshot/sujcs-3.png', '../images/screenshot/sujcs-4.png', '../images/screenshot/sujcs-5.png'],
    category: "app",
    url: "../images/portfolio/image1.jpg",
    des: "A mobile application for skin disease detection.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/react.png' },
      { name: 'Node.js', logo: '../images/skillImages/react.png' },
      { name: 'CSS', logo: '../images/skillImages/react.png' }
    ],
    teamMembers: ['Kalapani ', 'Jane Smith'],
    role: 'Full Stack Development',
    duration: '3 months',
  },

  {
    id: "derma-app",
    title: "SUJCS Journal",
    typeName: "Group Project | Web Site",
    demoVideo:"../video/campinga-demo.mp4",
    screenshots: ['../images/portfolio/sujcs/sujcs_ss1.jpeg', '../images/portfolio/sujcs/sujcs_ss2.jpeg', '../images/portfolio/sujcs/sujcs_ss3.jpeg', '../images/portfolio/sujcs/sujcs_ss4.jpeg', '../images/portfolio/sujcs/sujcs_ss5.jpeg'],
    category: "Web",
    url: "../images/portfolio/sujcs_mock.png",
    des: "A website is a set of web pages grouped together under one domain.",
    teamMembers: ['Tharushi Wijethunga', 'Tharindu Lakamal', 'Kalpani Ariyawansha', 'Buddhini Yallarawewa'],
    role: 'Full Stack Development',
    duration: '3 months',
  },
  // {
  //   title: "Portfolio Website",
  //   typeName: "Individual Project | Web Site",
  //   category: "web",
  //   url: "../images/portfolio/image1.jpg",
  //   des: "A personal portfolio website showcasing projects and skills.",
  //   icons: [
  //     { component: <IoLogoGithub size={40} />, alt: "GitHub" },
  //     { component: <IoLogoTwitter size={40} />, alt: "Twitter" },
  //     { component: <IoLogoReact size={40} />, alt: "React" },
  //   ],
  // },
  // {
  //   title: "Task Manager App",
  //   typeName: "Group Project | App",
  //   category: "app",
  //   url: "../images/portfolio/image1.jpg",
  //   des: "A mobile application to manage tasks efficiently.",
  //   icons: [
  //     { component: <IoLogoGithub size={40} />, alt: "GitHub" },
  //     { component: <IoLogoTwitter size={40} />, alt: "Twitter" },
  //     { component: <IoLogoReact size={40} />, alt: "React" },
  //   ],
  // },
  // {
  //   title: "E-Commerce Platform",
  //   typeName: "Individual Project | Web Site",
  //   category: "practice",
  //   url: "../images/portfolio/image1.jpg",
  //   des: "An e-commerce platform for seamless shopping experience.",
  // },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredProjects = portfolioData.filter((project) =>
    filter === "all" ? true : project.category === filter
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleSeeMore = () => {
    console.log("See More clicked"); // Debugging
    setVisibleCount(filteredProjects.length);
  };

  const handleShowLess = () => {
    console.log("Show Less clicked"); // Debugging
    setVisibleCount(4);
  };

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
              className={`${filter === "all" ? "active" : ""}`}
              onClick={() => {
                console.log("All button clicked");
                setFilter("all");
                setVisibleCount(4);
              }}
            >
              All
            </button>
            <button
              className={`${filter === "web" ? "active" : ""}`}
              onClick={() => {
                console.log("Web button clicked");
                setFilter("web");
                setVisibleCount(4);
              }}
            >
              Web
            </button>
            <button
              className={`${filter === "app" ? "active" : ""}`}
              onClick={() => {
                console.log("App button clicked");
                setFilter("app");
                setVisibleCount(4);
              }}
            >
              App
            </button>

            <button
              className={`${filter === "practice" ? "active" : ""}`}
              onClick={() => {
                console.log("Practice button clicked");
                setFilter("practice");
                setVisibleCount(4);
              }}
            >
              Practice
            </button>
          </div>

          <div className="portfolio-outer grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {visibleProjects.map((project, index) => (
              <PortfolioCard
                key={index}
                projectId={project.id}
                title={project.title}
                typeName={project.typeName}
                url={project.url}
                des={project.des}
                icons={project.icons}
              />
            ))}
          </div>

          {/* See More / Show Less Button */}
          {filteredProjects.length > 4 && (
            <div className="see-more-container">
              {visibleCount < filteredProjects.length ? (
                <button className="see-more-btn" onClick={handleSeeMore}>
                  <div className="flex items-center gap-2">
                    <IoIosArrowDown size={25} /> Show More
                  </div>
                </button>
              ) : (
                <button className="see-more-btn" onClick={handleShowLess}>
                  <div className="flex items-center gap-2">
                    <IoIosArrowUp size={25} /> Show Less
                  </div>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
