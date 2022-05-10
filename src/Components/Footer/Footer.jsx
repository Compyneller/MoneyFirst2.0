import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.Columns}>
          <Link
            to="/privacy"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            PRIVACY POLICY
          </Link>
          <Link
            to="/refund"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            REFUND POLICY
          </Link>

          <Link
            to="/term"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            TERMS & CONDITIONS
          </Link>
        </div>

        <div className={style.Columns} style={{ margin: "auto 0" }}>
          <div className={`${style.row2} ${style.socialsIcons}`}>
            <a target="_blank" href="https://twitter.com/moneyfirstau?s=08">
              <img
                src="https://icons8.com/vue-static/landings/animated-icons/icons/twit-flying/twit-flying_200.gif"
                alt=""
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/moneyfirst_au/">
              <img
                src="https://img.icons8.com/ios/2x/instagram-new--v3.gif"
                alt=""
              />
            </a>
            <a target="_blank" href="https://www.facebook.com/MoneyfirstAu">
              <img
                src="https://icons8.com/vue-static/landings/animated-icons/icons/facebook/facebook_200.gif"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <h5 style={{ marginTop: "2rem", textAlign: "center" }}>
        © COPYRIGHT 2022. ALL RIGHTS RESERVED.
      </h5>
    </div>
  );
};

export default Footer;
