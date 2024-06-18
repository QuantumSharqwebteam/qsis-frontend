import React from "react";
import { motion } from "framer-motion";

const Product = ({ name, x, y }) => {
  return (
    <>
      <motion.div
        className="flex items-center justify-center text-center rounded-full font-semibold bg-black text-white p-2 shadow-black cursor-pointer text-sm"
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        animate={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
        style={{
          fontSize: "13px",
        }}
      >
        {name}
      </motion.div>
    </>
  );
};

const Products = () => {
  return (
    <>
      {" "}
      <div className="w-[100vw] px-3 py-16 flex flex-col items-center justify-center mt-5 bg-[#17C6D4]">
        <h2 className="text-3xl font-bold text-[#424242] mb-16 md:mb-10 text-center ">
          Projects
        </h2>

        <div
          className="w-[75%] h-96 relative rounded-full flex items-center justify-center"
          style={{
            background: `repeating-radial-gradient(rgba(151, 245, 108, 0.4) 2px, #fff 5px, #fff 100px 10%)`,
          }}
        >
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-4 shadow-black cursor-pointer absolute text-center text-sm md:text=[10px]"
            whileHover={{ scale: 1.05 }}
          >
            Projects
          </motion.div>

          <Product name="Automatic Irrigation System" x="180%" y="-5%" />

          <Product name="Helmet Violation Detection" x="40%" y="-100%" />

          <Product name="Triples Violation Detection" x="300%" y="6%" />

          <Product name="Lane Change Detection" x="-5%" y="80%" />

          <Product name="Wrong Side Detection" x="-80%" y="-100%" />

          <Product name="Crowd Detection" x="15%" y="140%" />

          <Product name="No Parking Alarming System" x="-190%" y="-205%" />

          <Product name="Number Plate Extractor" x="-150%" y="-200%" />

          <Product name="Object Detector" x="-170%" y="0%" />
        </div>
      </div>
      {/* <Projects /> */}
    </>
  );
};

export default Products;
