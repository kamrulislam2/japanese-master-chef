import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../../components/ChefCard/ChefCard";

const Home = () => {
  const data = useLoaderData();

  console.log(data.chefs);
  return (
    <div className="px-40  my-48">
      <h3 className="font-extrabold text-5xl text-center">Chefs Category</h3>
      <hr className="border-t mb-16 border-gray-400 w-3/12 mx-auto" />
      <div className="grid grid-cols-3 gap-8">
        {data.chefs.map((chef) => (
          <ChefCard key={chef.chefId} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
