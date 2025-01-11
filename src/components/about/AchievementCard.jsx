import React, { useState } from 'react';
import './resumeCard.css';
import { HiArrowRight } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Pagination, Navigation } from 'swiper/modules'; // Import Autoplay module
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AchievementCard = ({ title, des, imageIcon, certificateImages }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
                {/* Display logo */}
                <img src={imageIcon} alt="Achievement Logo" className="w-20 h-auto object-contain" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-xl md:text-2xl font-titleFont font-bold text-white">
                  {title}
                </h2>
                <p className="base text-gray-300">{des}</p>
                <button
                  className="text-2xl text-designColor"
                  onClick={openModal}
                >
                  <HiArrowRight />
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 mb-5">
          <div className="bg-white p-5 rounded-lg shadow-lg relative w-[80%] max-w-4xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
              onClick={closeModal}
            >
              <IoCloseSharp size={30} />
            </button>
            <Swiper
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full h-auto"
            >
              {certificateImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Certificate ${index + 1}`}
                    className="w-full max-h-[80vh] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default AchievementCard;
