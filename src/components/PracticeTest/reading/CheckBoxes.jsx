import React, { useEffect, useState } from "react";
import mcqsOption1 from './data/paid-reading-mcqs-option-one.json';
import mcqsOption2 from './data/paid-reading-mcqs-option-two.json';
import trueFalseNotGiven from './data/paid-reading-true-false-not-given.json';
import yesNoNotGiven from './data/paid-reading-yes-no-not-given.json';
import solutions from './data/solutions.json';

const CheckBoxes = ({ type }) => {
  const [dataset, setDataset] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [showAnswersModal, setShowAnswersModal] = useState(false); // Modal visibility state
  const [correctAnswers, setCorrectAnswers] = useState({}); // Correct answers from the solutions JSON

  useEffect(() => {
    switch (type) {
      case 'true-false-not-given':
        setDataset(trueFalseNotGiven);
        break;
      case 'yes-no-not-given':
        setDataset(yesNoNotGiven);
        break;
      case "mcq's---choose-two-letters":
        setDataset(mcqsOption2);
        break;
      case "mcq's---choose-one-letter":
        setDataset(mcqsOption1);
        break;
      default:
        setDataset([]);
        break;
    }
  }, [type]);

  useEffect(() => {
    setQuestions(dataset[0]?.questions);
  }, [dataset]);

  useEffect(() => {
    // Fetch correct answers from solutions JSON based on the 'type'
    setCorrectAnswers(solutions[type] || {});
  }, [type]);

  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: option });
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setScore(null);
    setShowResults(false);
  };

  const handleFinish = () => {
    if (Object.keys(selectedAnswers).length < dataset[0]?.questions.length) {
      alert("You haven't answered all the dataset!");
      return;
    }

    let calculatedScore = 0;
    dataset[0]?.questions.forEach((question) => {
      const selectedAnswer = selectedAnswers[question.id];

      // If correctOption is an array, use includes to check if the answer matches
      if (Array.isArray(question.correctOption)) {
        if (question.correctOption.includes(selectedAnswer)) {
          calculatedScore += 1;
        }
      } else {
        // Otherwise, just compare the selected answer to the correctOption directly
        if (selectedAnswer === question.correctOption) {
          calculatedScore += 1;
        }
      }
    });
    setScore(calculatedScore);
    setShowResults(true);
  };

  const handleViewAnswers = () => {
    setShowAnswersModal(true);
  };

  const closeModal = () => {
    setShowAnswersModal(false);
  };

  if (!dataset || dataset.length === 0) {
    return <p className="text-gray-800">No dataset available.</p>;
  }

  return (
    <div className="px-10 py-8">
      {questions?.map((question, index) => (
        <div key={question.id} className="mb-10">
          <p className="text-gray-800 font-medium mb-4">
            {index + 1}. {question.text}
          </p>
          <div className="space-y-4">
            {question.options.map((option, idx) => {
              let optionClass = "text-gray-800"; // Default color
              // When the results are shown
              if (showResults) {
                if (question.correctOption.includes(option)) {
                  optionClass = "font-bold text-green-600"; // Correct option (green)
                } else if (selectedAnswers[question.id] === option) {
                  optionClass = "font-bold text-red-600"; // Incorrect option (red)
                }
              }

              return (
                <div key={idx} className="flex items-center">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    id={`question-${question.id}-option-${idx}`}
                    className={`mr-3 ${showResults ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={showResults}
                    onChange={() => handleOptionChange(question.id, option)}
                    checked={selectedAnswers[question.id] === option} // Ensure radio button reflects the selected answer
                  />
                  <label
                    htmlFor={`question-${question.id}-option-${idx}`}
                    className={optionClass}
                  >
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {showResults ? (
        <div className="pb-10 flex w-full justify-between items-center">
          <h4 className="text-gray-800 font-bold mt-6">
            Your Score: {score} / {dataset[0]?.questions.length}
            <span
              onClick={handleViewAnswers}
              className="text-md font-normal ml-2 underline cursor-pointer"
            >
              View Answers
            </span>
          </h4>
          <button
            onClick={handleRetry}
            className={`text-white px-6 py-3 rounded-full transition duration-200 focus:outline-none bg-[#143761] hover:bg-[#0c2a3b]`}
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="flex justify-end px-5 pb-10">
          <button
            onClick={handleFinish}
            className={`text-white px-6 py-3 rounded-full transition duration-200 focus:outline-none bg-[#143761] hover:bg-[#0c2a3b]`}
            disabled={Object.keys(selectedAnswers).length < dataset[0]?.questions.length}
          >
            Finish
          </button>
        </div>
      )}

      {/* Modal */}
      {showAnswersModal && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Correct Answers</h3>
            <table className="table-auto w-full mb-4">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Question</th>
                  <th className="border px-4 py-2">Correct Answer</th>
                </tr>
              </thead>
              <tbody>
                {questions?.map((question) => {
                  const correctAnswer = correctAnswers[question.id];
                  return (
                    <tr key={question.id}>
                      <td className="border px-4 py-2">{question.id}</td>
                      <td className="border px-4 py-2">{correctAnswer}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button
              onClick={closeModal}
              className="bg-[#143761] text-white px-6 py-2 rounded-full mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckBoxes;
