import React, {  useState } from 'react'
import Education from './Education';
import Achievement from './Achievement';
import Experience from "./Experience"
import Volunteering from "./Volunteering"
import { FaGraduationCap, FaBriefcase, FaTrophy, FaHandsHelping } from "react-icons/fa";
import './resume.css';

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [voluntieringData, setvoluntieringData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="">
     
     <div>
        <ul className="resume-main grid w-full xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setAchievementData(false) &
              setExperienceData(false) &
              setvoluntieringData(false)
            }
            className={`${
              educationData ? "click-resume selected" : "border-transparent"
            } resume-ed resumeLi`}
          >
            <span className="resume-icon">
              <FaGraduationCap />
            </span>
            <span className="resume-text">Education</span>
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setAchievementData(true) &
              setExperienceData(false) &
              setvoluntieringData(false)
            }
            className={`${
              achievementData ? "click-resume selected" : "border-transparent"
            } resume-ex resumeLi`}
          >
            <span className="resume-icon">
              <FaTrophy />
            </span>
            <span className="resume-text">Achievement</span>
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setAchievementData(false) &
              setExperienceData(true) &
              setvoluntieringData(false)
            }
            className={`${
              experienceData ? "click-resume selected" : "border-transparent"
            } resume-ex resumeLi`}
          >
            <span className="resume-icon">
              <FaBriefcase />
            </span>
            <span className="resume-text">Experience</span>
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setAchievementData(false) &
              setExperienceData(false) &
              setvoluntieringData(true)
            }
            className={`${
              voluntieringData ? "click-resume selected" : "border-transparent"
            } resume-v resumeLi`}
          >
            <span className="resume-icon">
              <FaHandsHelping />
            </span>
            <span className="resume-text">Volunteering</span>
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {experienceData && <Experience />}
      {achievementData && <Achievement />}
      {voluntieringData && <Volunteering />}
 
    </section>
  );
}

export default Resume