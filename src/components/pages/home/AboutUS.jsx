import React, { useEffect } from "react";
import ourKitchenData from "../ourKitchen/ourKitchenData/OurKitchenData";
import "./AboutUs.css";
const AboutUS = () => {
  const [allData] = React.useState(ourKitchenData);
  const [change, setChange] = React.useState(1);
  const [setSlide] = React.useState(false);
  const [randomData, setRandomData] = React.useState({
    ditchImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XgTReRh2chXGLJXjhdqTbpUuVjxaPwI3Cw&usqp=CAU",
    ditchName: 'GFkitchen',
    price: 'Affordable'

  });

  function getNewData() {
    const allDataArray = allData;
    const randomData = Math.floor(Math.random() * allDataArray.length);
    const kitchenData = allDataArray[randomData];
    setRandomData(kitchenData)
  }

  setInterval(() => {
     if(change < allData.length){
      getNewData()
     }
     setSlide(prev => !prev)
  }, 3000)

  useEffect(() => {
    setChange(allData.length)
  }, [allData.length])
  return (
    <div className="aboutUs-wrapper" id="about">
      <div className="aboutUs-contents">
        <div className="aboutUs-content1">
          <h2 className="aboutUs-title">About us</h2>
          <p className="aboutUs-details">
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum, Lorem ipsum lorem
            ipsum. Lorem ipsum lorem ipsum, Lorem ipsum lorem ipsum, Lorem
          </p>
        </div>
        <div className="aboutUs-content2">
          <div className="aboutUs-content2_content">
            <img src={randomData.ditchImg} alt='img' className="aboutUs-content2_img"/>
            <h2 className="aboutUs-content2_name">{randomData.ditchName}</h2>
            <h3 className="aboutUs-content2_price">{randomData.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUS;