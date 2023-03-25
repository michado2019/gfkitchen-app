import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import './index.css'
import Register from "../register/Register";

const AppRouter = () => {
  return (
    <div
      className="routesIndex-wrapper"
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logIn" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
