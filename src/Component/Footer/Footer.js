import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-black pb-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 text-white-style">
          <h2 className="mb-4 pt-4">About Us</h2> <hr className="text-white" />
          <small className="mb-4 p-2">
            The key purpose of an event plan is to provide an overview of the
            event, as well as to provide authorities and agencies with the
            necessary information for licence and permit approvals.
          </small>
          <p className="mt-4">
            <i class="fas fa-phone"></i> : +880188343874
          </p>
          <p className="mt-4">
            <i class="fas fa-map-marker"></i> ; Dhaka doher
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h2 className="mb-4 pt-4 text-white">Latest Event </h2>
          <hr className="text-white" />
          <h6 className="mb-3 text-warning">Dhaka to sylhet</h6>
          <p className="text-danger mb-3">28 oct 2021</p>
          <h6 className="mb-3 text-warning">Dhaka to Bandorbon</h6>
          <p className="text-danger mb-3">5 November 2021</p>
          <h6 className="mb-3 text-warning">Dhaka to Cox-bazar</h6>
          <p className="text-danger mb-3">1 dec 2021</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-white">
          <h2 className="mb-4 pt-4 "> Contact Us</h2>
          <hr className="text-white" />
          <p className="mb-4">
            Head office <span className="mb-4 text-warning">: Dhaka doher</span>
          </p>
          <p className="mb-4">
            Second office{" "}
            <span className="mb-4 text-warning">: Dhaka Nobabgonj</span>
          </p>
          <h4 className="text-success">Contact with Social Media</h4>
          <span>
            <a href="https://www.facebook.com/urmi.rd">
              <i class="fab fa-facebook pe-4 text-white"></i>
            </a>
          </span>
          <span>
            <a href="https://twitter.com/RohulAm16659212">
              <i class="fab fa-twitter text-primary pe-4"></i>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/rohul-amin-2555b3216/">
              <i class="fab fa-linkedin-in pe-4 text-primary"></i>
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/rohulamin24/">
              <i class="fab fa-instagram pe-4 text-danger"></i>
            </a>
          </span>
          <span>
            <a href="https://mail.google.com/mail/u/0/#inbox">
              <i class="fas fa-envelope text-warning"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
