import React from "react";
import NavBar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Error = () => {
  return (
    <div>
      <div className="px-40 pt-12">
        <NavBar></NavBar>
        <h2>This is error page</h2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
