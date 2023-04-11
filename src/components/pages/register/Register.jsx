import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  // Navigate
  const navigate = useNavigate();

  //State
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [storage, setStorage] = useState({});
  const [alert, setAlert] = useState("");

  // Handlers
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.email !== "" &&
      form.firstName !== "" &&
      form.lastName !== "" &&
      form.password !== ""
    ) {
      localStorage.setItem("form", JSON.stringify(form));
      const getForm = localStorage.getItem("form");
      setStorage(JSON.parse(getForm));
      navigate("/login"); 
    }
    setAlert('Fill all fields')
  };
  return (
    <div className="registerWrapper">
      <div className="registerContents">
        <div className="registerContent-one">
          <h2 className="registerTitle">Register</h2>
          <form className="registerForm" onSubmit={handleSubmit}>
            <h2 className="registerAlert">{alert}</h2>
            <input
              type="text"
              placeholder="First name"
              className="registerInputs"
              onChange={handleChange}
              name="firstName"
              value={form.firstName}
            />
            <input
              type="text"
              placeholder="Last name"
              className="registerInputs"
              onChange={handleChange}
              name="lastName"
              value={form.lastName}
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="registerInputs"
              onChange={handleChange}
              name="email"
              value={form.email}
            />
            <input
              type="password"
              placeholder="Enter password"
              className="registerInputs"
              onChange={handleChange}
              name="password"
              value={form.password}
            />
            <button className="registerSubmit-btn">Submit</button>
            <Link to="/login" className="registerLogin">
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
