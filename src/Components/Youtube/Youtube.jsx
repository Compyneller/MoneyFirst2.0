import React from "react";
import video from "../../Assets/video-camera.png";
import style from "./Youtube.module.scss";

const Youtube = () => {
  return (
    <div className={style.Container}>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCGUb0g5nexs7e5Q2shJ1uZg"
      >
        <img src={video} alt="" data-aos="zoom-in" />
        <h1>WATCH VIDEO</h1>
      </a>
      <p data-aos="fade-up" data-aos-duration="3000">
        A business needs involvement, innovation & imagination. It has to be
        energetic, fun-loving, and lets you exercise your creative instincts
        with no self-doubts.
      </p>
    </div>
  );
};

export default Youtube;
