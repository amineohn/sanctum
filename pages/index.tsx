import type { NextPage } from "next";
import React from "react";
import Navigation from "../components/Navigation";
const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Navigation />

        <div className="fadeIn">
          <div className="max-w-7xl my-20">
            <div className="flex flex-col space-y-5 justify-center items-center">
              <img src="/static/images/SV2.png" />
              <div className="flex justify-center items-center max-w-2xl hidden">
                <p className="text-white font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  commodi, ipsa quae, assumenda consectetur nesciunt aliquid
                  itaque atque nulla doloremque repellendus ab. Quasi,
                  repudiandae consequuntur voluptatibus porro enim qui magni.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <a
                href="https://discord.gg/t3mRBGwJ62"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-40 h-14 rounded-lg bg-blue-400/25 hover:bg-blue-400/20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                  <div className="flex justify-evenly px-5">
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                      ></path>
                    </svg>
                    <div className="flex">
                      <span className="text-white font-bold">Discord</span>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-zinc-50/20 px-2 py-2 rounded-lg max-w-2xl hidden">
              <p className="text-white font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                commodi, ipsa quae, assumenda consectetur nesciunt aliquid
                itaque atque nulla doloremque repellendus ab. Quasi, repudiandae
                consequuntur voluptatibus porro enim qui magni.
              </p>
            </div>
          </div>
          <div className="top-0 sticky mt-5">
            <div className="flex justify-center items-center">
              <div className="bg-gradient-to-r from-red-700 to-red-800 px-4 py-4 rounded-lg flex items-center space-x-2">
                <svg
                  className="text-white w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M320 32C196.3 32 96 132.3 96 256c0 123.76 100.3 224 224 224s224-100.24 224-224c0-123.7-100.3-224-224-224zm0 400c-97.05 0-176-78.95-176-176S222.95 80 320 80s176 78.95 176 176-78.95 176-176 176zm0-112c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm22.32-192h-44.64c-9.47 0-16.86 8.17-15.92 17.59l12.8 128c.82 8.18 7.7 14.41 15.92 14.41h19.04c8.22 0 15.1-6.23 15.92-14.41l12.8-128c.94-9.42-6.45-17.59-15.92-17.59zM48 256c0-59.53 19.55-117.38 55.36-164.51 5.18-6.81 4.48-16.31-2.03-21.86l-12.2-10.41c-6.91-5.9-17.62-5.06-23.15 2.15C23.32 117.02 0 185.5 0 256c0 70.47 23.32 138.96 65.96 194.62 5.53 7.21 16.23 8.05 23.15 2.16l12.19-10.4c6.51-5.55 7.21-15.04 2.04-21.86C67.55 373.37 48 315.53 48 256zM572.73 59.71c-5.58-7.18-16.29-7.95-23.17-2l-12.15 10.51c-6.47 5.6-7.1 15.09-1.88 21.87C572.04 137.47 592 195.81 592 256c0 60.23-19.96 118.57-56.46 165.95-5.22 6.78-4.59 16.27 1.88 21.87l12.15 10.5c6.87 5.95 17.59 5.18 23.17-2C616.21 396.38 640 327.31 640 256c0-71.27-23.79-140.34-67.27-196.29z"
                  ></path>
                </svg>
                <p className="text-white">
                  Le site web est encore en construction, n'hésitez pas à nous
                  contacter pour toutes questions ou suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
