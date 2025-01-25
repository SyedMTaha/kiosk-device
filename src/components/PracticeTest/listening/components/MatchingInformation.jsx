import React, { useState } from "react";

const MatchingInformation = ({ dataset }) => {
  const [inputValues, setInputValues] = useState(
    dataset[0].questions.reduce((acc, question) => {
      acc[question.id] = ""; // Initialize inputs as empty
      return acc;
    }, {})
  );

  const [options, setOptions] = useState([...dataset[0].options]); // Copy of options
  const [draggedOption, setDraggedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false)

  // Handle drag start for options and fields
  const handleDragStart = (option, source, sourceQuestionId = null) => {
    setDraggedOption({ value: option, source, sourceQuestionId });
  };

  // Handle drop into a question field
  const handleDropToField = (targetQuestionId) => {
    if (draggedOption) {
      const { value, source, sourceQuestionId } = draggedOption;

      // If the target field already has a value, return it to options
      const replacedValue = inputValues[targetQuestionId];
      if (replacedValue) {
        setOptions((prevOptions) => [...prevOptions, replacedValue]);
      }

      // If the source is another field, clear its value
      if (source === "fields" && sourceQuestionId) {
        setInputValues((prevValues) => ({
          ...prevValues,
          [sourceQuestionId]: "",
        }));
      }

      // If the source is options, remove the option from the list
      if (source === "options") {
        setOptions((prevOptions) =>
          prevOptions.filter((opt) => opt !== value)
        );
      }

      // Assign the dragged value to the target field
      setInputValues((prevValues) => ({
        ...prevValues,
        [targetQuestionId]: value,
      }));

      setDraggedOption(null);
    }
  };

  // Handle drop back into options
  const handleDropToOptions = () => {
    if (draggedOption && draggedOption.source === "fields") {
      const { value, sourceQuestionId } = draggedOption;

      // Clear the source field
      if (sourceQuestionId) {
        setInputValues((prevValues) => ({
          ...prevValues,
          [sourceQuestionId]: "",
        }));
      }

      // Add the value back to options
      setOptions((prevOptions) => [...prevOptions, value]);

      setDraggedOption(null);
    }
  };

  // Check if all fields are filled
  const allFieldsFilled = Object.values(inputValues).every((val) => val);

  // Handle finish button click
  const calculateScore = () => {
    let tempScore = 0;

    dataset[0].questions.forEach((question) => {
      // Check if the input value matches the correct option (ignoring case)
      const userInput = inputValues[question.id].trim().toUpperCase();
      const correctOptions = question.correctOption.map((option) =>
        option.toUpperCase()
      );

      if (correctOptions.includes(userInput)) {
        tempScore += 1; // Increment score for correct answer
      }
    });

    setScore(tempScore); // Set the score
    setFinished(true); // Mark as finished
  };

  // Render a question with its input fields
  const renderQuestion = (text, questionId) => {
    const parts = text.split(/(\*\*.*?\*\*|\n|\t|_________)/); // Split text into bold, newlines, tabs, and blanks
    return (
      <div className="flex items-center space-x-2">
        {parts.map((part, index) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            // Bold text
            return (
              <strong key={`${questionId}-${index}`} className="font-bold">
                {part.slice(2, -2)}
              </strong>
            );
          } else if (part === "\n") {
            // New line
            return <br key={`${questionId}-${index}`} />;
          } else if (part === "\t") {
            // Tab space
            return (
              <span key={`${questionId}-${index}`} className="inline-block">
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            );
          } else if (part === "_________") {
            // Input field
            return (
              <div
                key={`${questionId}-${index}`}
                onDrop={() => handleDropToField(questionId)}
                onDragOver={(e) => e.preventDefault()}
                className="border border-black font-bold text-center placeholder-black bg-[#FFE4E1] px-2 py-1 rounded-md mx-1 min-w-[100px] h-10 flex items-center justify-center"
              >
                {inputValues[questionId] ? (
                  <div
                    draggable
                    onDragStart={() =>
                      handleDragStart(
                        inputValues[questionId],
                        "fields",
                        questionId
                      )
                    }
                    className="cursor-pointer"
                  >
                    {inputValues[questionId]}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          } else {
            // Regular text
            return <span key={`${questionId}-${index}`}>{part}</span>;
          }
        })}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 relative">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column: Questions */}
        <div className="text-gray-800 text-lg space-y-4 pb-4">
          {dataset[0].questions.map((question) => (
            <div key={question.id} className="mb-4">
              {renderQuestion(question.text, question.id)}
            </div>
          ))}
        </div>

        {/* Right Column: Options */}
        <div
          className="text-gray-800 text-lg space-y-2 border-l-2 border-gray-300 pl-4"
          onDrop={handleDropToOptions}
          onDragOver={(e) => e.preventDefault()}
        >
          <h2 className="font-bold mb-2">Options:</h2>
          <div className="grid grid-cols-2 gap-4">
            {options.map((option, index) => (
              <div
                key={index}
                draggable
                onDragStart={() => handleDragStart(option, "options")}
                className="border border-black bg-[#FFE4E1] text-center font-bold text-black rounded-md px-4 py-2 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Finish Button */}
      {finished ? (
        <>
          <div className="fixed bottom-4 right-4 space-x-4">
            <button
              className="px-6 py-3 rounded-lg text-white font-semibold bg-[#DB1738] hover:bg-[#C21530]"
              onClick={() => {
                setFinished(false);
                setScore(0);

                // Reset input fields
                setInputValues(
                  dataset[0].questions.reduce((acc, question) => {
                    acc[question.id] = ""; // Reset inputs
                    return acc;
                  }, {})
                );

                // Restore all options
                setOptions([...dataset[0].options]);
              }}
            >
              Retry
            </button>
          </div>
          <div className="fixed bottom-4 left-4  bg-[#DB1738] font-semibold text-white px-6 py-3 rounded-lg">
            Score: {score} / {dataset[0]?.questions.length}
          </div>
        </>
      ) : (
        <button
          className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white font-semibold shadow-lg ${allFieldsFilled
            ? "bg-[#DB1738] hover:bg-[#C21530]"
            : "bg-gray-400 cursor-not-allowed"
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

export default MatchingInformation;
