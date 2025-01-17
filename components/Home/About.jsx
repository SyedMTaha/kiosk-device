import React from 'react'
import img from '../../assets/home-img3.png'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center bg-[#FFEEEE] px-6 pt-12">
      {/* Left Section (Text) */}
      <div className="w-full md:w-3/5 flex flex-col gap-4 items-start justify-center px-8 md:px-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-snug">
          ABOUT US
        </h1>
        <p className="text-[#4A4A4A] text-base font-medium md:max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Sed convallis elit sit amet nibh pellentesque, in congue metus mollis. Aliquam erat volutpat. Ut volutpat sapien vel lectus pulvinar, id molestie arcu condimentum.
        </p>
        
        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6">
          <a href="https://facebook.com" className="bg-[#DB1738] p-3 rounded-full text-white">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" className="bg-[#DB1738] p-3 rounded-full text-white">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className="bg-[#DB1738] p-3 rounded-full text-white">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-2/5 flex justify-center">
        <img
          src={img}
          alt="Home Image"
          className="w-[90%] md:w-[80%] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default About;
