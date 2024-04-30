import React, { useState } from 'react';

const Skills = () => {
  return (
    <>
      <div className="bg-yellow-200 py-6 md:py-12">
        <h2 className="text-center font-serif text-xl md:text-2xl lg:text-3xl">Get To Know My Skills</h2>
        <h1 className="text-center text-3xl font-semibold  mt-3 mb-6 md:mb-10">Skills</h1>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-5/12 lg:w-1/2 my-4 mx-2 bg-black rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h1 className="text-center py-5 font-semibold text-white text-2xl md:text-3xl">Frontend Skills</h1>
            <div className="flex flex-wrap justify-center md:justify-start space-x-8 py-3 hover:bg-yellow-300 rounded-lg">
              <Skill name="HTML" experience="Experienced" />
              <Skill name="CSS" experience="Experienced" />
              <Skill name="HTML" experience="Experienced" />
              <Skill name="JavaScript" experience="Experienced" />
              <Skill name="React" experience="Experienced" />
              <Skill name="Tailwind" experience="Experienced" />
              <Skill name="Bootstrap" experience="Experienced" />
            </div>
          </div>

          <div className="w-full md:w-5/12 lg:w-1/2 my-4 mx-2 bg-black border rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h1 className="text-center py-5 font-semibold text-white text-2xl md:text-3xl">Backend Skills</h1>
            <div className="flex flex-wrap justify-center md:justify-start space-x-8 py-3 hover:bg-yellow-300 rounded-lg">
              <Skill name="Node.js" experience="Experienced" />
              <Skill name="Express.js" experience="Experienced" />
              <Skill name="Next.js" experience="Experienced" />
              <Skill name="Spring Boot" experience="Experienced" />
              <Skill name="MySQL" experience="Experienced" />
              <Skill name="PostgreSQL" experience="Experienced" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Skill = ({ name, experience }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="text-center relative">
      <i className="fa-solid fa-circle-check text-white text-xl md:text-2xl"></i>
      <h1 className="font-bold text-white text-lg md:text-xl cursor-pointer hover:text-yellow-400" onMouseEnter={() => setShowPopup(true)} onMouseLeave={() => setShowPopup(false)}>{name}</h1>
      {showPopup && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 p-2 bg-white shadow-md rounded-md">
          <h2 className="font-medium">{experience}</h2>
        </div>
      )}
    </div>
  );
}

export default Skills;
