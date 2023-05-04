import React from "react";

const News = () => {
  return (
    <div className="mt-40">
      <h3 className="text-center font-extrabold text-5xl ">Some recent News</h3>
      <hr className="border-t mb-16 border-gray-400 w-4/12 mx-auto" />

      <div className="grid grid-cols-3 mt-24">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-64 w-full"
              src="https://a.cdn-hotels.com/gdcs/production162/d1605/dda6f9f9-ab51-4502-a8fb-7a5ac7f4be3f.jpg"
              alt="food"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Maguro Nigiri
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Form the sushi rice into oblong shapes. op each rice ball with a
              slice of tuna. Serve with wasabi...
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Read More</div>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-64 w-full"
              src="https://www.wondriumdaily.com/wp-content/uploads/2017/07/thumbnail-6.jpg"
              alt="food"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Saba Nitsuke
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Cut the mackerel into serving-size pieces. Combine soy sauce,
              sake, mirin, and ginger in a pot
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Read More</div>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-64 w-full"
              src="https://top.his-usa.com/destination-japan/up_img/cke/imgs/20171122/sushi.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Black Cod Miso
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>
              Mix white miso paste, mirin, sake, and sugar to make the marinade.
              Marinate the black cod for at least 24 hours....
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Read More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
