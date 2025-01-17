import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Import Swiper styles
import 'swiper/css/navigation';  // Import navigation styles

import img1 from '../../assets/grid-img1.png';
import img2 from '../../assets/grid-img2.png';
import img3 from '../../assets/grid-img3.png';
import img4 from '../../assets/grid-img4.png';

const SuccessStories = () => {
  return (
    <div className="py-16 px-6 bg-[#F9FAFB]">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center text-[#1A1A1A] mb-12">
        Success Stories
      </h1>

      {/* Carousel */}
      <Swiper
        spaceBetween={15}  // Adjust space between cards for better alignment
        slidesPerView={4}
        loop={true}
        navigation={true}  // Enable navigation arrows
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,  // More space for larger screens
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,  // Less space on medium screens
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15,  // Less space on small screens
          },
        }}
        className="success-carousel"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src={img1} alt="Success Story 1" className="w-[60%] h-full object-cover mx-auto" />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src={img2} alt="Success Story 2" className="w-[60%] h-full object-cover mx-auto" />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="rounded-lg overflow-hidden shadow-md ">
            <img src={img3} alt="Success Story 3" className="w-[60%] h-full object-cover mx-auto" />
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img src={img4} alt="Success Story 4" className="w-[60%] h-full object-cover mx-auto" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SuccessStories;
