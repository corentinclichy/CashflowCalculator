import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="  flex flex-col items-center justify-center w-full">
        <nav className="w-full">
          <div className="">
            <div className="flex justify-between h-20 px-10 shadow items-center bg-white">
              <div className="flex items-center space-x-8">
                <Link
                  className="title flex items-center justify-center cursor-pointer"
                  to="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2B9669"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <h1 className="text-lg text-green-600 font-medium">
                    CashFlow Calculator
                  </h1>
                </Link>

                <div className="hidden md:flex justify-around space-x-4"></div>
              </div>
              <div className="flex space-x-4 items-center">
                <Link
                  className="text-gray-500 hover:text-gray-700 text-sm"
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-500 text-sm"
                  to="/register"
                >
                  SIGNUP
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
