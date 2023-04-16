import React, { useState, useContext } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { DbContext } from "../../../App";
const Admin = () => {
  //States
  const [dishData, setDishData] = useState([]);
  const [loading, setLoading] = useState(false);
  //Db useContext
  const db = useContext(DbContext);
  //useNavigate
  const navigate = useNavigate();
  //Database instance
  const dbRef = collection(db, "dishOrders");
  //Localstorage
  const form= localStorage.getItem("form");
  const user = JSON.parse(form);
    if (!form) {
      navigate("/login");
    }
  // Getting data from firebase
  onSnapshot(dbRef, (snapshot) => {
    const dishData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDishData(dishData);
    setLoading(true);
  });

  return (
    <div className="adminWrapper">
        <h2 className="adminHeading">Wecome, {user.firstName}.</h2>
      <div className="adminContents">
        <div className="adminContent">
          <div className="adminContents-div">
          <div className="adminDetails-div">
            <h2 className="adminDetail-heading">Admin details:</h2>
            <h3 className="adminDetail-name">Name: {user.firstName} {user.lastName}</h3>
            <h3 className="adminDetail-email">Email: {user.email}</h3>
          </div>
          <div className="adminDetails-content2">
                <h2 className="adminDetails-content2_heading">Admin, don't forget our core value:</h2>
                <p className="adminDetails-content2_details">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                   ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                    ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </div>
            </div>
          <div className="adminOrdersDetails">
            <h2 className="adminDish-heading">Order details:</h2>
          {dishData.map((data) => {
            return (
              <div className="adminDish" key={data.id}>
                <div className="adminDish-div">
                <div className="adminDish-div1">
                <img src={data.dishImg} alt="img" className="adminDish-img" />
                <h2 className="adminDish-name">{data.dishName}</h2>
                <h3 className="adminDish-price">{data.price}</h3>
                </div>
                <div className="adminDish-div2">
                  <h3 className="adminDish-plates">Plates: {data.plates}</h3>
                  <h3 className="adminDish-totalPrice">Total Price: #{data.totalPrice}</h3>
                  <h3 className="adminDish-name">Name: {data.name}</h3>
                  <h3 className="adminDish-time">Time: {data.time}</h3>
                  <button className="adminDish-btn">Complete order</button>
                </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
