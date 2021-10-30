import React, { useState } from "react";
import "./Order.css";

const Order = (props) => {
  const [services, setServices] = useState([]);

  const { name, price, img, description, _id } = props.order;

  const handleDeletin = (id) => {
    const url = `https://pacific-chamber-60187.herokuapp.com/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        if (data) {
          alert("Deleted Successfully");
          const remaimgUsers = services.filter((user) => user._id !== id);
          setServices(remaimgUsers);
        }
      });
  };
  return (
    <div className="col-lg-3 col-sm-12 manage-order">
      <p>
        <img className="w-100 img-style" src={img} alt="" />
      </p>
      <h3>
        <span className="text-primary">Event name</span>:
        <span className="text-success">{name}</span>
      </h3>
      <small>{description}</small>
      <p></p>
      <button onClick={() => handleDeletin(_id)} className=" btn btn-danger">
        Remove
      </button>
    </div>
  );
};

export default Order;
