import React from 'react';
import profileImage from '../assets/photo.png';

const Profile = () => {
  return (
    <div className="bg-yellow-200 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-black max-w-lg p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-30 h-30 mb-4 hover:scale-110 transition-transform"
            style={{
              maxWidth: '300px',
              height: '300px',
              width: '100%',
              borderRadius: '50%',
              border: '6px solid #0ef',
              boxShadow: '0 0 5px cyan, 0 0 25px cyan',
              transition: 'all 0.5s ease',
              overflow: 'hidden',
              opacity: '1', // Changed opacity to 1 to ensure the image is visible
              animation: 'slideLeft 1s ease forwards',
              animationDelay: '2s'
            }}
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Prafull Srivastava</h1>
        <h2 className="text-2xl font-semibold text-gray-200 mb-6">Student at Netaji Subhas University Of Technology</h2>
        <p className="text-lg text-gray-400 mb-8">I am a passionate frontend and backend developer with expertise in React JS, Next JS, Express JS, Node JS, and more. I love to create responsive and user-friendly web applications that leave a lasting impression.</p>
        <div className="mb-8 border-b border-gray-300"></div>
        <h3 className="text-xl font-semibold text-gray-400 mb-4">Why Hire Me?</h3>
        <ul className="list-disc text-lg text-gray-400 mb-8">
          <li>Experienced in both frontend and backend development</li>
          <li>Proficient in modern web technologies like React, Next.js, Express.js, and Node.js</li>
          <li>Ability to create visually appealing and intuitive user interfaces</li>
          <li>Strong problem-solving and debugging skills</li>
          <li>Passionate about learning and staying updated with the latest trends in web development</li>
          <li>Excellent communication and teamwork abilities</li>
        </ul>
        <p className="text-lg font-semibold text-white">Let's collaborate and build something amazing together!</p>
      </div>
    </div>
  );
}

export default Profile;
