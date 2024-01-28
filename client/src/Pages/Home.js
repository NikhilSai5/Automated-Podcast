import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import FeturesSection from "../Components/FeturesSection";
import AboutPage from "../Components/AboutPage";
import Subscribepage from "../Components/Subscribepage";
import Contactpage from "../Components/Contactpage";
import { useSpring, animated } from "@react-spring/core";
import { Parallax } from "@react-spring/parallax";
import LandingPage from "../Components/LandingPage";

const Home = () => {
  return (
    <Parallax pages={5} className="relative">
      <div className="bg-gradient-to-bl from-blue-700 via-gray-800 to-black  absolute inset-0 h-full">
        {/* <img src="lines.png" alt="" />  -------> bgimage HERE<-------- */}
        <div className="relative">
          <Navbar />
          {/* <HeroSection /> */}
          <LandingPage />
          <FeturesSection />
          <Subscribepage />
          <AboutPage />
          <Contactpage />
        </div>
      </div>
    </Parallax>
  );
};

export default Home;
