import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const CompanyNameTypeAnimation = () => {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      strings: "Quantum Sharq Innovative Solutions",
      autoStart: true,
    });
  }, []);

  return (
    <div className="mb-4">
      <h2 className="text-3xl px-2 py-4 font-bold text-center">
        Welcome, <span id="typewriter" className="gradient-text"></span>{" "}
      </h2>
    </div>
  );
};

export default CompanyNameTypeAnimation;
