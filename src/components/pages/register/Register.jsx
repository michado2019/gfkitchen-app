import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "../../firebase";
import { useNavigate } from "react-router-dom";

import "./Register.css";
const Register = () => {
  //UseNavigate
  const navigate = useNavigate();

  //State
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [alert, setAlert] = useState("");

  // Handlers
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    const userform = {
      firstName: form.firstName,
      lastName: form.lastName,
    };
    //Local Storage
    localStorage.setItem("userform", JSON.stringify(userform));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.email !== "" &&
      form.password !== "" &&
      form.firstName !== "" &&
      form.lastName !== ""
    ) {
      const email = form.email;
      const password = form.password;

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (user) {
            //Email verification
            const auth = getAuth();
            sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
              // ...
            });
            navigate("/admin");
          }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      setAlert("Fill all fields correctly");
    }
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
              placeholder="Enter firstname"
              className="registerInputs"
              onChange={handleChange}
              name="firstName"
              value={form.firstName}
            />
            <input
              type="text"
              placeholder="Enter lastname"
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
