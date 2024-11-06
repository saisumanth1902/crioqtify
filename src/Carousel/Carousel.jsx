// // src/Carousel/Carousel.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper';
// import 'swiper/swiper-bundle.css';

// const Carousel = ({ items }) => {
//   return (
//     <Swiper
//       spaceBetween={20}
//       slidesPerView={3} // Adjust based on screen size
//     >
//       {items.map((item, index) => (
//         <SwiperSlide key={index}>
//           {item} {/* Each item should be a valid React component */}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Carousel;

// Carousel.js
import AlbumCard from '../Card/Card';
const Carousel = ({ items, showAllButton, displayLikes }) => {
    // Render items in a carousel format
    return (
      <div className="carousel">
        {items.map((item) => (
          <AlbumCard key={item.id} data={item} displayLikes={displayLikes} />
        ))}
        {/* Left and right navigation buttons if needed */}
      </div>
    );
  };
  
  export default Carousel;
  