import React from 'react';
import Resume from '../assets/Resume.pdf';

const Me = () => {
  return (
    <div className="bg-yellow-200 py-10"> {/* Changed bg-gray-200 to bg-yellow-200 */}
      <h1 className="text-center text-3xl font-semibold underline my-5">About Me</h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5">
        <div className="w-full md:w-auto shadow-lg border bg-black p-4 rounded-md text-center hover:bg-gray-800 transition duration-300 transform hover:scale-105">
          <i className="fas fa-medal text-2xl text-white mb-2"></i>
          <h1 className="font-bold text-white">Internship</h1>
          <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim aperiam inventore sint. Ad fugit, sunt assumenda incidunt doloribus atque possimus sed rerum optio fugiat quaerat at iusto impedit officiis.</p>
        </div>
        <div className="w-full md:w-auto shadow-lg border bg-black p-4 rounded-md text-center hover:bg-gray-800 transition duration-300 transform hover:scale-105">
          <i className="fas fa-school text-2xl text-white mb-2"></i>
          <h1 className="font-bold text-white">Graduation</h1>
          <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate nisi, adipisci iure eum aut incidunt illo minima sit quae necessitatibus labore reiciendis sed architecto eius voluptates consequuntur. Id, modi.</p>
        </div>
        <div className="w-full md:w-auto shadow-lg border bg-black p-4 rounded-md text-center hover:bg-gray-800 transition duration-300 transform hover:scale-105">
          <i className="fas fa-venus-mars text-2xl text-white mb-2"></i>
          <h1 className="font-bold text-white">Projects</h1>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque omnis, assumenda nulla corporis reiciendis veritatis, quisquam deleniti a quidem quibusdam hic necessitatibus facere minus, ea velit quasi? Nam, quae nihil?</p>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <a href={Resume} download>
          <button type="button" className="btn-primary rounded-full bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium text-white py-2 px-8 mr-2 transition ease-in-out duration-300 transform hover:scale-105">Download Resume</button>
        </a>
        <button type="button" className="btn-primary rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-white py-2 px-8 transition ease-in-out duration-300 transform hover:scale-105">Let's Talk..</button>
      </div>
    </div>
  );
};

export default Me;
