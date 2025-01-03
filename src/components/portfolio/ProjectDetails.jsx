import { useParams, useNavigate } from 'react-router-dom';
import { portfolioData } from './Portfolio';
import './projectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams(); // Retrieve project ID from URL
  const navigate = useNavigate();
  const project = portfolioData.find((project) => project.id === id);// Get project data by ID

  if (!project) {
    return <div>Project not found.</div>;
  }

  

  return (
    <section className="project-details">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back
      </button>
      <div className="container">
        <div className='title-section'>
        <h1 >{project.title}</h1>
        </div>
        
        <div className="mock-image-outer">
          <img className='mock-image' src={project.url} alt="project image" />
        </div>
    {/* <div className='details-nav-outer'>
    <div className="details-nav">
          <button>Overview</button>
          <button>Tech Stack</button>
          <button>Project Video</button>
        </div>

    </div> */}

    
    <div className="details-overview">
          <h3>Project Overview</h3>
        <p>{project.paragraph_1}</p>
          <p>{project.paragraph_2}</p>
          <p>{project.paragraph_3}</p>


          <h3>Tech Stack</h3>
<div className='techstack-box'>
  {project.techStack && Array.isArray(project.techStack) ? (
    project.techStack.map((tech, index) => (
      <div key={index} className="tech-item">
        <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" />
        <span>{tech.name}</span>
      </div>
    ))
  ) : (
    <p>No tech stack information available.</p>
  )}
</div>

          <h3>Team Details</h3>

          <div className='details-stack'>
          
          

          
          <h2>Team Memebers:</h2>
          <p>{project.teamMembers.join(', ')}</p>
          <h2>My Role:</h2>
          <p>{project.role}</p>
          <h2>Time Duration</h2>
          <p>{project.duration}</p>
          
         

          
        
    </div>
    <h3>Project Demo</h3>

    <div className='project-demo'>
  
  {project.demoVideo?.endsWith(".mp4") ? (
    
    <video controls className='vdo-outer'>
     
      <source src={project.demoVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    
    <iframe
      width="800"
      height="340"
      src={project.demoVideo}
      title="Project Demo Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )}
</div>
<h3>Additional Screenshots</h3>
        <div className="screenshot-gallery">
          {project.screenshots.map((screenshot, index) => (
            <div key={index} className="screenshot-item">
              <img src={screenshot} alt={`Screenshot ${index + 1}`} />
            </div>
          ))}
        </div>



    
          </div>

          
          
        
      </div>
    </section>
  );
};

export default ProjectDetails;