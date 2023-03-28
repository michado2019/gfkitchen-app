import React from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import BackBtn from "../../../backBtn/BackBtn";
const ForgotPassword = () => {
  return (
    <div className="forgotPassword-wrapper">
      <div style={{ marginLeft: "-100px", marginTop: "5px" }}>
        <BackBtn />
      </div>
      <div className="forgotPassword-contents">
        <h2 className="forgotPassword-title">Retrieve password</h2>
        <form className="forgotPassword-form">
          <input
            type="email"
            placeholder="Enter Email"
            className="loginInputs"
          />
          <input
            type="password"
            placeholder="Enter new password"
            className="forgotPassword-inputs"
          />
          <button className="forgotPassword-submit_btn">Submit</button>
        </form>
        <div>
          <Link to="changePassword" className="forgotPassword-change_password">
            Change password
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
