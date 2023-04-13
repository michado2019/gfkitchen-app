import React from "react";
import "./CartAway.css";
import ourKitchenData from "./pages/ourKitchen/ourKitchenData/OurKitchenData";
import { Close } from "@mui/icons-material";
import { useParams, Link } from "react-router-dom";

const CartAway = ({ cartDisplay, setCartDisplay, input, setInput }) => {


  //Handlers
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
    setInput((prev) => {
      return { ...prev, price: JSON.parse(localStorage.getItem("price")) };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    function calculateTotalPrice(price, plates) {
      return price * plates;
    }
    setInput((prev) => {
      return {
        ...prev,
        totalPrice: calculateTotalPrice(input.price, input.plates),
      };
    });
      localStorage.setItem("input", JSON.stringify(input));
  };

  //useParam
  const { id } = useParams();
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
        {ourKitchenData
          .filter((ourKitchenDatum) => ourKitchenDatum.id == id)
          .map((ourKitchenDatum) => {
            localStorage.setItem(
              "price",
              JSON.stringify(ourKitchenDatum.price)
            );
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
                      <span className="cartAway-descriptions">Price: </span>
                      #{ourKitchenDatum.price}
                    </p>
                    <p className="cartAway-content1_details">
                      <span className="cartAway-descriptions">Details: </span>
                      {ourKitchenDatum.details}
                    </p>
                  </div>
                </div>
                <div className="cartAway-content2">
                  <h2 className="cartAway-content2_welcome1">
                    Hello, customer!
                  </h2>
                  <p className="cartAway-content2_welcome2">
                    You are about to order for{" "}
                    <span>{ourKitchenDatum.ditchName}</span>
                  </p>
                  <form className="cartAway-form" onSubmit={handleSubmit}>
                    <div className="cartAway-form_flex">
                      <label className="cartAway-labels">Buyer's name: </label>
                      <input
                        type="text"
                        placeholder="Buyer's name"
                        id="cartAway-content2_inputs"
                        className="cartAway-content2_inputs"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="cartAway-form_flex">
                      <label className="cartAway-labels">Price: </label>
                      <input
                        type="number"
                        className="cartAway-content2_inputs"
                        placeholder={ourKitchenDatum.price}
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
                        value={input.plates}
                      />
                    </div>
                    <div className="cartAway-form_flex">
                      <label className="cartAway-labels">Total price</label>
                      <input
                        type="number"
                        className="cartAway-content2_inputs"
                        placeholder={input.totalPrice}
                        disabled
                      />
                    </div>
                    <button className="cartAway-calc_btn">Calculate</button>
                  </form>
                  <Link
                    className="cartAway-order_btn"
                    style={{
                      backgroundColor: input.totalPrice !== 0 ? "#f09308" : "",
                      transition: "all 0.3",
                      color: input.totalPrice !== 0 ? "#f2f2f2" : "",
                      cursor: input.totalPrice !== 0 ? "pointer":'',
                      display: input.totalPrice === 0 ? "none" : "block",
                    }}
                  to='/payment'
                  >
                    Order
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
