import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaBookmark, FaRegBookmark, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const RecipeCard = ({ recipe }) => {
  const { name, ingredients, cooking_method, rating } = recipe;
  const [fav, setFav] = useState(true);

  const handleFavorite = () => {
    toast.success("Favorite Recipe Added!");
    setFav(false);
  };

  return (
    <div className="card w-96 bg-gray-900 text-primary-content">
      <div className="card-body">
        <h2 className="font-extrabold text-xl mb-6">{name}</h2>
        <div>
          <p className="text-lg mb-2">Recipe Ingredients:</p>
          {ingredients.map((ingredient, index) => (
            <li className="text-lg text-gray-300" key={index}>
              {ingredient}
            </li>
          ))}
        </div>
        <p className="text-lg my-3">
          Cooking Method:
          <span className=" text-base text-gray-300"> {cooking_method}</span>
        </p>
        <hr className="border-b border-gray-600 " />
        <div className="text-2xl flex justify-between items-center">
          <p className="inline-flex items-center  gap-2">
            {rating}
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
          </p>
          <button disabled={!fav} onClick={handleFavorite}>
            {fav ? <FaRegBookmark></FaRegBookmark> : <FaBookmark></FaBookmark>}
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default RecipeCard;
