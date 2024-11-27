import React from 'react'
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
import './resumeCard.css';

const Volunteering = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="py-12 font-titleFont flex gap-20 w-full"
  >
    <div className="w-full">
      <div className="flex flex-col gap-4">
       
        <h2 className="text-4xl font-bold">My Experience</h2>
      </div>
      <div className="timeline-container">
        <ResumeCard
          title="Instructor at CoderDojo"
          subTitle="STEMPUP"
          year="2023 - 2024"
          logo="../images/resumeImages/boc_logo.png"
        />

      <ResumeCard
          title=" Organizing Committee Program Team Memeber"
          subTitle=" IEEE Careerforge"
          year="2023"
          logo="../images/resumeImages/boc_logo.png"
        />

      <ResumeCard
          title="Active Member"
          subTitle="Society of Computer Sciences - SUSL"
          year="2023 - Present"
          logo="../images/resumeImages/boc_logo.png"
        />

      <ResumeCard
          title="Member"
          subTitle="ZeroPlastic Student Branch SUSL"
          year="2022 - 2023"
          logo="../images/resumeImages/boc_logo.png"
        />
        
      </div>
    </div>
    
      
  </motion.div>
  )
}

export default Volunteering