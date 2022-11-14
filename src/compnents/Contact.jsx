import React from 'react'




const Contact = () => {

    return (
        <div
          name="contact"
          className="bg-gradient-to-t from-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-7">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Contact Me on Linkedin
              </p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            
            <div class="badge-base LI-profile-badge"><a class="badge-base__link LI-simple-link" target="_blank"  without rel="noreferrer"
            href="https://za.linkedin.com/in/luyalukhele?trk=profile-badge">Luyanda Lukhele</a></div>
            </div>
            <a href='https://za.linkedin.com/in/luyalukhele?trk=profile-badge' target="_blank" without rel="noreferrer">https://www.linkedin.com/in/luyalukhele/</a>
          </div>
        </div>
      );
};


export default Contact