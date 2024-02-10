import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

const Contactpage = () => {
  return (
    <>
      <ParallaxLayer offset={4} speed={0.2}>
        <div className="contact-container h-screen relative flex lg:flex-row flex-col justify-evenly">
          <div className="text-container flex mx-auto">
            <div className="text-content">
              <h1 className="text-header py-5">Contact Me</h1>
              <p className="text-para">
                Need to get in touch with me? either fill out the form with your
                inquiry or mail to me
              </p>
            </div>
          </div>
          <div className="contact-container flex items-center lg:mx-auto">
            <div className="contact-box contact-box-sm text-black">
              <div className="first-last-name flex lg:flex-row lg:gap-2 flex-col gap-5">
                <div className="first-last-name-inner">
                  <span>First Name</span>
                  <input type="text" className="first-last-input  " />
                </div>
                <div className="first-last-name-inner">
                  <span>Last Name</span>
                  <input type="text" className="first-last-input" />
                </div>
              </div>
              <div className="email-in flex flex-col  gap-2 my-8">
                <span>Email</span>
                <input type="text" className="email-input" />
              </div>
              <div className="mail-body flex flex-col gap-2">
                <span>What can i help you with?</span>
                <textarea
                  name="email"
                  id=""
                  cols="20"
                  rows="3"
                  className="txt-area"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Contactpage;
