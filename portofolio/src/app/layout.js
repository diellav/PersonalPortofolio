import { Exo_2, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://diellaveliu.netlify.app"),

  title: "Diella Veliu – Portfolio",
  description:
  "Portfolio of Diella Veliu, Computer Science and Engineering student from Prishtina, Kosovo, showcasing software development, AI and Machine Learning projects, full-stack applications, skills, internships, and professional journey.",

keywords: [
  "Diella Veliu",
  "Diella Veliu Portfolio",
  "Computer Science Student",
  "Computer Science Engineering Student",
  "Software Development",
  "Web Development",
  "Software Engineering",
  "AI Learning",
  "Machine Learning Learning",
  "Artificial Intelligence",
  "React",
  "Next.js",
  "JavaScript",
  "PHP",
  "Laravel",
  "Node.js",
  "MySQL",
  "SQL",
  "WordPress",
  "Tailwind CSS",
  "Git",
  "Java",
  "Full Stack Development",
  "Frontend Development",
  "Backend Development",
  "Software Projects",
  "Portfolio Website",
  "UBT Student",
  "Tectigon Academy",
  "ICK developHer",
  "Prishtina",
  "Kosovo"
],

  authors: [{ name: "Diella Veliu" }],

  alternates: {
    canonical: "https://diellaveliu.netlify.app",
  },

  openGraph: {
    title: "Diella Veliu – Portfolio",
    description:
      "Explore Diella Veliu's projects, skills, and experience in software development.",
    url: "https://diellaveliu.netlify.app",
    siteName: "Diella Veliu Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Diella Veliu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diella Veliu – Portfolio",
    description:
      "Explore Diella Veliu's projects, skills, and experience in software development.",
    images: ["/images/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${exo2.variable} ${robotoMono.variable}`}>
      <head><link rel="icon" href="/logo.png"/></head>
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
