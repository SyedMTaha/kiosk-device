import React, { useState } from "react";
import CheckBoxes from "./CheckBoxes";
import SelectSingleOptions from "./SelectSingleOption";
import FillBlanks from './FillBlanks'; // Assuming FillBlanks component is created separately

const TestComponent = ({ questions, buttonColor, type }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const dropdownTypes = ["list-of-headings", "matching-information", "choose-the-ending"];
  const fillBlanksTypes = ["summary-completion-1", "summary-completion-2"];

  const handleOptionChange = (questionId, option) => {
    const currentSelections = selectedAnswers[questionId] || [];
    if (currentSelections.includes(option)) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: currentSelections.filter((item) => item !== option),
      });
    } else {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: [...currentSelections, option],
      });
    }
  };

  const handleDropdownChange = (questionId, selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: [selectedOption],
    });
  };

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

  if (!questions || questions.length === 0) {
    return <p className="text-gray-800">No questions available.</p>;
  }

  return (
    <div className="px-10 py-8">
      {questions.map((question, index) => (
        <div key={question.id} className="mb-10">
          <p className="text-gray-800 font-medium mb-4">
            {index + 1}. {question.text}
          </p>

          {/* Render FillBlanks component if the type matches */}
          {fillBlanksTypes.includes(type) ? (
            <FillBlanks
              passage={question.text}
              questions={question.questions}
              onAnswerChange={handleOptionChange}
              showResults={showResults}
            />
          ) : question.options && (
            dropdownTypes.includes(type) ? (
              <SelectSingleOptions
                questionId={question.id}
                options={question.options}
                selectedAnswer={selectedAnswers[question.id]?.[0]}
                onChange={handleDropdownChange}
                showResults={showResults}
              />
            ) : (
              <CheckBoxes
                questionId={question.id}
                options={question.options}
                selectedAnswers={selectedAnswers}
                correctOption={question.correctOption}
                onChange={handleOptionChange}
                showResults={showResults}
              />
            )
          )}
        </div>
      ))}
      {showResults ? (
        <div className="pb-10">
          <h4 className="text-gray-800 font-bold mt-6">
            Your Score: {score.toFixed(2)} / {questions.length}
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
      )}
    </div>
  );
};

export default TestComponent;
