import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";
import ImagesCarousel from "./ImagesCarousel";
import MissionVision from "./MissionVision";
import Service from "./Service";
import CompanyNameTypeAnimation from "./CompanyNameTypeAnimation";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const works = [
    "Automatic Irrigation System",
    "Lane Change Detection",
    "Number Plate Extractor",
    " Object Detector",
    "Helmet Violation Detection",
    "No Parking Alarming System",
  ];

  const colors = [
    "#cd0037",
    "#1b5c96",
    "#10622b",
    "#e98024",
    "#f0e14a",
    "#87CEEB",
  ];

  return (
    <>
      <CompanyNameTypeAnimation />
      <ImagesCarousel />
      <Service />
      <MissionVision />

      {/* our work section */}
      <div className="project-list-con">
        <div className="ml-2 md:ml-10 my-16 justify-center space-y-8">
          <h1 className="text-4xl font-bold text-sky-500">Our Work</h1>
        </div>
        <ul className="home-project-list">
          {works.map((data, i) => (
            <li className="project-card bg-[#E8E7E7] font-bold text-lg" key={i}>
              <div
                className="circle"
                style={{ border: `6px solid ${colors[i % colors.length]}` }}
              />
              {data}
            </li>
          ))}
        </ul>

        <div className="flex justify-end mx-1 mb-4">
          <Link to="/projects">
            <p className="flex text-blue-950 cursor-pointer">
              Explore More <FaArrowRightLong className="my-1 ml-1" />
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
