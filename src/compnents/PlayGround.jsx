import React from 'react'
import LinkedIn_Banner from "../assets/playground/LinkedIn_Banner.png";
import Neophyte_Capital from "../assets/playground/Neophyte_Capital.png";
import Potfolio from "../assets/projects/portfolio.png";
import MovieApp from "../assets/projects/movieApp.png";
import DarkLoner from "../assets/playground/DarkLoner1.png";
import DarhkSage from "../assets/playground/DarhkSageBanner.png";

function PlayGround() {

    const projects = [
        {
          id: 1,
          src: Potfolio,
          name: "Portfolio v1.0"
        },
        {
          id: 2,
          src: MovieApp,
          name: "MovieApp"
        },
        {
          id: 3,
          src: Neophyte_Capital,
          name: "Neophyte Capital"
        },
        {
          id: 4,
          src: LinkedIn_Banner,
          name: "LinkedIn Banner"
        },
        {
          id: 5,
          src: DarhkSage,
          name: "DarhkSage Apex Banner"
        },
        {
          id: 6,
          src: DarkLoner,
          name: "DarkLoner Apex Banner"
        },
      ];
    
      return (
        <div
          name="playground"
          className="bg-gradient-to-t from-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-7">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                PlayGround
              </p>
              <p className="py-5">Things I do For fun</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {projects.map(({ id, src, name}) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt="some project"
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <a href={src} target="popup" rel="noreferrer">
                        <button className="px-6 py-3 m-4 duration-200 hover:scale-105">
                          {name}
                        </button>
                    </a>                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default PlayGround