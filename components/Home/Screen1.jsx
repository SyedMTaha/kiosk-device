import React from 'react'
import img from '../../assets/home-img1.png'

const Screen1 = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center bg-[#FFEEEE] px-6 pt-12">
      {/* Left Section */}
      <div className="w-full md:w-3/5 flex flex-col gap-4 items-start justify-center px-8 md:px-12">
        <p className="text-[#DB1738] text-lg font-semibold">Achieve IELTS Success</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-snug">
          Master IELTS, <br />
          <span className="text-[#DB1738]">Achieve Your</span> <br />
          <span>Dreams</span>
        </h1>
        <p className="text-[#4A4A4A] text-base font-medium md:max-w-lg">
          Prepare with expert guidance and simple strategies to make your IELTS journey easier and successful.
        </p>

        <button className="mt-6 bg-[#DB1738] text-white font-semibold text-lg rounded-full px-8 py-3 transition-transform transform hover:scale-105">
          Become a Paid User
        </button>
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

export default Screen1;
