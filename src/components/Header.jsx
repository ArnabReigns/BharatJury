import React from "react";
import Navbar from "./Navbar";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import Colorpanel from "./Colorpanel";

const Header = () => {
  const config = ["nav-txt","accent-color", "header-txt", "header-desc"];

  return (
    <div className="header">
      <Navbar />
      <Colorpanel config={config} />

      <div className="content">
        <div className="left">
          <span>BHARATJURY</span>
          <h1>
            Turning Complaints <br /> into Rights
          </h1>
          <p>
            Your Trusted Partner for Complaints to Authorities, Guiding You
            Towards Justice, Upheld by Law and Compassion.
          </p>

          <div className="links">
            <img src={playstore} alt="" />
            <img src={appstore} alt="" />
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Header;
