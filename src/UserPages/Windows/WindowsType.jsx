import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon
import Banner from "../../assets/banner.png";
import SlideShowImg from '../../assets/slide-show.png';
import CustomerSupportImg from '../../assets/customer-support.png';
import VideoTutorialImg from '../../assets/video-based-tutorial.png';
import video from '../../assets/video-tutorial.mp4';

const WindowsType = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the Customer Support card click
  const handleCustomerSupportClick = () => {
    window.open(
      "https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_MTRmODhjMDMtYjI4My00MjY5LWJiNWYtNDVmNjQzMWJiNTAy%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%25221676489c-5c72-46b7-ba63-9ab90c4aad44%2522%252c%2522Oid%2522%253a%2522035f12ea-f596-4c69-886f-9781318014fa%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=cd77a2fc-c431-4278-b94e-7a9589e53455&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true",
      "_blank" // Opens the link in a new tab
    );
  };

  // Function to handle the Video Based Tutorial card click
  const handleVideoTutorialClick = () => {
    setIsVideoModalOpen(true);
  };

  // Function to close the modal
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  // Function to handle clicks outside the modal
  const handleOutsideClick = (e) => {
    if (e.target.id === "video-modal-backdrop") {
      closeVideoModal();
    }
  };

  // Function to handle the back navigation
  const handleBackNavigation = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Banner */}
      <div className="w-full">
        <img src={Banner} alt="Banner" className="w-full" />
      </div>

      {/* Heading */}
      <div className="text-center mt-4 md:mt-8 px-4 relative">
        {/* Left Icon for Back Navigation */}
        <div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleBackNavigation} // Add onClick handler
        >
          <FaArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 hover:text-gray-600" /> {/* Use FaArrowLeft icon */}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Pick a tutorial method to setup your
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Diversity Device
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-12 mt-4 sm:mt-6 px-4">
        {/* Slide Show Tutorial Card */}
        <div className="glassmorphism-card hover:shadow-xl hover:scale-105 hover:border-[#4F46E5] transition-all duration-300 border-2 border-[#1D2788] px-4 py-2 w-full sm:w-[30vw] md:w-[20vw] lg:w-[15vw] text-center rounded-md cursor-pointer" onClick={()=>{navigate('/slideshow-tutorial')}}>
          <img src={SlideShowImg} alt="Slide Show" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2" />
          <p className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800">Slide Show Tutorial</p>
        </div>

        {/* Customer Support Card */}
        <div
          className="glassmorphism-card hover:shadow-xl hover:scale-105 hover:border-[#4F46E5] transition-all duration-300 border-2 border-[#1D2788] px-4 py-2 w-full sm:w-[30vw] md:w-[20vw] lg:w-[15vw] text-center rounded-md cursor-pointer"
          onClick={handleCustomerSupportClick} // Add onClick handler
        >
          <img src={CustomerSupportImg} alt="Customer Support" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2" />
          <p className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800">Customer Support</p>
        </div>

        {/* Video Based Tutorial Card */}
        <div
          className="glassmorphism-card hover:shadow-xl hover:scale-105 hover:border-[#4F46E5] transition-all duration-300 border-2 border-[#1D2788] px-4 py-2 w-full sm:w-[30vw] md:w-[20vw] lg:w-[15vw] text-center rounded-md cursor-pointer"
          onClick={handleVideoTutorialClick} // Add onClick handler
        >
          <img src={VideoTutorialImg} alt="Video Tutorial" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2" />
          <p className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800">Video Based Tutorial</p>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          id="video-modal-backdrop"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOutsideClick} // Close modal when clicking outside
        >
          <div className="bg-white rounded-lg p-4 sm:p-6 w-11/12 max-w-4xl relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeVideoModal} // Close modal when clicking the close button
            >
              &times;
            </button>
            <video controls className="w-full">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default WindowsType;