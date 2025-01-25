import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';  // Import Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css';  // Import Slick Carousel theme

import img1 from '../../assets/grid-img-1.jpg';
import img2 from '../../assets/grid-img-2.jpg';
import img3 from '../../assets/grid-img-3.jpg';
import img4 from '../../assets/grid-img-4.png';
import img5 from '../../assets/grid-img-5.jpg';
import img6 from '../../assets/grid-img-6.jpg';

const SuccessStories = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const links = [
    'https://youtube.com/shorts/dz8qMb3Bttw?si=wof8Y8Y9s8NFskle', // Replace with your specific YouTube link
    'https://youtube.com/shorts/T6gieEasPsU?si=mI4dUzfDzQxr_511', // Replace with your specific YouTube link
    'https://youtube.com/shorts/yShQQPs19FY?si=Vtg3UcPglwdnkNvb', // Replace with your specific YouTube link
    'https://youtu.be/RseTXWjXe7U?si=CQ6l99WUrOIiuuHb', // Replace with your specific YouTube link
    'https://youtube.com/shorts/-nKcxdwNQdk?si=rSO4av7045nGRstc', // Replace with your specific YouTube link
    'https://youtube.com/shorts/ETfMMrHH4AY?si=nhdvMJtffNi2fGI9', // Replace with your specific YouTube link
  ];

  // Slick slider settings
  const settings = {
    dots: true, // Show dots navigation
    infinite: true, // Infinite loop
    speed: 500, // Slide transition speed
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 3 seconds
    pauseOnHover: true, // Pause autoplay when hovered
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides on tablets and medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide on extra small screens
        },
      },
    ],
  };

  return (
    <div className="py-16 px-6 bg-[#F9FAFB]">
      <h1 className="text-3xl font-semibold text-center text-[#1A1A1A] mb-12">Success Stories</h1>

      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <a
              href={links[index]}  // Dynamically linking each image to its specific link
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-sm overflow-hidden shadow-md">
                <img
                  src={img}
                  alt={`Success Story ${index + 1}`}
                  className="w-[20vw] h-[400px] object-cover"  // Fixed height for uniformity
                />
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SuccessStories;
