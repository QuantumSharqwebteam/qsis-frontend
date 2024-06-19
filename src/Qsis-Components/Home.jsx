import { FaArrowRightLong, FaMicrochip } from "react-icons/fa6";
import { IoIosApps } from "react-icons/io";
import { FaBrain } from "react-icons/fa";
import { BiSolidMicrochip } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import ImagesCarousel from "./ImagesCarousel";
import MissionVision from "./MissionVision";

const Home = () => {
  return (
    <>
      {/* Image Carousel */}
      <ImagesCarousel />

      {/* Our services section */}

      <div className=" my-10 px-4  space-y-8">
        <h1 className="text-4xl font-semibold mb-0 pb-0">Our Services</h1>
        <hr className="w-20 border-2 border-sky-600 rounded mt-0 ml-5" />
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

      {/* carousal section */}
      <MissionVision />

      {/* our work section */}
      <div className="project-list-con service-container">
        <div className="my-16 justify-center space-y-8">
          <h1 className="text-4xl font-semibold">Our Work</h1>
          <hr className="w-20 border-2 border-sky-600 rounded mt-0 ml-5" />
        </div>
        <ul className="home-project-list">
          <li className="project-card bg-emerald-500 text-white">
            Automatic Irrigation System
          </li>
          <li className="project-card border-2 text-emerald-500 border-emerald-500">
            Lane Change Detection
          </li>
          <li className="project-card bg-emerald-500 text-white">Number Plate Extractor</li>
          <li className="project-card border-2 text-emerald-500 border-emerald-500">
            Object Detector
          </li>
          <li className="project-card bg-emerald-500 text-white">
            Helmet Violation Detection
          </li>
          <li className="project-card border-2 text-emerald-500 border-emerald-500 ">
            No Parking Alarming System
          </li>
        </ul>
        <div className="flex justify-end mx-1 mb-4">
          <Link to="/projects">
            <p className="flex text-emerald-500 cursor-pointer">
              Explore More <FaArrowRightLong className="my-1 ml-1" />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
