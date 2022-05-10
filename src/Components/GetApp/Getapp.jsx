import React from "react";
import playStore from "../../Assets/playStore.svg";
import appStore from "../../Assets/appStore.svg";
import qr from "../../Assets/onlink_to_9vk63h_small.png";
import phone from "../../Assets/get-app-1.jpg";
import star from "../../Assets/star.jpg";
import style from "./GetApp.module.scss";

const Getapp = () => {
  return (
    <div className={style.Container}>
      <div className={style.row}>
        <div className={style.AppContent}>
          <div className={style.AppContentContainer}>
            <h1>GET THE APP</h1>
            <p>
              Keep track of your transfers on the go with the Moneyfirst mobile
              app. Make new or repeat transfers - wherever you are - at the
              touch of a button.
            </p>
            <div className={style.row}>
              <a
                href="https://play.google.com/store/apps/details?id=com.bhanguz.moneyfirst"
                target="_blank"
              >
                <div>
                  <img src={playStore} alt="" />
                </div>
                <div>
                  <img
                    style={{ mixBlendMode: "darken", margin: "0 auto" }}
                    src={star}
                    alt=""
                  />
                </div>
              </a>
              <a
                href="https://apps.apple.com/in/app/moneyfirst-lite/id1617965466"
                target="_blank"
              >
                <img src={appStore} alt="" />
                <div>
                  <img
                    style={{ mixBlendMode: "darken", margin: "0 auto" }}
                    src={star}
                    alt=""
                  />
                </div>
              </a>
            </div>
            <p>Simply scan code and download the app now.</p>
            <img className={style.qrImage} src={qr} alt="" />
          </div>
        </div>
        <div className={style.ImageContainer}></div>
      </div>
    </div>
  );
};

export default Getapp;
