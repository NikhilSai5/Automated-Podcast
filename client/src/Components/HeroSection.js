import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-text px-10 ">
          <h1 id="hero-text-1">LISTEN ANYTHING</h1>
          <h1 id="hero-text-1">LIKE PODCASE</h1>
          <p id="hero-summary">
            Automated content extraction, <br />
            summarization, and podcast creation
          </p>
          <button id="hero-try">
            <span className="Btn-text">Try</span>
          </button>
        </div>
        <div className="3d-img-container">
          <img src="/mic-3.png" alt="" className="mic-img" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
