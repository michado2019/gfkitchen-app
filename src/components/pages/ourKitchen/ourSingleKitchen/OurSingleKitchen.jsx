import React from "react";
import "./OurSingleKitchen.css";
import ourKitchenData from "../ourKitchenData/OurKitchenData";
import { useParams, Link } from "react-router-dom";

const OurSingleKitchen = ({ setOurKitchenDisplay }) => {
  const { id } = useParams();
  return (
    <div className="ourSingle-kitchen_wrapper">
      <div className="homeContent-div_content">
        {ourKitchenData
          .filter((ourKitchenDatum) => ourKitchenDatum.id == id)
          .map((ourKitchenDatum) => {
            return (
              <div className="home-content" key={ourKitchenDatum.id}>
                <div className="home">
                  <img
                    src={ourKitchenDatum.ditchImg}
                    alt="img"
                    className="home-img"
                  />
                  <div className="home-flex">
                    <div>
                      <h2 className="home-ditch_name">
                        {ourKitchenDatum.ditchName}
                      </h2>
                      <p className="home-ditch_origin">
                        {ourKitchenDatum.origin}
                      </p>
                      <p className="home-ditch_price">
                        #{ourKitchenDatum.price}
                      </p>
                    </div>
                    <div className="home-ditch_btnsDiv">
                      <button className="home-more_btn" onClick={() => setOurKitchenDisplay(true)}>
                        <Link
                          className="ourKitchen-link"
                          to={`/cartAway/${ourKitchenDatum.id}`}
                        >
                          Buy
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="ourSingleKitchen-contents">
        {ourKitchenData
          .filter((ourKitchenDatum) => ourKitchenDatum.id == id)
          .map((ourKitchenDatum) => {
            return (
              <div
                className="ourSingleKitchen-flex_col"
                key={ourKitchenDatum.id}
              >
                <h2 className="ourSingleKitchen-value">
                  <span className="ourSingleKitchen-span">
                    Nutritional value:
                  </span>{" "}
                  {ourKitchenDatum.nutritional_value}
                </h2>
                <h3 className="ourSingleKitchen-ingredients">
                  <span className="ourSingleKitchen-span">ingredients:</span>{" "}
                  {ourKitchenDatum.ingredients}
                </h3>
                <p className="ourSingleKitchen-details">
                  <span className="ourSingleKitchen-span">Details:</span>{" "}
                  {ourKitchenDatum.details}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default OurSingleKitchen;
