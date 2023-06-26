import React from "react";
import food01 from "../../assets/food-gallery/food01.jpg";
import food02 from "../../assets/food-gallery/food02.jpg";
import food03 from "../../assets/food-gallery/food03.jpg";
import food04 from "../../assets/food-gallery/food04.jpg";
import food05 from "../../assets/food-gallery/food05.jpg";
import food06 from "../../assets/food-gallery/food06.jpg";
import food07 from "../../assets/food-gallery/food07.jpg";
import food08 from "../../assets/food-gallery/food08.jpg";
import food09 from "../../assets/food-gallery/food09.jpg";
import food10 from "../../assets/food-gallery/food10.jpg";
import food11 from "../../assets/food-gallery/food11.jpg";

const FoodGallery = () => {
  return (
    <div>
      <h2 className="text-center font-extrabold text-2xl lg:text-5xl">
        Food Gallery
      </h2>
      <hr className="border-t border-gray-400 w-4/12 lg:w-3/12 mx-auto" />
      <p className="text-lg mt-6 w-full lg:w-1/2 mx-auto text-center mb-16">
        In our Food Gallery, each image tells a story, capturing the essence of
        Japanese cuisine and showcasing the meticulous attention to detail that
        goes into every dish.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-2">
        <img
          className="lg:row-span-2 h-full w-full shadow-2xl rounded-full"
          src={food07}
          alt="food"
        />
        <img
          className="lg:col-span-2 shadow-2xl rounded-full"
          src={food02}
          alt="food"
        />
        <img
          className="h-full shadow-2xl rounded-full"
          src={food03}
          alt="food"
        />
        <img className="shadow-2xl rounded-full" src={food04} alt="food" />
        <img
          className="h-full lg:col-span-2 shadow-2xl rounded-full"
          src={food06}
          alt="food"
        />
        <img
          className="lg:row-span-2 h-full shadow-2xl rounded-full"
          src={food05}
          alt="food"
        />
        <img
          className="shadow-2xl h-full rounded-full"
          src={food01}
          alt="food"
        />
        <img
          className="shadow-2xl h-full rounded-full"
          src={food08}
          alt="food"
        />
        <img
          className="shadow-2xl h-full rounded-full"
          src={food09}
          alt="food"
        />
        <img
          className="shadow-2xl h-full rounded-full"
          src={food10}
          alt="food"
        />
        <img
          className="shadow-2xl h-full rounded-full"
          src={food11}
          alt="food"
        />
      </div>
    </div>
  );
};

export default FoodGallery;
