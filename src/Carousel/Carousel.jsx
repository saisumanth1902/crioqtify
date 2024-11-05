// src/Carousel/Carousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Carousel = ({ items }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3} // Adjust based on screen size
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          {item} {/* Each item should be a valid React component */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
