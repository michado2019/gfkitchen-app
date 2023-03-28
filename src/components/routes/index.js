import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import "./index.css";
import Register from "../pages/register/Register";
import ForgotPassword from "../pages/login/forgotPassword/ForgotPassword";
import ChangePassword from "../pages/login/changePassword/ChangePassword";
import OurKitchen from "../pages/ourKitchen/OurKitchen";
import OurSingleKitchen from "../pages/ourKitchen/ourSingleKitchen/OurSingleKitchen";
import MeetOurMd from "../pages/meetOurMd/MeetOurMd";

const AppRouter = () => {
  return (
    <div className="routesIndex-wrapper">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/login/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/login/forgotPassword/changePassword"
          element={<ChangePassword />}
        />
        <Route path="/ourKitchen" element={<OurKitchen />} />
        <Route path="/ourKitchen/:id" element={<OurSingleKitchen />} />
        <Route path="/meetOurMd" element={<MeetOurMd />} />
      </Routes>
    </div>
  );
};
export default AppRouter;
