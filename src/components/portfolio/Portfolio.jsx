import './portfolio.css'; 
import PortfolioCard from './PortfolioCard'; 
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin, IoLogoReact } from 'react-icons/io5'; 

const portfolioData = [
  {
    title: "SUJS Journal app",
    typeName: "Group Project | Web Site",
    url: "../images/portfolio/image1.jpg",
    label: "first web",
    description: "A website is a set of web pages grouped together under one domain.",
    icons: [
      { component: <IoLogoGithub size={40} />, alt: "GitHub" },
      { component: <IoLogoTwitter size={40} />, alt: "Twitter" },
      { component: <IoLogoReact size={40} />, alt: "React" },
    ],
  },
  {
    title: "Derma App",
    typeName: "Individual Project | App",
    url: "../images/portfolio/image1.jpg",
    label: "second web",
    description: "A website is a set of web pages grouped together under one domain.",
    icons: [
      { component: <IoLogoLinkedin size={40} />, alt: "LinkedIn" },
      { component: <IoLogoGithub size={40} />, alt: "GitHub" },
    ],
  },
  {
    title: "SUJS Journal app",
    typeName: "Group Project | Web Site",
    url: "../images/portfolio/image1.jpg",
    label: "first web",
    description: "A website is a set of web pages grouped together under one domain.",
    icons: [
      { component: <IoLogoGithub size={40} />, alt: "GitHub" },
      { component: <IoLogoTwitter size={40} />, alt: "Twitter" },
      { component: <IoLogoReact size={40} />, alt: "React" },
    ],
  },
  {
    title: "SUJS Journal app",
    typeName: "Group Project | Web Site",
    url: "../images/portfolio/image1.jpg",
    label: "first web",
    description: "A website is a set of web pages grouped together under one domain.",
    icons: [
      { component: <IoLogoGithub size={40} />, alt: "GitHub" },
      { component: <IoLogoTwitter size={40} />, alt: "Twitter" },
      { component: <IoLogoReact size={40} />, alt: "React" },
    ],
  },
  {
    title: "SUJS Journal app",
    typeName: "Group Project | Web Site",
    url: "../images/portfolio/image1.jpg",
    label: "first web",
    description: "A website is a set of web pages grouped together under one domain.",
    icons: [
      { component: <IoLogoGithub size={40} />, alt: "GitHub" },
      { component: <IoLogoTwitter size={40} />, alt: "Twitter" },
      { component: <IoLogoReact size={40} />, alt: "React" },
    ],
  },
];


const Portfolio = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="portfolio-section">
          <div className="flex flex-col items-center">
            <h2 className="headline-2">Tech Stack</h2>
          </div>
          <div className="portfolio-outer grid md:grid-cols-1 lg:grid-cols-2 gap-4">
          {portfolioData.map((project, index) => (
              <PortfolioCard
                key={index}
                title={project.title}
                typeName={project.typeName}
                url={project.url}
                label={project.label}
                description={project.description}
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
