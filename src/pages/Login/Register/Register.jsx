import React, { useContext, useState } from "react";
import NavBar from "../../shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, user } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    setSuccess("");
    setError("");
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateUser(loggedUser, name, photo);
        console.log(loggedUser);
        setSuccess("Registration successful");
      })
      .catch((error) => {
        if (error) {
          setError(error.message);
        }
      });
    form.reset();
  };

  const updateUser = (loggedUser, name, photo) => {
    updateProfile(loggedUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(user);
  return (
    <div className="px-40 pt-12">
      <NavBar></NavBar>
      <div className="w-1/2 mx-auto text-center mb-48 ">
        <form onSubmit={handleRegister} className="card border shadow-xl p-10">
          <h2 className="font-extrabold text-4xl mb-6">Please Register</h2>
          <label className="text-start flex flex-col">
            Your Name
            <input
              className="border px-2 py-4 rounded-lg mb-6 mt-2"
              type="text"
              name="name"
              required
              placeholder="Enter name"
            />
          </label>
          <label className="text-start flex flex-col">
            Your Photo URL
            <input
              className="border px-2 py-4 rounded-lg mb-6 mt-2"
              type="text"
              name="photo"
              required
              placeholder="Enter URL"
            />
          </label>
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
            Password
            <input
              className="border px-2 py-4 rounded-lg mb-6 mt-2"
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </label>
          <p className="text-left mb-2 font-semibold text-green-700">
            {success}
          </p>
          <p className="text-left mb-2 font-semibold text-red-600">{error}</p>
          <button
            className=" py-4 text-white text-lg font-medium rounded bg-gray-800 hover:bg-transparent hover:border hover:border-gray-800 hover:text-gray-800"
            type="submit"
          >
            Register
          </button>

          <p className="mt-6">
            Already have an account? Please{" "}
            <Link className="underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
