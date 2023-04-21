import React, {useState} from "react";
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
import Payment from "../pages/payment/Payment";
import PerculiarService from "../pages/perculiarService/PerculiarService";
import Admin from "../pages/admin/Admin";
import CartAway from "../CartAway";

const AppRouter = ({
  storage,
  setStorage,
  setCartDisplay,
  ourKitchenDishes,
  cartDisplay,
  state,
  setState,
  setDisplay,
  input,
  setInput,
}) => {
  const [loading, setLoading] = useState(false);

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
              loading={loading}
              setLoading={setLoading}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/logIn"
          element={<Login storage={storage} setStorage={setStorage} />}
        />
        <Route
          path="/login/forgotPassword"
          element={<ForgotPassword storage={storage} setStorage={setStorage} />}
        />
        <Route
          path="/login/forgotPassword/changePassword"
          element={<ChangePassword />}
        />
        <Route path="/ourKitchen" element={<OurKitchen />} />
        <Route path="/ourKitchen/:id" element={<OurSingleKitchen />} />
        <Route path="/meetOurMd" element={<MeetOurMd />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/perculiarService/:id" element={<PerculiarService />} />
        <Route
          path="/cartAway/:id"
          element={
            <CartAway
              setDisplay={setDisplay}
              state={state}
              setState={setState}
              input={input}
              setInput={setInput}
              cartDisplay={cartDisplay}
              setCartDisplay={setCartDisplay}
            />
          }
        />
      </Routes>
    </div>
  );
};
export default AppRouter;