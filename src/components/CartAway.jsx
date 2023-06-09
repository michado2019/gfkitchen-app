import React, { useContext, useState, useEffect } from "react";
import "./CartAway.css";
import { Close } from "@mui/icons-material";
import { useParams, Link } from "react-router-dom";
import { DbContext } from "../App";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Loading } from "./loading/Loading";

const CartAway = ({
  cartDisplay,
  setCartDisplay,
  input,
  setInput,
  loading,
  setLoading,
  storage,
  setStorage,
}) => {
  //useState
  const [docLength, setDocLength] = useState("");
  const [stamp, setStamp] = useState(false);
  const [state, setState] = useState(false);
  const [notification, setNotification] = React.useState("");
  //Db useContext
  const db = useContext(DbContext);
  //Database instance
  const dbRef = collection(db, "dishOrders");
  //Handlers
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
    let dishData = JSON.parse(localStorage.getItem("dishData"));
    setInput((prev) => {
      return {
        ...prev,
        price: dishData.price,
        dishName: dishData.dishName,
        dishImg: dishData.dishImg,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name !== "" && input.plates > 0) {
      setStamp(true);
    } else {
      alert(
        'Please, fill Buyer"s name field and Number of plates must be greater than 0'
      );
    }
    function calculateTotalPrice(price, plates) {
      return price * plates;
    }
    setInput((prev) => {
      return {
        ...prev,
        totalPrice: calculateTotalPrice(input.price, input.plates),
      };
    });
  };

  const handleOrder = async () => {
    //Database
    if (
      input.name === "" ||
      input.address === "" ||
      input.phone === "" ||
      input.deliveryTime === ""
    ) {
      return alert("Please, fill all fields");
    }
    if (input.plates <= 0) {
      return alert("Number of plates must be greater than 0");
    }
    setLoading(true);
    try {
      setLoading(true);
      await addDoc(dbRef, {
        name: input.name,
        totalPrice: input.totalPrice,
        price: input.price,
        plates: input.plates,
        dishImg: input.dishImg,
        dishName: input.dishName,
        time: new Date().toLocaleString(),
        address: input.address,
        phone: input.phone,
        deliveryTime: input.deliveryTime,
      });
    } catch (error) {
      setLoading = false;
    }
    async function getAllDishDocs() {
      const dishDocs = await getDocs(dbRef);
      setDocLength(dishDocs.docs.length);
      if (dishDocs) {
        setLoading(false);
        setNotification("Order successfully taken!");
      }
    }
    getAllDishDocs();
    setInput((prev) => {
      return {
        prev,
        price: 0,
        name: "",
        plates: 0,
        totalPrice: 0,
        dishImg: "",
        dishName: "",
        address: "",
        phone: "",
        deliveryTime: "",
      };
    });
  };
  //useParam
  const { id } = useParams();

  //useEffect
  useEffect(() => {
    setState(true);
    const data = localStorage.getItem("ourKitchenDishes");
    setStorage(JSON.parse(data));
  }, [state]);

  return (
    <div
      className="cartAway-wrapper"
      style={{ display: cartDisplay ? "block" : "none" }}
    >
      <div className="cartAway-contents">
        <Link to="/">
          <Close
            className="cartAway-close_icon"
            onClick={() => setCartDisplay((prev) => !prev)}
          />
        </Link>
        {storage
          ?.filter((ourKitchenDatum) => ourKitchenDatum.id == id)
          .map((ourKitchenDatum) => {
            const dishData = {
              dishName: ourKitchenDatum.ditchName,
              dishImg: ourKitchenDatum.ditchImg,
              price: ourKitchenDatum.price,
            };
            localStorage.setItem("dishData", JSON.stringify(dishData));
            return (
              <div className="cartAway-content" key={ourKitchenDatum.id}>
                <div className="cartAway-content1_flexCol">
                  <img
                    src={ourKitchenDatum.ditchImg}
                    alt="img"
                    className="cartAway-content1_img"
                  />
                  <div className="cartAway-content1_flexCol2">
                    <h2 className="cartAway-content1_ditchName">
                      <span className="cartAway-descriptions">Name: </span>
                      {ourKitchenDatum.ditchName}
                    </h2>
                    <h3 className="cartAway-content1_origin">
                      <span className="cartAway-descriptions">Origin: </span>
                      {ourKitchenDatum.origin}
                    </h3>
                    <h4 className="cartAway-content1_nutritionalValue">
                      <span className="cartAway-descriptions">
                        Nutritional value:{" "}
                      </span>
                      {ourKitchenDatum.nutritional_value}
                    </h4>
                    <p className="cartAway-content1_ingredients">
                      <span className="cartAway-descriptions">
                        Ingredients:{" "}
                      </span>
                      {ourKitchenDatum.ingredients}
                    </p>
                    <p className="cartAway-content1_price">
                      <span className="cartAway-descriptions">Price: </span>#
                      {ourKitchenDatum.price}
                    </p>
                    <p className="cartAway-content1_details">
                      <span className="cartAway-descriptions">Details: </span>
                      {ourKitchenDatum.details}
                    </p>
                  </div>
                </div>
                {loading ? (
                  <Loading />
                ) : (
                  <div
                    className="cartAway-content2"
                    style={{ display: notification !== "" ? "none" : "block" }}
                  >
                    <h2 className="cartAway-content2_welcome1">
                      Hello, customer!
                    </h2>
                    <p className="cartAway-content2_welcome2">
                      You are about to order for{" "}
                      <span>{ourKitchenDatum.ditchName}</span>
                    </p>
                    <form className="cartAway-form" onSubmit={handleSubmit}>
                      <div className="cartAway-form_flex">
                        <label className="cartAway-labels">
                          Buyer's name:{" "}
                        </label>
                        <input
                          type="text"
                          placeholder="Buyer's name"
                          id="cartAway-content2_inputs"
                          className="cartAway-content2_inputs"
                          name="name"
                          value={input?.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="cartAway-form_flex">
                        <label className="cartAway-labels">Dish's name: </label>
                        <input
                          type="text"
                          placeholder={ourKitchenDatum.ditchName}
                          id="cartAway-content2_inputs"
                          className="cartAway-content2_inputs"
                          value={ourKitchenDatum?.ditchName}
                          disabled
                        />
                      </div>
                      <div className="cartAway-form_flex">
                        <label className="cartAway-labels">Price: </label>
                        <input
                          type="number"
                          className="cartAway-content2_inputs"
                          placeholder={ourKitchenDatum?.price}
                          value={ourKitchenDatum?.price}
                          disabled
                        />
                      </div>
                      <div className="cartAway-form_flex">
                        <label className="cartAway-labels">
                          Number of plates:{" "}
                        </label>
                        <input
                          type="number"
                          className="cartAway-content2_inputs"
                          onChange={handleChange}
                          name="plates"
                          value={input?.plates}
                        />
                      </div>
                      <div className="cartAway-form_flex">
                        <label className="cartAway-labels">Total price</label>
                        <input
                          type="number"
                          className="cartAway-content2_inputs"
                          placeholder={input?.totalPrice}
                          disabled
                        />
                      </div>
                      <div className="cartAway-form_flex">
                        <label className="cartAway-labels">Address: </label>
                        <input
                          type="text/number"
                          className="cartAway-content2_inputs"
                          id="cartAway-content2_inputs"
                          onChange={handleChange}
                          name="address"
                          value={input?.address}
                        />
                      </div>
                      <div className="cartAway-form_flex">
                        <label className="cartAway-labels">Phone: </label>
                        <input
                          type="tel"
                          className="cartAway-content2_inputs"
                          id="cartAway-content2_inputs"
                          onChange={handleChange}
                          name="phone"
                          value={input?.phone}
                        />
                      </div>
                      <div className="cartAway-form_flex">
                        <label className="cartAway-labels">
                          Delivery time:{" "}
                        </label>
                        <input
                          type="datetime-local"
                          className="cartAway-content2_inputs"
                          id="cartAway-content2_inputs"
                          onChange={handleChange}
                          name="deliveryTime"
                          value={input?.deliveryTime}
                        />
                      </div>
                      <button className="cartAway-calc_btn">Stamp</button>
                    </form>
                    <button
                      className="cartAway-calc_btn"
                      onClick={handleOrder}
                      style={{ display: stamp ? "block" : "none" }}
                    >
                      Order
                    </button>
                    <Link
                      className="cartAway-order_btn"
                      style={{
                        backgroundColor:
                          input?.totalPrice !== 0 ? "#f09308" : "",
                        transition: "all 0.3",
                        color: input?.totalPrice !== 0 ? "#f2f2f2" : "",
                        cursor: input?.totalPrice !== 0 ? "pointer" : "",
                        display: input?.totalPrice === 0 ? "none" : "block",
                      }}
                      to="/payment"
                    >
                      Payment
                    </Link>
                  </div>
                )}
                <div
                  className="cartAwayNotification-div"
                  style={{ display: notification !== "" ? "block" : "none" }}
                >
                  <p className="cartAwayNotification">{notification}</p>
                  <Link className="cartAwayNotification-btn" to="/">
                    Go back home
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default CartAway;
