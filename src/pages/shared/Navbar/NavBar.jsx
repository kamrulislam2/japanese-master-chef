import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { AuthContext } from "../../../providers/AuthProviders";
import { ColorRing } from "react-loader-spinner";

const NavBar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="text-xl font-semibold flex items-center justify-between ">
        <h3 className="font-extrabold text-4xl">Japanese Master Chef</h3>

        <div className="inline-flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>

          {loading ? (
            <ColorRing
              visible={true}
              height="40"
              width="40"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          ) : (
            <div>
              {user ? (
                <div className="inline-flex gap-2">
                  <img
                    title={user.displayName}
                    className="w-10 h-10 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                  <button
                    onClick={handleLogOut}
                    className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-transparent hover:border hover:border-gray-800 hover:text-gray-900"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link className="inline-flex gap-2" to="/login">
                  <HiUserCircle className="text-4xl"></HiUserCircle>
                  <button className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-transparent hover:border hover:text-gray-800">
                    Login
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      <hr className="mt-12 border-t border-gray-700 mb-48" />
    </div>
  );
};

export default NavBar;
