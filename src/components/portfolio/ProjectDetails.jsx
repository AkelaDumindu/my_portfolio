import { useParams, useNavigate } from 'react-router-dom';
import { portfolioData } from './Portfolio';
import './projectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams(); // Retrieve project ID from URL
  const navigate = useNavigate();
  const project = portfolioData[id]; // Get project data by ID

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <section className="project-details">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Portfolio
      </button>
      <div className="details-container">
        <h2>{project.title}</h2>
        <p>{project.typeName}</p>
        <div className="mock-image" style={{ backgroundImage: `url(${project.url})` }}></div>

        <nav className="details-nav">
          <button>Overview</button>
          <button>Tech Stack</button>
          <button>Project Video</button>
        </nav>

        <div className="details-content">
          <h3>Overview</h3>
          <p>{project.des}</p>

          <h3>Tech Stack</h3>
          <p>Details about the technologies used for the project.</p>

          <h3>Project Video</h3>
          <p>Embed or link the project video here.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;