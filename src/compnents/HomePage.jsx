import React from 'react'
import Typed from 'react-typed';
// import disableScroll from 'disable-scroll';
// import HeroImage from "../assets/heroImage.png";
// import { Link } from "react-scroll";


const HomePage = () => {
  return (
   
    <div
    name="home"
    className="h-screen w-full bg-gradient-to-br from-black via-black to-red-900">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Luyanda Lukhele
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
          Random facts about me 
        </p>
        
        <Typed className='text-white' strings={["Developer", "Engineer"]} typeSpeed={100} 
        backSpeed={100} loop={true}></Typed>

        <div>
        </div>
      </div>

    </div>
  </div>
);
};

export default HomePage