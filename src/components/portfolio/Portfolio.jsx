import './portfolio.css'; 
import PortfolioCard from './PortfolioCard'; 
import { IoLogoGithub, IoLogoTwitter, IoLogoReact } from 'react-icons/io5'; 
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

export const portfolioData = [

  {
    id: "derma",
    title: "Derma Skin App",
    typeName: "Group Project | App",
    demoVideo:"../video/derma_demo.mp4",
    screenshots: ['../images/portfolio/derma/derma_1.jpeg', '../images/portfolio/derma/derma_2.jpeg', '../images/portfolio/derma/derma_3.jpeg', '../images/portfolio/derma/derma_4.jpeg', '../images/portfolio/derma/derma_5.jpeg', '../images/portfolio/derma/derma_6.jpeg', '../images/portfolio/derma/derma_7.jpeg', '../images/portfolio/derma/derma_8.jpeg', '../images/portfolio/derma/derma_9.jpeg', '../images/portfolio/derma/derma_10.jpeg', '../images/portfolio/derma/derma_11.jpeg', '../images/portfolio/derma/derma_12.jpeg', '../images/portfolio/derma/derma_13.jpeg', '../images/portfolio/derma/derma_14.jpeg', '../images/portfolio/derma/derma_15.jpeg', '../images/portfolio/derma/derma_16.jpeg', '../images/portfolio/derma/derma_17.jpeg', '../images/portfolio/derma/derma_18.jpeg', '../images/portfolio/derma/derma_19.jpeg', '../images/portfolio/derma/derma_21.jpeg', '../images/portfolio/derma/derma_22.jpeg', '../images/portfolio/derma/derma_23.jpeg', '../images/portfolio/derma/derma_24.jpeg', '../images/portfolio/derma/derma_25.jpeg', '../images/portfolio/derma/derma_26.jpeg', '../images/portfolio/derma/derma_27.jpeg'],
    category: "app",
    url: "../images/portfolio/derma_mock.png",
    des: "A website is a set of web pages grouped together under one domain.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/react.png' },
      { name: 'Node.js', logo: '../images/skillImages/react.png' },
      { name: 'CSS', logo: '../images/skillImages/react.png' }],
    teamMembers: ['Mevin Perera', 'Kushan Andarawewa', 'Ishani Samaraweera'],
    role: 'Full Stack Development',
    paragraph_1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    duration: '4 months',
  },

  {
    id: "sujcs-journal",
    title: "SUJCS Journal",
    typeName: "Group Project | Web Site",
    demoVideo:"../video/campinga-demo.mp4",
    screenshots: ['../images/portfolio/sujcs/sujcs_ss1.jpeg', '../images/portfolio/sujcs/sujcs_ss2.jpeg', '../images/portfolio/sujcs/sujcs_ss3.jpeg', '../images/portfolio/sujcs/sujcs_ss4.jpeg', '../images/portfolio/sujcs/sujcs_ss5.jpeg'],
    category: "web",
    url: "../images/portfolio/sujcs_mock.png",
    des: "A website is a set of web pages grouped together under one domain.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/react.png' },
      { name: 'Node.js', logo: '../images/skillImages/react.png' },
      { name: 'CSS', logo: '../images/skillImages/react.png' }],
    teamMembers: ['Tharushi Wijethunga', 'Tharindu Lakamal', 'Kalpani Ariyawansha', 'Buddhini Yallarawewa'],
    role: 'Full Stack Development',
    paragraph_1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    duration: '3 months',
  },

  {
    id: "vegesaga",
    title: "VEGESAGA Food Delivery",
    githubLink:"https://github.com/AkelaDumindu/Vegesaga_Food_delivery_application.git",
    typeName: "Group Project | Web Site",
    demoVideo:"../video/vegesaga_demo.mp4",
    screenshots: ['../images/portfolio/vegesaga/vegesaga1.png', '../images/portfolio/sujcs/vegesaga2.png', '../images/portfolio/sujcs/sujcs_ss3.jpeg', '../images/portfolio/vegesaga/vegesaga3.png', '../images/portfolio/vegesaga/vegesaga4.png', '../images/portfolio/vegesaga/vegesaga5.png', '../images/portfolio/vegesaga/vegesaga6.png', '../images/portfolio/vegesaga/vegesaga7.png', '../images/portfolio/vegesaga/vegesaga8.png', '../images/portfolio/vegesaga/vegesaga9.png'],
    category: "web",
    url: "../images/portfolio/vegesaga_mock.png",
    des: "A website is a set of web pages grouped together under one domain.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/react.png' },
      { name: 'Node.js', logo: '../images/skillImages/react.png' },
      { name: 'CSS', logo: '../images/skillImages/react.png' }],
    teamMembers: ['Tharushi Wijethunga', 'Tharindu Lakamal', 'Kalpani Ariyawansha', 'Buddhini Yallarawewa'],
    role: 'Full Stack Development',
    paragraph_1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    duration: '3 months'
  },

  
  {
    id: "learn_and_earn",
    title: "Learn & Earn",
    typeName: "Group Project | Web Site",
    demoVideo:"../video/learnearn_demo.mp4",
    screenshots: ['../images/portfolio/learn&ern/learnearn1.png', '../images/portfolio/learn&ern/learnearn2.png', '../images/portfolio/learn&ern/learnearn3.png', '../images/portfolio/learn&ern/learnearn4.png', '../images/portfolio/learn&ern/learnearn5.png', '../images/portfolio/learn&ern/learnearn6.png'],
    category: "web",
    url: "../images/portfolio/learn_earn_mock.png",
    des: "A website is a set of web pages grouped together under one domain.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/react.png' },
      { name: 'Node.js', logo: '../images/skillImages/react.png' },
      { name: 'CSS', logo: '../images/skillImages/react.png' }],
    teamMembers: ['Tharindu Lakamal', 'Hamitha Apsara'],
    role: 'Full Stack Development',
    paragraph_1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    duration: '4 months',
  },

  {
    id: "Smart_tution_web",
    title: "Smart Tution Web",
    typeName: "Group Project | Web Site",
    demoVideo:"../video/campinga-demo.mp4",
    screenshots: ['../images/portfolio/sujcs/sujcs_ss1.jpeg', '../images/portfolio/sujcs/sujcs_ss2.jpeg', '../images/portfolio/sujcs/sujcs_ss3.jpeg', '../images/portfolio/sujcs/sujcs_ss4.jpeg', '../images/portfolio/sujcs/sujcs_ss5.jpeg'],
    category: "web",
    url: "../images/portfolio/smart_tution_mock.jpg",
    des: "A website is a set of web pages grouped together under one domain.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/react.png' },
      { name: 'Node.js', logo: '../images/skillImages/react.png' },
      { name: 'CSS', logo: '../images/skillImages/react.png' }],
    teamMembers: ['Tharushi Wijethunga', 'Tharindu Lakamal', 'Kalpani Ariyawansha', 'Buddhini Yallarawewa'],
    role: 'Full Stack Development',
    paragraph_1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    duration: '3 months',
  },


  {
    id: "Smart_tution_app",
    title: "Smart Tution App",
    typeName: "Group Project | App",
    demoVideo:"../video/campinga-demo.mp4",
    screenshots: ['../images/portfolio/sujcs/sujcs_ss1.jpeg', '../images/portfolio/sujcs/sujcs_ss2.jpeg', '../images/portfolio/sujcs/sujcs_ss3.jpeg', '../images/portfolio/sujcs/sujcs_ss4.jpeg', '../images/portfolio/sujcs/sujcs_ss5.jpeg'],
    category: "app",
    url: "../images/portfolio/smart_tution_mock.jpg",
    des: "A website is a set of web pages grouped together under one domain.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/react.png' },
      { name: 'Node.js', logo: '../images/skillImages/react.png' },
      { name: 'CSS', logo: '../images/skillImages/react.png' }],
    teamMembers: ['Tharushi Wijethunga', 'Tharindu Lakamal', 'Kalpani Ariyawansha', 'Buddhini Yallarawewa'],
    role: 'Full Stack Development',
    paragraph_1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    paragraph_3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam? In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci",
    duration: '3 months',
  },

  {
    id: "campinga",
    title: "Campinga",
    typeName: "Individual Project | App",
    demoVideo:"../video/campinga-demo.mp4",
    screenshots: ['../images/portfolio/campinga/campinga1.png', '../images/portfolio/campinga/campinga2.png', '../images/portfolio/campinga/campinga3.png', '../images/portfolio/campinga/campinga4.png', '../images/portfolio/campinga/campinga5.png', '../images/portfolio/campinga/campinga6.png', '../images/portfolio/campinga/campinga7.png', '../images/portfolio/campinga/campinga8.png', '../images/portfolio/campinga/campinga9.png', '../images/portfolio/campinga/campinga10.png', '../images/portfolio/campinga/campinga11.png', , '../images/portfolio/campinga/campinga12.png'],
    category: "web",
    url: "../images/portfolio/campinga.png",
    des: "A mobile application for skin disease detection.",
    techStack: [
      { name: 'React', logo: '../images/skillImages/react.png' },
      { name: 'Node.js', logo: '../images/skillImages/react.png' },
      { name: 'CSS', logo: '../images/skillImages/react.png' }
    ],
    teamMembers: ['Mevin Perera', 'Kushan Andarawewa', 'Ishani Samaraweera'],
    role: 'Full Stack Development',
    duration: '3 months',
  },

  {
    id: "eventvibe",
    title: "Event Vibe",
    githubLink:"https://github.com/AkelaDumindu/EventVibe.git",
    // typeName: "Individual Project | web",
    demoVideo:"../video/campinga-demo.mp4",
    screenshots: ['../images/portfolio/eventvibe/eventvibe_1.png', '../images/portfolio/eventvibe/eventvibe_2.png', '../images/portfolio/eventvibe/eventvibe_3.png', '../images/portfolio/eventvibe/eventvibe_4.png', '../images/portfolio/eventvibe/eventvibe_5.png', '../images/portfolio/eventvibe/eventvibe_6.png', '../images/portfolio/eventvibe/eventvibe_7.png', '../images/portfolio/eventvibe/eventvibe_8.png', '../images/portfolio/eventvibe/eventvibe_9.png', '../images/portfolio/eventvibe/eventvibe_10.png', '../images/portfolio/eventvibe/eventvibe_11.png', '../images/portfolio/eventvibe/eventvibe_12.png', '../images/portfolio/eventvibe/eventvibe_13.png', '../images/portfolio/eventvibe/eventvibe_14.png'],
    category: "web",
    url: "../images/portfolio/eventvibe_mock.png",
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
                githubLink={project.githubLink}
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
