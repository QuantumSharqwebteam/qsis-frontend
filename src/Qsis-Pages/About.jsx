import React, { useEffect } from "react";
import aboutSvg from "../assets/about.svg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="w-11/12 mx-auto my-8 grid grid-cols-1 md:grid-cols-2">
        <div
          className="flex flex-col space-y-6 md:space-y-12 justify-center px-6  bg-gray-100 rounded-3xl"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="text-4xl font-semibold capitalize pt-6 text-zinc-800">
            About Us
          </h1>
          <p className="text-justify leading-relaxed pb-6 text-gray-500 font-medium">
            Quantum Sharq Innovative Solutions offers premier IT solutions
            including web and Android development, embedded and cloud
            engineering, and advanced crime analysis software for startups and
            enterprises.
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center drop-shadow-md md:drop-shadow-2xl"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <img src={aboutSvg} alt="about svg" className="w-[60%]" />
        </div>
      </div>

      {/* map */}

      <div className="w-11/12 mx-auto my-8 grid grid-cols-1 md:grid-cols-2">
        <div
          className="flex flex-col space-y-3 md:space-y-6 mx-2 rounded-3xl bg-emerald-100 p-2 my-6 md:my-0"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="text-[18px] md:text-4xl font-semibold mt-0 md:mt-4 text-center text-zinc-800">
            Thinking of visiting us?
          </h1>

          <h1 className="text-[18px] md:text-3xl font-semibold text-center text-zinc-700">
            Address
          </h1>
          <p className="text-[12px] md:text-[17px] text-zinc-500 font-semibold  text-center">
            info.quantumsharq@gmail.com
          </p>
          <p className=" text-[12px] md:text-[17px] text-zinc-500 font-semibold text-center">
            Flat No.3D, Dolphin Flats, No.99 & 100, Vaibhav Nagar, phase-I, Opp
            to VIT, Vellore- 632014
          </p>
          <p className=" text-[12px] md:text-[17px] text-zinc-500 font-semibold text-center">
            +91 9342836860{" "}
          </p>
        </div>

        <div data-aos="fade-left" data-aos-duration="3000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1072154801755!2d79.1536455854816!3d12.964990682421435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479e922faf03%3A0xf8446fdb116ec9c4!2sDolphin%20Apartment!5e0!3m2!1sen!2sin!4v1718799451775!5m2!1sen!2sin"
            className="rounded-3xl w-full h-52 md:h-96"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Animation */}
      <marquee behavior="" direction=""></marquee>
    </div>
  );
};

export default About;
