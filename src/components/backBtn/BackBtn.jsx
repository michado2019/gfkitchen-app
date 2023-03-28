import React from "react";
import { useNavigate } from "react-router-dom";
const BackBtn = () => {
  const location = useNavigate();
  const handleLocation = () => {
    location(-1);
  };
  return (
    <div className="appBack-btn">
      <button
        style={{
          cursor: "pointer",
          marginTop: "-400px",
          marginLeft: "-30vh",
          padding: "3px 10px",
          border: "0",
          backgroundColor: "#f2f2f2",
          color: "#f09308",
        }}
        onClick={handleLocation}
      >
        Back
      </button>
    </div>
  );
};
export default BackBtn;
