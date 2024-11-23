import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center pt-4 px-3">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#">DeAdi</a>
          </div>

          {/* Hamburger button for mobile */}
          <div className="md:hidden">
            <button
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

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#"
                className="hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300"
              >
                About
              </a>
            </li>
            
          </ul>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black text-white">
            <ul className="flex flex-col space-y-2 px-4 py-2">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300 transition duration-300"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-black text-white px-4 md:px-0 pt-20">
        {/* Profile Image */}
        <img
          src="/Foto.jpg" // Replace with your image path
          alt="Foto Profil"
          className="w-72 h-72 rounded-full shadow-2xl border-4 border-gray-500 object-cover mb-6"
        />
        {/* Text */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Hello, I'm Made Adi</h2>
          <p className="mt-4 text-lg text-gray-300">
            Welcome to my personal website. Explore and enjoy the content!
          </p>
          {/* Skills Section */}
      <section id="skills" className="bg-black text-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            <div className="p-4 border rounded bg-gray-800 hover:scale-[1.08] transition duration-300">
              HTML
            </div>
            <div className="p-4 border rounded bg-gray-800 hover:scale-[1.08] transition duration-300">
              CSS
            </div>
            <div className="p-4 border rounded bg-gray-800 hover:scale-[1.08] transition duration-300">
              JavaScript
            </div>
            <div className="p-4 border rounded bg-gray-800 hover:scale-[1.08] transition duration-300">
              PHP
            </div>
            <div className="p-4 border rounded bg-gray-800 hover:scale-[1.08] transition duration-300">
              Bootstrap
            </div>
            <div className="p-4 border rounded bg-gray-800 hover:scale-[1.08] transition duration-300">
              Tailwind
            </div>
            <div className="p-4 border rounded bg-gray-800 hover:scale-[1.08] transition duration-300">
              Next.js
            </div>
            <div className="p-4 border rounded bg-gray-800 hover:scale-[1.08] transition duration-300">
              Java
            </div>
          </div>
        </div>
      </section>
        </div>
      </section>

      
      {/* About Section */}
      <section id="about" className="bg-black text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            Hai semuanya! Nama Saya Made Adi Dharma Putra. Saya Lahir di Badung,
            Bali pada tanggal 21 Desember 2007. Hobby saya adalah kesenian dan
            motoran. Saya hanyalah pelajar biasa, kadang pintar, kadang bodoh,
            tapi tetap semangat untuk sukses!
          </p>
        </div>
      </section>

     {/* Contact Section */}
<section id="contact" className="bg-black text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 p-6">
      {/* Email */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v-.068l-8.749 6.549c-.803.601-1.949.601-2.752 0L2.25 6.682"
          />
        </svg>
        <span>AdiiDharmaa@gmail.com</span>
      </div>
      {/* LinkedIn */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 8a6 6 0 10-12 0v8a6 6 0 0012 0V8zm-7.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 11.25h-3.375v5.625H15V11.25z"
          />
        </svg>
        <span>AdiDharma</span>
      </div>
      {/* Location */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25c-3.352 0-6.06 2.708-6.06 6.06 0 5.403 6.06 12.69 6.06 12.69s6.06-7.287 6.06-12.69c0-3.352-2.708-6.06-6.06-6.06zm0 9a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
          />
        </svg>
        <span>Canggu, Bali, Indonesia</span>
      </div>
      {/* Instagram */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.25v-5a3.75 3.75 0 00-3.75-3.75h-10.5A3.75 3.75 0 003 6.25v10.5A3.75 3.75 0 006.75 20.5h10.5A3.75 3.75 0 0021 16.75v-5z"
          />
        </svg>
        <span>Addidharma_</span>
      </div>
    </div>
  </div>
</section>


    </>
  );
}
