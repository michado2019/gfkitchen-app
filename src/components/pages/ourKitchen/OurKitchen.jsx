import React, { useState } from "react";
import "./OurKitchen.css";
import ourKitchenData from "./ourKitchenData/OurKitchenData";
import Pagination from "../../pagination/Pagination";
import { Link } from "react-router-dom";

const OurKitchen = () => {
  // States
  const [page, setPage] = useState(1);
  const perPage = 6;
  const pages = Math.ceil(ourKitchenData.length / perPage);
  const skip = page * perPage - perPage;
  return (
    <div className="ourKitchen-wrapper">
      <div className="ourKitchen-contents">
        {ourKitchenData
          .slice(skip, skip + perPage)
          .map((ourKitchenDatum, index) => {
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
      <Pagination page={page} pages={pages} setPage={setPage} />
    </div>
  );
};
export default OurKitchen;
