import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay CSS if necessary
import './gallery.css';

const Gallery = () => {
  return (
    <section className="section-gallery">
      <div className="my-gallery-name flex flex-col items-center mt-14">
            <h2 className="headline-2 mb-0">My Gallery</h2>
          </div>
      <div className="container">
            
        <div className="gallery-section">
          <Swiper
            modules={[Pagination, Autoplay]} // Add Autoplay module here
            grabCursor={true}
            initialSlide={2}
            centeredSlides={true}
            slidesPerView={'auto'}
            speed={600}
            slideToClickedSlide={true}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            autoplay={{
              delay: 5000, // Change image every 5 seconds
              disableOnInteraction: false, // Keep autoplay even after user interacts with the carousel
            }}
            breakpoints={{
              320: { spaceBetween: 20 },
              430: { spaceBetween: 30 },
              580: { spaceBetween: 50 },
              650: { spaceBetween: 60 },
            }}
          >
            <SwiperSlide className="swiper-slide slide-1">
              <div className="title">
                <h1>Codesprint</h1>
              </div>
              <div className="content">
                <div className="score">2023</div>
                <div className="text">
                  <h2>Codesprint</h2>
                  <p>
                  CodeSprint 7.0: It was a proud and unforgettable moment to secure first place at CodeSprint 7.0. This achievement highlighted months of hard work, innovative problem-solving, and teamwork. Holding the winner’s plaque and prize was truly rewarding and served as a testament to our dedication to excellence.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-2">
              <div className="title">
                <h1>Cypher 2023</h1>
              </div>
              <div className="content">
                <div className="score">8.6</div>
                <div className="text">
                  <h2>Cypher 2.0</h2>
                  <p>
                  Standing among the top 10 teams at Cypher 2.0 was a significant milestone in our journey. Competing against skilled teams in this prestigious event was an incredible experience, and receiving the certificate at the award ceremony validated our efforts and determination.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-3">
            <div className="title">
                <h1> Zone24x7</h1>
              </div>
              <div className="content">
                <div className="score">2024</div>
                <div className="text">
                  <h2 className='title-second'> Zone24x7</h2>
                  <p>
                  This group photo commemorates our industrial visit to Zone24x7. The visit was an eye-opening experience where we learned about advanced solutions in IoT, AI, and software development, inspiring us to think big.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-4">
              <div className="title">
                <h1>Codesprint 7.0</h1>
              </div>
              <div className="content">
                <div className="score">2023</div>
                <div className="text">
                  <h2>Codesprint 7.0</h2>
                  <p>
                  This is a cherished team photo taken after winning CodeSprint 7.0. It represents the hard work, dedication, and teamwork that led us to victory, making the moment even more special with my amazing teammates.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-5">
              <div className="title">
                <h1>Creative Software</h1>
              </div>
              <div className="content">
                <div className="score">2023</div>
                <div className="text">
                  <h2>Creative Software</h2>
                  <p>
                  Participating in an insightful session at Creative Software with my team was an enriching experience. It allowed us to engage with industry experts, gain valuable knowledge, and explore collaborative solutions that strengthened our technical and professional growth.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-6">
              <div className="title">
                <h1>Cypher 2.0 </h1>
              </div>
              <div className="content">
                <div className="score">2023</div>
                <div className="text">
                  <h2>Cypher 2.0 </h2>
                  <p>
                  This group photo was taken at Cypher 2.0 with the organizing committee and all the top 10 teams. It celebrates the collaborative spirit of the event, bringing together talented individuals and fostering innovation in a competitive yet supportive environment.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-7">
              <div className="title">
                <h1>CAREERFORDGE</h1>
              </div>
              <div className="content">
                <div className="score">2024</div>
                <div className="text">
                  <h2>CAREERFORDGE</h2>
                  <p>
                  Being a program team member of CareerForge was a fulfilling experience. I played an active role in organizing and executing this impactful event, which aimed to inspire and guide students toward successful career paths. It was an honor to contribute to its success alongside an incredible team.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-8">
              
              <div className="title">
                <h1>Stemup</h1>
              </div>
              <div className="content">
                <div className="score">2024</div>
                <div className="text">
                  <h2>Stemup</h2>
                  <p>
                  As an instructor in the STEMUp CodeDojo program, I had the privilege of volunteering to guide and inspire young learners in coding and problem-solving. It was an immensely fulfilling experience contributing to their growth and confidence in technology.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-9">
              <div className="title">
                <h1>CodeGen</h1>
              </div>
              <div className="content">
                <div className="score">2024</div>
                <div className="text">
                  <h2>CodeGen</h2>
                  <p>
                  This group photo was captured during our insightful industrial visit to CodeGen. The experience allowed us to explore cutting-edge technological innovations and gain valuable exposure to the workings of a leading tech company.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
