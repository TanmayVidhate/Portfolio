import React from "react";
import project1 from "../assets/project/project_1.png";
import project2 from "../assets/project/project_2.png";

function Projects() {
  const headerStyle =
    "text-2xl md:text-4xl font-bold mb-6 relative w-fit " +
    "after:content-[''] after:block after:h-[3px] after:w-0 after:bg-[#8FA5FF] " +
    "after:transition-all after:duration-300 hover:after:w-full " +
    "transition-all duration-300 hover:text-[#8FA5FF] hover:-translate-y-1";

  return (
    <>
      <div
        id="Projects"
        className="p-12 my-10 overflow-hidden text-white bg-black rounded-lg shadow-xl bg-opacity-30 md:mx-8 "
      >
        <h2 className={headerStyle}>Projects</h2>
        <p className="mt-2 text-sm text-gray-300 sm:text-base md:text-lg">
          Here are some of my recent projects. Click the buttons to view live
          demos or check the code on GitHub.
        </p>

        <div className=" sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row lg:gap-16">
          {/* Example Project Card */}

          {/* project 1 */}
          <div className="flex flex-col mt-8 overflow-hidden bg-white rounded-lg shadow-md sm:w-2/3 lg:w-2/4 lg:h-[430px]  xl:w-[450px] xl:h-[420px]">
            {/* Project Image */}
            <img
              src={project1} // replace with your image path
              alt="TripList App"
              className="object-fill w-full h-48"
            />

            <div className="flex flex-col flex-grow p-6">
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                TripList App
              </h3>
              <p className="flex-grow mb-4 text-gray-600">
                A handy checklist app to manage items before your next trip!
              </p>

              <div className="flex gap-4 mt-4">
                <a
                  href="https://tripelist.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/TanmayVidhate/tripelist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-gray-800 rounded-md shadow-sm hover:bg-gray-700"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* project 2 */}
          <div className="flex flex-col mt-8 overflow-hidden bg-white rounded-lg shadow-md sm:w-2/3 lg:w-2/4 lg:h-[430px] xl:w-[450px] xl:h-[420px]">
            {/* Project Image */}
            <img
              src={project2} // replace with your image path
              alt="TripList App"
              className="object-fill w-full h-48"
            />

            <div className="flex flex-col flex-grow p-6">
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Donor Circle
              </h3>
              <p className="flex-grow mb-4 text-gray-600">
                DonorCircle connects blood donors with people in need for quick
                and easy blood donation support.
              </p>

              <div className="flex gap-4 mt-4">
                <a
                  href="https://donorcircle-2.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/TanmayVidhate/DonorCircle_2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-gray-800 rounded-md shadow-sm hover:bg-gray-700"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Add more project cards here */}
        </div>
      </div>
    </>
  );
}

export default Projects;
