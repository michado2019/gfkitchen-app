import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("form"));
  const dishData = localStorage.getItem("dishData");
  const parsedDishData = JSON.parse(dishData);
  useEffect(() => {
    const form = JSON.parse(user);
    if (!form) {
      navigate("/login");
    }
    console.log(user);
  }, [user, navigate]);
  return (
    <div className="adminWrapper">
      <div className="adminContents">
        <div className="adminContent">
          <img
            src={parsedDishData.dishImg}
            alt="img"
            className="adminDish-img"
          />
          <h2 className="adminDish-name">{parsedDishData.dishName}</h2>
          <h3 className="adminDish-name">{parsedDishData.price}</h3>
        </div>
      </div>
    </div>
  );
};
export default Admin;
