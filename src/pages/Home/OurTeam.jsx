import React, { useEffect } from "react";
import { useState } from "react";

const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-psi.vercel.app/teams")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
      });
  }, []);

  return (
    <div className="my-36">
      <h2 className="text-center font-extrabold text-2xl lg:text-5xl">
        Our Team
      </h2>
      <hr className="border-t border-gray-400 w-3/12 lg:w-1/6 mx-auto" />
      <p className="text-lg mt-6 w-full lg:w-1/2 mx-auto text-center mb-16">
        Behind the scenes of our Japanese Master Chef website, we have a
        dedicated team of professionals who work tirelessly to ensure a seamless
        and captivating culinary exploration for our valued visitors.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-center items-center border p-10  rounded-xl shadow-2xl">
        {teams.map((team) => (
          <div key={team.id}>
            <div className="flex items-center justify-center mb-6">
              <img
                className="w-36 h-36 rounded-full border-r-8 border-b-2 border-b-black border-r-black"
                src={team.image}
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold mb-1">{team.name}</h2>
            <p className="text-lg font-semibold">{team.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
