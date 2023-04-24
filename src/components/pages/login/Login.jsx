import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
    if (form) {
      setForm({
        email: "",
        password: "",
      });
    }

    const auth = getAuth();
    const email = form.email;
    const password = form.password;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          navigate("/admin");
        }
        if (!user) {
          navigate("/register");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    if (form.email === "" || form.password === "") {
      setAlert("Fill all fields correctly");
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
            Retrieve password?{" "}
            <Link to="forgotPassword/changePassword" className="loginRegister-and_password">
              Here
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Login;
