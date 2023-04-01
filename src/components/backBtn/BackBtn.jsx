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
          marginLeft: "150px",
          padding: "3px 10px",
          border: "0",
          backgroundColor: "#eee",
          boxShadow: '0.2px 0.3px 4px #555',
          borderRadius: '3px',
          color: "#f09308",
          marginTop: '60px'
        }}
        onClick={handleLocation}
      >
        Back
      </button>
    </div>
  );
};
export default BackBtn;
