import React from "react";
import mission from "../assets/mission3.png";
import vision from "../assets/vision3.jpg";

const MissionVision = () => {
  return (
    <div>
      {/* mission */}

      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto mt-0 md:mt-4 overflow-x-hidden">
        <div
          className="w-full md:w-[60%] flex justify-center items-center"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <img src={mission} alt="mission logo" className="rounded-lg" />
        </div>
        <div
          className="mt-16 justify-center space-y-8"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h1 className="text-4xl font-bold text-rose-700">What We Do</h1>
          <p className="text-justify text-lg text-gray-800">
            Our mission is to leverage technology to create a safer, more
            efficient world. We strive to deliver top-notch solutions tailored
            to the unique needs of our clients.
          </p>
        </div>
      </div>

      {/* vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto my-4 overflow-x-hidden">
        <div
          className="mt-16 justify-center space-y-8"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="text-4xl font-bold  text-emerald-900">
            Empowering the Future
          </h1>
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
        <div
          className="w-full md:w-[60%] ml-auto my-6 md:my-0 flex justify-center items-center"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <img src={vision} alt="mission logo" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
