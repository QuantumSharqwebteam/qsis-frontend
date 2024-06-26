import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import service1 from "../assets/services/service1.jpg";
import service2 from "../assets/services/service2.jpg";
import service3 from "../assets/services/service3.jpg";
import service4 from "../assets/services/service4.jpg";
import service5 from "../assets/services/service5.jpg";

const images = [service1, service2, service3, service4, service5];

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
            <div className="relative h-96 md:h-[50vh] lg:h-[100vh]">
              <div className="absolute inset-0"></div>
              <img
                src={img}
                alt={`Service ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImagesCarousel;
