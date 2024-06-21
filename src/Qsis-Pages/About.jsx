import React from "react";
import AboutUs from "../assets/about.svg";

const About = () => {
  return (
    <div className="px-5">
      <div className="lg:text-center">
        <h1 className="text-3xl font-semibold text-center text-emerald-500 underline underline-offset-8">
          About Us
        </h1>
        <p className="mt-6 text-xl  m-auto lg:w-2/3 text-center">
          Our mission is to leverage technology to create a safer, more
          efficient world. We strive to deliver top-notch solutions tailored to
          the unique needs of our clients.
        </p>
        {/* <div className="md:flex justify-center items-center"> */}
          <img src={AboutUs} alt="about" className="md:h-96 md:w-1/2 m-auto"/>
          <p className=" mt-4 md:mt-0 text-xl md:text-xl lg:w-2/3 m-auto text-center">
            Our vision is to create a safer, more efficient, and sustainable world
            by harnessing the power of technology. We aim to be the leading
            provider of cutting-edge solutions that address critical challenges in
            public safety, agriculture, traffic management, and beyond. By
            continuously pushing the boundaries of innovation, we strive to
            improve the quality of life for individuals and communities globally.
          </p>
        {/* </div> */}
        
        <div className="flex flex-col mt-14 justify-center items-center">
          <h1 className="text-3xl md:text-4xl mb-6 font-semibold mt-2 text-emerald-500 underline underline-offset-8">
            Find Us on Map
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-5 lg:w-2/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1072154801755!2d79.1536455854816!3d12.964990682421435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479e922faf03%3A0xf8446fdb116ec9c4!2sDolphin%20Apartment!5e0!3m2!1sen!2sin!4v1718799451775!5m2!1sen!2sin"
              // width="300"
              // height="350"
              allowFullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-xl mb-2 mx-auto w-full h-96 mb-8"
            />
            <div className=" flex flex-col justify-center items-center text-center items-start px-10 gap-8">
              <p>
                Flat No.3D, Dolphin Flats, No.99 & 100, Vaibhav Nagar, phase-I,
                Opp to VIT, Vellore- 632014
              </p>
              <p className="">Contact No: +91 9342836860</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
