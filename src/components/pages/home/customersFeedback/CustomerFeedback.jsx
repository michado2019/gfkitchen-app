import React from "react";
import "./CustomerFeedback.css";
import { customerFeedback } from "./customerFeedbackData/CustomerFeedbackData";
const CustomerFeedback = () => {

  return (
    <div className="customerFeedback-wrapper">
      <div className="customerFeedback-contents">
        {customerFeedback.map((customer) => {
          return (
            <div className="customerFeedback-content" key={customer.id}>
              <img
                src={customer.img}
                alt="img"
                className="customerFeedback-img"
              />
              <p className="customerFeedback-feedback">{customer.feedback}</p>
              <p className="customerFeedback-name">{customer.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CustomerFeedback;