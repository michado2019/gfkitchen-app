import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { topWesternDishes } from "./homeData/HomeData";
import { topNorthernDishes } from "./homeData/HomeData";
import { topSouthernDishes } from "./homeData/HomeData";
import { topEasternDishes } from "./homeData/HomeData";
import AboutUS from "./AboutUS";
import CustomerFeedback from "./customersFeedback/CustomerFeedback";
const Home = ({ storage, setStorage, setCartDisplay, ourKitchenDishes }) => {
  //State
  const [page, setPage] = useState(1);
  const [pageNorthern, setPageNorthern] = useState(1);
  const [pageSouthern, setPageSouthern] = useState(1);
  const [pageEastern, setPageEastern] = useState(1);

  const perPage = 1;
  const pages = Math.ceil(topWesternDishes.length / perPage);
  const pagesNorthern = Math.ceil(topNorthernDishes.length / perPage);
  const pagesSouthern = Math.ceil(topSouthernDishes.length / perPage);
  const pagesEastern = Math.ceil(topEasternDishes.length / perPage);
  const skip = page * perPage - perPage;
  const skipNorthern = pageNorthern * perPage - perPage;
  const skipSouthern = pageSouthern * perPage - perPage;
  const skipEastern = pageEastern * perPage - perPage;
  useEffect(() => {
    const getForm = localStorage.getItem("form");
    setStorage(JSON.parse(getForm));
    const userForm = JSON.parse(getForm);
    setStorage(userForm);
  }, [setStorage]);

  return (
    <div className="homeWrapper">
      <div className="homeContents">
        <AboutUS />
        <div className="homeContent">
          <h2 className="homeContent1-title">Top Nigerian dishes:</h2>
          <div className="homeContent1">
            <div className="homeContent1-div">
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
            <div className="homeContent1-div">
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
                style={{
                  display: pageNorthern >= pagesNorthern ? "none" : "",
                }}
              />
            </div>
            <div className="homeContent1-div">
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
                style={{
                  display: pageSouthern >= pagesSouthern ? "none" : "",
                }}
              />
            </div>
            <div className="homeContent1-div">
              <ArrowBackIosNew
                className="homeDish-arrow"
                style={{ display: pageEastern <= 1 ? "none" : "" }}
                onClick={() => setPageEastern((prev) => prev - 1)}
              />
              <div className="homeContent-flex" id="homeContent-flex">
                <h2 className="homeContent-title">Top Eastern Dishes</h2>
                {topEasternDishes
                  .slice(skipEastern, skipEastern + perPage)
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
                onClick={() => setPageEastern((prev) => prev + 1)}
                style={{
                  display: pageEastern >= pagesEastern ? "none" : "",
                }}
              />
            </div>
          </div>
          {storage ? (
            <div className="homeContent2">
              <h2 className="homeContent2-title">Our dishes:</h2>
              <div className="homeContent-div2">
                <div className="homeContent-div_content">
                  {ourKitchenDishes?.map((ourKitchenDatum) => {
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
                              <button className="home-more_btn">
                                <Link
                                  to={`/ourKitchen/${ourKitchenDatum.id}`}
                                  className="ourKitchen-link"
                                >
                                  More
                                </Link>
                              </button>
                              <button
                                className="home-more_btn"
                                onClick={() => setCartDisplay((prev) => !prev)}
                              >
                                <Link
                                  to={`/cartAway/${ourKitchenDatum.id}`}
                                  className="ourKitchen-link"
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
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="homeContent3">
            <CustomerFeedback />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
