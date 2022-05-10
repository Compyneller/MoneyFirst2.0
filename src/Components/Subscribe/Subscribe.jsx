import React from "react";
import style from "./Subscribe.module.scss";

const Subscribe = () => {
  return (
    <div className={style.Container}>
      <h1>SUBSCRIBE</h1>
      <h3>Sign up with Moneyfirst to get news, updates & alerts.</h3>

      <div className={style.Inputs}>
        <input
          placeholder="Email Address...."
          type="text"
          data-aos="zoom-in-right"
        />
        <button className={style.contentButton} data-aos="zoom-in-left">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
