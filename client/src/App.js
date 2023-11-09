import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import FeturesSection from "./Components/FeturesSection";
import AboutPage from "./Components/AboutPage";
import Subscribepage from "./Components/Subscribepage";
import Contactpage from "./Components/Contactpage";

const App = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-bl from-blue-700 via-gray-800 to-black h-screen  absolute inset-0 custom-h">
        {/* <img src="lines.png" alt="" /> */}
      </div>
      <div className="relative">
        <Navbar />
        <HeroSection />
        <FeturesSection />
        <Subscribepage />
        <AboutPage />
        <Contactpage />
      </div>
    </div>
  );
};

export default App;
