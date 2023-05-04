import React, { useEffect, useState } from "react";
import ChefCard from "../../components/ChefCard/ChefCard";
import BannerForHome from "../../layouts/BannerForHome/BannerForHome";
import { ColorRing } from "react-loader-spinner";
import AboutUs from "../AboutUs/AboutUs";
import News from "../News/News";

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
      <div className="px-40  my-48">
        <h3 className="font-extrabold text-5xl text-center">Chefs Category</h3>
        <hr className="border-t mb-16 border-gray-400 w-3/12 mx-auto" />
        <div className="grid grid-cols-3 gap-8">
          {loading ? (
            <div className="ml-96 pl-52 mt-36">
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
      </div>
    </div>
  );
};

export default Home;
