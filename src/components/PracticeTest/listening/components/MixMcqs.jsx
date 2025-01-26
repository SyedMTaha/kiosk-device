import React, { useState, useEffect } from 'react';

const MixMcqs = ({ dataset }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isAllAnswered, setIsAllAnswered] = useState(false);
  const [score, setScore] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  // Function to handle option change (either for radio or checkbox)
  const handleOptionChange = (questionId, option, isMultipleChoice) => {
    setSelectedOptions(prevState => {
      const updatedOptions = { ...prevState };

      if (isMultipleChoice) {
        // For checkboxes, toggle the option
        const selectedForQuestion = updatedOptions[questionId] || [];
        if (selectedForQuestion.includes(option)) {
          updatedOptions[questionId] = selectedForQuestion.filter(opt => opt !== option);
        } else {
          updatedOptions[questionId] = [...selectedForQuestion, option];
        }
      } else {
        // For radio buttons, set the selected option
        updatedOptions[questionId] = option;
      }

      return updatedOptions;
    });
  };

  // Effect to check if all questions have been answered
  useEffect(() => {
    const allAnswered = dataset[0].questions.every((question) => {
      // Check if there is a selection for each question
      if (Array.isArray(question.correctOption) && question.correctOption.length > 1) {
        // For checkbox questions, make sure there's at least one option selected
        return selectedOptions[question.id]?.length > 0;
      } else {
        // For radio button questions, check if an option is selected
        return selectedOptions[question.id] !== undefined;
      }
    });

    setIsAllAnswered(allAnswered);
  }, [selectedOptions, dataset]);

  // Calculate score
  const calculateScore = () => {
    let totalScore = 0;
    dataset[0].questions.forEach((question) => {
      const userAnswer = selectedOptions[question.id];
      if (Array.isArray(question.correctOption) && question.correctOption.length > 1) {
        // For checkboxes, check if selected options match the correct ones
        if (userAnswer?.length === question.correctOption.length && userAnswer.every(option => question.correctOption.includes(option))) {
          totalScore += 1;
        }
      } else {
        // For radio buttons, check if the selected option matches the correct one
        if (userAnswer === question.correctOption[0]) {
          totalScore += 1;
        }
      }
    });
    setScore(totalScore);
  };

  // Finish quiz
  const finishQuiz = () => {
    calculateScore();
    setQuizFinished(true);
  };

  // Retry the quiz
  const retryQuiz = () => {
    setSelectedOptions({});
    setScore(null);
    setQuizFinished(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {dataset[0].questions.map((question) => {
        const isMultipleChoice = Array.isArray(question.correctOption) && question.correctOption.length > 1;
        return (
          <div key={question.id} className="mb-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{question.id}. {question.text}</h3>
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {isMultipleChoice ? (
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={option}
                        checked={selectedOptions[question.id]?.includes(option)}
                        onChange={() => handleOptionChange(question.id, option, true)}
                        className="w-5 h-5 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ) : (
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={selectedOptions[question.id] === option}
                        onChange={() => handleOptionChange(question.id, option, false)}
                        className="w-5 h-5 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
      
      {!quizFinished ? (
        <div className="fixed bottom-8 right-8">
          <button
            onClick={finishQuiz}
            disabled={!isAllAnswered}
            className={`px-6 py-3 text-white font-semibold rounded-lg focus:outline-none ${isAllAnswered ? 'bg-[#DB1738] hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            Finish
          </button>
        </div>
      ) : (
        <>
          <div className="fixed bottom-8 left-8 bg-[#DB1738] text-white px-6 py-3 rounded-lg shadow-lg">
            Score: {score} / {dataset[0].questions.length}
          </div>
          <div className="fixed bottom-8 right-8">
            <button
              onClick={retryQuiz}
              className="px-6 py-3 text-white font-semibold bg-[#DB1738] hover:bg-[#cd2843] rounded-lg focus:outline-none"
            >
              Retry
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MixMcqs;
