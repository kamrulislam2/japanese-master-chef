import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { chefId, picture, name, experience_years, num_recipes, likes } = chef;
  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
      <figure>
        {/* Image will load when 5% image view done. */}

        <LazyLoad threshold={0.95}>
          <img className="h-72" src={picture} alt="chef" />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Number of experience: {experience_years} years</p>
        <p>Total recipes: {num_recipes}</p>

        <div className="card-actions items-center justify-end">
          <p className="inline-flex gap-2">
            <FaRegThumbsUp className="text-2xl" />
            <span className="text-lg font-bold">{likes}</span>
          </p>
          <Link to={`/chef/${chefId}`}>
            <button className="px-4 py-3 text-white text-lg font-medium rounded bg-gray-800 hover:bg-transparent hover:border hover:border-gray-800 hover:text-gray-800">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
