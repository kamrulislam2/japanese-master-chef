import React from "react";
import { FaAngleRight } from "react-icons/fa";
import NavBar from "../../pages/shared/Navbar/Navbar";

const BannerForHome = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + "./banner-bg.jpg" + ")",
        height: "120vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="px-6 lg:px-40 pt-12"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
      >
        <NavBar></NavBar>
        <h2 className="text-4xl lg:text-7xl font-extrabold mb-12">
          Hot eats, cold treats.
        </h2>
        <p className="font-normal text-xl lg:w-4/6 leading-relaxed mb-8">
          There are some things money can't buy. For everything else, there's
          MasterCard. You deserve a break today. Wake up with the King. The
          flavour of nature Just Wow!
        </p>
        <button className="px-5 py-4 bg-white text-gray-600 text-xl font-medium rounded hover:bg-transparent hover:border hover:text-white inline-flex items-center gap-1">
          Watch Recipe
          <FaAngleRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default BannerForHome;
