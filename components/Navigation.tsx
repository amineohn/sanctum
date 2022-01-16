import { useRouter } from "next/router";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Navigation = () => {
  // login
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setLogin(true);
      setSuccess("Login Successful");
      toast.success("Login Successful");
    } else {
      setError("Invalid Credentials");
      toast.error("Invalid Credentials");
    }
  };

  const router = useRouter();
  return (
    <>
      {error && <Toaster />}
      {success && <Toaster />}
      {login && (
        <>
          <div
            className={`flex flex-col h-screen items-center justify-center fixed inset-0 z-20 antialiased ${
              login ? "swing" : "exit"
            }`}
          >
            <div className="absolute inset-0 opacity-75"></div>
            <div className="flex justify-center h-80">
              <div className="slide bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:h-full sm:rounded-lg sm:shadow-2xl sm:max-h-full">
                <div className="bg-white backdrop-blur-md px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-center items-center">
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between">
                        <div className="flex flex-col">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Connexion
                          </h3>
                          <p className="mt-2 text-sm leading-5 text-neutral-900">
                            Connectez-vous pour accéder à votre compte.
                          </p>
                        </div>
                        <div>
                          <svg
                            className="text-red-500 w-5 h-5"
                            onClick={() => setLogin(!login)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 352 512"
                          >
                            <path
                              fill="currentColor"
                              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <form
                        className="flex flex-col space-y-2"
                        onSubmit={handleSubmit}
                      >
                        <input
                          className="border border-neutral-400 transition-all px-2 py-2 rounded-xl placeholder:text-black text-black font-normal !bg-white"
                          placeholder="Nom d'utilisateur"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                          className="border border-neutral-400 transition-all px-2 py-2 rounded-xl placeholder:text-black text-black font-normal !bg-white"
                          placeholder="Mot de passe"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="grid grid-cols-2 space-x-2">
                          <button
                            className="bg-gradient-to-r from-green-800 to-green-900 transition-all text-white font-bold py-1 px-1 rounded-xl"
                            type="submit"
                          >
                            <div className="inline-flex items-center space-x-2 mt-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                viewBox="0 0 496 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                                ></path>
                              </svg>
                              <span className="text-center text-sm font-medium">
                                Connexion
                              </span>
                            </div>
                          </button>
                          <button
                            className="bg-gradient-to-r from-rose-500 to-rose-700 transition-all text-white font-bold py-2 px-4 rounded-xl"
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
                      </form>
                      <button className="py-5 px-5 rounded-xl bg-gradient-to-r from-blue-800 to-blue-900">
                        <div className="flex justify-center items-center space-x-2">
                          <svg
                            className="text-white w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                          >
                            <path
                              fill="currentColor"
                              d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                            ></path>
                          </svg>
                          <span className="text-white font-bold text-xl">
                            Inscription
                          </span>
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
      <div className="w-full animate">
        <nav className="sticky">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <a
                      onClick={() => router.push("/")}
                      className="transition-all duration-300 text-white text-opacity-60 hover:text-opacity-100 px-3 py-2 rounded-lg focus:rounded-xl text-sm font-medium"
                    >
                      Acceuil
                    </a>
                    <a
                      onClick={() => router.push("/team")}
                      className="transition-all duration-300 text-white text-opacity-60 hover:text-opacity-100 px-3 py-2 rounded-lg focus:rounded-xl text-sm font-medium"
                    >
                      Equipe
                    </a>
                    <a
                      onClick={() => router.push("/shop")}
                      className="transition-all duration-300 text-white text-opacity-60 hover:text-opacity-100 px-3 py-2 rounded-lg focus:rounded-xl text-sm font-medium"
                    >
                      Boutique
                    </a>
                  </div>
                </div>
              </div>
              <div className="sm:hidden" id="mobile-menu">
                <div className="flex justify-center items-center">
                  <div className="py-4 px-4 space-y-1 mr-14">
                    <a
                      onClick={() => router.push("/")}
                      className="transition-all duration-300 text-white text-opacity-60 hover:text-opacity-100 px-3 py-2 rounded-lg focus:rounded-xl text-sm font-medium"
                    >
                      Acceuil
                    </a>
                    <a
                      onClick={() => router.push("/team")}
                      className="transition-all duration-300 text-white text-opacity-60 hover:text-opacity-100 px-3 py-2 rounded-lg focus:rounded-xl text-sm font-medium"
                    >
                      Equipe
                    </a>
                    <a
                      onClick={() => router.push("/shop")}
                      className="transition-all duration-300 text-white text-opacity-60 hover:text-opacity-100 px-3 py-2 rounded-lg focus:rounded-xl text-sm font-medium"
                    >
                      Boutique
                    </a>
                  </div>
                </div>
                <div className="flex justify-center mr-14">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-green-800 to-green-900 shadow shadow-green-900 text-white px-3 py-3 rounded-full text-sm font-medium transition-all"
                    onClick={() => setLogin(!login)}
                  >
                    <div className="">
                      <div className="flex space-x-2">
                        <div className="bg-black py-2 px-2 rounded-full">
                          <svg
                            role="img"
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex justify-center flex-col">
                          <span className="text-justify lg:truncate">
                            Connexion
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="sm:inline-flex hidden">
                <a
                  href="#"
                  className="bg-gradient-to-r from-blue-800 to-blue-900 shadow shadow-blue-900 text-white px-3 py-3 rounded-full text-sm font-medium transition-all"
                  onClick={() => setLogin(!login)}
                >
                  <div className="">
                    <div className="flex space-x-2">
                      <div className="bg-black py-2 px-2 rounded-full">
                        <svg
                          role="img"
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex justify-center flex-col">
                        <span className="text-justify lg:truncate">
                          Connexion
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
