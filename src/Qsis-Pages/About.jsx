import React from "react";
import AboutUs from "../assets/about-us.png"


const About = () => {
  return <div className="flex justify-center items-center w-full  md:w-3/4 mx-auto">
    <div className=" p-[50px] md:p-[100px] flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-5xl font-light text-emerald-500 underline underline-offset-8">About Us</h1>
      <p className="mt-6 text-sm md:text-xl">Our mission is to leverage technology to create a safer, more efficient world. We strive to deliver
        top-notch solutions tailored to the unique needs of our clients.</p>
      <p className=" mt-8 text-sm md:text-xl">
        Our vision is to create a safer, more efficient, and
        sustainable world by harnessing the power of technology. We aim to be the leading provider of
        cutting-edge solutions that address critical challenges in public safety, agriculture, traffic
        management, and beyond. By continuously pushing the boundaries of innovation, we strive to
        improve the quality of life for individuals and communities globally.
      </p>
      <div className="flex flex-col mt-14 justify-center items-center">
        <h1 className="text-2xl md:text-4xl font-light text-emerald-500 underline underline-offset-8">Find Us on Map</h1>

        <div className="mt-20 flex">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1072154801755!2d79.1536455854816!3d12.964990682421435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479e922faf03%3A0xf8446fdb116ec9c4!2sDolphin%20Apartment!5e0!3m2!1sen!2sin!4v1718799451775!5m2!1sen!2sin" width="600" height="450" allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-xl"/>
          <div className=" flex flex-col justify-center items-start px-10 gap-8">

            <p>Flat No.3D, Dolphin Flats, No.99 & 100, Vaibhav Nagar, phase-I, Opp to VIT, Vellore- 632014</p>

            <p>Contact No: +91 9342836860</p>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default About;
