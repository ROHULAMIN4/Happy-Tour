import React from "react";
import { Carousel } from "react-bootstrap";
import EventDetails from "../EventDetails/EventDetails";
import Review from "../Review/Review";
import Services from "../Services/Services";
import TopDestination from "../TopDestination/TopDestination";

const Home = () => {
  return (
    <>
      <div>
        <h1>THis is home</h1>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/n0X85xt/rsz-pexels-pixabay-237272.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>NilGiri bandorban</h5>
              <p>
                Nilgiri is a collection of multiple variable sizes hill area in
                Bandarban. Bandarban itself is a hill district in Banglades. The
                mountains with Covering trees look very beautiful from
                Nilgiri.The journey with locally
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/xL6y0tb/rsz-pexels-archie-binamira-705075.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h5>Mymensing Garo pahar</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/6NYN361/rsz-pexels-julius-silver-753626.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Services></Services>
      <Review></Review>
      <TopDestination></TopDestination>
      <EventDetails></EventDetails>
    </>
  );
};

export default Home;
