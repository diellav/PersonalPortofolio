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
  title: "Diella Veliu – Portfolio",
  description:
    "Portfolio of Diella Veliu, Computer Science and Engineering student, showcasing projects, skills, and journey in software development.",
  keywords: [
    "Diella Veliu",
    "Portfolio",
    "Software Developer",
    "Next.js",
    "React",
    "Computer Science",
    "Full Stack Developer",
    "Software Engineering",
    "PHP Laravel",
    "Internship",
  ],
  authors: [{ name: "Diella Veliu" }],
  openGraph: {
    title: "Diella Veliu – Portfolio",
    description:
      "Explore my projects, skills, and experiences as a software developer.",
    url: "https://your-domain.com",
    siteName: "Diella Veliu Portfolio",
    images: [
      {
        url: "https://your-domain.com/images/preview.png",
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
      "Explore my projects, skills, and experiences as a software developer.",
    images: ["https://your-domain.com/images/preview.png"],
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
