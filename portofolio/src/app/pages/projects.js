"use client";
import { useState , useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const projects = [
  {
    id: 1,
    title: "UrbanGaze",
    description: "Full-stack fashion e-commerce website built during my internship using React.js and PHP Laravel. Features include product browsing, filtering, cart & wishlist, secure Stripe payments, user profiles, and an admin dashboard. Fully database-driven with a smooth and exceptional user experience.",
    image: "/images/urbangaze.png",
    github: "https://github.com/diellav/FashionWebsite",
    demo: "/images/UrbanGaze.mp4",
    screenshots: ["/images/Screenshot 2025-08-11 082327.png", "/images/urbangaze.png", "/images/Screenshot 2025-08-11 082327.png"],
  },
  {
    id: 2,
    title: "Prison Manager",
    description: "Collaborated in a team to build a system for managing prisoners, staff and schedules . It includes secure storage of prisoners information, real-time staff schedule updates, and role-based access controls. Coded with Node.js and features responsive UI components with React.js and Bootstrap.",
    image: "/images/urbangaze.png",
    github: "https://github.com/diellav/PrisonManager",
    demo: "https://youtu.be/demo2",
    screenshots: ["/project2-1.png", "/project2-2.png"],
  },
  {
    id: 3,
    title: "Enchanted Day",
    description: "Worked in a team to design and code a responsive wedding planner site using HTML, CSS, JavaScript, and PHP. A website that helps couples plan their perfect wedding, from choosing a venue, buying decor and selecting their favourite menu and desired cake. ",
    image: "/images/urbangaze.png",
    github: "https://github.com/diellav/Enchanted-Day",
    demo: "https://youtu.be/demo3",
    screenshots: ["/project3-1.png", "/project3-2.png", "/project3-3.png"],
  },
];


export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  return (
    <div className="min-h-screen bg-text-mini justify-items-center w-full">
      <h2 className="font-futuristic text-4xl font-bold text-accent">
    Projects
        </h2>
      <div className="grid md:grid-cols-1 lg:gap-35 md:gap-30 sm:gap-20 gap-20 w-full mt-24">
        {projects.map((project) => (
          <div key={project.id} 
          className={`relative flex flex-col sm:flex-col md:flex-row lg:flex-row justify-around items-center w-full ${
      project.id % 2 === 0 ? "lg:flex-row-reverse md:flex-row-reverse" : "lg:flex-row md:flex-row"}`}>
           <div className={`absolute -top-15 md:w-96 md:h-84 bg-purple-500 rounded-full opacity-60 blur-3xl animate-pulse z-10
            ${
      project.id % 2 === 0 ? "right-3" : "left-3"}`}></div>
          <div
            className={ `sm:w-[80%] md:w-[40%] lg:h-72 sm:h-64 h-64 w-[80%] rounded-xs overflow-hidden z-20 ${
      project.id % 2 === 0 ? "shadow-[12px_-10px_4px_4px_rgba(6,12,20,0.5)] " : "shadow-[-12px_-10px_4px_4px_rgba(6,12,20,0.5)] "}`}>
            
           
            <img
              src={project.image}
              alt={project.title}
              className=" w-full h-full object-cover  z-10"
            />  

              </div>
            <div className={`bg-violet-400/20 backdrop-blur-md shadow-md sm:w-[95%] -mt-6 w-[95%] md:w-[50%] md:mt-0 lg:mt-0 rounded-2xl overflow-hidden p-4 relative z-30 ${
      project.id % 2 === 0 ? "sm:-mt-6 md:-mr-30 lg:-mr-48" : "sm:-mt-6 md:-ml-30 lg:-ml-48"}`}>
              <h2 className="text-xl font-semibold mb-2 justify-self-center font-futuristic text-white text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">{project.title}</h2>
              <p className="text-white lg:text-sm sm:text-xs font-mono justify-self-center leading-relaxed">{project.description}</p>
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
                  Video
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
        <div className="fixed inset-0 bg-violet-900/30 backdrop-blur-md shadow-md  flex items-center justify-center z-50">
          <div className="bg-gray-900/80 backdrop-blur-md shadow-md  rounded-2xl p-6 max-w-3xl w-full relative">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
            >
              ×
            </button>

            
            <Swiper
              modules={[Navigation]}
                navigation={{
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  }}
              slidesPerView={1}
              className="rounded-lg overflow-visible "
            >
           {activeProject.screenshots.map((src, i) => (
               <SwiperSlide key={i}>
                <img
                  key={i}
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className="rounded-lg object-cover w-[90%] justify-self-center h-64 sm:w-[90%] sm:h-64 lg:w-[85%] lg:h-82"
                /></SwiperSlide>
                
              ))}
              </Swiper>
              <div className="custom-swiper-prev">‹</div>
<div className="custom-swiper-next">›</div>
            </div>
         
        </div>
        
      )}
      
    </div>
  
  );
}
