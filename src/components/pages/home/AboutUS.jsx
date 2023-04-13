import React, { useEffect, useState } from "react";
import ourKitchenData from "../ourKitchen/ourKitchenData/OurKitchenData";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import mdImg from "../meetOurMd/assets/profile-pix.jpg";
const AboutUS = () => {
  const [allData] = React.useState(ourKitchenData);
  const [change, setChange] = useState(1);
  const [slide, setSlide] = useState(false);
  const [order, setOrder] = useState(false);
  const [randomData, setRandomData] = React.useState({
    ditchImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XgTReRh2chXGLJXjhdqTbpUuVjxaPwI3Cw&usqp=CAU",
    ditchName: "GFkitchen",
    price: "Affordable",
  });

  const md = {
    name: "Adeshina Michael",
    position: "Managing director",
  };
  function getNewData() {
    const allDataArray = allData;
    const randomData = Math.floor(Math.random() * allDataArray.length);
    const kitchenData = allDataArray[randomData];
    setRandomData(kitchenData);
  }

  setInterval(() => {
    if (change < allData.length) {
      getNewData();
      setSlide((prev) => !prev);
      setOrder((prev) => !prev);
    }
  }, 4000);

  //useEffect
  useEffect(() => {
    setChange(allData.length);
  }, [allData.length]);
  return (
    <div className="aboutUs-wrapper">
      <div className="aboutUs-contents">
        <div className="aboutUs-content1">
          <h2 className="aboutUs-title" id="about">About us</h2>
          <p className="aboutUs-details">
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum, Lorem ipsum lorem
            ipsum. Lorem ipsum lorem ipsum, Lorem ipsum lorem ipsum, Lorem Lorem
            ipsum lorem ipsum Lorem ipsum lorem ipsum, Lorem ipsum lorem
          </p>
          {order ? (
            <Link to="/ourKitchen" className="aboutUs-link">
              Enter our kitchen
            </Link>
          ) : (
            <Link to="/ourKitchen" className="aboutUs-link">
              Place an order
            </Link>
          )}
        </div>
        <div className="aboutUs-content2">
          {order ? (
            <div className="aboutUs-content2_content">
              <img src={mdImg} alt="img" className="aboutUs-content2_img" />
              <h2 className="aboutUs-content2_name">{md.name}</h2>
              <h3 className="aboutUs-content2_price">{md.position}</h3>
            </div>
          ) : (
            <div className="aboutUs-content2_content">
              <img
                src={randomData.ditchImg}
                alt="img"
                className="aboutUs-content2_img"
              />
              <h2 className="aboutUs-content2_name">{randomData.ditchName}</h2>
              <h3 className="aboutUs-content2_price">#{randomData.price}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AboutUS;
