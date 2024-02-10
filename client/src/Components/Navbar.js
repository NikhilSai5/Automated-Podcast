import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [mobileMenu, setMobileMenu] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleMobileCLick = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <nav className="sticky top-0 z-10 bg-[#24292e] backdrop-filter backdrop-blur-2xl bg-opacity-40 ">
        <div className=" mx-auto px-10">
          <div className="flex items-center justify-between h-[60px]">
            <div className="flex gap-10">
              <Link to="/">
                <span className="text-2xl text-white font-semibold">
                  Podcast
                </span>
              </Link>
            </div>

            <div className="flex lg:flex-row flex-row-reverse gap-2 items-center justify-center">
              <div className="lg:flex lg:space-x-4 text-white hidden">
                <Link
                  to="/summery"
                  className="hover:text-slate-200 transition ease-in-out delay-100"
                >
                  Listen
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
                  href="#"
                  className="hover:text-slate-200 transition ease-in-out delay-100"
                >
                  Plans
                </Link>
                <Link
                  href="#"
                  className="hover:text-slate-200 transition ease-in-out delay-100"
                >
                  About Me
                </Link>
              </div>
              <div className="lg:hidden ">
                <button
                  data-collapse-toggle="navbar-user"
                  type="button"
                  class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-user"
                  aria-expanded="false"
                  onClick={handleMobileCLick}
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>

              <div className="profile-container">
                {isAuthenticated ? (
                  <>
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full md:me-0 hover:ring-4 hover:ring-gray-600"
                      id="user-menu-button"
                      aria-expanded="false"
                      onClick={handleDropdownToggle}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                      />
                    </button>
                    {isDropdownVisible && (
                      <div className="absolute right-0 mt-[20px]  bg-[#1e2836]  w-48  mr-2 rounded-md shadow-lg">
                        <div className="px-4 py-3">
                          <span className="block text-sm text-white">
                            {user.nickname}
                          </span>
                          <span className="block text-sm   truncate text-slate-300">
                            {user.name}
                          </span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                          <>
                            <li>
                              <Link
                                href="#"
                                className="block px-4 py-2 text-sm  hover:bg-[#314572] text-white"
                              >
                                Profile
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="block px-4 py-2 text-sm  hover:bg-[#314572] text-white"
                              >
                                History
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="block px-4 py-2 text-sm  hover:bg-[#314572] text-white"
                              >
                                My Queue
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="block px-4 py-2 text-sm  hover:bg-[#314572] dark:text-gray-200 dark:hover:text-white"
                                onClick={logout}
                              >
                                Logout
                              </Link>
                            </li>
                          </>
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full md:me-0 hover:ring-4 hover:ring-gray-600"
                      id="user-menu-button"
                      aria-expanded="false"
                      onClick={loginWithRedirect}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                      />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {mobileMenu && (
        <div className="lg:hidden m-1 ">
          <div className="lg:flex lg:space-x-4 text-white bg-[#24292e] backdrop-filter bg-opacity-40  w-full  mr-2 rounded-md  flex flex-col gap-4">
            <y>
              <Link
                to="/summery"
                className="mobile-nav-links hover:bg-[#314572] py-2  transition ease-in-out delay-100 flex justify-center items-center"
              >
                Listen
              </Link>

              <Link
                href="#"
                className="mobile-nav-links hover:bg-[#314572] py-2 transition ease-in-out delay-100 flex justify-center items-center"
              >
                Features
              </Link>

              <Link
                href="#"
                className="mobile-nav-links hover:bg-[#314572] py-2 transition ease-in-out delay-100 flex justify-center items-center"
              >
                Contact
              </Link>

              <Link
                href="#"
                className="mobile-nav-links hover:bg-[#314572] py-2 transition ease-in-out delay-100 flex justify-center items-center"
              >
                Plans
              </Link>

              <Link
                href="#"
                className="mobile-nav-links hover:bg-[#314572] py-2 transition ease-in-out delay-100 flex justify-center items-center"
              >
                About Me
              </Link>
            </y>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
