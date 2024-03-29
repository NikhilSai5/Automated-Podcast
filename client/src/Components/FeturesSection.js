import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const FeturesSection = () => {
  return (
    <ParallaxLayer offset={1} speed={0.2}>
      <div className="relative h-screen ">
        <div className="absolute inset-0 yt-video-container flex justify-center">
          <ParallaxLayer
            offset={0.5}
            speed={0.5}
            className="lg:block flex lg:mt-12"
          >
            <iframe
              className="yt-video-settings lg:mx-auto lg:w-[1000px] lg:h-[515px] w-full mx-2 rounded-xl yt-mobile"
              src="https://www.youtube.com/embed/RzRhcnN-2XQ?si=JCkClcO610KBluhU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </ParallaxLayer>
        </div>
        <div className="features-div flex justify-center items-center">
          <h1 className="Features-bg-text Features-bg-text-sm  podcase-bg-sm">
            PODCAST
          </h1>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default FeturesSection;
