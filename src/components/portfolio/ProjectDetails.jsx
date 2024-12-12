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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, exercitationem maxime! Perspiciatis hic fugit eligendi autem quisquam veniam dicta ad error numquam tempore ex fugiat sit officiis, enim mollitia ullam?
          In nihil assumenda perferendis nulla deleniti ea iusto cumque! Libero tempora suscipit, quibusdam sed porro cumque vel harum excepturi voluptates perspiciatis blanditiis consectetur laborum qui omnis pariatur odit temporibus neque!
          Ullam assumenda, eum earum odio aut temporibus quidem alias et nesciunt nobis architecto totam non iste repellendus consectetur molestias eveniet saepe tempora amet natus voluptas excepturi incidunt optio iure? Adipisci?
          Soluta minima totam repudiandae. Inventore labore eum, reprehenderit porro dolorem ab non, quos molestias quasi aut facere in optio enim natus. Enim distinctio est odit ducimus. Dicta quis officiis mollitia?
          Fugit maiores aliquid nesciunt labore numquam accusantium quo, ipsum asperiores reiciendis inventore similique tempora? Et, voluptatibus architecto animi voluptas harum incidunt quibusdam quis sequi temporibus, magnam facilis ex inventore aliquid.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolores architecto, id cumque officiis voluptas, vero ut molestiae tempore omnis delectus eligendi ex incidunt quis saepe quaerat ab expedita veritatis.
          Architecto, voluptatibus. Cupiditate excepturi repellat ipsam molestiae quo consequuntur unde tempora, cum architecto? Voluptates non voluptatibus laborum minus est et illum saepe, expedita ducimus ipsa, minima delectus ullam voluptatem doloribus!
          Expedita velit vitae minima repudiandae, quia doloribus, ea hic cumque voluptatum eligendi iste amet id sint reiciendis. Molestiae dignissimos ab blanditiis doloremque amet nulla sunt, unde dolorem veritatis quasi saepe?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque, vel repellat iure at commodi, accusantium fuga, provident dolor maiores praesentium! Porro corporis ratione reprehenderit maiores, vero in mollitia eveniet?
          Et, autem vel nostrum quo accusamus mollitia dolorum consequatur doloribus similique! Ipsum dolor aliquam deleniti sed, minus iusto exercitationem alias esse beatae! Accusamus perspiciatis expedita architecto beatae. Quis, voluptates veniam?</p>


          <h3>Tech Stack</h3>
          <div className='techstack-box'>
          {project.techStack.map((tech, index) => (
    <div key={index} className="tech-item">
      <img src={tech.logo} alt={`${tech.name} logo`} className="tech-logo" />
      <span>{tech.name}</span>
    </div>
  ))}
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
    
    <video controls width="800">
     
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