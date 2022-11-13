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
          <p className="text-xl mt-10">
              I'm Luyanda Lukhele a Junior Developer.
              I like to create beautiful and elegant software for 
              both frontend and backend. I am ager to learn, easy going by nature 
              and able to get along with both work colleagues and senior managers. 
              I am hands on and can contribute in all stages of the software 
              development life cycle from planning to deployment and maintenance.
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