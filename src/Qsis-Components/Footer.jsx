import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const updateYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="bg-[#f7f7f7] px-3 md:px-8 py-6 md:py-12">
      <div className="block md:flex justify-between items-center">
        <div className="p-0 flex flex-col space-y-4 w-full md:w-1/2">
          <h1 className="text-[18px] md:text-lg font-bold text-zinc-800">
            Quantum Sharq Innovative Solutions
          </h1>
          <p className="text-[12px] md:text-[15px] text-zinc-500 font-semibold">
            info.quantumsharq@gmail.com
          </p>
          <p className=" text-[12px] md:text-[15px] text-zinc-500 font-semibold">
            Flat No.3D, Dolphin Flats, No.99 & 100, Vaibhav Nagar, phase-I, Opp
            to VIT, Vellore- 632014
          </p>
          <p className=" text-[12px] md:text-[15px] text-zinc-500 font-semibold">
            +91 9342836860{" "}
          </p>
        </div>
        <div className="flex  p-4 md:p-0 justify-start space-x-6  text-sm underline underline-offset-2 text-zinc-800 font-semibold">
         <button className="bg-gray-900 text-white rounded-md px-4 py-2">
          <a
            href="https://forms.gle/6SEFCSi7Hj7ZguM17"
            target="_blank"
            className="hover:scale-110 transition-all duration-500 no-underline"
          >
            Contact
          </a>
          </button>

          <button className="bg-gray-900 text-white rounded-md px-4 py-2">
          <Link
            to={"/career"}
            className="hover:scale-110 transition-all duration-500 no-underline"
          >
            Careers
          </Link>
          </button>

          <button className="bg-gray-900 text-white rounded-md px-4 py-2">
          <Link
            to={"/admin"}
            className="hover:scale-110 transition-all duration-500 no-underline"
          >
            Admin
          </Link>
          </button>
        </div>
      </div>
      {/* copyrights */}
      <div className="flex justify-center mt-5 text-[10px] md:text-[14px]">
        <h4>
          © {updateYear()},{" "}
          <span className="text-emerald-500">
            Quantum Sharq Innovative Solutions
          </span>
          . All Rights Reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
