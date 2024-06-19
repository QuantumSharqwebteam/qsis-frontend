import { FaArrowRightLong, FaMicrochip } from "react-icons/fa6";

import { Link } from "react-router-dom";
import ImagesCarousel from "./ImagesCarousel";
import MissionVision from "./MissionVision";
import Service from "./Service";

const Home = () => {
  return (
    <>
      {/* Image Carousel */}
      <ImagesCarousel />

      {/* Our services section */}
      <Service />

      {/* carousal section */}
      <MissionVision />

      {/* our work section */}
      <div className="project-list-con service-container">
        <div className="my-16 justify-center space-y-8">
          <h1 className="text-4xl font-semibold">Our Work</h1>
          <hr className="w-14 border-2 border-emerald-500-600" />
        </div>
        <ul className="home-project-list">
          <li className="project-card bg-emerald-500 text-white">
            Automatic Irrigation System
          </li>
          <li className="project-card border-2 text-emerald-500 border-emerald-500">
            Lane Change Detection
          </li>
          <li className="project-card bg-emerald-500 text-white">
            Number Plate Extractor
          </li>
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
        <div className="flex justify-end mx-1">
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
