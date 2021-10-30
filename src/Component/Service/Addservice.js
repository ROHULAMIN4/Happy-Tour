import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Addservice.css";

const Addservice = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/addservices", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added successfully");
        // form reset for using react hook form
        reset();
      }
    });
  };
  return (
    <div className="Addservice ">
      <h2>Add New Tour Event</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Destination tour name"
        />
        <textarea {...register("description")} placeholder=" tour details " />
        <input
          type="number"
          {...register("price")}
          placeholder="Tour package Price"
        />
        <input {...register("img")} placeholder=" Tour sample image URL" />
        <input className="addservice-submit" type="submit" />
      </form>
    </div>
  );
};

export default Addservice;
