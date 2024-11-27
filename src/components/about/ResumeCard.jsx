import React from 'react'
import './resumeCard.css';

const ResumeCard = ({title,subTitle,year,logo}) => {
  return (
    <div className="w-full h-auto group flex">
      <div className="w-10 h-[6px] bgOpacity mt-10 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white group-hover:bg-black">
          <span className="w-3 h-3 rounded-full bg-black inline-flex group-hover:bg-sky-600 duration-300"></span>
        </span>
      </div>
      <div className="my-container">
      <div class="inner-resume-card">
          
            <div className='inner-resume-card-info'>
            <h1 class="title">
              {title}
            </h1>
            <h2 class="sub-title">
              {subTitle}
            </h2>
            <h3 class="sub-title">
              {year}
            </h3>
            </div>  
            <div className='inner-resume-card-image'>
            <img className='logo-image' src={logo} alt="logo iamges" />
            
         </div>
     </div>    

        
      </div>
    </div>
  );
}

export default ResumeCard