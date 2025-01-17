import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import listening from '../../assets/listening.png';
import writing from '../../assets/writing.png';
import speaking from '../../assets/speaking.png';
import reading from '../../assets/reading.png';
import ieltsAcademic from '../../assets/ieltsacademic.png';
import ieltsGeneral from '../../assets/ieltsgeneral.png';

const Ielts = () => {
  const [showModal, setShowModal] = useState(false);

  // Sample questions for different skills
  const sampleQuestions = {
    listening: [
      {
        id: 1,
        text: "What is the main purpose of the listening passage?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctOption: "Option 1",
      },
      {
        id: 2,
        text: "What is the speaker's tone?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctOption: "Option B",
      },
    ],
    writing: [
      {
        id: 1,
        text: "What is the structure of the essay?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctOption: "Option 1",
      },
      {
        id: 2,
        text: "What is the argument of the writer?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctOption: "Option A",
      },
    ],
    speaking: [
      {
        id: 1,
        text: "What is the question about?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctOption: "Option A",
      },
      {
        id: 2,
        text: "What is the main idea of the response?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctOption: "Option 3",
      },
    ],
    reading: [
      {
        id: 1,
        text: "What is the author's argument in the passage?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctOption: "Option 2",
      },
      {
        id: 2,
        text: "What is the conclusion of the passage?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctOption: "Option C",
      },
    ],
  };

  // Open modal handler
  const handleCardClick = () => {
    setShowModal(true);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      id="services"
      className="py-16 bg-gradient-to-r from-[#FFEEFF] to-[#FFE1E1] px-6 min-h-screen flex flex-col items-center justify-center"
    >
      {/* Title */}
      <h1 className="text-center font-bold text-4xl text-[#1A1A1A] mb-14">
        IELTS
      </h1>

      {/* IELTS Academic & General Cards */}
      <div className="flex flex-wrap justify-center gap-12 md:gap-16">
        {/* IELTS Academic Card */}
        <div
          onClick={handleCardClick}
          className="cursor-pointer flex flex-col items-center border-[2px] border-[#DFEDFF] rounded-xl p-6 shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl bg-white"
        >
          <img
            src={ieltsAcademic}
            alt="IELTS Academic"
            className="w-40 h-40 object-contain mb-6"
          />
          <p className="text-white font-bold text-lg bg-[#143761] px-4 py-2 rounded-md">
            IELTS Academic
          </p>
        </div>

        {/* IELTS General Card */}
        <div
          onClick={handleCardClick}
          className="cursor-pointer flex flex-col items-center border-[2px] border-[#DFEDFF] rounded-xl p-6 shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl bg-white"
        >
          <img
            src={ieltsGeneral}
            alt="IELTS General"
            className="w-40 h-40 object-contain mb-6"
          />
          <p className="text-white font-bold text-lg bg-[#143761] px-4 py-2 rounded-md">
            IELTS General
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-xl p-8 shadow-xl w-[90%] max-w-lg"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <h2 className="text-center text-2xl font-bold mb-6 text-[#143761]">
              Choose a Skill
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Listening */}
              <Link
                to={{
                  pathname: "/listening",
                  state: { questions: sampleQuestions.listening },
                }}
                className="flex flex-col items-center border-[2px] border-[#FFE1E1] rounded-xl p-4 shadow-md hover:shadow-lg transition-all bg-white"
              >
                <img
                  src={listening}
                  alt="Listening"
                  className="w-20 h-20 object-contain mb-4"
                />
                <p className="font-semibold text-[#4A4A4A] text-lg">Listening</p>
              </Link>

              {/* Writing */}
              <Link
                to={{
                  pathname: "/writing",
                  state: { questions: sampleQuestions.writing },
                }}
                className="flex flex-col items-center border-[2px] border-[#DFEDFF] rounded-xl p-4 shadow-md hover:shadow-lg transition-all bg-white"
              >
                <img
                  src={writing}
                  alt="Writing"
                  className="w-20 h-20 object-contain mb-4"
                />
                <p className="font-semibold text-[#4A4A4A] text-lg">Writing</p>
              </Link>

              {/* Speaking */}
              <Link
                to={{
                  pathname: "/speaking",
                  state: { questions: sampleQuestions.speaking },
                }}
                className="flex flex-col items-center border-[2px] border-[#FFE1E1] rounded-xl p-4 shadow-md hover:shadow-lg transition-all bg-white"
              >
                <img
                  src={speaking}
                  alt="Speaking"
                  className="w-20 h-20 object-contain mb-4"
                />
                <p className="font-semibold text-[#4A4A4A] text-lg">Speaking</p>
              </Link>

              {/* Reading */}
              <Link
                to={{
                  pathname: "/reading",
                  state: { questions: sampleQuestions.reading },
                }}
                className="flex flex-col items-center border-[2px] border-[#DFEDFF] rounded-xl p-4 shadow-md hover:shadow-lg transition-all bg-white"
              >
                <img
                  src={reading}
                  alt="Reading"
                  className="w-20 h-20 object-contain mb-4"
                />
                <p className="font-semibold text-[#4A4A4A] text-lg">Reading</p>
              </Link>
            </div>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="mt-6 w-full bg-[#143761] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ielts;
