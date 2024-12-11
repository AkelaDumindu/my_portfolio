import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay CSS if necessary
import './gallery.css';

const Gallery = () => {
  return (
    <section className="section">
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
                <div className="score">8.6</div>
                <div className="text">
                  <h2>Codesprint</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quasi eius
                    est sunt assumenda numquam possimus earum magni eveniet, enim incidunt
                    architecto nihil odio tempore debitis. Debitis blanditiis placeat ullam!
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-2">
              <div className="title">
                <h1>Codesprint</h1>
              </div>
              <div className="content">
                <div className="score">8.6</div>
                <div className="text">
                  <h2>Codesprint</h2>
                  <p>
                    Amet excepturi ea eum iusto perferendis at labore perspiciatis, ratione saepe
                    facere veniam ex. Similique asperiores aspernatur ab quibusdam voluptatibus
                    reiciendis sint, voluptatem cupiditate illo, dicta, porro dolorem atque
                    incidunt?
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-3">
              <div className="title">
                <h1>Codesprint</h1>
              </div>
              <div className="content">
                <div className="score">8.6</div>
                <div className="text">
                  <h2>Codesprint</h2>
                  <p>
                    Amet excepturi ea eum iusto perferendis at labore perspiciatis, ratione saepe
                    facere veniam ex. Similique asperiores aspernatur ab quibusdam voluptatibus
                    reiciendis sint, voluptatem cupiditate illo, dicta, porro dolorem atque
                    incidunt?
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide slide-4">
              <div className="title">
                <h1>Codesprint</h1>
              </div>
              <div className="content">
                <div className="score">8.6</div>
                <div className="text">
                  <h2>Codesprint</h2>
                  <p>
                    Amet excepturi ea eum iusto perferendis at labore perspiciatis, ratione saepe
                    facere veniam ex. Similique asperiores aspernatur ab quibusdam voluptatibus
                    reiciendis sint, voluptatem cupiditate illo, dicta, porro dolorem atque
                    incidunt?
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
