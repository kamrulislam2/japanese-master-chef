import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-40 py-20 bg-black ">
      <div className="grid grid-cols-3">
        <div className="text-white">
          <h3 className="font-extrabold text-2xl mb-6">Japanese Master Chef</h3>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Japanese Master Chef is best known from his appearances on Iron
            Chef. His food presentation skills are exemplary and has been
            strongly influenced by Western cooking styles.
          </p>
          <div className="inline-flex items-center gap-4">
            <p className="text-3xl">
              <FaFacebook />
            </p>
            <p className="text-3xl">
              <FaTwitter />
            </p>
            <p className="text-3xl">
              <FaInstagram />
            </p>
          </div>
        </div>
        <div className="text-white ml-48">
          <h4 className="font-extrabold text-xl mb-6">Services</h4>
          <div className="flex flex-col">
            <Link className="text-lg text-gray-300 mb-6" to="/">
              Home
            </Link>
            <Link className="text-lg text-gray-300 mb-6" to="/blog">
              Blog
            </Link>
            <Link className="text-lg text-gray-300 mb-6" to="/login">
              Login
            </Link>
            <Link className="text-lg text-gray-300 mb-6" to="/register">
              Register
            </Link>
          </div>
        </div>
        <div className="text-white ml-28">
          <h4 className="font-extrabold text-xl mb-6">Contact Us</h4>

          <p className="text-lg text-gray-300 mb-6">
            Phone: <span>+91 254 785 587</span>
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Email: <span>japanese@masterChef.com</span>
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Address:
            <span>
              {" "}
              302-1055, Higashiteragata
              <br /> City: Tama-shi, State: Tokyo
            </span>
          </p>
        </div>
      </div>
      <hr className=" border border-gray-600 w-9/12 mx-auto mb-6 mt-8" />
      <p className="text-sm text-gray-500 text-center">
        <span>© 2023 All rights reserved, Japanese Master Chef</span>
      </p>
    </div>
  );
};

export default Footer;
