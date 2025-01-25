import React, { useEffect, useState } from "react";
import CheckBoxes from "./CheckBoxes";
import SelectSingleOptions from "./SelectSingleOption";
import FillBlanks from './FillBlanks'; // Assuming FillBlanks component is created separately
import MultipleSelect from "./MultipleSelect";
import TableQuestion from "./TableQuestion";
import solutions from './data/solutions.json';


const TestComponent = ({ questions, buttonColor, type }) => {
  const [showAnswersModal, setShowAnswersModal] = useState(false); // Modal visibility state
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const dropdownTypes = ["list-of-headings", "matching-information", "choose-the-ending", "matching-statement-with-names"];
  const fillBlanksTypes = ["summary-completion-1", "summary-completion-2", "labelling-diagram", "sentence-completion"];
  const tableTypes = ["table-completion"];
  const doubleType = ["mcq's---choose-two-letters"]
  const handleDropdownChange = (questionId, selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: [selectedOption],
    });
  };
  useEffect(() => {
    // Fetch correct answers from solutions JSON based on the 'type'
    setCorrectAnswers(solutions[type] || {});
    console.log(solutions[type])
  }, [type]);

  const handleFinish = () => {
    if (Object.keys(selectedAnswers).length < questions.length) {
      alert("You haven't answered all the questions!");
      return;
    }

    let calculatedScore = 0;

    questions.forEach((question) => {
      const correctOptions = Array.isArray(question.correctOption)
        ? question.correctOption
        : [question.correctOption];
      const userSelected = selectedAnswers[question.id] || [];

      const correctCount = correctOptions.length;
      const matchedCount = userSelected.filter((option) =>
        correctOptions.includes(option)
      ).length;

      if (userSelected.length === correctCount && matchedCount === correctCount) {
        calculatedScore += 1;
      } else if (matchedCount > 0 && userSelected.length <= correctCount) {
        calculatedScore += matchedCount / correctCount;
      }
    });

    setScore(calculatedScore);
    setShowResults(true);
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setScore(null);
    setShowResults(false);
  };

  const handleViewAnswers = () => {
    setShowAnswersModal(true);
  };

  const closeModal = () => {
    setShowAnswersModal(false);
  };

  if (!questions || questions.length === 0) {
    return <p className="text-gray-800">No questions available.</p>;
  }

  return (
    <div className="px-10 py-8">
      {
        fillBlanksTypes.includes(type) && (
          <FillBlanks
            type={type}
          />
        )
      }
      {tableTypes.includes(type) && (
        <TableQuestion
          type={type}
        />
      )}
      {
        doubleType.includes(type) && (
          <MultipleSelect
            type={type}
          />
        )
      }

      {
        dropdownTypes.includes(type) && (
          questions.map((question, index) => {
            console.log(question);
            return (
              <div key={question.id} className="mb-10">
                {/* Render SelectSingleOptions if the type matches */}
                {question.options && dropdownTypes.includes(type) && (
                  <SelectSingleOptions
                    index={index}
                    questionText={question.text}
                    questionId={question.id}
                    options={question.options}
                    selectedAnswer={selectedAnswers[question.id]?.[0]}
                    onChange={handleDropdownChange}
                    showResults={showResults}
                  />
                )}
              </div>
            );
          })
        )
      }
      {(!dropdownTypes.includes(type) && !fillBlanksTypes.includes(type) && !doubleType.includes(type) && !tableTypes.includes(type)) && (
        <CheckBoxes type={type} />
      )}
      {dropdownTypes.includes(type) && (
        showResults ? (
          <div className="pb-10">
            <h4 className="text-gray-800 font-bold mt-6">
            Your Score: {score} / {questions.length}
            <span
              onClick={handleViewAnswers}
              className="text-md font-normal ml-2 underline cursor-pointer"
            >
              View Answers
            </span>
          </h4>
            <div className="flex justify-end px-5 pb-10">
              <button
                onClick={handleRetry}
                className={`text-white px-6 py-3 rounded-full transition duration-200 focus:outline-none ${buttonColor || 'bg-[#143761] hover:bg-[#0c2a3b]'}`}
              >
                Retry
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-end px-5 pb-10">
            <button
              onClick={handleFinish}
              className={`text-white px-6 py-3 rounded-full transition duration-200 focus:outline-none ${buttonColor || 'bg-[#143761] hover:bg-[#0c2a3b]'}`}
              disabled={Object.keys(selectedAnswers).length < questions.length}
            >
              Finish
            </button>
          </div>
        )
      )}
      {dropdownTypes.includes(type) && (
        showAnswersModal && (
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
                    console.log(correctAnswer)
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
        )
      )}
    </div >
  );
};

export default TestComponent;
