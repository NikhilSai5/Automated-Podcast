import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import FeturesSection from "../Components/FeturesSection";
import AboutPage from "../Components/AboutPage";
import Subscribepage from "../Components/Subscribepage";
import Contactpage from "../Components/Contactpage";
import { useSpring, animated } from "@react-spring/core";
import { Parallax } from "@react-spring/parallax";

const Home = () => {
  return (
    <Parallax pages={5} className="relative">
      <div className="absolute inset-0 custom-h">
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
    </Parallax>
  );
};

export default Home;
