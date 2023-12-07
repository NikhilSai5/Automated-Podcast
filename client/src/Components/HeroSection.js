import React from "react";
import { useSpring, animated } from "react-spring";
import { ParallaxLayer } from "@react-spring/parallax";

const HeroSection = () => {
  // Define animation properties for the parallax effect
  const heroTextProps = useSpring({
    from: { transform: "translateY(100px)" },
    to: { transform: "translateY(0)" },
    config: { tension: 30, friction: 8 },
  });

  const micImgProps = useSpring({
    from: { transform: "translateY(-50px)" },
    to: { transform: "translateY(0)" },
    config: { tension: 30, friction: 8 },
  });

  const SubTextProps = useSpring({
    from: { transform: "translateY(100px)" },
    to: { transform: "translateY(0)" },
    config: { tension: 30, friction: 8 },
  });

  const ButtonProps = useSpring({
    from: {transform: "translateY(120px)"},
    to: { transform: "translateY(0)" },
    config: { tension: 30, friction: 8 },
  })
  return (
    <>
      <div className="hero-container">
        <div className="hero-text px-10">
          <animated.h1 id="hero-text-1" style={heroTextProps}>
            LISTEN ANYTHING
          </animated.h1>
          <animated.h1 id="hero-text-1" style={heroTextProps}>
            LIKE PODCASE
          </animated.h1>
          <animated.p id="hero-summary" style={SubTextProps}>
            Automated content extraction, <br />
            summarization, and podcast creation
          </animated.p>
          <animated.button id="hero-try" style={ButtonProps}>
            <span className="Btn-text">Listen</span>
          </animated.button>
        </div>
        <div className="3d-img-container">
          <animated.img
            src="/mic-3.png"
            alt=""
            className="mic-img"
            style={micImgProps}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
