import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

const SubscribePage = () => {
  return (
    <>
      <ParallaxLayer offset={2} speed={0.2}>
        <div className="subscribe-container h-screen relative ">
          <div className="sub-all-content mt-20">
            <div className="absolute plans-container plans-container-sm flex justify-center ">
              <div className="plan-style"></div>
              <div className="plan-style"></div>
            </div>

            <div className="sub-header flex justify-center">
              <h1 className="sub-text">Subscribe</h1>
            </div>
          </div>
          <ParallaxLayer offset={0.6} speed={0.3}>
            <div className=" flex justify-center items-center">
              <h1 className="Features-bg-text Features-bg-text-sub-sm">
                UNLOCK
              </h1>
            </div>
          </ParallaxLayer>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default SubscribePage;
