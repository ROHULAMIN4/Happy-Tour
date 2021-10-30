import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    AOS.init();
    fetch("https://pacific-chamber-60187.herokuapp.com/addservices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <h4 className="title text-center mt-3">Our tour Event</h4>
      <div className="row mt-5 g-4 home-back">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <Link to="/manageorder">
        <button className="btn btn-primary mt-5 mb-5">
          All booking Details
        </button>
      </Link>
    </>
  );
};

export default Services;
