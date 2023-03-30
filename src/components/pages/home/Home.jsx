import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { topWesternDishes } from "./homeData/HomeData";
import { topNorthernDishes } from "./homeData/HomeData";
import { topSouthernDishes } from "./homeData/HomeData";
import ourKitchenData from "../ourKitchen/ourKitchenData/OurKitchenData";
import AboutUS from "./AboutUS";
const Home = () => {
  //State
  const [page, setPage] = useState(1);
  const [pageNorthern, setPageNorthern] = useState(1);
  const [pageSouthern, setPageSouthern] = useState(1);

  const perPage = 1;
  const pages = Math.ceil(topWesternDishes.length / perPage);
  const pagesNorthern = Math.ceil(topNorthernDishes.length / perPage);
  const pagesSouthern = Math.ceil(topSouthernDishes.length / perPage);
  const skip = page * perPage - perPage;
  const skipNorthern = pageNorthern * perPage - perPage;
  const skipSouthern = pageSouthern * perPage - perPage;
  return (
    <div className="homeWrapper">
      <div className="homeConntents">
        <AboutUS />
        <br />
        <h2 className="homeContent1-title">Top Nigerian dishes:</h2>
        <div className="homeContent1">
          <div className="homeContent1-div">
            <div className="homeContent-div">
              <ArrowBackIosNew
                className="homeDish-arrow"
                style={{ display: page <= 1 ? "none" : "" }}
                onClick={() => setPage((prev) => prev - 1)}
              />
              <div className="homeContent-flex">
                <h2 className="homeContent-title">Top Western Dishes</h2>
                {topWesternDishes.slice(skip, skip + perPage).map((topDish) => {
                  return (
                    <div className="homeContent-img_name" key={topDish.id}>
                      <img
                        src={topDish.img}
                        alt="img"
                        className="homeDish-img"
                      />
                      <h3 className="homeDish-name">{topDish.ditchName}</h3>
                    </div>
                  );
                })}
              </div>
              <ArrowForwardIos
                className="homeDish-arrow"
                onClick={() => setPage((prev) => prev + 1)}
                style={{ display: page >= pages ? "none" : "" }}
              />
            </div>
          </div>
          <div className="homeContent1-div">
            <div className="homeContent-div">
              <ArrowBackIosNew
                className="homeDish-arrow"
                style={{ display: pageNorthern <= 1 ? "none" : "" }}
                onClick={() => setPageNorthern((prev) => prev - 1)}
              />
              <div className="homeContent-flex">
                <h2 className="homeContent-title">Top Northern Dishes</h2>
                {topNorthernDishes
                  .slice(skipNorthern, skipNorthern + perPage)
                  .map((topDish) => {
                    return (
                      <div className="homeContent-img_name" key={topDish.id}>
                        <img
                          src={topDish.img}
                          alt="img"
                          className="homeDish-img"
                        />
                        <h3 className="homeDish-name">{topDish.ditchName}</h3>
                      </div>
                    );
                  })}
              </div>
              <ArrowForwardIos
                className="homeDish-arrow"
                onClick={() => setPageNorthern((prev) => prev + 1)}
                style={{ display: pageNorthern >= pagesNorthern ? "none" : "" }}
              />
            </div>
          </div>
          <div className="homeContent1-div">
            <div className="homeContent-div">
              <ArrowBackIosNew
                className="homeDish-arrow"
                style={{ display: pageSouthern <= 1 ? "none" : "" }}
                onClick={() => setPageSouthern((prev) => prev - 1)}
              />
              <div className="homeContent-flex" id="homeContent-flex">
                <h2 className="homeContent-title">Top Southern Dishes</h2>
                {topSouthernDishes
                  .slice(skipSouthern, skipSouthern + perPage)
                  .map((topDish) => {
                    return (
                      <div className="homeContent-img_name" key={topDish.id}>
                        <img
                          src={topDish.img}
                          alt="img"
                          className="homeDish-img"
                          id="homeDish-img"
                        />
                        <h3 className="homeDish-name">{topDish.ditchName}</h3>
                      </div>
                    );
                  })}
              </div>
              <ArrowForwardIos
                className="homeDish-arrow"
                onClick={() => setPageSouthern((prev) => prev + 1)}
                style={{ display: pageSouthern >= pagesSouthern ? "none" : "" }}
              />
            </div>
          </div>
        </div>
        <div className="homeContent2">
          <h2 className="homeContent2-title">Our dishes:</h2>
          <div className="homeContent-div2">
            <div className="homeContent-div_content">
              {ourKitchenData.map((ourKitchenDatum) => {
                return (
                  <div className="home-content">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
