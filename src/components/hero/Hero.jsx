import './hero.css';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:mt-4">
      <div className="container flex items-center lg:gap-10 relative">
        <div className="mt-0 hero-theme">
          <h3 className="headline-1 max-w-[20ch] sm:max-w-[20ch] lg:max-w-[20ch] mt-0 mb-8 lg:mb-10">
            Driven to transform ideas into impactful software solutions.
          </h3>
          <h4 className="hero-sub-profile text-[#a1a1aa]">
            I tackle real-world challenges with robust, scalable code to bring visionary ideas to life. Let’s embark on this exciting journey together!
          </h4>
        </div>

        {/* Image Section - Sidebar with fixed position */}
        <div className="hidden lg:block image-pos">
          <div className="left-sidebar">
            <div className="designation-name ">
              <span className="designation text-4xl">Akela Dumindu</span>
            </div>
            <figure className='me w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
                    <img src="../public/images/my_photo-1.png" width={300} height={400} alt="my photo" className='w-full'/>
                </figure>
            <h2 className="email">akeladumindu2000@gmail.com</h2>
            <h2 className="email">Base in Galle, LK</h2>
            <h2 style={{ fontSize: '20px' }}>+94 771 819 515</h2>
            <p className="copyright">&copy; 2024 Akela. All Rights Reserved</p>
            <ul className="social-profile">
              <li>
                <a href="https://www.linkedin.com/in/hirusha-fernando-379a85194/" target="_blank" rel="noopener noreferrer">
                  <i className="lab la-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="lab la-stack-overflow"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/HRS0986" target="_blank" rel="noopener noreferrer">
                  <i className="lab la-github"></i>
                </a>
              </li>
              
            </ul>

           
            <a href="assets/Hirusha_Fernando_CV.pdf" className="theme-btn" download>
              <i className="las la-download"></i> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;