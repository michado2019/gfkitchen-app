import React, { useState } from "react";
import "./ChangePassword.css";
import { sendPasswordResetEmail, getAuth } from "../../../firebase";

const ChangePassword = () => {
  // States
  const [error, setError] = useState("");
  const [successfull, setSuccessful] = useState("");
  const [form, setForm] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email !== {}) {
      const email = form.email;
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setSuccessful("Password reset link sent to your email!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    setForm({
      email: "",
    });
  };

  return (
    <div className="changePassword-wrapper" onSubmit={handleSubmit}>
      <div className="changePassword-contents">
        <h2 className="changePassword-title">Change password</h2>
        <form className="changePassword-form">
          <input
            type="email"
            placeholder="Enter your registered email"
            className="changePassword-inputs"
            onChange={handleChange}
            name="email"
            value={form.email}
          />
          {error ? (
            <div className="changePassword-alert_msg">
              <h2>{error}</h2>
            </div>
          ) : (
            <div
              className="changePassword-alert_msg"
              id="changePassword-alert_msg"
            >
              <h2>{successfull}</h2>
            </div>
          )}
          <button className="changePassword-submit_btn">Update</button>
        </form>
      </div>
    </div>
  );
};
export default ChangePassword;
