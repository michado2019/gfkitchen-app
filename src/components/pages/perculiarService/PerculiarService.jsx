import React from "react";
import { useParams } from "react-router-dom";
import "./PerculiarService.css";
import { perculiarData } from "./perculiarData/PerculiarData";
const PerculiarService = () => {
  const { id } = useParams();
  return (
    <div className="perculiarService-wrapper">
      <div className="perculiarService-contents">
        {perculiarData
          .filter((perculiarDatum) => perculiarDatum.id == id)
          .map((perculiarDatum) => {
            return (
              <div className="perculiarService-content" key={perculiarDatum.id}>
                <h2 className="perculiarService-service">
                  {perculiarDatum.service}
                </h2>
                <div className="perculiarService-flex">
                  <h3 className="perculiarService-greetings">
                    {perculiarDatum.greetings}.
                  </h3>
                  <p className="perculiarService-details">
                    {perculiarDatum.details}
                  </p>
                </div>
              </div>
            );
          })}
          <h2 h2 className="perculiarService-contact_title">Contact us</h2>
          <div className="perculiarService-contact">
             <a href="https://wa.me/2348100075254"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqxOQSV4A2LSngS-4yZlSCaEtggRATFVn2g&usqp=CAU" alt="whatsapp" className="perculiarService-whatsapp_img"/></a>
          </div>
      </div>
    </div>
  );
};

export default PerculiarService;
