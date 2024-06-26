import React from "react";
import { IoIosApps } from "react-icons/io";
import { FaBrain } from "react-icons/fa";
import { BiSolidMicrochip } from "react-icons/bi";
import { FaMicrochip } from "react-icons/fa6";

const Service = () => {
  return (
    <div>
      <div className="my-16 justify-center space-y-8 ml-6 md:ml-12 ">
        <h1 className="text-4xl font-bold text-blue-950">Service Repertoire</h1>
      </div>
      <div className="service-con">
        <div className="service-card">
          <FaMicrochip className="service-icon text-emerald-900" size={50} />
          <h4 className="text-2xl font-bold mb-2">AI / ML</h4>
          <p className="font-medium text-gray-500">
          Developed an AI/ML solution enhancing public safety by deploying real-time surveillance analytics, improving threat detection accuracy and response time using advanced computer vision techniques.
          </p>
        </div>

        <div className="service-card">
          <IoIosApps
            className="service-icon text-rose-700 font-bold"
            size={50}
          />
          <h4 className="text-2xl font-bold mb-2">App Development</h4>
          <p className="font-medium text-gray-500">
          Developed a user-friendly app integrating real-time data analytics, seamless user interface, and secure backend to enhance user engagement and operational efficiency.
          </p>
        </div>

        <div className="service-card">
          <BiSolidMicrochip className="service-icon text-amber-400" size={50} />
          <h4 className="text-2xl font-bold mb-2">Embedded System</h4>
          <p className="font-medium text-gray-500">
          Developed a real-time embedded system for IoT-based smart home automation, integrating sensors, microcontrollers, and wireless communication for enhanced security and energy efficiency.
          </p>
        </div>

        <div className="service-card">
          <FaBrain className="service-icon text-sky-500 " size={50} />
          <h4 className="text-2xl font-bold mb-2">Innovative Solutions</h4>
          <p className="font-medium text-gray-500">
          We offer innovative 
          solutions tailored to solve your technical challenges efficiently and effectively, ensuring optimal performance and client satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
