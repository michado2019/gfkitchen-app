import React, { useEffect, useState } from "react";
import "./Admin.css";
import Login from "../login/Login";
const Admin = () => {
  const [user, setUser] = useState(localStorage.getItem("form"));
  useEffect(() => {
    const form = JSON.parse(user);
    console.log(form)
  }, [user]);
  return (
    <div className="adminWrapper">
      <div className="adminContents">

        {
            user ? 
            <div className="adminContent">Admin</div> : 
            <div className="adminWrapper"><Login /></div>
        }
      </div>
    </div>
  );
};
export default Admin;