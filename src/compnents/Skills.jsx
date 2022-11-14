import React from 'react'
import Java from "../assets/skills/java-logo-1.png";
import Python from "../assets/skills/python-logo.png";
import JavaScript from "../assets/skills/javascript-logo.png";
import Html from "../assets/skills/html5-logo.png";
import Sql from "../assets/skills/mysql-logo.png";
import Git from "../assets/skills/github-logo.png";

const Skills = () => {
    return (
        <div
          name="skills"
          className="bg-gradient-to-t from-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-7">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Skills
              </p>
              <p className="py-5">Some of the Technologies I use</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {skills.map(({ id, src, name}) => (
                <div class="text-center text-gray-500 dark:text-gray-400">
                    <img class="mx-auto mb-4 w-25 h-20 rounded-full" src={src} alt={name}/>
                    <h3 class="mb-1 text-2xl font-bold tracking-tight text-white-100 dark:text-white">
                        <p>{name}</p>
                    </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};


const skills = [
    {
      id: 1,
      src: Java,
      name: "Java"
    },
    {
      id: 2,
      src: Python,
      name: "Python"
    },
    {
      id: 3,
      src: JavaScript,
      name: "JavaScript"
    },
    {
      id: 4,
      src: Html,
      name: "HTML 5"
    },
    {
        id: 5,
        src: Git,
        name: "Github"
    },
    {
        id: 6,
        src: Sql,
        name: "SQL"
    },
  ];



export default Skills
