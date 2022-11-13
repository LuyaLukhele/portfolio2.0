import React from 'react'
import LinkedIn_Banner from "../assets/playground/LinkedIn_Banner.png";
import BirthdayInvitation from "../assets/playground/BirthdayInvitation.png";
import Potfolio from "../assets/projects/portfolio.png";
import MovieApp from "../assets/projects/movieApp.png";
import Quiz from "../assets/projects/Quiz.png";
import Countdown from "../assets/projects/countdown.png";

function PlayGround() {

    const projects = [
        {
          id: 1,
          src: Potfolio,
        },
        {
          id: 2,
          src: MovieApp,
        },
        {
          id: 3,
          src: Quiz,
        },
        {
          id: 4,
          src: LinkedIn_Banner,
        },
        {
          id: 5,
          src: Countdown,
        },
        {
          id: 6,
          src: BirthdayInvitation,
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
              {projects.map(({ id, src}) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt="some project"
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <a href={src} target="popup" rel="noreferrer">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        Demo
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