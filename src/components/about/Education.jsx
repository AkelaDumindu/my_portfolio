import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
import './resumeCard.css';

const Education = () => {
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
            title="Bsc (Hons) in Software Engineering"
            subTitle="Sabaragamuwa University of Sri Lanka"
            year="2021 - present"
            logo="../images/resumeImages/unilogo.png"
          />
          <ResumeCard
            title="G.C.E. A/L Examination in Physical Science Stream"
            subTitle="Richmond College Galle"
            year="2019"
            logo="../images/resumeImages/rcg_logo.png"

          />
          
        </div>
      </div>
      
        
    </motion.div>
  );
};

export default Education;