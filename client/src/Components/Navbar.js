import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-2xl bg-opacity-10 shadow-2xl border-slate-800">
        <div className=" mx-auto px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex gap-10">
              <Link to="/"><span className="text-2xl text-white font-semibold">Podcast</span></Link>
              
            </div>

            <div className="flex space-x-4 text-white">
              <Link to="/summery"
                className="hover:text-slate-200 transition ease-in-out delay-100"
              >
                App
              </Link>
              <a
                href="#"
                className="hover:text-slate-200 transition ease-in-out delay-100"
              >
                Features
              </a>
              <a
                href="#"
                className="hover:text-slate-200 transition ease-in-out delay-100"
              >
                Contact
              </a>
              <a
                href="#"
                className="hover:text-slate-200 transition ease-in-out delay-100"
              >
                Pro
              </a>
              <a
                href="#"
                className="hover:text-slate-200 transition ease-in-out delay-100"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
