import React from 'react'
import Typed from 'react-typed';

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
        
        <Typed className='text-white' 
        strings={["Click on the top left play button","2015 and 2016 Chess campion at DHS", "I enjoy movie soundtracks more then 'actual' music."
        ,"I sometimes solve bugs in my dreams"]} 
        typeSpeed={80} backSpeed={10} loop={true} shuffle={false} backDelay={1000} cursorChar ={' &#128526'}></Typed>
        <div>
        </div>
      </div>

    </div>
  </div>
);
};

export default HomePage