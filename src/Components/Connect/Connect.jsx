import React from "react";
import style from "./Connect.module.scss";
import qr from "../../Assets/au-qr-code.png";

const Connect = () => {
  return (
    <div className={style.Container}>
      <h1 data-aos="flip-up">QUICK CONNECT WITH MONEYFIRST AU</h1>
      <p data-aos="zoom-in">WhatsApp Business Account</p>
      <img src={qr} alt="" data-aos="flip-left" />
      <p data-aos="zoom-in">
        Scan this code to start a WhatsApp chat with Moneyfirst AU.
      </p>
    </div>
  );
};

export default Connect;
