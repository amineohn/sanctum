import type { NextPage } from "next";
import React, { useState } from "react";
const Home: NextPage = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      {login && (
        <>
          <div className="flex h-screen items-center justify-center fixed inset-0 z-20">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div className="flex justify-center h-80">
              <div className="animate2 bg-[#362a4e] rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:h-full sm:rounded-lg sm:shadow-2xl sm:max-h-full">
                <div className="bg-[#362a4e] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-center items-center">
                    <div className="flex flex-col space-y-2">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-50">
                          Connexion
                        </h3>
                        <p className="mt-2 text-sm leading-5 text-neutral-100">
                          Connectez-vous pour accéder à votre compte.
                        </p>
                      </div>
                      <input
                        className="bg-[#453663] hover:bg-[#453663] transition-all px-2 py-2 rounded-lg placeholder:text-white text-white"
                        placeholder="Utilisateur"
                      />
                      <input
                        className="bg-[#453663] hover:bg-[#453663] transition-all px-2 py-2 rounded-lg placeholder:text-white text-white"
                        placeholder="Mot de passe"
                      />
                      <button
                        className="bg-[#453663] transition-all ring-2 ring-purple-900/20 text-white font-bold py-2 px-4 rounded-lg"
                        type="submit"
                      >
                        <div className="inline-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mt-0.5 mr-2"
                            viewBox="0 0 496 512"
                          >
                            <path
                              fill="currentColor"
                              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                            ></path>
                          </svg>
                          <span className="text-center">Connexion</span>
                        </div>
                      </button>
                      <button
                        className="bg-rose-600 hover:bg-rose-700 transition-all ring-2 ring-rose-900/20 text-white font-bold py-2 px-4 rounded-lg"
                        type="button"
                        onClick={() => null}
                      >
                        <div className="flex justify-center">
                          <img
                            src="https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/219915/cfxre-shadow.png"
                            className="w-24"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="flex flex-col justify-center items-center">
        <div className="w-full animate">
          <nav className="bg-black/5 backdrop-blur-sm sticky">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="transition-all duration-300 bg-[#453663] text-white px-3 py-2 rounded-lg focus:rounded-xl text-sm font-medium"
                      >
                        Acceuil
                      </a>
                      <a
                        href="#"
                        className="transition-all duration-300 bg-[#453663] text-white px-3 py-2 rounded-lg focus:rounded-xl text-sm font-medium"
                      >
                        Equipe
                      </a>
                      <a
                        href="#"
                        className="transition-all duration-300 bg-[#453663] text-white px-3 py-2 rounded-lg focus:rounded-xl text-sm font-medium"
                      >
                        Boutique
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sm:hidden" id="mobile-menu">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <a
                      href="#"
                      className="hover:bg-neutral-800 text-white px-3 py-2 rounded-md text-sm font-medium transition"
                    >
                      Acceuil
                    </a>
                    <a
                      href="#"
                      className="hover:bg-neutral-800 text-white px-3 py-2 rounded-md text-sm font-medium transition"
                    >
                      Equipe
                    </a>
                    <a
                      href="#"
                      className="hover:bg-neutral-800 text-white px-3 py-2 rounded-md text-sm font-medium transition"
                    >
                      Boutique
                    </a>
                  </div>
                </div>
                <div className="inline-flex space-x-2">
                  <a
                    href="#"
                    className="hover:bg-[#453663] text-white px-3 py-3 rounded-lg focus:rounded-full text-sm font-medium transition-all"
                    onClick={() => setLogin(!login)}
                  >
                    Login
                  </a>
                  <div className="px-3 py-2 rounded-full bg-black/20 space-y-2 lg:block hidden">
                    <div className="inline-flex space-x-2">
                      <svg
                        className="text-white w-5 h-5 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"
                        ></path>
                      </svg>

                      <p className="text-[#9b84ca] uppercase font-black">
                        <span className="mr-1 font-bold">2</span>
                        Joueurs en ligne
                      </p>
                    </div>
                  </div>
                </div>
                <div className="justify-end items-start lg:flex hidden">
                  <div className="absolute mr-12">
                    <span className="text-xs font-light text-white text-center uppercase">
                      Qu'attendez vous ?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex flex-col space-y-2 py-2 my-10">
            <div className="flex justify-center">
              <h1 className="font-pricedown text-6xl text-white drop-shadow-md shadow-[#5b2359] select-none">
                SanctumRP
              </h1>
            </div>
            <div className="flex justify-center px-2">
              <div className="flex flex-col">
                <div className="backdrop-blur-sm bg-[#b49ac8]/30 px-5 py-5 rounded-lg max-w-lg shadow">
                  <div className="">
                    <p className="font-open drop-shadow-md font-medium text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Libero labore odit adipisci! Dolores aperiam, explicabo
                      eaque saepe laborum, libero, non voluptas voluptate itaque
                      dolorem consectetur quisquam facilis corporis! Qui,
                      voluptatum?
                    </p>
                  </div>
                </div>
                <div className="flex justify-center -mt-3 z-50">
                  <button className="px-10 py-5 bg-[#b49ac8] hover:bg-[#b49ac8] hover:rounded-xl hover:scale-105 transition-all duration-200 shadow shadow-[#b49ac8] rounded-lg text-white font-medium font-open">
                    <div className="flex justify-around">
                      <div className="py-1 px-1 mr-2 rounded-full">
                        <svg
                          className="h-7 w-7  drop-shadow-md"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                        >
                          <path
                            fill="currentColor"
                            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                          />
                        </svg>
                      </div>
                      <a
                        href="https://discord.gg/t3mRBGwJ62"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-center drop-shadow-md font-open mt-0.5"
                      >
                        Rejoindre le Discord
                      </a>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full animate3 h-96">
          <div className="py-5 px-5">
            <p className="text-center text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, ratione sed sequi assumenda tenetur possimus est
              eum voluptate placeat aliquid recusandae similique maiores.
              Deleniti sunt libero culpa cumque earum fugit?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
