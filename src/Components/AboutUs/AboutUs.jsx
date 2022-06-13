import React from "react";
import style from "./AboutUs.module.scss";
import mobile from "../../Assets/oie_Q6E4qieuvUvu.png";
import Slider from "react-slick";
import screen1 from "../../Assets/screen-1.png";
import screen2 from "../../Assets/screen-2.png";
import screen3 from "../../Assets/screen-3.png";

const AboutUs = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.AboutContent} data-aos="zoom-in">
          <h1>ABOUT US</h1>
          <p>
            Moneyfirst has developed a team of industrious people to protect and
            serve our customers a convenient & fast platform to send INR(D)
            worldwide easily. Moneyfirst was founded in 2019 in Australia, and
            since then our community is expeditiously growing with trust &
            notable services. Sending money abroad is deceptively expensive,
            thanks to the hidden charges we’ve all been forced to pay. The banks
            claim “free money transfers” and “0% commission” and it sounds like
            money is already flowing freely, but far from us. We know this is
            pure propaganda! Moneyfirst removes all the wrongness, letting
            people send INR(D) worldwide at the lowest possible true cost. Using
            only real exchange rates and no-extra-hidden charges. It's time to
            turn your heads high and join hands with Moneyfirst to begin the
            unforgettable journey for our loved ones. Headaches averted, and a
            revolution sparked!
          </p>

          <h3>Moneyfirst Team</h3>
        </div>
        <div className={style.ImageContainer} data-aos="fade-down-left">
          <Slider {...settings}>
            <img src={screen1} alt="" />
            <img src={screen2} alt="" />
            <img src={screen3} alt="" />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
