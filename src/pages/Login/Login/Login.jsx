import React, { useContext, useState } from "react";
import NavBar from "../../shared/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Login = () => {
  const { signIn, signInGoogle, signInGitHub } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Normal login by email and password
  const handleLogin = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(location.state?.from?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    form.reset();
  };

  // Google login
  const handleLoginGoogle = (event) => {
    setError("");
    event.preventDefault();

    signInGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   Github login
  const handleGitHubLogin = (event) => {
    setError("");
    event.preventDefault();

    signInGitHub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(location.state?.from?.pathname || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-40 pt-12">
      <NavBar></NavBar>
      <div className="w-1/2 mx-auto text-center mb-48 ">
        <form onSubmit={handleLogin} className="card border shadow-xl p-10">
          <h2 className="font-extrabold text-4xl mb-6">Please Login</h2>
          <label className="text-start flex flex-col">
            Your Email
            <input
              className="border px-2 py-4 rounded-lg mb-6 mt-2"
              type="email"
              name="email"
              required
              placeholder="Enter email"
            />
          </label>
          <label className="text-start flex flex-col">
            Your Password
            <input
              className="border px-2 py-4 rounded-lg mb-6 mt-2"
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </label>
          <p className="text-left mb-2 font-semibold text-red-600">{error}</p>
          <button
            className=" py-4 text-white text-lg font-medium rounded bg-gray-800 hover:bg-transparent hover:border hover:border-gray-800 hover:text-gray-800"
            type="submit"
          >
            Login
          </button>

          <div className="mt-6 inline-flex items-center justify-center gap-6">
            <button
              onClick={handleLoginGoogle}
              className="px-4 py-3 text-gray-800 text-lg font-medium rounded bg-white hover:bg-transparent border border-gray-800 hover:text-white hover:bg-gray-800 inline-flex items-center gap-2"
            >
              <FcGoogle /> Sign In Google
            </button>
            <button
              onClick={handleGitHubLogin}
              className="px-4 py-3 text-gray-800 text-lg font-medium rounded bg-white hover:bg-transparent border border-gray-800 hover:text-white hover:bg-gray-800 inline-flex items-center gap-2"
            >
              <FaGithub /> Sign In GitHub
            </button>
          </div>
          <p className="mt-6">
            Don't have an account? Please{" "}
            <Link className="underline" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
