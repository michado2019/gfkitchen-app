import React from "react";
import "./OurSingleKitchen.css";
import ourKitchenData from "../ourKitchenData/OurKitchenData";
import { useParams } from "react-router-dom";
import ourKitchenImg from "../ourKitchenData/assets/profile-pix.jpg";
import BackBtn from "../../../backBtn/BackBtn";
const OurSingleKitchen = () => {
  const { id } = useParams();
  return (
      <div className="ourSingle-kitchen_wrapper">
        <div style={{ marginLeft: "-630px", marginTop: "55px" }}>
        <BackBtn />
      </div>
      <div className="ourSingle-kitchen_contents">
        {ourKitchenData
          .filter((ourKitchenDatum) => ourKitchenDatum.id == id)
          .map((ourKitchenDatum) => {
            return (
                <div className="ourSingle-kitchen_content">
                  <h2 className="ourSingleKitchen-content_id">{id}</h2>
                <div className="ourSingleKitchen-div">
                  <div className="ourSingleKitchen">
                    <img
                      src={ourKitchenImg}
                      alt="img"
                      className="ourSingleKitchen-img"
                    />
                    <div className="ourSingleKitchen-flex">
                      <div>
                        <h2 className="ourSingleKitchen-ditch_name">
                          {ourKitchenDatum.ditchName}
                        </h2>
                        <p className="ourSingleKitchen-ditch_origin">
                          {ourKitchenDatum.origin}
                        </p>
                        <p className="ourSingleKitchen-ditch_price">
                          {ourKitchenDatum.price}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ourSingleKitchen-ditch_detail">
                    <h2 className="ourSingleKitchen-ditch_value">
                      Nutritional value: {ourKitchenDatum.nutritional_value}
                    </h2>
                    <p className="ourSingleKitchen-ditch_ingredients">
                      Ingredients: {ourKitchenDatum.ingredients}
                    </p>
                    <p className="ourSingleKitchen-ditch_details">
                      Details: {ourKitchenDatum.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OurSingleKitchen;
