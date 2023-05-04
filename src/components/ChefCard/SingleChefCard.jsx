import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BannerForChef from "../../layouts/BannerForChef/BannerForChef";
import RecipeCard from "../RecipeCard/RecipeCard";
import { ColorRing } from "react-loader-spinner";

const SingleChefCard = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://chef-recipe-hunter-server-kamrulislam2.vercel.app/allChefData/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setRecipes(data.recipes);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mb-48">
      <BannerForChef data={data}></BannerForChef>
      <h2 className="mt-48 font-extrabold text-5xl text-center">
        Chef's Best Recipe
      </h2>
      {loading ? (
        <div className="ml-96 pl-80 mt-40">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 mt-24 px-40 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.recipeId} recipe={recipe}></RecipeCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleChefCard;
