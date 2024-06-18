import { FaArrowRightLong, FaMicrochip } from "react-icons/fa6";
import { IoIosApps } from "react-icons/io";
import { FaBrain } from "react-icons/fa";
import { BiSolidMicrochip } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Our services section */}
      <h1 className="text-2xl pl-5 mb-2 font-medium">Our Services</h1> 
      <div className="service-con">
        <div className="service-card">
          <FaMicrochip className="service-icon" size={50} />
          <h4>AI / ML</h4>
          <p>
            Our mission is to leverage technology to create a safer, more
            efficient world. We strive to deliver top-notch solutions tailored
            to the unique needs of our clients.
          </p>
        </div>

        <div className="service-card">
          <IoIosApps className="service-icon" size={50} />
          <h4>App Development</h4>
          <p>
            Our mission is to leverage technology to create a safer, more
            efficient world. We strive to deliver top-notch solutions tailored
            to the unique needs of our clients.
          </p>
        </div>

        <div className="service-card">
          <BiSolidMicrochip className="service-icon" size={50} />
          <h4>Embedded System</h4>
          <p>
            Our mission is to leverage technology to create a safer, more
            efficient world. We strive to deliver top-notch solutions tailored
            to the unique needs of our clients.
          </p>
        </div>

        <div className="service-card">
          <FaBrain className="service-icon" size={50} />
          <h4>Innovative Solutions</h4>
          <p>
            Our mission is to leverage technology to create a safer, more
            efficient world. We strive to deliver top-notch solutions tailored
            to the unique needs of our clients.
          </p>
        </div>
      </div>

      {/* our work section */}
      <div className="project-list-con service-container">
        <h1 className="text-2xl mb-5 font-medium ">Our Work</h1> 

        <ul className="home-project-list">
          <li className="project-card bg-teal-600">
            Automatic Irrigation System
          </li>
          <li className="project-card border border-teal-600">
            Lane Change Detection
          </li>
          <li className="project-card bg-teal-600">Number Plate Extractor</li>
          <li className="project-card border border-teal-600">
            Object Detector
          </li>
          <li className="project-card bg-teal-600">
            Helmet Violation Detection
          </li>
          <li className="project-card border border-teal-600">
            No Parking Alarming System
          </li>
        </ul>
        <div className="flex justify-end mx-1">
          <Link to="/projects">
            <p className="flex text-teal-600 cursor-pointer">
              Explore More <FaArrowRightLong className="my-1 ml-1"/>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
