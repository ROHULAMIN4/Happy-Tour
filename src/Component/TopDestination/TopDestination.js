import React, { useEffect } from "react";
import "./Topdestination.css";
import AOS from "aos";
import "aos/dist/aos.css";

const TopDestination = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-5 mb-5">
      <h1 className="mb-4 text-warning">
        <i>Top Destination</i>
      </h1>
      <div className=" row top-des-banner">
        <div className="col-lg-4 col-sm-12 banner-img" data-aos="fade-left">
          <img
            src={"https://i.ibb.co/1RytwHk/pexels-bimal-ranabhat-2177708.jpg"}
            alt=""
          />
          <h2 className="text-success">
            <i>Nepal</i>
          </h2>
        </div>
        <div className="col-lg-4 col-sm-12 banner-img" data-aos="zoom-in-up">
          <img
            src={
              "https://i.ibb.co/MVZBGbh/pexels-asad-photo-maldives-9482125.jpg"
            }
            alt=""
            img
          />
          <h2 className="text-success">
            <i>Maldiv</i>
          </h2>
        </div>
        <div className="col-lg-4 col-sm-12 banner-img" data-aos="fade-up-right">
          <img src={"https://i.ibb.co/db4HM7q/393052-PCOOHY-494.jpg"} alt="" />
          <h2 className="text-success">
            <i>Egypt</i>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
