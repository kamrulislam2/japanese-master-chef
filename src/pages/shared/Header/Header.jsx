import React from "react";
import NavBar from "../Navbar/Navbar";
import Banner from "../../Banner/Banner";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + "./banner-bg.jpg" + ")",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="px-40 pt-12"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-4xl text-white">
            Japanese Master Chef
          </h3>
          <NavBar></NavBar>
        </div>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Header;
