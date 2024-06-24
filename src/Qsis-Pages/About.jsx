import React, { useEffect } from "react";
import aboutSvg from "../assets/about.svg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="w-11/12 mx-auto my-8 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col space-y-12 justify-center px-6 bg-gray-100 rounded-3xl">
          <h1 className="text-4xl font-semibold capitalize">Demo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            deleniti dolorum illum archit
          </p>
        </div>
        <div className="flex flex-col justify-center items-center drop-shadow-2xl">
          <img src={aboutSvg} alt="about svg" className="w-[60%]" />
        </div>
      </div>

      {/* map */}

      <div className="w-11/12 mx-auto my-8 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center mx-2 rounded-3xl bg-emerald-100 p-2">
          <h3>Address</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1072154801755!2d79.1536455854816!3d12.964990682421435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479e922faf03%3A0xf8446fdb116ec9c4!2sDolphin%20Apartment!5e0!3m2!1sen!2sin!4v1718799451775!5m2!1sen!2sin"
            className="rounded-3xl w-full h-52 md:h-96"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
