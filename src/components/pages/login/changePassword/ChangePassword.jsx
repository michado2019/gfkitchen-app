import React from "react";
import "./ChangePassword.css";
const ChangePassword = () => {
  return (
    <div className="changePassword-wrapper">
      <div className="changePassword-contents">
        <h2 className="changePassword-title">Change password</h2>
        <form className="changePassword-form">
          <input
            type="password"
            placeholder="Enter old password"
            className="changePassword-inputs"
          />
          <input
            type="password"
            placeholder="Enter new password"
            className="changePassword-inputs"
          />
          <input
            type="email"
            placeholder="Enter email"
            className="changePassword-inputs"
          />
          <button className="changePassword-submit_btn">Update</button>
        </form>
      </div>
    </div>
  );
};
export default ChangePassword;
