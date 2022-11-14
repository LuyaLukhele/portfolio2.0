
import React, { Component } from 'react'
import { Link } from "react-scroll";
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
        link:'skills'
    },
    {
        id: 5,
        link:'playground'
    },
    {
        id: 6,
        link:'contact'
    },
]

class Song extends Component{
    state = {
        audio: new Audio(ThePeaceWithin),
        isPlaying: false,
    };
    
    playPause = () => {
        let isPlaying = this.state.isPlaying
        if (isPlaying){
            this.state.audio.pause();
        }
        else{
            this.state.audio.play();
        }
        this.setState({isPlaying: !isPlaying});
        
    };

    render() {
        return (
          <div>
            <button onClick={this.playPause}>
            {this.state.isPlaying ? 
                "Pause " : 
                "Play "}
            | The Peace Within
            </button>
          </div>
        );
      }
}




const NavBar = () => {

  return (
    <div className='flex justify-between items-center w-full h-20 px-10 text-white bg-black fixed'>
        <div>
            <Song/>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500'>
                    <Link to={link} smooth duration={500}>
                        {link}
                    </Link>
                </li>
            
            ))}  
        </ul>

    </div>
  )
}

export default NavBar