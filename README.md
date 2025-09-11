# PersonalPortofolio
My Professional Portofolio


// pages/index.js
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Short description of project one.",
    image: "/project1.png",
    github: "https://github.com/username/project-one",
    demo: "https://youtu.be/demo1",
    screenshots: ["/project1-1.png", "/project1-2.png", "/project1-3.png"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "Short description of project two.",
    image: "/project2.png",
    github: "https://github.com/username/project-two",
    demo: "https://youtu.be/demo2",
    screenshots: ["/project2-1.png", "/project2-2.png"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "Short description of project three.",
    image: "/project3.png",
    github: "https://github.com/username/project-three",
    demo: "https://youtu.be/demo3",
    screenshots: ["/project3-1.png", "/project3-2.png", "/project3-3.png"],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-3 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Demo
                </a>
                {project.screenshots.length > 0 && (
                  <button
                    onClick={() => setActiveProject(project)}
                    className="px-3 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                  >
                    View More
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for additional screenshots */}
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
