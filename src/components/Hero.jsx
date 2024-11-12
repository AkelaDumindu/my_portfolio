
const Hero = () => {
  

  return (
    <section id='home' className='pt-28 lg:mt-4'>
      {/* <div className="container z-0 font-change2 flex items-center gap-3 text-2xl font-normal tracking-tighter text-white">
        <figure className='img-box w-9 h-9 rounded-lg'>
          <img src="" width={40} height={40} alt="Akela Dumindu Avatar" className='img-cover' />
        </figure>
        <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
          <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
            <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
          </span>
          available for work
        </div>
      </div> */}

      <div className='container lg:grid md:grid-cols-1 lg:grid-cols-2 flex items-center lg:gap-10 relative'>
        <div className='mt-0'>
          
        <h3 className='headline-1 max-w[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-0 mb-8 lg:mb-10'>
        Driven to transform ideas into impactful software solutions.
                </h3>

                <h4 className="hero-sub-profile text-[#a1a1aa]">
                I tackle real-world challenges with robust, scalable code to bring visionary ideas to life. Let’s embark on this exciting journey together!
                </h4>
        </div>
        {/* Image Section */}
        <div className="hidden lg:block">
          <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
            <img src="/images/my_photo-1.png" width={656} height={800} alt="my photo" className='w-full' />
          </figure>
        </div>
      </div>

      
    </section>
  );
}

export default Hero;
