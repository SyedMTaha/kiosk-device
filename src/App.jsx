import React, { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Main from './UserPages/Main'
import Screen1 from './UserPages/Screen1'
import WindowsType from "./UserPages/Windows/WindowsType";
import SlideShowTutorial from "./UserPages/Windows/SlideShowTutorial";
import MacType from "./UserPages/MacOS/MacType";
import ByodType from "./UserPages/Byod/ByodType";
import WindowsTypeByod from "./UserPages/Byod/WindowsTypeByod";
import MacTypeByod from "./UserPages/Byod/MacTypeByod";
import NotAllowed from "./UserPages/NotAllowed"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select-device" element={<Screen1 />} />
        <Route path="/windows-type" element={<WindowsType />} />
        <Route path="/slideshow-tutorial" element={<SlideShowTutorial />} />
        <Route path="/mac-type" element={<MacType />} ></Route> 
        <Route path="/byod-type" element={<ByodType />} />
        <Route path="/windows-type-byod" element= {<WindowsTypeByod/>} />
        <Route path="/mac-type-byod" element={<MacTypeByod/>}/>
        <Route path="/not-allowed" element={<NotAllowed/>}/>
      </Routes>
    </Router>
  );
}

export default App;