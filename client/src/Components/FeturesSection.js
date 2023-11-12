import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const FeturesSection = () => {
  return (
    <ParallaxLayer offset={1} speed={0.2}>
      <div className="relative h-screen">
        <div className="absolute inset-0 yt-video-container flex justify-center">
          <ParallaxLayer offset={0.5} speed={0.5}>
            <iframe
              className="yt-video-settings mx-auto"
              width="1000"
              height="515"
              src="https://www.youtube.com/embed/RzRhcnN-2XQ?si=JCkClcO610KBluhU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </ParallaxLayer>
        </div>
        <div className="features-div flex justify-center items-center">
          <h1 className="Features-bg-text">PODCAST</h1>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default FeturesSection;
