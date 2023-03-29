import React from "react";
import "./Sidebar.css";
import servicesData from "../header/headerData/HeaderData";
import BackBtn from "../../backBtn/BackBtn";
export const Sidebar = () => {
  return (
    <div className="sidebarWrapper">
      <div className="sidebarContents">
      <BackBtn />
        <h2 className="sidebarContents1">This is</h2>
        <p className="sidebarContents2">GFkitchen.</p>
        <p className="sidebarIntro">
          This is where you can find ditches that will satisfy your hunger
        </p>
        <br />
        <div className="sidebarServices">
        <h2 className="sidebarServices-lists_title">Services:</h2>
        {servicesData.map((service) => {
          return (
            <div className="sidebarServices-list" key={service.id}>
              {service.service}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};
