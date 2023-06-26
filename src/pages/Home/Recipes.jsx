import React from "react";
import img1 from "../../assets/recipe/recipe01.jpg";
import img2 from "../../assets/recipe/recipe02.jpeg";
import img3 from "../../assets/recipe/recipe03.jpg";

const Recipes = () => {
  return (
    <div className="px-6 lg:px-40 text-center mt-36">
      <h2 className="font-extrabold text-2xl lg:text-5xl text-center">
        Our Special Recipes
      </h2>
      <hr className="border-t border-gray-400 w-1/2 lg:w-1/3 mx-auto" />
      <p className="text-lg mt-6 w-full lg:w-1/2 mx-auto text-center mb-16">
        Japanese cuisine is an artful harmony of flavors, colors, and textures,
        where every dish is a testament to simplicity, precision, and the beauty
        of nature.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative mt-52">
        <div className="flex flex-col items-center">
          <img
            className="w-48 h-48 rounded-full absolute z-10 -top-36"
            src={img1}
            alt="recipe"
          />
          <div className="card w-96 h-64 shadow-2xl bg-black text-white">
            <div className="mt-16 flex flex-col items-center justify-center px-8">
              <button className="card-title rounded-full flex items-center justify-center mb-4 py-2 px-5 bg-white text-black">
                Chorizo Bake
              </button>
              <p>
                Keep it easy with these simple but delicious recipes. From
                make-ahead lunches and midweek meals to fuss-free sides and
                moreish cakes, we've got everything
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-52 lg:m-0">
          <img
            className="w-48 h-48 rounded-full absolute z-10 top-[344px] lg:-top-36"
            src={img2}
            alt="recipe"
          />
          <div className="card w-96 h-64 shadow-2xl bg-base-100">
            <div className="mt-16 flex flex-col items-center justify-center px-8">
              <button className="card-title rounded-full flex items-center justify-center mb-4 py-2 px-5 bg-black text-white">
                PIzza Casserole
              </button>
              <p>
                Can't decide between pizza and pasta? Now you don't have to!
                This fun mash-up is the best of both worlds. Plus, you don;'t
                have to fuss with making your own dough.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-52 lg:m-0">
          <img
            className="w-48 h-48 rounded-full absolute z-10 top-[832px] lg:-top-36"
            src={img3}
            alt="recipe"
          />
          <div className="card w-96 h-64 shadow-2xl bg-base-100">
            <div className="mt-16 flex flex-col items-center justify-center px-8">
              <button className="card-title rounded-full flex items-center justify-center mb-4 py-2 px-5 bg-black text-white">
                Family Meal
              </button>
              <p>
                Kids and grown-ups will love these family dinner ideas. Our
                simple suppers include comforting pasta bakes, warming one-pots
                and speedy stir-fries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
