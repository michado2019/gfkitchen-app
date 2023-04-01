import React from "react";
import "./OurSingleKitchen.css";
import ourKitchenData from "../ourKitchenData/OurKitchenData";
import { useParams, Link } from "react-router-dom";

const OurSingleKitchen = () => {
  const { id } = useParams();
  return (
    <div className="ourSingle-kitchen_wrapper">
              <div className="homeContent-div_content">
                {ourKitchenData.filter((ourKitchenDatum) => ourKitchenDatum.id == id)
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
                              {ourKitchenDatum.price}
                            </p>
                          </div>
                          <div className="home-ditch_btnsDiv">
                            <button className="home-more_btn">
                              <Link
                                to={`/ourKitchen/${ourKitchenDatum.id}`}
                                className="ourKitchen-link"
                              >
                                More
                              </Link>
                            </button>
                            <button className="home-more_btn">Buy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                {ourKitchenData.filter((ourKitchenDatum) => ourKitchenDatum.id == id).
                map((ourKitchenDatum) => {
                  return(
                    <div>
                       <h2>Nutritional value: {ourKitchenDatum.nutritional_value}</h2>
                       <h3>ingredients: {ourKitchenDatum.ingredients}</h3>
                       <p>Details: {ourKitchenDatum.details}</p>
                    </div>
                  )
                })
                }
              </div>
    </div>
  );
};

export default OurSingleKitchen;

