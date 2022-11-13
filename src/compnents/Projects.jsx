import React from 'react'
// import Potfolio from "../assets/projects/arrayDestruct.jpg";
import Todo from "../assets/projects/TodoApp.JPG";
import GitHub from "../assets/projects/gitHub.png";
import Potfolio from "../assets/projects/portfolio.png";
import MovieApp from "../assets/projects/movieApp.png";
import Quiz from "../assets/projects/Quiz.png";
import Countdown from "../assets/projects/countdown.png";





function Projects() {

    const projects = [
        {
          id: 1,
          src: Potfolio,
          demo:"https://luyalukhele.github.io/",
          git: "https://github.com/LuyaLukhele/LuyaLukhele.github.io",
          name: "Potfolio v1.0"
        },
        {
          id: 2,
          src: MovieApp,
          demo:"https://movie-luyapp.netlify.app",
          git: "https://github.com/LuyaLukhele/movie-app",
          name: "Movie App"
        },
        {
          id: 3,
          src: Quiz,
          demo:"https://quiz-luyapp.netlify.app",
          git: "https://github.com/LuyaLukhele/quiz-app",
          name: "Quiz App"
        },
        {
          id: 4,
          src: Todo,
          demo:"https://todo-luyapp.netlify.app",
          git: "https://github.com/LuyaLukhele/Todo-App",
          name: "Todo App"
        },
        {
          id: 5,
          src: Countdown,
          demo:"https://countdown-luyapp.netlify.app",
          git: "https://github.com/LuyaLukhele/Countdown_Timer",
          name: "Countdown Timmer"
        },
        {
          id: 6,
          src: GitHub,
          demo:"https://github.com/LuyaLukhele",
          git: "https://github.com/LuyaLukhele",
          name:"GitHub Repo"
        },
      ];
    
      return (
        <div
          name="projects"
          className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-7">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Projects
              </p>
              <p className="py-5">Check out some of my projects</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {projects.map(({ id, src , demo, git, name}) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt="some project"
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <a href={demo} target="_blank" rel="noreferrer">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                          {name}
                        </button>
                    </a>
                    <a href={git} target="_blank" rel="noreferrer">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Code
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

export default Projects