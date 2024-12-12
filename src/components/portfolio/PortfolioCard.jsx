import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { Link } from 'react-router-dom';  // Import Link for navigation
import './projectCard.css'; // Import the CSS file for styling

const ProjectsCard = ({ title, des, url, projectId, githubLink, liveLink }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img
          className="project-image"
          src={url}
          alt="project"
        />
      </div>
      <div className="details">
        <div className="title-container">
          <h3 className="project-title">
            {title}
          </h3>
          <div className="social-icons">
            {/* Link to the GitHub repository */}
            <span className="social-icon">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <BsGithub />
              </a>
            </span>
            
            {/* Link to the project details page using React Router */}
            <span className="social-icon">
              <Link to={`/project/${projectId}`} title="View Project">
                <FaGlobe />
              </Link>
            </span>
          </div>
        </div>
        <p className="project-description">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
