import React from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import aboutImage from '../assets/photo.png';

const About = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer...", "Backend Developer..."], // Strings to display
      // Speed settings, try different values until you get good results
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      loop: true
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="main-container flex flex-col lg:flex-row justify-center items-center bg-yellow-200"> {/* Changed bg-gray-200 to bg-yellow-200 */}
        <div className="data w-full lg:w-1/2 bg-yellow-200"> {/* Changed bg-gray-200 to bg-yellow-200 */}
          <div className="flex flex-col justify-center items-center mx-5 my-10 lg:my-36">
            <div>
              <h3 className="text-gray-800 text-2xl font-semibold">Hi, I am</h3>
              <h1 className="text-4xl lg:text-5xl font-bold font-serif animate-pulse delay-75 text-purple-800 text-center lg:text-left">Prafull Srivastava</h1>
              <h2 className="text-gray-800 text-xl lg:text-2xl font-semibold text-center lg:text-left">And I am a <span className="text-xl lg:text-3xl underline" ref={el}></span></h2>
              <p className="text-gray-800 text-sm lg:text-base text-center lg:text-left">Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Eius dolor nisi maiores nam quis dicta nihil. Magni asperiores totam ipsam reiciendis odit! Cupiditate,
                minus? Quia quos maiores magnam distinctio voluptas?</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start content-center space-x-5 my-2 mx-10">
            <a href="https://www.linkedin.com/in/prafull-srivastava-a0298a24a/" className="px-3 py-3 text-3xl bg-black rounded-full hover:bg-purple-700 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Prafull6307" className="px-3 py-3 text-3xl bg-black rounded-full hover:bg-purple-700 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><i className="fa-brands fa-github"></i></a>
            <a href="hello" className="px-3 py-3 text-3xl bg-black rounded-full hover:bg-purple-700 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><i class="fa-brands fa-whatsapp"></i></a>
          </div>

          <div className="flex justify-center lg:justify-start">
            <button type="button" className="text-white bg-black hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-20 my-3 me-2 mb-2 hover:shadow-lg focus:outline-none shadow-md delay-100 animate-bounce">Contact Us</button>
          </div>
        </div>

        <div className="relative w-48 h-48 lg:w-64 lg:h-64 flex-shrink-0 mt-10 lg:mt-0 ml-0 lg:ml-10 transform transition-transform hover:scale-110 hover:shadow-lg">
          <img className="rounded-full border-4 border-black w-full h-full object-cover" src={aboutImage} alt="Profile" />
        </div>
      </div>
    </>
  )
}

export default About;
