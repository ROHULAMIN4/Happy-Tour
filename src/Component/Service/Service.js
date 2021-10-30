import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Firebase/UseAuth";
import "./service.css";

const Service = (props) => {
  const { user } = useAuth();

  const { name, price, img, description, _id } = props.service;

  return (
    <div className=" col-lg-4 col-sm-12 manage-service mb-5" data-aos="zoom-in">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>

          {user?.email ? (
            <Link to={`/service/${_id}`}>
              <Button variant="primary">Book</Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="primary">Sign first for booking</Button>
            </Link>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
