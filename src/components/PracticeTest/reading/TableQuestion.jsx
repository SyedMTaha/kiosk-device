import React, { useEffect, useState } from "react";
import tableCompletion from './data/paid-reading-table-completion.json'

const TableQuestion = ({ type }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedDataset, setSelectedDataset] = useState([]);
  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    switch (type) {
      case "table-completion":
        setSelectedDataset(tableCompletion);
        break;
      default:
        setSelectedDataset([]);
        break;
    }
  }, [type]);
  useEffect(()=>{
    console.log("here");
  },[])

  useEffect(() => {
    setQuestion(selectedDataset[0]?.questions || []); // Ensure we get the questions from the dataset
    console.log(selectedDataset)
  }, [selectedDataset]);

  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: option });
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setScore(null);
    setShowResults(false);
  };

  const handleFinish = () => {
    if (Object.keys(selectedAnswers).length < question.length) {
      alert("You haven't answered all the questions!");
      return;
    }
  
    let calculatedScore = 0;
    selectedDataset[0]?.questions.forEach((question) => {
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
  

  if (!selectedDataset || selectedDataset?.length === 0) {
    return <p className="text-gray-800">No dataset available.</p>;
  }

  const renderQuestionWithBlanks = (questionText, question) => {
    const parts = questionText.split("_________"); // Split the question by the blank line
  
    return parts.map((part, index) => {
      if (index < parts.length - 1) {
        const answer = selectedAnswers[question.id];
  
        return (
          <React.Fragment key={index}>
            {part} {/* Display text before the blank */}
            {question.options ? (
              // If options exist, render a select dropdown
              <select
                value={answer || ""}
                onChange={(e) => handleOptionChange(question.id, e.target.value)}
                disabled={showResults}
                className="border-b border-black"
              >
                <option value="">Select an option</option>
                {question.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              // Otherwise, render an input field for fill-in-the-blank
              <input
                type="text"
                value={answer || ""}
                onChange={(e) => handleOptionChange(question.id, e.target.value)}
                disabled={showResults}
                className="border-b border-black font-bold text-center placeholder-black"
                placeholder={`${question.id}`}  // Placeholder showing the question number
              />
            )}
          </React.Fragment>
        );
      }
  
      // For the last part of the question (no blank to replace)
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };
  

  return (
    <div>
      <div className="questions-container">
        {/* Render questions below the passage */}
        {question.length > 0 &&
          question.map((q) => (
            <div key={q.id} className="question mb-4">
              <p className="text-lg">{renderQuestionWithBlanks(q.text1, q)}</p>
            </div>
          ))}
      </div>

      {/* Show score and retry/finish buttons */}
      {showResults ? (
        <div className="pb-10">
          <h4 className="text-gray-800 font-bold mt-6">
            Your Score: {score} / {selectedDataset[0]?.questions.length}
          </h4>
          <div className="flex justify-end px-5 pb-10">
            <button
              onClick={handleRetry}
              className={`text-white px-6 py-3 rounded-full transition duration-200 focus:outline-none bg-[#143761] hover:bg-[#0c2a3b]`}
            >
              Retry
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-end px-5 pb-10">
          <button
            onClick={handleFinish}
            className={`text-white px-6 py-3 rounded-full transition duration-200 focus:outline-none bg-[#143761] hover:bg-[#0c2a3b]`}
            disabled={Object.keys(selectedAnswers).length < selectedDataset[0]?.questions.length}
          >
            Finish
          </button>
        </div>
      )}
    </div>
  );
};

export default TableQuestion;
