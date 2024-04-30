/** @format */

import React from "react";
import Resume from "../assets/Resume.pdf";

const Me = () => {
  return (
    <div className="bg-yellow-200 py-10">
      {" "}
      {/* Changed bg-gray-200 to bg-yellow-200 */}
      <h1 className="text-center text-3xl font-semibold  my-5">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5">
        <div className="w-full md:w-auto shadow-lg border bg-black p-4 rounded-md text-center hover:bg-gray-800 transition duration-300 transform hover:scale-105">
          <i className="fas fa-medal text-2xl text-white mb-2"></i>
          <h1 className="font-bold text-white">Internship</h1>
          <p className="text-gray-300">
            During a transformative 2-month journey at BISAG, I delved deep into
            the realm of software development, honing my skills amidst a dynamic
            environment. Navigating intricate challenges, I contributed to
            projects with precision and creativity, fostering a culture of
            innovation and collaboration. My time at BISAG was more than an
            internship; it was a transformative experience that fueled my
            passion for crafting exceptional software solutions.
          </p>
        </div>
        <div className="w-full md:w-auto shadow-lg border bg-black p-4 rounded-md text-center hover:bg-gray-800 transition duration-300 transform hover:scale-105">
          <i className="fas fa-school text-2xl text-white mb-2"></i>
          <h1 className="font-bold text-white">Graduation</h1>
          <p className="text-gray-300">
            As a dedicated student pursuing my B.Tech at Netaji Subhas
            University of Technology, I immerse myself in the ever-evolving
            world of technology with boundless curiosity and enthusiasm. Driven
            by a relentless pursuit of knowledge, I embrace challenges as
            opportunities for growth, leveraging cutting-edge resources and
            collaborative learning environments to expand my horizons. My
            journey at NSUT epitomizes a relentless quest for excellence, where
            each day unfolds as a new chapter in my pursuit of academic and
            personal fulfillment.
          </p>
        </div>
        <div className="w-full md:w-auto shadow-lg border bg-black p-4 rounded-md text-center hover:bg-gray-800 transition duration-300 transform hover:scale-105">
          <i className="fas fa-venus-mars text-2xl text-white mb-2"></i>
          <h1 className="font-bold text-white">Projects</h1>
          <p className="text-gray-300">
            Having delved deep into the realms of Next.js and React.js, I've
            embarked on a transformative journey of crafting dynamic and
            immersive web experiences. From conceptualization to execution, I've
            been an integral part of projects where I've leveraged the power of
            Next.js and React.js to bring ideas to life, seamlessly blending
            creativity with functionality. With a keen eye for detail and a
            passion for innovation, I continuously strive to push the boundaries
            of what's possible, ensuring that each project I undertake leaves a
            lasting impression.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <a href={Resume} download>
          <button
            type="button"
            className="btn-primary rounded-full bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium text-white py-2 px-8 mr-2 transition ease-in-out duration-300 transform hover:scale-105"
          >
            Download Resume
          </button>
        </a>
        
      </div>
    </div>
  );
};

export default Me;
