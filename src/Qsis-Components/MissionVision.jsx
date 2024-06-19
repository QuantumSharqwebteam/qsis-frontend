import React from "react";
import mission from "../assets/mission.svg";
import vision from "../assets/vision.png";

const MissionVision = () => {
  return (
    <div>
      {/* mission */}

      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto mt-4 ">
        <div className="w-full md:w-[60%] mx-auto flex justify-center items-center">
          <img src={mission} alt="mission logo" />
        </div>
        <div className="mt-16 justify-center space-y-8">
          <h1 className="text-4xl font-semibold">What We Do</h1>
          <hr className="w-14 border-2 border-sky-600" />
          <p className="text-justify text-lg text-gray-800">
            Our mission is to leverage technology to create a safer, more
            efficient world. We strive to deliver top-notch solutions tailored
            to the unique needs of our clients.
          </p>
        </div>
      </div>

      {/* vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto my-4 ">
        <div className="mt-16 justify-center space-y-8">
          <h1 className="text-4xl font-semibold">Empowering the Future</h1>
          <hr className="w-14 border-2 border-sky-600" />
          <p className="text-justify text-lg text-gray-800">
            At Quantum Sharq Innovative Solutions, our vision is to create a
            safer, more efficient, and sustainable world by harnessing the power
            of technology. We aim to be the leading provider of cutting-edge
            solutions that address critical challenges in public safety,
            agriculture, traffic management, and beyond. By continuously pushing
            the boundaries of innovation, we strive to improve the quality of
            life for individuals and communities globally.
          </p>
        </div>
        <div className="w-full md:w-[70%] mx-auto order-first md:order-last flex justify-center items-center">
          <img src={vision} alt="mission logo" />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
