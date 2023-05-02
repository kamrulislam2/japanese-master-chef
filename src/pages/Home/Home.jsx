import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  console.log(data.chefs);
  return (
    <div>
      <h2>This is home</h2>
    </div>
  );
};

export default Home;
