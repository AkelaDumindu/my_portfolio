import React, {  useState } from 'react'
import Education from './Education';
import Achievement from './Achievement';
import Experience from "./Experience"
import Voluntiering from "./Voluntiering"
import './resume.css';

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [voluntieringData, setvoluntieringData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="">
     
      <div>
        <ul className="resume-main w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setAchievementData(false) &
              setExperienceData(false) &    
              setvoluntieringData(false)
            }
            className={`${
              educationData
                ? "click-resume"
                : "border-transparent"
            } resume-ed resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setAchievementData(true) &
              setExperienceData(false) &
              setvoluntieringData(false)
            }
            className={`${
                achievementData ? "click-resume" : "border-transparent"
            } resume-ex resumeLi`}
          >
            Achievement
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setAchievementData(false) &
              setExperienceData(true) &
              setvoluntieringData(false)
            }
            className={`${
              experienceData
                ? "click-resume"
                : "border-transparent"
            } resume-ex resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setAchievementData(false) &
              setExperienceData(false) &
              setvoluntieringData(true)
            }
            className={`${
              voluntieringData
                ? "click-resume"
                : "border-transparent"
            } resume-v resumeLi`}
          >
            Voluntering
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {experienceData && <Experience />}
      {achievementData && <Achievement />}
      {voluntieringData && <Voluntiering />}
 
    </section>
  );
}

export default Resume