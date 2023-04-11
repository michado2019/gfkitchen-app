import React, { useState } from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";
const ForgotPassword = ({ setStorage }) => {
  //States
  const [form, setForm] = useState({
    email: ""
  });
  const [alert, setAlert] = useState("");
  const [error, setError] = useState("");

  // Handlers
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if(form.email.length ===0){
      setAlert('')
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const getForm = localStorage.getItem("form");
    const userForm = JSON.parse(getForm)
    const userEmail = userForm?.email;
    if (form.email !== "" && form.email === userEmail) {
      setStorage(getForm)
     
      


    }
    if(userEmail === undefined){
      setError("No data for this email! Try again with a registered email");
    }
    if(form.email===''){
      setAlert("Fill the email field");
      setForm({
        email: ''
      })
      }
  };
  return (
    <div className="forgotPassword-wrapper">
      <div className="forgotPassword-contents">
        <h2 className="forgotPassword-title">Retrieve password</h2>
        <form className="forgotPassword-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            className="loginInputs"
            onChange={handleChange}
            name="email"
            value={form.email}
          />
          <div>
              <div>
                {alert ? <h2 className="forgotPassword-alert">{alert}</h2> : ""}
              </div>
              <div style={{display: alert? 'none': ''}}>
                {error ? <h2 className="forgotPassword-alert">{error}</h2> : ""}
              </div>
          </div>

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
