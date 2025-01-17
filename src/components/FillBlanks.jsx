import React, { useState } from "react";

const FillBlankTypes = ({ passage, questions, onAnswerChange, showResults }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  console.log(passage);
  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));

    if (onAnswerChange) {
      onAnswerChange(questionId, answer);  // Notify parent about the answer change
    }
  };

  const renderPassageWithBlanks = () => {
    // Split passage by '_________'
    const parts = passage.split("_________");

    return parts.map((part, index) => {
      // If the part isn't the last one, it means it's a place where we need to insert a field (dropdown or input)
      if (index < parts.length - 1) {
        const question = questions[index]; // Corresponding question for this blank
        const answer = selectedAnswers[question.id];

        return (
          <React.Fragment key={index}>
            {part}
            {question.options ? (
              // If options exist, render a select dropdown
              <select
                value={answer || ""}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                disabled={showResults}
              >
                <option value="">Select an option</option>
                {question.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              // Otherwise, render an input field
              <input
                type="text"
                value={answer || ""}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                disabled={showResults}
              />
            )}
          </React.Fragment>
        );
      }

      // For the last part of the passage (no blank to replace)
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return <div className="passage-container">{renderPassageWithBlanks()}</div>;
};

export default FillBlankTypes;
