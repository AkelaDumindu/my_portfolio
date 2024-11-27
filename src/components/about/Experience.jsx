import React from 'react'
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
import './resumeCard.css';

const Experience = () => {
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
            title="Internship Trainee"
            subTitle="Bank Of Ceylon"
            year="2020 March - 2020 September"
            logo="../images/resumeImages/boc_logo.png"
          />
          
        </div>
      </div>
      
        
    </motion.div>
  );
}

export default Experience