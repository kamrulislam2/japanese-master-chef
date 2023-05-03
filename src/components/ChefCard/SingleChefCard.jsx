import React from "react";
import { useLoaderData } from "react-router-dom";
import BannerForChef from "../../layouts/BannerForChef/BannerForChef";
import RecipeCard from "../RecipeCard/RecipeCard";

const SingleChefCard = () => {
  const data = useLoaderData();
  const { recipes } = data;
  //   console.log(recipes);
  return (
    <div className="mb-48">
      <BannerForChef data={data}></BannerForChef>
      <h2 className="mt-48 font-extrabold text-5xl text-center">
        Chef's Best Recipe
      </h2>
      <div className="grid grid-cols-3 mt-24 px-40 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipeId} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default SingleChefCard;
