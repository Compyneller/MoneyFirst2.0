import React from "react";
import AboutUs from "../Components/AboutUs/AboutUs";
import Dashboard from "../Components/Dashboard/Dashboard";
import Magic from "../Components/Magic/Magic";
import NavBar from "../Components/NavBar/NavBar";
import OurServices from "../Components/OurServices/OurServices";
import Subscribe from "../Components/Subscribe/Subscribe";
import style from "./Home.module.scss";
import banner from "../Assets/mads-schmidt-rasmussen-6YmzwamGzCg-unsplash.jpg";
import Getapp from "../Components/GetApp/Getapp";
import Comments from "../Components/Comments/Comments";
import Why from "../Components/Why/Why";
import India from "../Components/India/India";
import Youtube from "../Components/Youtube/Youtube";
import Connect from "../Components/Connect/Connect";
import ContactUs from "../Components/ContactUs/ContactUs";
import Footer from "../Components/Footer/Footer";
import Partners from "../Components/Partners/Partners";

const Home = () => {
  const target = document.querySelector("#scroll");

  return (
    <>
      <div className={style.Container}>
        <div className={style.Dashboard}>
          <Dashboard />
        </div>
        <div className={style.aboutUs}>
          <AboutUs />
        </div>
        <div className={style.magic}>
          <Magic />
        </div>
        <div className={style.ourServices}>
          <OurServices />
        </div>
        <div className={style.Comments}>
          <Comments />
        </div>
        <div className={style.why}>
          <Why />
        </div>
        <div className={style.India}>
          <India />
        </div>

        <div className={style.Connect}>
          <Connect />
        </div>
        <div className={style.Youtube}>
          <Youtube />
        </div>
        <div style={{ width: "100%", background: "#e0e0e0" }}>
          <Getapp />
        </div>
        <div className={style.Connect} style={{ background: "#e0e0e0" }}>
          <ContactUs />
        </div>
        <div className={style.partners}>
          <Partners />
        </div>
      </div>
    </>
  );
};

export default Home;
