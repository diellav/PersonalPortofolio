import {SiHtml5,SiCss3, SiReact,SiJava, SiGit,SiLaravel,SiPhpmyadmin,SiMysql,SiNodedotjs,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { SkillCard } from "@/app/components/skillcard";

const SKILLS = [
  {
    icon: SiHtml5,
    color: "#E34F26",
    title: "HTML",
  },
  {
    icon: SiCss3,
    color: "#1572B6",
    title: "CSS",
  },
  {
    icon: SiReact,
    color: "#61DAFB",
    title: "ReactJS",
  },
  {
    icon: DiJava,
    color: "#007396",
    title: "Java",
  },
  {
    icon: SiGit,
    color: "#F05032",
    title: "Git",
  },
  {
    icon: SiLaravel,
    color: "#FF2D20",
    title: "PHP Laravel",
  },
  {
    icon: SiPhpmyadmin,
    color: "#003545",
    title: "phpMyAdmin",
  },
  {
    icon: SiMysql,
    color: "#4479A1",
    title: "SQL",
  },
  {
    icon: SiNodedotjs,
    color: "#339933",
    title: "Node.js",
  },
];


export function About() {
  return (
    <section className="px-8 mt-20">
      <div className="container mx-auto mb-10 text-center">
        <h2 className="font-futuristic mb-4 text-4xl font-bold text-accent">
          About Me
        </h2>
        <p className="font-mono mx-auto w-full text-text  lg:w-10/12">
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <br></br>
        <br></br>
        <br></br>
        <p className=" font-futuristic font-bold text-accent">MY SKILLS</p>
      </div>
<div className="lg:w-6/10 md:w-8/10 sm:w-full justify-self-center justify-center">
      <div className="container mx-auto grid grid-cols-2 gap-y-6 gap-x-6 md:grid-cols-3 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div></div>
    </section>
  );
}

export default About;
