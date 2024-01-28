import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const heroTextProps = useSpring({
    from: { transform: "translateY(100px)" },
    to: { transform: "translateY(0)" },
    config: { tension: 30, friction: 5 },
  });
  const ButtonProps = useSpring({
    from: { transform: "translateY(120px)" },
    to: { transform: "translateY(0)" },
    config: { tension: 30, friction: 10 },
  });

  const ArroProp = useSpring({
    from: { transform: "translateY(100px)" },
    to: { transform: "translateY(0)" },
    config: { tension: 30, friction: 15 },
  });
  return (
    <>
      <div className="landing-contaienr h-screen inset-0">
        <div className="landing-text absolute w-full flex flex-col justify-center p-10 pt-32 h-full ">
          <div className="x flex flex-col justify-between h-full">
            <div>
              <animated.h1
                className="landing-cs-text flex justify-center gap-6"
                style={heroTextProps}
              >
                LISTEN <span className="landing-any">ANYTHING</span>
              </animated.h1>
              <animated.h1
                className="like flex justify-center gap-6"
                style={heroTextProps}
              >
                Like <span className="pod">Podcast</span>
              </animated.h1>
              <div className="flex justify-center items-center">
                <animated.button id="hero-try" style={ButtonProps}>
                  <Link to="/summery">
                    <span className="Btn-text">Listen</span>
                  </Link>
                </animated.button>
              </div>
            </div>
            <animated.div
              className="relative mx-auto mb-[100px]"
              style={ArroProp}
            >
              <svg
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[24px] w-[24px] hover:h-[28px] hover:w-[28px] ease-in duration-100"
              >
                <g clip-path="url(#clip0_189_4)">
                  <path
                    d="M18.5017 4.65088C18.1033 4.25294 17.5632 4.02942 17.0001 4.02942C16.4369 4.02942 15.8968 4.25294 15.4984 4.65088L7.48148 12.6635C7.08284 13.0622 6.85889 13.6029 6.85889 14.1666C6.85889 14.7304 7.08284 15.2711 7.48148 15.6697C7.88013 16.0684 8.4208 16.2923 8.98457 16.2923C9.54833 16.2923 10.089 16.0684 10.4877 15.6697L14.8751 11.2837V27.625C14.8751 28.1886 15.099 28.7291 15.4975 29.1276C15.896 29.5261 16.4365 29.75 17.0001 29.75C17.5637 29.75 18.1042 29.5261 18.5027 29.1276C18.9012 28.7291 19.1251 28.1886 19.1251 27.625V11.2837L23.5111 15.6697C23.7085 15.8671 23.9428 16.0237 24.2007 16.1305C24.4586 16.2373 24.735 16.2923 25.0142 16.2923C25.2933 16.2923 25.5697 16.2373 25.8276 16.1305C26.0855 16.0237 26.3198 15.8671 26.5172 15.6697C26.7146 15.4723 26.8712 15.238 26.978 14.9801C27.0848 14.7222 27.1398 14.4458 27.1398 14.1666C27.1398 13.8875 27.0848 13.6111 26.978 13.3532C26.8712 13.0953 26.7146 12.8609 26.5172 12.6635L18.5017 4.65088Z"
                    fill="#B8B8B8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_189_4">
                    <rect width="34" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </animated.div>
          </div>
        </div>

        <div className="landing-img flex justify-center object-cover h-screen items-end ">
          <div className="overflow-hidden h-[500px]">
            <img src="image.png" alt="" className="h-[500px] object-none " />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
