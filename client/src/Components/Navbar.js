import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-2xl bg-opacity-10 shadow-2xl border-slate-800">
        <div className=" mx-auto px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex gap-10">
              <Link to="/">
                <span className="text-2xl text-white font-semibold">
                  Podcast
                </span>
              </Link>
            </div>

            <div className="flex space-x-4 text-white">
              <p>user is {isAuthenticated ? "logged in" : "not logged in "}</p>
              {/* {isAuthenticated && <p>{user.nickname}</p>} */}
              <Link
                to="/summery"
                className="hover:text-slate-200 transition ease-in-out delay-100"
              >
                App
              </Link>
              <Link
                href="#"
                className="hover:text-slate-200 transition ease-in-out delay-100"
              >
                Features
              </Link>
              <Link
                href="#"
                className="hover:text-slate-200 transition ease-in-out delay-100"
              >
                Contact
              </Link>
              <Link
                onClick={loginWithRedirect}
                className="hover:text-slate-200 transition ease-in-out delay-100"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hover:text-slate-200 transition ease-in-out delay-100"
              >
                Register
              </Link>
              <Link
                onClick={logout}
                className="hover:text-slate-200 transition ease-in-out delay-100"
              >
                logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
