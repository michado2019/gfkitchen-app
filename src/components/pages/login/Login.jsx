import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ storage, setStorage }) => {
  // Navigate
  const navigate = useNavigate();

  //State
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState("");

  // Handlers
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const getForm = localStorage.getItem("form");
    setStorage(JSON.parse(getForm));
    if (form) {
      setForm({
        email: "",
        password: "",
      });
    }
    const userForm = JSON.parse(getForm);
    const email = userForm?.email;
    const password = userForm?.password;
    if (form.email === email && form.password === password) {
      navigate("/");
    } else {
      setAlert("Fill all fields correctly");
    }
    if (!storage) {
      navigate("/register");
    }
  };
  return (
    <div className="loginWrapper">
      <div className="loginContents">
        <h2 className="loginTitle">Login</h2>
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2 className="loginAlert">{alert}</h2>
          <input
            type="email"
            placeholder="Enter Email"
            className="loginInputs"
            onChange={handleChange}
            name="email"
            value={form.email}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="loginInputs"
            onChange={handleChange}
            name="password"
            value={form.password}
          />
          <button className="loginSubmit-btn">Submit</button>
        </form>
        <div className="loginRegisterAnd-password_div">
          <h4>
            Register{" "}
            <Link to="/register" className="loginRegister-and_password">
              here
            </Link>
          </h4>
          <h4>
            Forgot password?{" "}
            <Link to="forgotPassword" className="loginRegister-and_password">
              Here
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Login;
