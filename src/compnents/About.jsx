import React from 'react'
import myImage from "../assets/Luyanda Lukhele.png"
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-bl from-red-900 via-black to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="flex md:flex-row">
          <p className="text-xl mt-10 mr-20">
              I'm Luyanda Lukhele a Junior Developer.
              I like to create beautiful and elegant software for 
              both frontend and backend. I am ager to learn, easy going by nature.
              I am familiar with a variety of programming languages and tools, 
              Such as Java, Python, HTML, CSS, JavaScript, GIT, Docker, Spring Boot, OpenGL, SQL, 
              but I am always eager to learning new skills.
              
              I belive that Sovtech is the leading development company in south africa, which works with a lot of 
              new and and exiting companies, that will enable me to experience a lot of technologies in many areas. 
              While also allowing me to grow as a human in a world class work environment.
          </p>

          <p className="text-xl mt-5 md-full">
          <img
            src={myImage}
            alt="Luyanda Lukhele"
            className="rounded-2xl ml-20"
          />
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default About