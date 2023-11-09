import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const FeturesSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 yt-video-container flex justify-center">
        <iframe
          className="yt-video-settings"
          width="1000"
          height="515"
          src="https://www.youtube.com/embed/RzRhcnN-2XQ?si=JCkClcO610KBluhU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="features-div flex justify-center items-center">
        <h1 className="Features-bg-text">PODCAST</h1>
      </div>
    </div>
  );
};

export default FeturesSection;
