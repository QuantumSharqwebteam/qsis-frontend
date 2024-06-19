import React from "react";
import { IoIosApps } from "react-icons/io";
import { FaBrain } from "react-icons/fa";
import { BiSolidMicrochip } from "react-icons/bi";
import { FaMicrochip } from "react-icons/fa6";

const Service = () => {
  return (
    <div>
      <div className="my-16 justify-center space-y-8 ml-6 md:ml-12 ">
        <h1 className="text-4xl font-semibold">Our Services</h1>
        <hr className="w-14 border-2 border-emerald-500" />
      </div>
      <div className="service-con">
        <div className="service-card">
          <FaMicrochip className="service-icon" size={50} />
          <h4 className="text-xl font-semibold mb-2">AI / ML</h4>
          <p className="font-light">
            Our mission is to leverage technology to create a safer, more
            efficient world. We strive to deliver top-notch solutions tailored
            to the unique needs of our clients.
          </p>
        </div>

        <div className="service-card">
          <IoIosApps className="service-icon" size={50} />
          <h4 className="text-xl font-semibold mb-2">App Development</h4>
          <p className="font-light">
            Our mission is to leverage technology to create a safer, more
            efficient world. We strive to deliver top-notch solutions tailored
            to the unique needs of our clients.
          </p>
        </div>

        <div className="service-card">
          <BiSolidMicrochip className="service-icon" size={50} />
          <h4 className="text-xl font-semibold mb-2">Embedded System</h4>
          <p className="font-light">
            Our mission is to leverage technology to create a safer, more
            efficient world. We strive to deliver top-notch solutions tailored
            to the unique needs of our clients.
          </p>
        </div>

        <div className="service-card">
          <FaBrain className="service-icon" size={50} />
          <h4 className="text-xl font-semibold mb-2">Innovative Solutions</h4>
          <p className="font-light">
            Our mission is to leverage technology to create a safer, more
            efficient world. We strive to deliver top-notch solutions tailored
            to the unique needs of our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
