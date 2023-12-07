import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <ParallaxLayer offset={3} speed={0.2}>
        <div className="about-page h-screen">
          <div className="personal-details absolute flex justify-center">
            <div className="profile-pic mx-auto z-50">
              <img src="profilepic.png" alt="" />
            </div>
            <div className="summary">
              <p className="summary-me">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer
              </p>
            </div>
            <div className="Social-links flex justify-center items-center gap-2 mt-4">
              <a
                href="https://www.linkedin.com/your-linkedin-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} color="#0964c1" />
              </a>

              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} color="white" />
              </a>
            </div>
          </div>
          <ParallaxLayer offset={0.8} speed={0.3}>
            <div className=" flex justify-center items-center">
              <h1 className="Features-bg-text">NIKHIL</h1>
            </div>
          </ParallaxLayer>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default AboutPage;
