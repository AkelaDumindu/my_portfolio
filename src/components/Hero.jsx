import React, { useState, useEffect } from 'react';
import HeroFooter from "./HeroFooter";

const titles = [
  "FULLSTACK WEB DEVELOPER",
  "MOBILE APPLICATION DEVELOPER",
  "WEB APPLICATION DEVELOPER",
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('fade-shake-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('fade-out'); // Start fade-out

      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setAnimationClass('fade-shake-in'); // Fade-shake-in only when new title is displayed
      }, 1000); // Duration for fade-out transition
    }, 5000); // Change title every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home' className='pt-28 lg:pt-36'>
      <div className="container z-0 font-change2 flex items-center gap-3 text-2xl font-normal tracking-tighter text-white">
        <figure className='img-box w-9 h-9 rounded-lg'>
          <img src="" width={40} height={40} alt="Akela Dumindu Avatar" className='img-cover' />
        </figure>
        <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
          <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
            <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
          </span>
          available for work
        </div>
      </div>

      <div className='container lg:grid md:grid-cols-1 lg:grid-cols-2 flex items-center lg:gap-10 relative'>
        <div className='mt-0'>
          {/* Main Title Section with Initial 3D Shake and Fade-out Animation */}
          <div className={`absolute z-10 font-extrabold tracking-tighter font-change2 text-5xl sm1:text-6xl md:text-7xl left-3 top-20 sm2:top-24 pb-3 ${animationClass}`}>
            {titles[currentTitleIndex].split(" ")[0]}
          </div>
          <div className={`absolute z-0 font-extrabold tracking-tighter font-change2 text-5xl sm1:text-6xl md:text-7xl text-white opacity-30 left-4 top-20 sm2:top-24 ${animationClass}`}>
            {titles[currentTitleIndex].split(" ")[0]}
          </div>
          <div className={`absolute z-20 font-extrabold tracking-tighter font-change2 text-blue-400 text-5xl sm1:text-6xl md:text-7xl left-3 top-36 sm2:top-40 ${animationClass}`}>
            {titles[currentTitleIndex].split(" ")[1]}
          </div>
          <div className={`absolute z-30 font-extrabold tracking-tighter font-change2 text-5xl sm1:text-6xl md:text-7xl text-white opacity-30 left-4 top-52 sm2:top-56 ${animationClass}`}>
            {titles[currentTitleIndex].split(" ")[2] || ""}
          </div>
          <div className={`absolute z-40 font-extrabold tracking-tighter font-change2 text-5xl sm1:text-6xl md:text-7xl left-3 top-52 sm2:top-56 ${animationClass}`}>
            {titles[currentTitleIndex].split(" ")[2] || ""}
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block">
          <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
            <img src="/images/my_photo-1.png" width={656} height={800} alt="my photo" className='w-full' />
          </figure>
        </div>
      </div>

      <HeroFooter />
    </section>
  );
}

export default Hero;
