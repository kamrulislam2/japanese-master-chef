import React, { useEffect, useState } from "react";
import ChefCard from "../../components/ChefCard/ChefCard";
import BannerForHome from "../../layouts/BannerForHome/BannerForHome";
import { ColorRing } from "react-loader-spinner";
import AboutUs from "../AboutUs/AboutUs";
import News from "../News/News";
import Recipes from "./Recipes";
import Reviews from "./Reviews";
import MobileApp from "./MobileApp";
import QnA from "./QnA";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://chef-recipe-hunter-server-kamrulislam2.vercel.app/allChefData"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.chefs);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <BannerForHome></BannerForHome>
      <Recipes />
      <div className="px-6 lg:px-40  my-48">
        <h3 className="font-extrabold text-2xl lg:text-5xl text-center">
          Chefs Category
        </h3>
        <hr className="border-t border-gray-400 w-1/3 lg:w-3/12 mx-auto" />
        <p className="text-lg mt-6 w-full lg:w-1/2 mx-auto text-center mb-16">
          Experience the passion and expertise of these talented chefs as they
          create culinary masterpieces that will enchant your taste buds and
          leave you craving for more.
        </p>
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 relative">
          {loading ? (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* loader during data load */}
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
            data.map((chef) => (
              <ChefCard key={chef.chefId} chef={chef}></ChefCard>
            ))
          )}
        </div>
        <AboutUs></AboutUs>
        <News></News>
        <Reviews />
        <MobileApp />
        <QnA />
      </div>
    </div>
  );
};

export default Home;
