import React, { useState } from "react";
import img from "../../../../assets/map.webp";

const Maps = ({ dataset }) => {
  const { questions, options } = dataset[0];
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for showing the modal

  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  // Check if all questions are answered
  const allAnswered = questions.every((question) =>
    selectedAnswers.hasOwnProperty(question.id)
  );

  const handleFinish = () => {
    let calculatedScore = 0;
    questions.forEach((question) => {
      if (question.correctOption.includes(selectedAnswers[question.id])) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setScore(null);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="flex flex-col gap-4 p-4 pb-16">
      {/* Content */}
      <div className="flex flex-row gap-4">
        {/* Left: Image */}
        <div className="w-1/2">
          <img
            src={img}
            alt="Map"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Questions Grid */}
        <div className="w-1/2 overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Questions</th>
                {options.map((option, index) => (
                  <th
                    key={index}
                    className="border border-gray-300 p-2 text-center"
                  >
                    {option}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question.id}>
                  <td className="border border-gray-300 p-2">
                    {question.id}. {question.text}
                  </td>
                  {options.map((option) => (
                    <td
                      key={option}
                      className={`relative border border-gray-300 p-2 text-center cursor-pointer ${
                        selectedAnswers[question.id] === option
                          ? "bg-blue-500"
                          : ""
                      }`} // Style for the selected option
                      onClick={() => handleOptionChange(question.id, option)}
                    >
                      {/* Checkbox is hidden */}
                      <input
                        type="checkbox"
                        checked={selectedAnswers[question.id] === option}
                        readOnly
                        className="hidden"
                      />
                      {/* Show the checkmark only if selected */}
                      {selectedAnswers[question.id] === option && (
                        <span className="absolute inset-0 flex items-center justify-center text-white text-2xl">
                          ✓
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Buttons and Score */}
      {score !== null ? (
        <>
          <div className="fixed bottom-4 right-4 space-x-4">
            <button
              className="px-6 py-3 rounded-lg text-white font-semibold bg-[#DB1738] hover:bg-[#C21530]"
              onClick={handleRetry}
            >
              Retry
            </button>
          </div>
          <div className="fixed bottom-4 left-4  bg-[#DB1738] font-semibold text-white px-6 py-3 rounded-lg">
            Score: {score} / {questions.length}
          </div>

          {/* View Answers Link */}
          <div className="fixed bottom-7 left-[12vw] text-xl font-semibold text-blue-600 cursor-pointer">
            <span
              className="underline"
              onClick={openModal}
            >
              View Answers
            </span>
          </div>
        </>
      ) : (
        <button
          className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white font-semibold shadow-lg ${
            allAnswered
              ? "bg-[#DB1738] hover:bg-[#C21530]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!allAnswered}
          onClick={handleFinish}
        >
          Finish
        </button>
      )}

      {/* Modal for Viewing Answers */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-xl w-full">
            <h2 className="text-2xl font-semibold mb-4">Answers</h2>
            <ul className="space-y-4">
              {questions.map((question) => (
                <li key={question.id}>
                  <strong>Question {question.id}:</strong> {question.correctOption.join(', ')}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 px-6 py-3 rounded-lg text-white font-semibold bg-[#DB1738] hover:bg-[#C21530]"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Maps;
