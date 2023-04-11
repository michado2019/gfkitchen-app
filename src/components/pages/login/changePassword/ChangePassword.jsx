import React, { useEffect, useState } from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  // States
  const [oldPassword, setOldPassword] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [error, setError] = useState("");
  const [successfull, setSuccessful] = useState("");
  const [form, setForm] = useState({
    newPassword: "",
    oldPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (oldPassword !== form.oldPassword) {
      setError("Old passwords do not match! Pls, try again.");
    }
    if (
      oldPassword === form.oldPassword &&
      oldPassword !== {} &&
      form.newPassword !== {}
    ) {
      setSuccessful("Password changed successfully!");
      const password = form.newPassword;
      setNewUserPassword(password);
    }
    if (newUserPassword) {
      setForm({
        newPassword: "",
        oldPassword: "",
      });
    }
  };
  //useEffect
  useEffect(() => {
    if (localStorage) {
      const user = localStorage.getItem("form");
      const userForm = JSON.parse(user);
      const password = userForm?.password;
      setOldPassword(password);
    }
  }, []);
  useEffect(() => {
    if (newUserPassword) {
      const user = localStorage.getItem("form");
      const userForm = JSON.parse(user);
      const newForm = {
        firstName: userForm.firstName,
        lastName: userForm.lastName,
        email: userForm.email,
        password: newUserPassword,
      };
      localStorage.setItem("form", JSON.stringify(newForm));
    }
  }, [newUserPassword]);
  return (
    <div className="changePassword-wrapper" onSubmit={handleSubmit}>
      <div className="changePassword-contents">
        <h2 className="changePassword-title">Change password</h2>
        <form className="changePassword-form">
          <input
            type="password"
            placeholder="Enter old password"
            className="changePassword-inputs"
            onChange={handleChange}
            name="oldPassword"
            value={form.oldPassword}
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
          <input
            type="password"
            placeholder="Enter new password"
            className="changePassword-inputs"
            onChange={handleChange}
            name="newPassword"
            value={form.newPassword}
          />
          <button className="changePassword-submit_btn">Update</button>
        </form>
      </div>
    </div>
  );
};
export default ChangePassword;