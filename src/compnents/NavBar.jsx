// import React, { useState } from 'react'
import { Link } from "react-scroll";
// import {FaBars, FaTimes} from "react-icons/fa";
import ThePeaceWithin from "../assets/playground/ThePeaceWithin1.mp3";


const links =[
    {
        id: 1,
        link:'home'
    },
    {
        id: 2,
        link:'about'
    },
    {
        id: 3,
        link:'projects'
    },
    {
        id: 4,
        link:'playground'
    },
    {
        id: 5,
        link:'contact'
    },
]

const NavBar = () => {

    // const [nav, SetNav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-15 px-5 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl'>Lu</h1>
        </div>

        <audio controls autoplay>
            <source src={ThePeaceWithin} type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500'>
                    <Link to={link} smooth duration={500}>
                        {link}
                    </Link>
                </li>
            
            ))}  
        </ul>
        

        {/* <div onClick={() => SetNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div> */}

    </div>
  )
}

export default NavBar