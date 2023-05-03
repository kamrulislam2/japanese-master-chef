import React from "react";
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";

const NavBar = () => {
  return (
    <div className="text-xl font-semibold inline-flex gap-4 items-center">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>

      <Link to="/login">
        <HiUserCircle className="text-4xl"></HiUserCircle>
        {/* <button className="px-5 py-2 bg-white text-gray-600 rounded hover:bg-transparent hover:border hover:text-white">
          Login
        </button> */}
      </Link>
    </div>
  );
};

export default NavBar;
