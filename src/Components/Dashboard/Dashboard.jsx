import React from "react";
import video from "../../Assets/Untitled (2).mp4";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="DashboardContainer">
      <div className="NavBarContainer">
        <NavBar />
      </div>
      <video muted autoPlay loop src={video} />
      <div className="container">
        <div className="w-100 d-flex justify-content-center align-items-center">
          <div className="w-75">
            <h1>
              <span style={{ color: "orangered" }}>Moneyfirst</span> provides
              you exceptional services where you will get the best experience of
              sending INR(D) to your loved ones at zero charges! We also have a
              Super Wallet where you can add as low as AUD 1 and as high as AUD
              50,000 anytime.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
