import type { NextPage } from "next";
import React from "react";
import Navigation from "../components/Navigation";
const Teams: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <Navigation />
        <div className="fadeIn">
          <div className="max-w-7xl my-20 space-y-5">
            <h1 className="font-pricedown text-7xl text-center text-white drop-shadow-md shadow-black">
              Boutique
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
