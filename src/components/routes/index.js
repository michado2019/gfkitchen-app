import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import "./index.css";
import Register from "../pages/register/Register";
// import ForgotPassword from "../pages/login/forgotPassword/ForgotPassword";
import ChangePassword from "../pages/login/changePassword/ChangePassword";
import OurKitchen from "../pages/ourKitchen/OurKitchen";
import OurSingleKitchen from "../pages/ourKitchen/ourSingleKitchen/OurSingleKitchen";
import MeetOurMd from "../pages/meetOurMd/MeetOurMd";
import Payment from "../pages/payment/Payment";
import PerculiarService from "../pages/perculiarService/PerculiarService";
import Admin from "../pages/admin/Admin";
import CartAway from "../CartAway";
import ErrorPage from "../pages/errorPage/ErrorPage";

const AppRouter = ({
  storage,
  setStorage,
  setCartDisplay,
  ourKitchenDishes,
  cartDisplay,
  loading,
  setLoading,
  setDisplay,
  docsLength,
  input,
  setInput,
  ourKitchenDisplay,
  setOurKitchenDisplay,
}) => {
  return (
    <div className="routesIndex-wrapper">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              storage={storage}
              setStorage={setStorage}
              setCartDisplay={setCartDisplay}
              ourKitchenDishes={ourKitchenDishes}
              ourKitchenDisplay={ourKitchenDisplay}
              setOurKitchenDisplay={setOurKitchenDisplay}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/logIn"
          element={<Login storage={storage} setStorage={setStorage} />}
        />
        {/* <Route
          path="/login/forgotPassword"
          element={<ForgotPassword storage={storage} setStorage={setStorage} />}
        /> */}
        <Route
          path="/login/forgotPassword/changePassword"
          element={<ChangePassword />}
        />
        <Route
          path="/ourKitchen"
          element={<OurKitchen storage={storage} setStorage={setStorage} />}
        />
        <Route path="/ourKitchen/:id" element={<OurSingleKitchen setOurKitchenDisplay={setOurKitchenDisplay} />} />
        <Route path="/meetOurMd" element={<MeetOurMd />} />
        <Route
          path="/admin"
          element={
            <Admin
              loading={loading}
              setLoading={setLoading}
              docsLength={docsLength}
            />
          }
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/perculiarService/:id" element={<PerculiarService />} />
        <Route
          path="/cartAway/:id"
          element={
            <CartAway
              setDisplay={setDisplay}
              input={input}
              setInput={setInput}
              cartDisplay={cartDisplay}
              setCartDisplay={setCartDisplay}
              loading={loading}
              setLoading={setLoading}
              docsLength={docsLength}
              storage={storage}
              setStorage={setStorage}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
export default AppRouter;
