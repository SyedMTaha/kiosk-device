import React from 'react'
import img from '../../assets/home-img2.png'

const Screen2 = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center bg-[#FFEEEE] px-6 py-12">
      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={img} 
          alt="Home Image" 
          className="w-[90%] md:w-[80%] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 items-start justify-center px-8 md:px-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-snug">
          Meet Our Expert <br />
          <span className="text-[#DB1738]">IELTS Instructor</span>
        </h1>
        <p className="text-[#4A4A4A] text-base font-medium md:max-w-lg">
          At IELTS Counsel, our skilled instructor is dedicated to helping students achieve their target band scores. With expertise in all four modules—Listening, Reading, Writing, and Speaking—they provide interactive lessons and personalized guidance to build your skills and confidence.
        </p>
        <button className="mt-6 bg-[#DB1738] text-white font-semibold text-lg rounded-full px-8 py-3 transition-transform transform hover:scale-105 shadow-md">
          Join Now
        </button>
      </div>
    </div>
  )
}

export default Screen2;
