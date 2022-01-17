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
              TEAM
            </h1>
            <div className="h-[610px] overflow-auto">
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                <div className="px-2 py-2">
                  <img
                    src="/static/images/team.jpg"
                    className="rounded-t-lg h-60"
                  />
                  <div className="bg-white/25 backdrop-blur-sm px-2 py-2 rounded-b mb-0.5">
                    <p className="text-white text-center">Aron Maiden</p>
                  </div>
                </div>
                <div className="px-2 py-2">
                  <img
                    src="/static/images/team.jpg"
                    className="rounded-t-lg h-60"
                  />
                  <div className="bg-white/25 backdrop-blur-sm px-2 py-2 rounded-b mb-0.5">
                    <p className="text-white text-center">Klaivert Gotti</p>
                  </div>
                </div>
                <div className="px-2 py-2">
                  <img
                    src="/static/images/team.jpg"
                    className="rounded-t-lg h-60"
                  />
                  <div className="bg-white/25 backdrop-blur-sm px-2 py-2 rounded-b mb-0.5">
                    <p className="text-white text-center">Luciano Aburzzi</p>
                  </div>
                </div>
                <div className="px-2 py-2">
                  <img
                    src="/static/images/team.jpg"
                    className="rounded-t-lg h-60"
                  />
                  <div className="bg-white/25 backdrop-blur-sm px-2 py-2 rounded-b mb-0.5">
                    <p className="text-white text-center">John Anderson</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
