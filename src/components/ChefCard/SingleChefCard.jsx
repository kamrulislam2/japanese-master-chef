import React from "react";
import { useLoaderData } from "react-router-dom";
import BannerForChef from "../../layouts/BannerForChef/BannerForChef";

const SingleChefCard = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <BannerForChef data={data}></BannerForChef>
      <h2>This is chef single card</h2>
    </div>
  );
};

export default SingleChefCard;
