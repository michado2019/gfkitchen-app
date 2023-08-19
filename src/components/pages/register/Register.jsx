import React from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Register.css";

const Register = () => {
  
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      // Form submission logic
      if (
        values.email !== "" &&
        values.password !== "" &&
        values.firstName !== "" &&
        values.lastName !== ""
      ) {
        const email = values.email;
        const password = values.password;
        console.log(email, password);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            
            if (user) {
              console.log(user);
              const auth = getAuth();
              sendEmailVerification(auth.currentUser).then(() => {
                navigate("/admin");
              });
            }
          })
          .catch((error) => {
            console.log(error.code, error.message);
            // Handle error
          });
        } else {
          formik.setFieldError("Loading");
        }
      formik.resetForm();
    },
  });
  // const handleSubmit = (values) => {
   
  //   };
    
    return (
    <div className="registerWrapper">
      <div className="registerContents">
        <div className="registerContent-one">
          <h2 className="registerTitle">Register</h2>
          <form className="registerForm" onSubmit={formik.handleSubmit}>
            <h2 className="registerAlert">{formik.errors.alert}</h2>
            <input
              type="text"
              placeholder="Enter firstname"
              className="registerInputs"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="firstName"
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="registerError">{formik.errors.firstName}</div>
            ) : null}
            <input
              type="text"
              placeholder="Enter lastname"
              className="registerInputs"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="lastName"
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="registerError">{formik.errors.lastName}</div>
            ) : null}
            <input
              type="email"
              placeholder="Enter Email"
              className="registerInputs"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="registerError">{formik.errors.email}</div>
            ) : null}
            <input
              type="password"
              placeholder="Enter password"
              className="registerInputs"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              value={formik.values.password}
              autoComplete="on"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="registerError">{formik.errors.password}</div>
            ) : null}
            <button type="submit" className="registerSubmit-btn">
              Submit
            </button>
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
