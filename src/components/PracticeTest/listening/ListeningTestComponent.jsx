import React, { Component, useEffect, useState } from "react";
import Blanks from "./components/Blanks";
import MixMcqs from "./components/MixMcqs";
import MatchingInformation from "./components/MatchingInformation"
import Maps from "./components/Maps";
import TableCompletion from "./components/TableCompletion";
// Import datasets
import completeNotesDataset from './data/paid-listening-complete-notes.json'
import chooseMcqsPart3 from './data/paid-listening-choose-mcqs-3.json'
import chooseMcqsPart2 from './data/paid-listening-choose-mcqs-2.json'
import SummaryCompletion from './data/paid-listening-summary-completion.json'
import MatchingInformationData from './data/paid-listening-matching-information.json'
import MapsData from './data/paid-listening-map.json'
import TablesData from './data/paid-listening-table-completion.json'

const TestComponent = ({type }) => {
  const [dataset,setDataset]=useState(null)
  const [DynamicComponent, setDynamicComponent] = useState(null);
  const typeMapping={
    "complete-notes":{
      dataset:completeNotesDataset,
      Component:Blanks
    },
    "choose-mcqs-part-3":{
      dataset: chooseMcqsPart3,
      Component: MixMcqs
    },
    "choose-mcqs-part-2":{
      dataset: chooseMcqsPart2,
      Component: MixMcqs
    },
    "summary-completion":{
      dataset: SummaryCompletion,
      Component: Blanks
    },
    "matching-box's-information":{
      dataset: MatchingInformationData,
      Component: MatchingInformation
    },
    "maps":{
      dataset: MapsData,
      Component: Maps
    },
    "table-completion":{
      dataset: TablesData,
      Component: TableCompletion
    }
  }
  useEffect(() => {
    if (typeMapping[type]) {
      setDataset(typeMapping[type].dataset);
      setDynamicComponent(() => typeMapping[type].Component); // Lazy-load component
    } else {
      setDataset(null);
      setDynamicComponent(null);
    }
  }, [type]);

  if (!dataset || !DynamicComponent) {
    return <p className="text-gray-800">No questions available for the selected type.</p>;
  }

  return (
    <div className="">
      {/* Dynamically render the component and pass the dataset as a prop */}
      <DynamicComponent dataset={dataset} />
    </div>
  );
};

export default TestComponent;
