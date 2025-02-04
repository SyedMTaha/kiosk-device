import React, { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Main from './UserPages/Main'
import Screen1 from './UserPages/Screen1'
import WindowsType from "./UserPages/Windows/WindowsType";
import SlideShowTutorial from "./UserPages/Windows/SlideShowTutorial";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select-device" element={<Screen1 />} />
        <Route path="/windows-type" element={<WindowsType />} />
        <Route path="/slideshow-tutorial" element={<SlideShowTutorial />} />
      </Routes>
    </Router>
  );
}

export default App;