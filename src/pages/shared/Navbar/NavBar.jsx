import React from "react";
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";

const NavBar = () => {
  return (
    <div>
      <div className="text-xl font-semibold flex items-center justify-between ">
        <h3 className="font-extrabold text-4xl">Japanese Master Chef</h3>

        <div className="inline-flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>

          <Link to="/login">
            <HiUserCircle className="text-4xl"></HiUserCircle>
            {/* <button className="px-5 py-2 bg-white text-gray-600 rounded hover:bg-transparent hover:border hover:text-white">
          Login
        </button> */}
          </Link>
        </div>
      </div>
      <hr className="mt-12 border-t border-gray-700 mb-48" />
    </div>
  );
};

export default NavBar;
