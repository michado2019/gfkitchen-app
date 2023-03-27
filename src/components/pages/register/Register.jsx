import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="registerWrapper">
      <div className="registerContents">
        <div className="registerContent-one">
          <h2 className="registerTitle">Register</h2>
          <form className="registerForm">
            <input
              type="text"
              placeholder="First name"
              className="registerInputs"
            />
            <input
              type="text"
              placeholder="Last name"
              className="registerInputs"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="registerInputs"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="registerInputs"
            />
            <button className="registerSubmit-btn">Submit</button>
            <Link to="/login" className="registerLogin">
              Login
            </Link>
          </form>
        </div>
        <div className="registerContent-two">
          <h2 className="registerTitle">Why register ?</h2>
          <p className="registerTitle-details">
            Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem
            ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum
            lorem ipsum Lorem ipsum lorem ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
