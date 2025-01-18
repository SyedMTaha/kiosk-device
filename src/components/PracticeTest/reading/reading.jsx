import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TestComponent from '../../TestComponent';
import listOfHeadings from './data/paid-reading-list-of-headings.json';
import sentenceCompletion from './data/paid-reading-sentence-completion.json';
import chooseEnding from './data/paid-reading-choose-ending.json';
import matchingInformation from './data/paid-reading-matching-information.json';
import mcqsOption1 from './data/paid-reading-mcqs-option-one.json';
import mcqsOption2 from './data/paid-reading-mcqs-option-two.json';
import trueFalseNotGiven from './data/paid-reading-true-false-not-given.json';
import yesNoNotGiven from './data/paid-reading-yes-no-not-given.json';
import labelDiagram from './data/paid-reading-labelling-diagram.json';
import summaryCompletion1 from './data/paid-reading-summary-completion.json';
import summaryCompletion2 from './data/paid-reading-summary-completion-2.json';
import img1 from '../../../assets/label-1.png'
import img2 from '../../../assets/label-2.png'

const ReadingTest = () => {
  const { type } = useParams();
  const formattedType = type ? type.replace(/-/g, ' ') : 'Sample Questions';
  const [selectedDataset, setSelectedDataset] = useState([]);
  const [imgShow, setImgShow] = useState(false);
  const descriptions = {
    "table-completion": "Complete the table below.\nChoose ONE WORD from the passage for each answer.\nWrite your answers in boxes 1-7.",
    "choose-the-ending": "Complete each sentence with the correct ending, A-F, below. Write the correct letter, A-F, in boxes 1-7.\n\tA our response to music depends on our initial emotional state.\n\tВ neuron activity decreases if outcomes become predictable.\n\tС emotive music can bring to mind actual pictures and events.\n\tD experiences in our past can influence our emotional reaction to music.\n\tE emotive music delays giving listeners what they expect to hear.\n\tF neuron activity increases prior to key points in a musical piece.\n",
    "labelling-diagram": "Label the diagrams below. Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 1-6.",
    "list-of-headings": "Reading Passage has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list of headings below. Write the correct number, i-viii, in boxes 1-7.\n List Od Headings \n\ti. A period in cold conditions before the technology is assessed\n\tii. Marketing issues lead to failure\n\tiii. Good and bad aspects of steam technology are passed on\n\tiv. A possible solution to the issues of today\n\tv. Further improvements lead to commercial orders\n\tvi. Positive publicity at last for this quiet, clean, fast vehicle\n\tvii. A disappointing outcome for customers\n\tviii. A better option than the steam car arises",
    "matching-information": "Reading Passage has eight sections, A-H. Which paragraph contains the following information? Write the correct letter, A-H, in boxes 1-7.\n NB: You may use any letter more than once.",
    "matching-statement-with-names": "Look at the following statements (Question 1-7) and the list of people below. Match each statement with the correct person, A-G. Write the correct letter, A-G, in boxes 1-7. \nNB: You may use any letter more than once.\nList of People\n\tA.	Kanayo F. Nwanze\n\tB.	Sophia Murphy\n\tC.	Shenggen Fan\n\tD.	Rokeya Kabir\n\tE.	Pat Mooney\n\tF.	Giel Ton\n\tG.	Sonali Bisht",
    "mcqs-one-letter": "Choose the correct letter, A, B, C, or D. Write the correct letter in boxes 1-7.",
    "mcqs-two-letter": "Choose TWO letters, A-E. Write the correct letters in boxes. Choose TWO letters, A-E. Write the correct letters in boxes.",
    "sentence-completion": "Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 1-7.",
    "summary-completion-1": "Complete the summary using the list of words, A-H, below. Write the correct letter, A-H, in boxes 1-7.\n\tA.	laughter\n\tB.	relaxing\n\tC.	boring\n\tD.	anxiety\n\tE.	stimulating\n\tF.	emotion\n\tG.	enjoyment\n\tH.	amusing\n\t",
    "summary-completion-2": "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes.",
    "true-false-not-given": "Do the following statements agree with the information given in Reading Passage? In boxes 1-7, write \n\t'TRUE' if the statement agrees with the information\n\t'FALSE' if the statement contradicts the information\n\t'NOT GIVEN' if there is no information on this.",
    "yes-no-not-given": "Do the following statements agree with the views of the writer in Reading Passage? In boxes 1-5\n\t write 'YES' if the statement agrees with the views of the writer\n\t'NO' if the statement contradicts the views of the writer\n\t'NOT GIVEN' if it is impossible to say what the writer thinks about this."
  };

  useEffect(() => {
    switch (type) {
      case 'true-false-not-given':
        setSelectedDataset(trueFalseNotGiven);
        break;
      case 'yes-no-not-given':
        setSelectedDataset(yesNoNotGiven);
        break;
      case 'matching-information':
        setSelectedDataset(matchingInformation);
        break;
      case 'sentence-completion':
        setSelectedDataset(sentenceCompletion);
        break;
      case 'choose-the-ending':
        setSelectedDataset(chooseEnding);
        break;
      case "mcq's---choose-two-letters":
        setSelectedDataset(mcqsOption2);
        break;
      case "mcq's---choose-one-letter":
        setSelectedDataset(mcqsOption1);
        break;
      case "list-of-headings":
        setSelectedDataset(listOfHeadings);
        break;
      case "summary-completion-1":
        setSelectedDataset(summaryCompletion1);
        break;
      case "summary-completion-2":
        setSelectedDataset(summaryCompletion2);
        break;
      case "labelling-diagram":
        setSelectedDataset(labelDiagram);
        setImgShow(true);
        break;
      default:
        setSelectedDataset([]);
        break;
    }
  }, [type]);

  const handleTabsAndNewlines = (text) => {
    return text.split("\n").map((line, index) => (
      <p key={index}>
        {line.split("\t").map((tab, idx) => (
          <>
            {idx > 0 && <span className="mr-4">{' '}</span>}
            {tab}
          </>
        ))}
      </p>
    ));
  };

  const description = descriptions[type] || '';

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-[#143761] text-white text-center py-4">
        <h1 className="text-2xl font-bold">Reading - {formattedType}</h1>
      </div>
      <div className="mt-4 flex bg-blue-50 p-4 mx-auto w-full max-w-4xl rounded-xl">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/EKcqMrtx2yU?si=x6cE8HZjd5x2SdVZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow h-[90vh] border-t-4">
        {/* Left Section - Passage */}
        <div className="w-1/2 p-4 overflow-y-scroll bg-[#FFFFEE] custom-scrollbar">
          <h1 className="font-semibold text-3xl pb-2">Reading Passage</h1>
          {selectedDataset[0]?.passage?.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* Right Section - Questions */}
        <div className="w-1/2 p-4 overflow-y-scroll bg-white custom-scrollbar">
          <h1 className="font-semibold text-3xl pb-2">Questions</h1>
          {description && (
            <div className="text-sm pb-4">
              {handleTabsAndNewlines(description)}
            </div>
          )}
          {imgShow && (
            <div className="flex gap-2 ">
              <img src={img1} alt="Label Diagram" className="w-[22vw] " />
              <img src={img2} alt="Label Diagram" className="w-[22vw] " />
            </div>
          )}

          {selectedDataset && <TestComponent questions={selectedDataset[0]?.questions} buttonColor="bg-[#143761]" type={type} />}
        </div>
      </div>

      <div className="bg-gray-200 p-4 flex justify-between items-center">
        {/* Question Palette */}
        <div className="flex space-x-2">
          {selectedDataset[0]?.questions?.map((_, index) => (
            <button
              key={index}
              className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600"
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Timer */}
        <div className="text-lg font-bold text-red-600">20:00</div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #143761;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #0d2a4a;
        }
      `}</style>
    </div>
  );
};

export default ReadingTest;
