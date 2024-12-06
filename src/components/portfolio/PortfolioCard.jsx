import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import './projectCard.css'; // Import the CSS file for styling

const ProjectsCard = ({ title, des, url }) => {
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
            <span className="social-icon">
              <BsGithub />
            </span>
            <span className="social-icon">
              <FaGlobe />
            </span>
          </div>
        </div>
        <p className="project-description">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ProjectsCard;
