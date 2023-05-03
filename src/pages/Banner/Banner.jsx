import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <h2 className="text-7xl font-extrabold mb-12">Hot eats, cold treats.</h2>
      <p className="font-normal text-xl w-4/6 leading-relaxed mb-8">
        There are some things money can't buy. For everything else, there's
        MasterCard. You deserve a break today. Wake up with the King. The
        flavour of nature Just Wow!
      </p>
      <button className="px-5 py-4 bg-white text-gray-600 text-xl font-medium rounded hover:bg-transparent hover:border hover:text-white inline-flex items-center gap-1">
        Watch Recipe
        <FaAngleRight className="text-2xl" />
      </button>
    </div>
  );
};

export default Banner;
