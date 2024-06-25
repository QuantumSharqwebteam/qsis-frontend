import React, { useState, useEffect } from "react";
import logo from "../assets/Qsis_logo_invite.png";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-10 ${isScrolled ? "bg-white" : ""}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 ">
        <div>
          <a href="/" className="flex items-center w-[6rem]">
            <img src={logo} className="w-full h-full" alt="Logo" />
            <h3 className="uppercase font-bold text-4xl flex items-center space-x-2">
              <span className="text-emerald-900">Q</span>{" "}
              <span className="text-emerald-900">S</span>{" "}
              <span className="text-emerald-900">I</span>{" "}
              <span className="text-emerald-900">S</span>
            </h3>
          </a>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 justify-center text-gray-900 rounded-lg lg:hidden outline-none"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <CiMenuFries className="text-4xl" />
        </button>
        <div
          className={`w-full lg:block lg:w-auto lg:ml-24 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 md:p-0 md:space-x-8 md:mt-0 mt-4  lg:flex-row ">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 md:p-0 md:ml-8 hover:text-emerald-500 transition-all duration-500 text-[18px] font-semibold"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 md:p-0 hover:text-emerald-500 transition-all duration-500 text-[18px] font-semibold"
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 md:p-0 hover:text-emerald-500 transition-all duration-500 text-[18px] font-semibold"
              >
                Add Enquiry
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 md:p-0 hover:text-emerald-500 transition-all duration-500 text-[18px] font-semibold"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`w-full lg:block lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex ml-4 p-4 md:ml-4 md:mt-2">
            <li className="mr-5 border-solid border-2 border-emerald-900 rounded-full p-2">
              <a href="mailto:hr1qsisvellore@gmail.com" target="_black">
                <IoMdMail size={20} className="text-emerald-900" />
              </a>
            </li>
            <li className="mr-5 border-solid border-2 border-emerald-900 rounded-full p-2">
              <a href="https://wa.me/+916383538529" target="_black">
                <RiWhatsappFill size={20} className="text-emerald-900" />
              </a>
            </li>
            <li className="mr-5 border-solid border-2 border-emerald-900 rounded-full p-2">
              <a
                href="https://www.linkedin.com/company/quantum-sharq-innovative-solutions/"
                target="_blank"
              >
                <FaLinkedin size={20} className="text-emerald-900" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
