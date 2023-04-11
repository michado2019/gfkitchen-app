import React, { useEffect, useState } from "react";
import "./CustomerFeedback.css";
import { customerFeedback } from "./customerFeedbackData/CustomerFeedbackData";
const CustomerFeedback = () => {
  const [page, setPage] = useState(1);
  const perPage = 1;
  const pages = Math.ceil(customerFeedback.length / perPage);
  const skip = page * perPage - perPage;

  useEffect(() => {
    setInterval(() => {
      if (page < customerFeedback.length) {
        setPage((prev) => prev + 1);
      }
    }, 3000);
  }, [page]);
  return (
    <div className="customerFeedback-wrapper">
      <div className="customerFeedback-contents">
        {customerFeedback.slice(skip, skip + perPage).map((customer) => {
          return (
            <div className="customerFeedback-content" key={customer.id}>
              <img
                src={customer.img}
                alt="img"
                className="customerFeedback-img"
              />
              <p className="customerFeedback-feedback">{customer.feedback}</p>
              <p className="customerFeedback-name">{customer.name}</p>

              <div className="paginationBtn-grid">
                {Array.from({ length: pages }, (_, index) => index + 1).map(
                  (each) => (
                    <div
                      onClick={() => setPage(each)}
                      key={each}
                      className="paginationBtn"
                      style={{
                        backgroundColor: each === page ? "#f09308" : "",
                        color: "#a9a6a6",
                        bordder: "none",
                        transition: "all 0.3s",
                      }}
                    >
                      <div className="paginationIndicator"></div>
                    </div>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CustomerFeedback;