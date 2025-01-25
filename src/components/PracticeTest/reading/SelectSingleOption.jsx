import React, { useState } from "react";

const SelectSingleOptions = ({ index, questionText, questionId, options, selectedAnswer, onChange, showResults }) => {
  
  return (
    <>
      <p className="text-gray-800 font-medium mb-4">
        {index + 1}. {questionText}
      </p>
      <div className="mb-4">
        <select
          value={selectedAnswer || ""}
          onChange={(e) => onChange(questionId, e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
          disabled={showResults}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectSingleOptions;


