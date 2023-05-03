import React from "react";
import NavBar from "../../pages/shared/Navbar/Navbar";

const BannerForChef = ({ data }) => {
  const { picture, name, description, likes, num_recipes, experience_years } =
    data;
  return (
    <div>
      <div
        className="px-40 pt-12 pb-36"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          color: "white",
        }}
      >
        <NavBar></NavBar>
        <div className="shadow-xl flex justify-between">
          <figure>
            <img
              className="w-8/12 h-full rounded-full"
              src={picture}
              alt="chef"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-extrabold text-2xl mb-6">{name}</h2>
            <p className="leading-relaxed text-lg text-gray-300 mb-6">
              {description}
            </p>
            <p className="leading-relaxed text-lg text-gray-300 mb-3">
              Number of Likes: {likes}
            </p>
            <p className="leading-relaxed text-lg text-gray-300 mb-3">
              Total recipes: {num_recipes}
            </p>
            <p className="leading-relaxed text-lg text-gray-300 mb-3">
              Year of Experiences: {experience_years}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerForChef;
