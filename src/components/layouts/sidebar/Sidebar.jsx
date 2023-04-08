import React, {useState} from "react";
import "./Sidebar.css";
import servicesData from "../header/headerData/HeaderData";
import BackBtn from "../../backBtn/BackBtn";
import { locationData } from "./sideBarData/SideBarData";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
export const Sidebar = () => {

   //State
   const [page, setPage] = useState(1);
 
   const perPage = 1;
   const pages = Math.ceil(locationData.length / perPage)
   const skip = page * perPage - perPage;
  return (
    <div className="sidebarWrapper">
      <div className="sidebarContents">
      <BackBtn />
        <h2 className="sidebarContents1">This is</h2>
        <p className="sidebarContents2">GFkitchen.</p>
        <p className="sidebarIntro">
          This is where you can find dishes that will satisfy your hunger
        </p>
        <br />
        <div className="sidebarServices">
        <h2 className="sidebarServices-lists_title">Services:</h2>
        {servicesData.map((service) => {
          return (
            <div className="sidebarServices-list" key={service.id}>
              <Link to={`perculiarService/${service.id}`} className="sidebarServices-link">{service.service}</Link>
            </div>
          );
        })}
        </div>
        <br />
        <div className="sidebarLocation">
        <h2 className="sidebarLocation-lists_title">Locations:</h2>
        <br />
        {locationData.slice(skip, skip + perPage).map((locationDatum) => {
          return (
            <div className="sidebarLocation-contents" key={locationDatum.id}>
              <div className="sidebarLocation-content">
              <ArrowBackIosNew
                className="sidebarLocation-arrow"
                style={{ display: page <= 1 ? "none" : "" }}
                onClick={() => setPage((prev) => prev - 1)}
              />
                <h2 className="sidebarLocation-num">*</h2>
                <div className="sidebarLocation-content2">
                 <h4 className="sidebarLocation-geo">{locationDatum.geo.geo_one}, </h4> <h4>{locationDatum.geo.geo_two}</h4>
                 <h4 className="sidebarLocation-state">{locationDatum.state},</h4>
                 <h4 className="sidebarLocation-country">{locationDatum.country}</h4>
                 </div>
                 <ArrowForwardIos
                className="sidebarLocation-arrow"
                onClick={() => setPage((prev) => prev + 1)}
                style={{ display: page >= pages ? "none" : "" }}
              />
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};
