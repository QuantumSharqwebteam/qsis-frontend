import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/services/img1.jpg";
import img2 from "../assets/services/img2.jpg";
import img3 from "../assets/services/img3.jpg";
import img4 from "../assets/services/img4.jpg";

const images = [img1, img2, img3, img4];

const ImagesCarousel = () => {
  return (
    <div className="w-full max-w-full mx-auto">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
      >
        {images.map((img, index) => (
          <div key={index}>
            <div className="relative h-96 md:h-[100vh]">
              <div className="absolute inset-0 bg-black opacity-80"></div>
              <img
                src={img}
                alt={`Service ${index + 1}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="gradient-text text-2xl md:text-5xl lg:text-6xl font-bold text-center">
                  Quantum Sharq Innovative Solutions
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImagesCarousel;
