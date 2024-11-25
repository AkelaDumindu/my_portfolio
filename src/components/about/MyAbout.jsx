import './about.css';
import Resume from './Resume';

const MyAbout = () => {
  return (
    <section id='about' className='section'>
        <div className="container ">
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 about-info'>

            <div className="flex flex-col items-center mb-5">
            <h2 className="headline-2">About Me</h2>
          </div>
                <p className='about-des text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
                I am a Software Engineering undergraduate with experience in full-stack web and mobile application development, solving complex problems. By leveraging various programming languages, frameworks, and libraries, I create innovative solutions for real-world challenges. Seeking a Software Engineering internship to enhance my skills and contribute to impactful projects in a dynamic environment.
                </p>

                <Resume />
            </div>
        </div>
    </section>
  )
}

export default MyAbout;