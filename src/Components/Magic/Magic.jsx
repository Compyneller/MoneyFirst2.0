import React, { useState } from "react";
import style from "./Magic.module.scss";

const Magic = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.contentContainer} data-aos="zoom-in">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            WE HAVE MAGIC
          </h1>
          <p className="w-75 text-center" data-aos="fade-left">
            Moneyfirst presents a hassle-free process to send INR(D) worldwide
            instantly to your loved ones abroad. We want our users to give wings
            to their money, sit back, show patience & see the magic of
            Moneyfirst!
          </p>

          <div className={style.downloadButton}>
            <a
              className={style.contentButton}
              href="https://play.google.com/store/apps/details?id=com.bhanguz.moneyfirst"
              target="_blank"
            >
              <div className={style.playStoreButton}>
                <i className="fa-brands fa-google-play"></i>
                <div className={style.playText}>
                  <p>ANDROID APP ON</p>
                  <h5>Google Play</h5>
                </div>
              </div>
            </a>
            <a
              className={style.contentButton}
              href="https://apps.apple.com/in/app/moneyfirst-lite/id1617965466"
              target="_blank"
            >
              <div className={style.playStoreButton}>
                <i className="fa-brands fa-apple"></i>
                <div className={style.playText}>
                  <p>DOWNLOAD ON THE</p>
                  <h5>App Store</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className={style.progress}>
          <div
            className={style.skills}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className={style.skillName}>Approved within 10 sec</div>
            <div className={style.skillBar}>
              <div
                className={style.skillPer}
                per="98%"
                style={{ maxWidth: "98%" }}
              ></div>
            </div>
          </div>
          <div className={style.skills}>
            <div className={style.skillName}>Speed of Transaction</div>
            <div className={style.skillBar}>
              <div
                className={style.skillPer}
                per="99%"
                style={{ maxWidth: "99%" }}
              ></div>
            </div>
          </div>
          <div className={style.skills} data-aos="fade-left">
            <div className={style.skillName}>Fraud Protection</div>
            <div className={style.skillBar}>
              <div
                className={style.skillPer}
                per="100%"
                style={{ maxWidth: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magic;
