import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = ({ storage, setStorage }) => {
  // Navigate
  const navigate = useNavigate();

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      const auth = getAuth();
      const email = values.email;
      const password = values.password;
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
    },
  });

  return (
    <div className="loginWrapper">
      <div className="loginContents">
        <h2 className="loginTitle">Login</h2>
        <form className="loginForm" onSubmit={formik.handleSubmit}>
          <h2 className="loginAlert">{formik.errors.alert}</h2>
          <input
            type="email"
            placeholder="Enter Email"
            className="loginInputs"
            autoComplete="on"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="loginError">{formik.errors.email}</div>
          ) : null}
          <input
            type="password"
            placeholder="Enter password"
            autoComplete="on"
            className="loginInputs"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="loginError">{formik.errors.password}</div>
          ) : null}
          <button type="submit" className="loginSubmit-btn">
            Submit
          </button>
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
            <Link
              to="forgotPassword/changePassword"
              className="loginRegister-and_password"
            >
              Here
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
