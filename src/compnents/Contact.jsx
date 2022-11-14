import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import myImage from "../assets/Luyanda Lukhele.png"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mkz60u5', 'template_yrotd7p', form.current, 'bcq4sNURuQCJym2xM')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully"
          })
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          })
      });
      e.target.reset();
  };
    return (
        <div
          name="contact"
          className="bg-gradient-to-t from-black to-gray-800 w-full text-white md:h-screen"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-7">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Contact Me
              </p>
            </div>
  
          <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:px-0">
            
            <form ref={form} onSubmit={sendEmail} 
            className="max-w-xs m-20 rounded-sm">
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Name…"
                required className="mt-1
                    block
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0 text-black"/>
                <br/>
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Email@something.com"
                className="mt-1
                    block
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0 text-black"/>
                <br/>
              <label>Message</label>
              <textarea name="message" placeholder="Reach out to me" 
                className=" mt-1
                    block
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0 text-black"/>
              <button type="submit" className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white
              mt-5 py-2 px-4 border border-red-500 hover:border-transparent rounded">Submit</button>
            </form>


            <div>
            <div className="w-60 mt-20 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
            <div className="mt-6 w-fit mx-auto">
                <img src={myImage} class="rounded-full w-28 " alt="Luyanda lukhele"/>
            </div>

            <div className="mt-8 ">
                <a href='https://www.linkedin.com/in/luyalukhele/' className="text-white font-bold text-2xl tracking-wide">Luyanda <br/> Lukhele</a>
            </div>
            <p className="text-red-500 font-semibold mt-2.5" >
                LinkedIn
            </p>
            </div>
            </div>
                        

          </div>
        </div>
        </div>
      );
};


export default Contact