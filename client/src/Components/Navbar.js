import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

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

              <div>
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
                      <div className="absolute right-0 mt-[20px] bg-white backdrop-filter backdrop-blur-2xl bg-opacity-10  w-48  mr-2 rounded-md shadow-lg">
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
    </>
  );
};

export default Navbar;
