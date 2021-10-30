import React, { useEffect, useState } from "react";
import Order from "./Order";

const ManageOrder = () => {
  const [manageoder, setManageorder] = useState([]);
  useEffect(() => {
    fetch("https://pacific-chamber-60187.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setManageorder(data));
  }, []);
  return (
    <div className="row nav-manage g-4">
      {manageoder.map((order) => (
        <Order key={order._id} order={order}></Order>
      ))}
    </div>
  );
};

export default ManageOrder;
