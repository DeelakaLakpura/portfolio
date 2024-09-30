import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const CarSlider = ({ cars }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">My Projects</h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="max-w-screen-lg mx-auto"
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className={`relative max-w-xs rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight'}`}>
              {/* Image */}
              <img className="w-full h-64 object-cover" src={car.imageUrl} alt={car.title} />

              {/* Overlay for Details */}
              <div className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100`}>
                <h2 className="text-xl font-bold mb-2">{car.title}</h2>
                <p className="text-base mb-4 px-2 text-center">{car.description}</p>
                <div className="flex justify-center space-x-4">
                  <a href={car.githubUrl} target="_blank" rel="noopener noreferrer" className="transition-colors">
                    <i className="fab fa-github text-white hover:text-blue-400 text-2xl"></i>
                  </a>
                  <a href={car.demoUrl} target="_blank" rel="noopener noreferrer" className="transition-colors">
                    <i className="fas fa-external-link-alt text-white hover:text-green-400 text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Add the pagination element */}
    

      </Swiper>

      <div className="text-white flex justify-center items-center mt-2">
  <i className="fas fa-dot-circle text-white hover:text-blue-400 text-1xl"></i>&nbsp;
  <i className="fas fa-dot-circle text-white hover:text-blue-400 text-1xl"></i>&nbsp;
  <i className="fas fa-dot-circle text-white hover:text-blue-400 text-1xl"></i>&nbsp;
  <i className="fas fa-dot-circle text-white hover:text-blue-400 text-1xl"></i>&nbsp;
</div>

    </div>
  );
};

export default CarSlider;