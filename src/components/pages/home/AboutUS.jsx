import React, { useEffect, useState } from "react";
import ourKitchenData from "../ourKitchen/ourKitchenData/OurKitchenData";
import "./AboutUs.css";
import mdImg from "../meetOurMd/assets/profile-pix.jpg";

const AboutUS = () => {
  const [allData] = useState(ourKitchenData);
  const [order, setOrder] = useState(false);
  const [randomData, setRandomData] = useState({
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
    const randomIndex = Math.floor(Math.random() * allData.length);
    setRandomData(allData[randomIndex]);
  }

  useEffect(() => {
    setOrder(!order); // Toggle order on component mount
    const interval = setInterval(() => {
      getNewData();
      setOrder((prevOrder) => !prevOrder);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aboutUs-wrapper">
      <div className="aboutUs-contents">
        <div className="aboutUs-content aboutUs-content1">
          <h2 className="aboutUs-title" id="about">
            About us
          </h2>
          <p className="aboutUs-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            arcu id elit vulputate vestibulum eget vitae ex. Nulla facilisi.
            Nullam hendrerit interdum odio, nec congue quam vestibulum eget.
          </p>
          <a href="#dishes" className="aboutUs-link">
            {order ? "Order here" : "Order now"}
          </a>
        </div>
        <div className="aboutUs-content aboutUs-content2">
          <div className="aboutUs-content2_content">
            <img
              src={order ? mdImg : randomData.ditchImg}
              alt="img"
              className="aboutUs-content2_img"
            />
            <h2 className="aboutUs-content2_name">
              {order ? md.name : randomData.ditchName}
            </h2>
            <h3 className="aboutUs-content2_price">
              {order ? md.position : `#${randomData.price}`}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
