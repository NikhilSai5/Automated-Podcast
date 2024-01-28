import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-gradient-to-bl from-blue-700 via-gray-800 to-black  absolute inset-0 ">
        <div className="h-full flex justify-center items-center">
          <div className="login-container p-10  w-[400px]">
            <div className="login-heading">
              <h1 className="lo-login my-6">LOGIN</h1>
            </div>
            <div className="login-form ">
              <form action="#" className="p-5 flex flex-col gap-10 text-white">
                <div className="lo-username flex flex-col gap-4">
                  <span>Username :</span>
                  <input
                    type="text"
                    placeholder="Username"
                    className="first-last-input placeholder:text-slate-300"
                  />
                </div>
                <div className="lo-username flex flex-col gap-4">
                  <span>Email :</span>
                  <input
                    type="text"
                    placeholder="Email"
                    className="first-last-input placeholder:text-slate-300"
                  />
                </div>
                <div className="lo-password flex flex-col gap-4">
                  <span>Password :</span>
                  <input
                    type="password"
                    placeholder="Password"
                    className="first-last-input placeholder:text-slate-300 "
                  />
                </div>
                <div className="flex justify-center items-center flex-col gap-4">
                  <button id="hero-try">
                    <span className="Btn-text">Login</span>
                  </button>
                  <p className="x text-slate-400 text-xs underline hover:text-slate-300 ease-in duration-100">
                    Already Have Account ? <Link to="/login">Log In</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
