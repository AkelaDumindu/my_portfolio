import React from 'react';
import './portfolio.css'; 
import PortfolioCard from './PortfolioCard'; 
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin, IoLogoReact } from 'react-icons/io5'; 


const Portfolio = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="portfolio-section">
          <div className="flex flex-col items-center">
            <h2 className="headline-2">Tech Stack</h2>
          </div>
          <div className="portfolio-outer grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            <PortfolioCard
              title="SUJS Journal app"
              typeName="Group Project | Web Site"
              url="../images/portfolio/image1.jpg"
              label="first web"
              description="A website is a set of web pages grouped together under one domain. A website is a set of web pages grouped together under one domain.A website is a set of web pages grouped together under one domain."
              icons={[
                <IoLogoGithub size={40} alt="GitHub" />,
                <IoLogoTwitter size={40} alt="Twitter" />,
                <IoLogoReact size={40} alt="React" />,
              ]}
            />
            <PortfolioCard
              title="Another Project"
              typeName="Individual Project | App"
              url="../images/portfolio/image1.jpg"
              label="second web"
              description="A website is a set of web pages grouped together under one domain.A website is a set of web pages grouped together under one domain.A website is a set of web pages grouped together under one domain."
              icons={[
                <IoLogoLinkedin size={40} alt="LinkedIn" />,
                <IoLogoGithub size={40} alt="GitHub" />,
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
