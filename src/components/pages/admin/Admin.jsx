import React, { useState, useContext, useEffect } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { DbContext } from "../../../App";
import Pagination from "./pagination/Pagination";
import { doc, deleteDoc } from "firebase/firestore";
import { Loading } from "../../loading/Loading";
import ourKitchenData from "../ourKitchen/ourKitchenData/OurKitchenData";

const Admin = ({ loading, setLoading, docsLength }) => {
  //States
  const [dishData, setDishData] = useState([]);
  const [orderAlert, setOrderAlert] = useState('');
  const [displaySecondContent, setDisplaySecondContent] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 3;
  const pages = Math.ceil(dishData.length / perPage);
  const skip = page * perPage - perPage;

  //Db useContext
  const db = useContext(DbContext);

  //useNavigate
  const navigate = useNavigate();

  //Database instance
  const dbRef = collection(db, "dishOrders");

  //Localstorage
  const form = localStorage.getItem("form");
  const user = JSON.parse(form);

  //UseEffect
  useEffect(() => {
    setLoading(true);

    // Getting data from firebase
    onSnapshot(dbRef, (snapshot) => {
      const dishData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDishData(dishData);
      if (dishData.length !== 0) {
        setLoading(false);
        setDisplaySecondContent(false);
      }
      if(dishData.length === 0){
        setLoading(false);
        setDisplaySecondContent(true);
        setOrderAlert('No pending order!!!')
      }
    });
  }, []);

  //Delete order
  const handleDelete = (id) => {
    if (!id) {
      return false;
    } else {
      const getDoc = doc(dbRef, id);
      navigate("/admin");
      return deleteDoc(getDoc);
    }
  };
  return (
    <div className="adminWrapper">
      {!user ? (
        navigate("/login")
      ) : (
        <div>
          <h2 className="adminHeading">Wecome, {user.firstName}.</h2>
          <div className="adminContents">
            <div className="adminContent">
              <div className="adminContents-div">
                <div className="adminDetails-div">
                  <h2 className="adminDetail-heading">Admin details:</h2>
                  <h3 className="adminDetail-name">
                    Name: {user.firstName} {user.lastName}
                  </h3>
                  <h3 className="adminDetail-email">Email: {user.email}</h3>
                </div>
                <div className="adminDetails-content2">
                  <h2 className="adminDetails-content2_heading">
                    Admin, don't forget our core value:
                  </h2>
                  <p className="adminDetails-content2_details">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum
                  </p>
                </div>
              </div>
              <div className="adminOrders-alert">
                  {orderAlert}
              </div>
              {loading ? (
                <Loading />
              ) : (
                <div className="adminOrdersDetails">
                  <div>
                    <div className="adminDashboard">
                      <div
                        className="adminDashboard-content"
                        style={{
                          display:
                            displaySecondContent === true ? "none" : "block",
                        }}
                      >
                        <h2 className="adminDashboard-heading">Dashboard</h2>
                        <div className="adminDashboard-div">
                          <div className="adminDashboard-flex_col">
                            <span className="adminDashboard-flex_heading">
                              Total orders
                            </span>
                            <span className="adminDashboard-flex_data">
                              {docsLength}
                            </span>
                          </div>
                          <div className="adminDashboard-flex_col">
                            <span className="adminDashboard-flex_heading">
                              Total dishes
                            </span>
                            <span className="adminDashboard-flex_data">
                              {ourKitchenData.length}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2
                      className="adminDish-heading"
                      style={{
                        display:
                          displaySecondContent === true ? "none" : "block",
                      }}
                    >
                      Order details:
                    </h2>
                    {dishData.slice(skip, skip + perPage).map((data) => {
                      return (
                        <div className="adminDish" key={data.id}>
                          <div className="adminDish-div">
                            <div className="adminDish-div1">
                              <img
                                src={data.dishImg}
                                alt="img"
                                className="adminDish-img"
                              />
                              <h2 className="adminDish-name">
                                {data.dishName}
                              </h2>
                              <h3 className="adminDish-price">{data.price}</h3>
                            </div>
                            <div className="adminDish-div2">
                              <h3 className="adminDish-plates">
                                Plates: {data.plates}
                              </h3>
                              <h3 className="adminDish-totalPrice">
                                Total Price: #{data.totalPrice}
                              </h3>
                              <h3 className="adminDish-name">
                                Name: {data.name}
                              </h3>
                              <h3 className="adminDish-time">
                                Time: {data.time}
                              </h3>
                              <h3 className="adminDish-name">
                                Address: {data.address}
                              </h3>
                              <h3 className="adminDish-time">
                                Phone: {data.phone}
                              </h3>
                              <button
                                className="adminDish-btn"
                                onClick={() => handleDelete(data.id)}
                              >
                                Complete order
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className="adminDish-pagination"
                    style={{
                      display: displaySecondContent === true ? "none" : "block",
                    }}
                  >
                    <Pagination page={page} pages={pages} setPage={setPage} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Admin;
