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
  title: "Personal Portofolio by Diella Veliu",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${exo2.variable} ${robotoMono.variable}`}>
      <body
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
