import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/home-img2.png';


const Screen2 = () => {
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
          At IELTS Counsel, Mubbashar, a certified IELTS expert, stands out with an exceptional overall band score of 9. He achieved perfect scores of 9 in Listening, Reading, and Speaking, and an impressive 8 in Writing. With a deep understanding of each module, Mubbashar has trained thousands of students to master complex reading passages, craft high-scoring writing responses, excel in listening, and speak fluently with confidence. His expertise and proven strategies have helped the majority of his students achieve band scores of 8 and above.
        </p>
      </div>

      
    </div>
  );
};

export default Screen2;
