import './hero.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import JobRole from '../role/JobRole';
import { RxDoubleArrowDown } from "react-icons/rx";

const Hero = () => {
  return (
    <section id="home" className="lg:mt-4">
      <div className="container flex items-center lg:gap-10 relative">
        <div className="mt-0 hero-theme">
        <div className="flex flex-col items-center mb-5">
            <h2 className="headline-2">Introduction</h2>
          </div>
          {/* <h3 className="headline-1 max-w-[20ch] sm:max-w-[20ch] lg:max-w-[20ch] mt-0 mb-8 lg:mb-10">
            Driven to transform ideas into impactful software solutions.
          </h3> */}
          <h3 className="headline-1 max-w-[20ch] sm:max-w-[20ch] lg:max-w-[20ch] ">
            Hey, I'm Akela
          </h3>

          <JobRole />

          <h4 className="hero-sub-profile text-[#a1a1aa]">
          I tackle real-world challenges with robust, scalable code to bring visionary ideas to life. With a passion for innovation and a focus on delivering impactful solutions, I craft digital experiences that inspire and drive success. Fueled by creativity and a commitment to excellence, I transform challenges into opportunities. Let’s embark on this exciting journey together and turn possibilities into realities!
          </h4>

          <div className="mt-16 grid md:grid-cols-1 lg:grid-cols-2">
            <div className='cardsett'>
            <div className="cardd">
                <h2 className='number'>12+</h2>
                <p className='number_description'>Projects</p>
              </div>
              <div className="cardd">
                <h2 className='number'>2+</h2>
                <p className='number_description'>Years of Experience</p>
              </div>

            </div>
             <div className='scroll-card'>
             <button 
          className="scroll-button" 
          onClick=""><RxDoubleArrowDown className="scroll-icon"/></button>
             </div>
          
              

              
              </div>
        </div>

        {/* Image Section - Sidebar with fixed position */}
        <div className="lg:block image-pos">
          <div className="left-sidebar">
            <div className="designation-name ">
              <span className="designation text-4xl">Akela Dumindu</span>
            </div>
            <figure className='me w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
                    <img src="../images/my_photo-1.png" width={300} height={400} alt="my photo" className='w-full'/>
                </figure>
            <h2 className="email">akeladumindu2000@gmail.com</h2>
            <h2 className="email">Base in Galle, LK</h2>
            <h2 style={{ fontSize: '20px' }}>+94 771 819 515</h2>
            <p className="copyright">&copy; 2024 Akela. All Rights Reserved</p>
            <ul className="social-profile">
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                <span className='mhy-icon'><FaGithub size={30}/></span>
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                <span className='mhy-icon'><FaLinkedin size={30}/></span>
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  
                  <span className='mhy-icon'><FaInstagramSquare  size={30}/></span>
                </a>
              </li>
              
            </ul>

           
            <a href="" className="theme-btn" download>
              <i className="las la-download"></i> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default Hero;
