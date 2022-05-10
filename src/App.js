import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Refund from "./Pages/Refund";
import TermAndCondition from "./Pages/TermAndCondition";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/term" element={<TermAndCondition />} />
        </Routes>
        <div className="Footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
