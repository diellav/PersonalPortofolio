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
    description: "A full-stack fashion e-commerce website built during my internship. Users can browse & filter products, manage their cart and wishlist, make secure purchases, maintain their profile, while the admin can overview the system from the dashboard. Fully database-driven with a smooth and exceptional user experience.",
    image: "/images/urbangaze.png",
    github: "https://github.com/diellav/FashionWebsite",
    techStack: ["React", "Laravel", "Stripe", "PHP", "MySQL"],
     screenshots: [
      { src: "/images/urbangaze.png", description: "Home Page" },{ src: "/images/homepage2.png", description: "Details" },
      { src: "/images/homepage3.png", description: "Best Sellers & Collections" },{ src: "/images/homepage4.png", description: "FAQ" },
      { src: "/images/homepage5.png", description: "NewsLetter & Footer" },{ src: "/images/navbar.png", description: "Dynamic Navbar" },
      { src: "/images/shoppage.png", description: "Product Page & Filters" },{ src: "/images/product.png", description: "Product Details" },
      { src: "/images/review.png", description: "Reviews" },{ src: "/images/cart.png", description: "My Cart" },
      { src: "/images/payment.png", description: "Checkout" },{ src: "/images/orders.png", description: "Profile / My Orders" },
      { src: "/images/adress.png", description: "Profile / My Adresses" },{ src: "/images/contact.png", description: "Contact Us" },
      { src: "/images/dashboard.png", description: "Admin Dashboard Overview & More" },{ src: "/images/dashboard2.png", description: "Orders Management" },
      { src: "/images/dashboard3.png", description: "Products Management" },{ src: "/images/dashboard4.png", description: "Add New Product" },
      { src: "/images/dashboard5.png", description: "Collections Management" },{ src: "/images/login.png", description: "Log-In" },
      { src: "/images/signup.png", description: "Sign-Up" }
    ],
  },
  {
    id: 2,
    title: "Prison Manager",
    description: "Collaborated in a team to build a system for managing prisoners, staff, schedules and visits . It includes secure storage of prisoners information, their movements, useful staff management features, real-time schedule updates, and role-based access controls.",
    github: "https://github.com/diellav/PrisonManager",
    image: "/images/prisonerprofile.png",
    techStack: ["React", "Node", "Bootstrap",  "MSSQL"],
    screenshots: [
      {src:"/images/prisonerprofile.png",description:"Staff Profile"}, 
       { src: "/images/prisonerroles.png", description: "Role Management" },
      { src: "/images/roles.png", description: "Role Permissions" },
      { src: "/images/prisoneruser.png", description: "Staff Management" },
    { src: "/images/prisonerprisoner.png", description: "Prisoner Add Form" },{ src: "/images/prisonerblocks.png", description: "Blocks Management" },
    { src: "/images/prisonercell.png", description: "Cells Management" },{ src: "/images/prisonerlawyer.png", description: "Legal Matters Management" },
    { src: "/images/prisonersalary.png", description: "Staff Salary Management" },{ src: "/images/prisonerforgot.png", description: "Forgot Password" },
    { src: "/images/prisonervisitor.png", description: "Visitor Register Page" }
    ],
  },
  {
    id: 3,
    title: "Enchanted Day",
    description: "Worked in a duo-team to design and code a responsive wedding planner website that helps couples plan their perfect wedding. From selecting a venue, decor, menus and desired cake, to picking their perfect wedding atire, the bride and groom will be guaranteed that all their needs are met. ",
    image: "/images/enchantedhomepage.png",
    github: "https://github.com/diellav/Enchanted-Day",
    techStack: ["HTML", "CSS", "JavaScript",  "PHP", "MySQL"],
   screenshots: [
    { src: "/images/enchantedhomepage.png", description: "Home Page" }, { src: "/images/enchantedhomepage2.png", description: "Details" },
    { src: "/images/enchantedhomepage3.png", description: "Popular Venues" },{ src: "/images/enchantedhomepage4.png", description: "Guides & Blogs" },
    { src: "/images/enchantedhomepage5.png", description: "Footer" },{ src: "/images/enchantedcity.png", description: "City Venues" },
    { src: "/images/enchantedgarden.png", description: "Garden Venues" },{ src: "/images/enchantedvenue.png", description: "Venue Details" },
    { src: "/images/enchantedbook.png", description: "Book Your Venue" },{ src: "/images/enchantedreview.png", description: "Venue Review" },
    { src: "/images/enchantedcatering.png", description: "Catering Services" },{ src: "/images/enchantedcatering2.png", description: "Cakes" },
    { src: "/images/enchantedvideo.png", description: "Video Services" },{ src: "/images/enchanteddecor.png", description: "Decor & Floral Arraignements" },
    { src: "/images/enchanteddresses.png", description: "Bridal Dresses & More" },{ src: "/images/enchantedmeasurements.png", description: "Bridal Part Measurements" },
    { src: "/images/enchantedcart.png", description: "My Cart" },{ src: "/images/enchantedtotal.png", description: "Update Total By Guests" },
    { src: "/images/enchantedpay.png", description: "Checkout" },{ src: "/images/enchantedcontact.png", description: "Contact Us" },
    { src: "/images/enchantedguide.png", description: "Guide & Tips" },{ src: "/images/enchanteddashboard.png", description: "Admin Dashboard" },
    { src: "/images/enchantedlogin.png", description: "Log-In" },{ src: "/images/enchantedsignup.png", description: "Sign-Up" }
  ],
  },
];


