import React, { useState } from 'react';

const Blanks = ({ dataset }) => {
  const [inputValues, setInputValues] = useState(
    dataset[0].questions.reduce((acc, question) => {
      acc[question.id] = ''; // Initialize inputs as empty
      return acc;
    }, {})
  );

  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false); // To track if the user finished

  // Check if all fields are filled
  const allFieldsFilled = Object.values(inputValues).every((value) => value.trim() !== '');

  // Handle input changes
  const handleInputChange = (id, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  // Function to calculate score
  const calculateScore = () => {
    let tempScore = 0;

    dataset[0].questions.forEach((question) => {
      // Check if the input value matches the correct option (ignoring case)
      const userInput = inputValues[question.id].trim().toLowerCase();
      const correctOptions = question.correctOption.map(option => option.toLowerCase());

      if (correctOptions.includes(userInput)) {
        tempScore += 1; // Increment score for correct answer
      }
    });

    setScore(tempScore); // Set the score
    setFinished(true); // Mark as finished
  };

  // Helper function to render text with formatting and inputs
  const renderQuestion = (text, questionId) => {
    const parts = text.split(/(\*\*.*?\*\*|\n|\t|_________)/); // Split text into bold, newlines, tabs, and blanks
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // Bold text
        return (
          <strong key={`${questionId}-${index}`} className="font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      } else if (part === '\n') {
        // New line
        return <br key={`${questionId}-${index}`} />;
      } else if (part === '\t') {
        // Tab space
        return (
          <span key={`${questionId}-${index}`} className="inline-block">
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        );
      } else if (part === '_________') {
        // Input field
        return (
          <>
            <input
              key={`${questionId}-${index}`}
              type="text"
              value={inputValues[questionId] || ''}
              onChange={(e) => handleInputChange(questionId, e.target.value)}
              className="border border-black font-bold text-center bg-[#FFE4E1] px-2 py-1 rounded-md mx-1 placeholder-gray-800"
              style={{ minWidth: '100px' }}
              placeholder={questionId}
            />
          </>
        );
      } else {
        // Regular text
        return part;
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 relative">
      <div className="text-gray-800 text-lg space-y-4 pb-4">
        {dataset[0].questions.map((question) => (
          <div key={question.id} className="mb-4">
            {renderQuestion(question.text, question.id)}
          </div>
        ))}
      </div>

      {/* Show Retry button and Score once finished */}
      {finished ? (
        <>
          <div className="fixed bottom-4 right-4 space-x-4">
            <button
              className="px-6 py-3 rounded-lg text-white font-semibold bg-[#DB1738] hover:bg-[#C21530]"
              onClick={() => {
                setFinished(false);
                setScore(0);
                setInputValues(
                  dataset[0].questions.reduce((acc, question) => {
                    acc[question.id] = ''; // Reset inputs
                    return acc;
                  }, {})
                );
              }}
            >
              Retry
            </button>
          </div>
          <div className="fixed bottom-4 left-4 text-xl font-semibold text-black">
            Score: {score} / {dataset[0]?.questions.length}
          </div>
        </>
      ) : (
        <button
          className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white font-semibold shadow-lg ${allFieldsFilled ? 'bg-[#DB1738] hover:bg-[#C21530]' : 'bg-gray-400 cursor-not-allowed'
            }`}
          disabled={!allFieldsFilled}
          onClick={calculateScore}
        >
          Finish
        </button>
      )}
    </div>
  );
};

export default Blanks;
