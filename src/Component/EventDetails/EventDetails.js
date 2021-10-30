import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const EventDetails = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="shadow-lg mt-5 mb-5 p-4">
      <h1 className="text-warning">Our tour detials </h1>
      <div className="row bg-secondary p-4">
        <div
          className="col-lg-4 col-sm-12"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="text-white">22+</h1>
          <small className="text-white">Professional tour guide</small>
        </div>
        <div
          className="col-lg-4 col-sm-12"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <h1 className="text-white">85+</h1>
          <small className="text-white">Tours are Completed</small>
        </div>
        <div
          className="col-lg-4 col-sm-12"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="text-white">13+</h1>
          <small className="text-white">Traveling Experience</small>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
