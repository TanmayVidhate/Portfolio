import React from 'react'
import project1 from '../assets/project/project_1.png'
import project2 from '../assets/project/project_2.png'

function Projects() {

    const headerStyle =
        "text-2xl md:text-4xl font-bold mb-6 relative w-fit " +
        "after:content-[''] after:block after:h-[3px] after:w-0 after:bg-[#8FA5FF] " +
        "after:transition-all after:duration-300 hover:after:w-full " +
        "transition-all duration-300 hover:text-[#8FA5FF] hover:-translate-y-1";


    return (
        <>
            <div id="Projects" className="text-white bg-black bg-opacity-30 shadow-xl p-12 my-10 rounded-lg overflow-hidden  md:mx-8 ">
                <h2 className={headerStyle}>Projects</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2">
                    Here are some of my recent projects. Click the buttons to view live demos or check the code on GitHub.
                </p>

                {/* project 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                    {/* Example Project Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                        {/* Project Image */}
                        <img
                            src={project1} // replace with your image path
                            alt="TripList App"
                            className="w-full h-48 object-fill"
                        />

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-gray-900 text-2xl font-semibold mb-2">TripList App</h3>
                            <p className="text-gray-600 mb-4 flex-grow">
                                A handy checklist app to manage items before your next trip!
                            </p>

                            <div className="flex gap-4 mt-4">
                                <a
                                    href="https://tripelist.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md h-10 px-4 py-2 text-sm shadow-sm transition-colors duration-200"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href="https://github.com/TanmayVidhate/tripelist"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md h-10 px-4 py-2 text-sm shadow-sm transition-colors duration-200"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* project 2 */}

                    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                        {/* Project Image */}
                        <img
                            src={project2} // replace with your image path
                            alt="TripList App"
                            className="w-full h-48 object-fill"
                        />

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-gray-900 text-2xl font-semibold mb-2">Donor Circle</h3>
                            <p className="text-gray-600 mb-4 flex-grow">
                                DonorCircle connects blood donors with people in need for quick and easy blood donation support.
                            </p>

                            <div className="flex gap-4 mt-4">
                                <a
                                    href="https://donorcircle-2.onrender.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md h-10 px-4 py-2 text-sm shadow-sm transition-colors duration-200"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href="https://github.com/TanmayVidhate/DonorCircle_2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md h-10 px-4 py-2 text-sm shadow-sm transition-colors duration-200"
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
    )
}

export default Projects