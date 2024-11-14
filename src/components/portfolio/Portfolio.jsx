import React from 'react'
import './portfolio.css';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  return (
    <section className='section'>
        <div className="container">
            <div className="portfolio-section">
            <div className='flex flex-col items-center'>
            <h2 className="headline-2">
                Teck Stack
            </h2>
        
            </div>
            <div className='portfolio-outer grid md:grid-cols-1 lg:grid-cols-2 gap-4'>
                
                <PortfolioCard 
                title="SUJS Journal app"
                typeName="Group Project | Web Site"
                url="../public/images/portfolio/image1.jpg"
                label="first web"
                description="A website is a set of web pages grouped together under one domain. Typically, when you think you are citing a website, you are actually citing a web page:"
                


                />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio