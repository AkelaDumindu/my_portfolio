import React from 'react';
import './resumeCard.css';
import { HiArrowRight } from "react-icons/hi";

const AchievementCard = ({title,des,imageIcon}) => {
  return (
    <div className="w-full h-auto group flex">
      <div className="w-10 h-[6px] bgOpacity mt-10 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white group-hover:bg-black">
          <span className="w-3 h-3 rounded-full bg-black inline-flex group-hover:bg-sky-600 duration-300"></span>
        </span>
      </div>

      <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-black to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
        <div className="h-72 overflow-y-hidden">
          <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
            <div className="w-10 h-8 flex flex-col justify-between">
              {/* Add the img tag here to display the logo */}
              <img src={imageIcon} alt="Achievement Logo" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
                {title}
              </h2>
              <p className="base">{des}</p>
              <span className="text-2xl text-designColor">
                <HiArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
