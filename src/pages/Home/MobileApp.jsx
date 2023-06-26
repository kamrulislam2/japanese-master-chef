import React from "react";
import image from "../../assets/mobile-app.png";

const MobileApp = () => {
  return (
    <div className="my-36">
      <h2 className="text-center font-extrabold text-2xl lg:text-5xl">
        Introducing Our Mobile App
      </h2>
      <hr className="border-t border-gray-400 w-2/3 lg:w-1/2 mx-auto" />
      <p className="text-lg mt-6 w-full lg:w-1/2 mx-auto text-center mb-16">
        Introducing our Japanese Chef Recipe Mobile App, your passport to the
        extraordinary world of Japanese cuisine at your fingertips.
      </p>
      <img src={image} alt="" />
    </div>
  );
};

export default MobileApp;
