import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Portfolio Made Adi</title>
        <meta
          name="description"
          content="Personal portfolio of Made Adi showcasing skills and projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="bg-gray-800 text-white fixed top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo - Tetap di Kiri */}
          <div className="text-2xl font-bold">
            <link href="#">DeAdi</link>
          </div>

          {/* Menu - Geserkan ke Kanan */}
          <div className="ml-auto hidden md:flex justify-center">
            <ul className="flex space-x-6">
              <li>
                <link href="#" className="underline1">
                  Home
                </link>
              </li>
              <li>
                <link href="#about-us" className="underline1">
                  About
                </link>
              </li>
              <li>
                <link href="/Contact" className="underline1">
                  Contact
                </link>
              </li>
            </ul>
          </div>

          {/* Button Menu Mobile - Tetap di Kanan */}
          <div className="flex md:hidden">
            <button
              aria-label="Toggle Mobile Menu"
              className="focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white">
            <ul className="flex flex-col space-y-4 px-6 py-4">
              <li>
                <link href="#" className="hover:underline transition">
                  Home
                </link>
              </li>
              <li>
                <link href="#about-us" className="hover:underline transition">
                  About
                </link>
              </li>
              <li>
                <link href="/Contact" className="hover:underline transition">
                  Contact
                </link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-black px-4  md:px-0">
        <Image
          src="/Foto.jpg"
          alt="Foto Profil"
          className="w-48 h-48 sm:w-72 sm:h-72 rounded-full shadow-2xl border-4 border-gray-500 object-cover mb-14 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] ring-4 ring-gray-400 transition-transform duration-500 transform hover:scale-110 hover:ring-gray-600 hover:grayscale-0 grayscale"
          width={1000}
          height={1000}
          priority
        />
        <div className="text-center">
          <h2 className="text-4xl font-bold">Hello, I&#39;m Made Adi</h2>
          <p className="mt-4 text-lg text-gray-500">
            Welcome to my personal website. Explore and enjoy the content!
          </p>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 text-center bg-gray-100">
        <h2 className=" text-gray-800 text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-slate-800 text-white py-2 px-4 rounded-full shadow-lg hover:scale-[1.05] transition duration-300">
            HTML
          </span>
          <span className="bg-slate-800 text-white py-2 px-4 rounded-full shadow-lg hover:scale-[1.05] transition duration-300">
            CSS
          </span>
          <span className="bg-slate-800 text-white py-2 px-4 rounded-full shadow-lg hover:scale-[1.05] transition duration-300">
            Tailwind
          </span>
          <span className="bg-slate-800 text-white py-2 px-4 rounded-full shadow-lg hover:scale-[1.05] transition duration-300">
            JavaScript
          </span>
          <span className="bg-slate-800 text-white py-2 px-4 rounded-full shadow-lg hover:scale-[1.05] transition duration-300">
            Java
          </span>
          <span className="bg-slate-800 text-white py-2 px-4 rounded-full shadow-lg hover:scale-[1.05] transition duration-300">
            PHP
          </span>
          <span className="bg-slate-800 text-white py-2 px-4 rounded-full shadow-lg hover:scale-[1.05] transition duration-300">
            NextJS
          </span>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="text-gray-800 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-500 leading-relaxed max-w-3xl mx-auto">
          Welcome to my personal portfolio! My name is Made Adi, and I am a
          passionate developer with expertise in web development and design.
          This website showcases my projects, skills, and journey as a developer.
          I strive to create innovative and user-friendly solutions for my clients
          and collaborators. Explore this site to learn more about my work, and
          feel free to reach out for collaborations or inquiries!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-12 mt-7">
          <div>
            <p className="text-gray-800">Negara</p>
            <p className="text-xl font-bold text-gray-500">Indonesia</p>
          </div>
          <div>
            <p className="text-gray-800">Provinsi</p>
            <p className="text-xl font-bold text-gray-500">Bali</p>
          </div>
          <div>
            <p className="text-gray-800">Kabupaten</p>
            <p className="text-xl font-bold text-gray-500">Badung</p>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <a
              href="#"
              className="text-xl font-bold tracking-wide hover:text-gray-400 transition"
            >
              DeAdi
            </a>
          </div>
          <div className="flex justify-center space-x-6 mb-4">
            {/* GitHub Icon */}
            <link
              href="https://github.com/Doyik5921"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:scale-110 transition-transform duration-300"
            >
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8 text-gray-400 group-hover:text-white"
                aria-label="GitHub Icon"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"
                  ></path>
                </g>
              </svg>
            </link>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Made Adi. All rights reserved.
          </p>
        </div>
      </footer>


    </>
  );
}