export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  return (
    <div className="min-h-screen bg-text-mini justify-items-center w-full ">
      <h2 className="font-futuristic text-4xl font-bold text-accent">
    Projects
        </h2>
      <div className="grid md:grid-cols-1 lg:gap-35 md:gap-30 sm:gap-20 gap-20 w-full lg:mt-24 md:mt-24 mt-16">
        {projects.map((project) => (
          <div key={project.id} 
          className={`relative flex flex-col sm:flex-col md:flex-row lg:flex-row justify-around items-center w-full ${
      project.id % 2 === 0 ? "lg:flex-row-reverse md:flex-row-reverse" : "lg:flex-row md:flex-row"}`}>
           <div className={`absolute lg:-top-15 md:-top-15 sm:-top-1 -top-1  w-96 h-1/2 sm:w-96 sm:h-96 md:w-96 md:h-84 lg:h-92 bg-purple-400 rounded-full opacity-60 blur-3xl animate-pulse z-10
            ${
      project.id % 2 === 0 ? "lg:right-3 md:right-3" : "lg:left-3 md:left-3"}`}></div>
          <div
            className={ `sm:w-[85%] md:w-[50%] lg:w-[40%] lg:h-72 md:h-76 sm:h-64 h-64 w-[95%] rounded-xs overflow-hidden z-20 ${
      project.id % 2 === 0 ? "shadow-[12px_-10px_4px_4px_rgba(6,12,20,0.5)] " : "shadow-[-12px_-10px_4px_4px_rgba(6,12,20,0.5)] "}`}>

           
            <img
              src={project.image}
              alt={project.title}
              className=" w-full h-full object-cover  z-10"
            />  

              </div>
            <div className={`bg-violet-400/20 backdrop-blur-md shadow-md sm:w-[95%] -mt-4 w-[100%] md:w-[50%] md:mt-0 lg:mt-0  rounded-xl  overflow-hidden p-4 relative z-30 ${
      project.id % 2 === 0 ? "sm:-mt-4 md:-mr-16 lg:-mr-48" : "sm:-mt-4 md:-ml-16 lg:-ml-48"}`}>
              <h2 className="text-xl font-semibold mb-2 justify-self-center font-futuristic text-white text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">{project.title}</h2>
              <p className="text-white lg:text-sm sm:text-xs font-mono justify-self-center leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3 mb-3 justify-center">
            {project.techStack?.map((tech, idx) => (
              <span
                key={idx}
                className="bg-purple-800 text-white text-xs px-2 py-1 rounded-full font-mono shadow-[0_0_5px_rgba(0,0,0,0.3)]"
              >
                {tech}
              </span>
            ))}
          </div>
              <div className="flex gap-4 justify-self-center">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-3 py-2 text-text rounded hover:underline hover:text-text font-futuristic"
                >
                  GitHub
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
                  src={src.src}
                  alt={`Screenshot ${i + 1}`}
                  className="rounded-lg object-contain w-[90%] justify-self-center h-56 sm:w-[90%] sm:h-64 lg:w-[85%] lg:h-82"
                /><p className="text-white text-center font-futuristic  text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">{src.description}</p></SwiperSlide>
                
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
