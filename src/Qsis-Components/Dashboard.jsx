import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/company-logo.png";
import Typewriter from "typewriter-effect/dist/core";

const Dashboard = () => {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: "Quantum Sharq Innovative Solutions",
      autoStart: true,
    });
  }, []);

  return (
    <div className="w-full mb-0 h-1/2  py-10 px-6">
      <div className="flex justify-center">
        <img src={logo} alt="qsis logo" className="w-[150px]" />
      </div>

      <h2 className="text-3xl px-2 py-4 font-bold text-center">
        Welcome, <span id="typewriter" className="gradient-text"></span>{" "}
      </h2>
      <nav>
        <ul className=" items-center flex flex-col md:flex-row justify-center gap-4 font-normal text-base  py-10 capitalize">
          <Link to={"/signup"} className="w-full md:w-fit">
            <li className="bg-emerald-500 px-3 py-1 rounded-md cursor-pointer w-full text-center">
              Give Access
            </li>
          </Link>

          {/* <Link to={'/viewAccess'} className="">
              <li className="bg-[#17C6D4] px-3 py-1 rounded-md cursor-pointer">View Access</li>
          </Link> */}

          <Link to={"/viewEnquiries"} className="w-full md:w-fit">
            <li className="bg-emerald-500 px-3 py-1 rounded-md cursor-pointer w-full text-center">
              Edit Careers
            </li>
          </Link>

          <Link to={"/editproducts"} className="w-full md:w-fit">
            <li className="bg-emerald-500 px-3 py-1 rounded-md cursor-pointer w-full text-center">
              Edit Products
            </li>
          </Link>

          {/* <Link to={'/signup'} className="">
              <li className="bg-[#17C6D4] px-3 py-1 rounded-md cursor-pointer">Post Jobs</li>
          </Link> */}
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
