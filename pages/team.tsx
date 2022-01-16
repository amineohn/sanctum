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
                    className="rounded-lg h-72"
                    alt=""
                  />
                </div>
                <div className="px-2 py-2">
                  <img
                    src="/static/images/team.jpg"
                    className="rounded-lg h-72"
                    alt=""
                  />
                </div>
                <div className="px-2 py-2">
                  <img
                    src="/static/images/team.jpg"
                    className="rounded-lg h-72"
                    alt=""
                  />
                </div>
                <div className="px-2 py-2">
                  <img
                    src="/static/images/team.jpg"
                    className="rounded-lg h-72"
                    alt=""
                  />
                </div>
                <div className="px-2 py-2">
                  <img
                    src="/static/images/team.jpg"
                    className="rounded-lg h-72"
                    alt=""
                  />
                </div>
                <div className="px-2 py-2">
                  <img
                    src="/static/images/team.jpg"
                    className="rounded-lg h-72"
                    alt=""
                  />
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
