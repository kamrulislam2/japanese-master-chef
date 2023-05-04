import React from "react";
import NavBar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="px-40 pt-12 text-center">
        <NavBar></NavBar>
        <img
          className="h-96 rounded-lg w-2/3 mx-auto"
          src="./error-image.jpg"
          alt=""
        />

        <h2 className="font-extrabold text-8xl text-gray-500 mb-4">
          Error 404
        </h2>
        <p className="font-bold text-4xl text-gray-400 mb-6">
          (Page not found)
        </p>

        <div className="inline-flex gap-2 mb-48">
          <button
            onClick={handleGoBack}
            className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-transparent hover:border hover:border-gray-800 hover:text-gray-900"
          >
            Go Back
          </button>
          <Link to="/">
            <button className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-transparent hover:border hover:border-gray-800 hover:text-gray-900">
              {/* <HomeIcon className="h-5 w-5" /> */}
              Go Home
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
