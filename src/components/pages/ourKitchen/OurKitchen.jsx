import React, { useState } from "react";
import "./OurKitchen.css";
import ourKitchenData from "./ourKitchenData/OurKitchenData";
import ourKitchenImg from "./ourKitchenData/assets/profile-pix.jpg";
import Pagination from "../../pagination/Pagination";

const OurKitchen = () => {
  // States
  const [page, setPage] = useState(1);
  const perPage = 4;
  const pages = Math.ceil(ourKitchenData.length / perPage);
  const skip = page * perPage - perPage;
  return (
    <div className="ourKitchen-wrapper">
      <div className="ourKitchen-contents">
        {ourKitchenData
          .slice(skip, skip + perPage)
          .map((ourKitchenDatum, index) => {
            return (
              <div className="ourKitchen-content">
                <h2 className="ourKitchen-content_index">{index + 1}</h2>
                <div className="ourKitchen">
                  <img
                    src={ourKitchenImg}
                    alt="img"
                    className="ourKitchen-img"
                  />
                  <div className="ourKitchen-flex">
                    <div>
                      <h2 className="ourKitchen-ditch_name">
                        {ourKitchenDatum.ditchName}
                      </h2>
                      <p className="ourKitchen-ditch_origin">
                        {ourKitchenDatum.origin}
                      </p>
                      <p className="ourKitchen-ditch_price">
                        {ourKitchenDatum.price}
                      </p>
                    </div>
                    <div className="ourKitchen-ditch_btnsDiv">
                      <button className="ourKitchen-more_btn">More</button>
                      <button className="ourKitchen-more_btn">Buy</button>
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
