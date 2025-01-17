import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home/index';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/Signup';
import Writing from './components/MockTest/Writing';
import Speaking from './components/MockTest/Speaking';
import Listening from './components/MockTest/Listening';
import Reading from './components/MockTest/Reading';
import PaidScreen from './components/Home/PaidScreen';
import ReadingTest from './components/PracticeTest/reading/reading';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0; // This will scroll the page to the top position when route changes
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      {/* <Navbar /> Optionally, you can keep Navbar if it's meant to appear on all pages */}
      <ScrollToTop /> {/* This component will handle the scroll to top behavior */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/listening" element={<Listening />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/paiduser/general" element={<PaidScreen />} />
        <Route path="/paiduser/academic" element={<PaidScreen />} />
        <Route path="/paiduser/reading/:type" element={<ReadingTest />} />
        <Route path="/paiduser/listening/:type" element={<ReadingTest />} />
        <Route path="/paiduser/speaking/:type" element={<ReadingTest />} />
        <Route path="/paiduser/writing/:type" element={<ReadingTest />} />
      </Routes>
      {/* <Footer />  */}
    </Router>
  );
}

export default App;
