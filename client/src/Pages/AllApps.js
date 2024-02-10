import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const AllApps = () => {
  return (
    <>
      <div className="allapp-parent bg-gradient-to-bl from-blue-700 via-gray-800 to-black inset-0 h-full">
        <div className="s absolute w-full">
          <Navbar />
        </div>
        <div className="allapps-container h-screen flex flex-row justify-center gap-16 items-center">
          <div className="feature1 feature-bg  text-white hover:bg-slate-500 hover:cursor-pointer  ">
            <div className="flex flex-col h-full justify-between">
              <div className="feature1-text flex flex-col gap-6 ">
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-[40px]">Listen Trending</span>
                  <span className="text-[#A9F53C] font-bold text-[40px] ">
                    Topics
                  </span>
                </div>
                <span className="text-slate-200 ">With just a search</span>
              </div>
              <div className="flex justify-end items-end p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Link to="/summery">
            <div className="feature2 feature-bg  text-white hover:bg-slate-500 hover:cursor-pointer">
              <div className="flex flex-col h-full justify-between">
                <div className="feature2-text flex flex-col gap-6">
                  <span className="font-bold text-[40px] leading-none">
                    Listen{" "}
                    <span className="text-[#A9F53C] font-bold text-[40px]">
                      Articles
                    </span>
                  </span>
                  <span className="text-slate-200 ">
                    With copy and pasting url
                  </span>
                </div>
                <div className="flex justify-end items-end p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllApps;
