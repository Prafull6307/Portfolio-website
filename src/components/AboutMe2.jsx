import { useEffect, useState } from "react";

const AboutMe2 = () => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch("https://api.github.com/users/Prafull6307")
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="container mx-auto py-4 bg-yellow-200"> {/* Changed bg-gray-200 to bg-yellow-200 */}
      <div className="main bg-gray-200 rounded-lg shadow-md p-8">
        <h1 className="text-center text-lg font-semibold text-gray-700 mb-4">
          My GitHub repository:
        </h1>
        <div className="flex justify-center">
          <img
            src={data.avatar_url}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-purple-500"
          />
        </div>
        <p className="text-center text-gray-700 mt-4">
          <a
            href={data.repos_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {data.repos_url}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe2;
