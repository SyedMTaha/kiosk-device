import React, { useEffect, useState } from "react";
import labelDiagram from './data/paid-reading-labelling-diagram.json';
import summaryCompletion1 from './data/paid-reading-summary-completion.json';
import summaryCompletion2 from './data/paid-reading-summary-completion-2.json';
import sentenceCompletion from './data/paid-reading-sentence-completion.json';
import solutions from './data/solutions.json';

const FillBlankTypes = ({ type }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedDataset, setSelectedDataset] = useState([]);
  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [question, setQuestion] = useState([]);
  const [showAnswersModal, setShowAnswersModal] = useState(false); // Modal visibility state
  const [correctAnswers, setCorrectAnswers] = useState({});

  useEffect(() => {
    switch (type) {
      case "summary-completion-1":
        setSelectedDataset(summaryCompletion1);
        break;
      case "summary-completion-2":
        setSelectedDataset(summaryCompletion2);
        break;
      case "labelling-diagram":
        setSelectedDataset(labelDiagram);
        break;
      case "sentence-completion":
        setSelectedDataset(sentenceCompletion);
        break;
      default:
        setSelectedDataset([]);
        break;
    }
  }, [type]);

  useEffect(() => {
    setQuestion(selectedDataset[0]?.questions || []); // Ensure we get the questions from the dataset
  }, [selectedDataset]);

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

  const handleViewAnswers = () => {
    setShowAnswersModal(true);
  };

  const closeModal = () => {
    setShowAnswersModal(false);
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
                className="border border-black font-bold text-center placeholder-black bg-[#FFE4E1]"
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
            <span key={q.id} className="question inline-block mr-4 mb-4">
              <p className="text-lg">{renderQuestionWithBlanks(q.text, q)}</p>
            </span>
          ))}
      </div>


      {/* Show score and retry/finish buttons */}
      {showResults ? (
        <div className="pb-10">
          <h4 className="text-gray-800 font-bold mt-6">
            Your Score: {score} / {selectedDataset[0]?.questions.length}
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
                {question?.map((question) => {
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
      )}
    </div>
  );
};

export default FillBlankTypes;
