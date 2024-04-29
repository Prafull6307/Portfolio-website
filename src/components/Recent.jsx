import React from 'react';
import IMG1 from '../assets/img1.png';
import IMG2 from '../assets/img2.png';

const Recent = () => {
  return (
    <>
      <section className="bg-yellow-200"> {/* Changed bg-gray-200 to bg-yellow-200 */}
        <h5 className="text-center py-4 font-semibold text-2xl text-gray-800">My Recent Work</h5>
        <h2 className="text-center py-2 font-bold text-2xl underline my-5">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 py-2 rounded  justify-center content-center">
          <article className="bg-white rounded-md shadow-lg overflow-hidden">
            <div>
              <img src={IMG1} alt="Portfolio 1" className="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></img>
            </div>
            <h1 className="my-4 font-semibold text-gray-800 text-center">This is my portfolio</h1>
            <div className="flex justify-center">
              <a href="https://github.com/Prafull6307" className="btn bg-gray-600 text-white rounded px-2 py-1 mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300">Git-hub</a>
              <a href="https://prafull6307.github.io/Bubble-game/" className="btn bg-indigo-500 text-white rounded px-2 py-1 mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300">Demo</a>
            </div>
          </article>
          <article className="bg-white rounded-md shadow-lg overflow-hidden">
            <div>
              <img src={IMG2} alt="Portfolio 2" className="w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></img>
            </div>
            <h1 className="my-4 font-semibold text-gray-800 text-center">This is my portfolio</h1>
            <div className="flex justify-center">
              <a href="https://github.com/Prafull6307" className="btn bg-gray-600 text-white rounded px-2 py-1 mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300">Git-hub</a>
              <a href="" className="btn bg-indigo-500 text-white rounded px-2 py-1 mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300">Demo</a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Recent;
