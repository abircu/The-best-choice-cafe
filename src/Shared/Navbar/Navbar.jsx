import React from "react";

const Navbar = () => {
  const navOption = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item2</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed  z-10 bg-black  bg-opacity-15  text-black md:text-white  ">
        <div className="navbar-bg bg-black  opacity-15 "></div>
        <div className=" sm:navbar-center md:navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a href="https://web.whatsapp.com/" className=" text-xl  uppercas  ">
            The <span className=" text-cyan-500 px-2">Best choice</span>
            cafe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex text-white text-3xl">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
