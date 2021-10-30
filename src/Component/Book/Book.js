import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Book = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { name, price, img, description } = data;
        const newUser = { name, price, img, description };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
      });
  }, []);

  return (
    <div className="App nav-manage">
      <h3 className="text-primary mt-5">Booking Seccessfully</h3>
      <Link to="/home">
        <button className="btn btn-warning mb-5 mt-5">Back to Home</button>
      </Link>
    </div>
  );
};

export default Book;
