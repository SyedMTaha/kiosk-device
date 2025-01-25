import React, { useState } from 'react'
import img from '../../assets/home-img1.png'
import { useNavigate } from 'react-router-dom';
import ieltsAcademic from '../../assets/ieltsacademic.png';
import ieltsGeneral from '../../assets/ieltsgeneral.png';

const Screen1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleCardClick = (type) => {
    navigate(`/paiduser/${type}`);
  };

  const handleCloseModal = (e) => {
    if (e.target.id === 'modal-overlay') {
      setIsModalOpen(false);
    }
  };
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-[#FFEEEE] px-6 pt-12">
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

        <div className="flex gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-[#143761] text-white font-semibold text-lg rounded-full px-8 py-3 transition-transform transform hover:scale-105 shadow-md"
          >
            Paid User
          </button>
          <button className="mt-6 bg-[#DB1738] text-white font-semibold text-lg rounded-full px-8 py-3 transition-transform transform hover:scale-105">
            Become a Paid User
          </button>
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
      {/* Modal */}
      {isModalOpen && (
        <div
          id="modal-overlay"
          onClick={handleCloseModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div
            className="bg-white rounded-lg shadow-lg w-[90%] max-w-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Icon */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 text-2xl font-bold hover:text-gray-800"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-center text-[#1A1A1A] mb-6">
              Select an Option
            </h2>

            {/* Options */}
            <div className="flex justify-center gap-6">
              {/* IELTS General */}
              <div
                onClick={() => handleCardClick('general')}
                className="cursor-pointer flex flex-col items-center border-[2px] border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 w-[20vw]"
              >
                <img src={ieltsGeneral} alt="IELTS General" className="w-24 h-24 mb-4" />
                <p className="font-semibold text-lg bg-[#143761] text-white py-2 px-4 rounded-md text-center">
                  IELTS General
                </p>
              </div>

              {/* IELTS Academic */}
              <div
                onClick={() => handleCardClick('academic')}
                className="cursor-pointer flex flex-col items-center border-[2px] border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 w-[20vw]"
              >
                <img src={ieltsAcademic} alt="IELTS Academic" className="w-24 h-24 mb-4" />
                <p className="font-semibold text-lg text-[#143761] bg-[#143761] text-white py-2 px-4 rounded-md text-center">
                  IELTS Academic
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Screen1;
