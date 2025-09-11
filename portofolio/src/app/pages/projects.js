import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "UrbanGaze",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/images/urbangaze.png",
    github: "https://github.com/diellav/FashionWebsite",
    demo: "https://youtu.be/demo1",
    screenshots: ["/project1-1.png", "/project1-2.png", "/project1-3.png"],
  },
  {
    id: 2,
    title: "Prison Manager",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/images/urbangaze.png",
    github: "https://github.com/diellav/PrisonManager",
    demo: "https://youtu.be/demo2",
    screenshots: ["/project2-1.png", "/project2-2.png"],
  },
  {
    id: 3,
    title: "Enchanted Day",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/images/urbangaze.png",
    github: "https://github.com/diellav/Enchanted-Day",
    demo: "https://youtu.be/demo3",
    screenshots: ["/project3-1.png", "/project3-2.png", "/project3-3.png"],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen bg-text-mini justify-items-center w-full">
      <h2 className="font-futuristic text-4xl font-bold text-accent">
    Projects
        </h2>
      <div className="grid md:grid-cols-1 lg:gap-40 sm:gap-5 w-full mt-24">
        {projects.map((project) => (
          <div key={project.id} 
          className={`relative flex flex-row justify-around items-center w-full ${
      project.id % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
           <div className={`absolute -top-15 w-dvh h-84 bg-purple-500 rounded-full opacity-60 blur-3xl animate-pulse z-1
            ${
      project.id % 2 === 0 ? "right-8" : "left-8"}`}></div>
          <div
            className={ `  w-[40%] h-72 rounded-xs overflow-hidden z-10 ${
      project.id % 2 === 0 ? "shadow-[12px_-10px_4px_4px_rgba(6,12,20,0.5)] " : "shadow-[-12px_-10px_4px_4px_rgba(6,12,20,0.5)] "}`}>
            
           
            <img
              src={project.image}
              alt={project.title}
              className=" w-full h-full object-cover  z-10"
            />  

              </div>
            <div className={`bg-violet-400/20 backdrop-blur-md shadow-md w-[50%] rounded-2xl overflow-hidden p-4 relative z-100 ${
      project.id % 2 === 0 ? "-mr-48" : "-ml-48"}`}>
              <h2 className="text-xl font-semibold mb-2 justify-self-center font-futuristic text-white text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">{project.title}</h2>
              <p className="text-white text-sm font-mono mb-4 justify-self-center p">{project.description}</p>
              <div className="flex gap-4 justify-self-center">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-3 py-2 text-text rounded hover:underline hover:text-text font-futuristic"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="px-3 py-2 text-text rounded hover:underline font-futuristic"
                >
                  Demo
                </a>
                {project.screenshots.length > 0 && (
                  <button
                    onClick={() => setActiveProject(project)}
                    className="px-3 py-2 text-text rounded hover:underline font-futuristic"
                  >
                    View More
                  </button>
                )}
              </div>
          
          </div>
            </div>
        ))}
      </div>

      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-3xl w-full relative">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-4">{activeProject.title} Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeProject.screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className="rounded-lg object-cover w-full h-48"
                />
              ))}
            </div>
          </div>
        </div>
        
      )}
      
    </div>
  
  );
}
