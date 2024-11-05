import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

const CarSlider = ({ cars }) => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 800)}s`;
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">My Projects</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="max-w-screen-lg mx-auto"
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
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
            <motion.div
              className="relative max-w-xs rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 1 }}
            >
              {/* Image */}
              <img className="w-full h-64 object-cover" src={car.imageUrl} alt={car.title} />

              {/* Overlay for Details */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2
                  className="text-xl font-bold mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {car.title}
                </motion.h2>
                <motion.p
                  className="text-base mb-4 px-2 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {car.description}
                </motion.p>
                <motion.div
                  className="flex justify-center space-x-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={car.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                  >
                    <i className="fab fa-github text-white hover:text-blue-400 text-2xl"></i>
                  </a>
                  <a
                    href={car.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors"
                  >
                    <i className="fas fa-external-link-alt text-white hover:text-green-400 text-2xl"></i>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <span ref={progressCircle}></span>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default CarSlider;
