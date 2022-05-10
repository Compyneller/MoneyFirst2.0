import React from "react";
import style from "./ContactUs.module.scss";
import email from "../../Assets/email.png";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className={style.Image}></div>
        </div>
        <div className="col-12 col-lg-6 my-auto">
          <h1 className="text-center">CONTACT US</h1>
          <div className={style.row}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png"
              alt=""
            />
            <h5>
              {" "}
              BUSINESS IT AND SERVICES PTY LTD T/AS MONEYFIRST , ADD 28 HARRIET
              LANE , OXENFORD QLD 4210, AUSTRALIA
            </h5>
          </div>
          <div className={style.row}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2258/2258843.png"
              alt=""
            />
            <h5>
              {" "}
              ACN :{" "}
              <a target="_blank" href="https://asic.gov.au/">
                631 693 126
              </a>
            </h5>
          </div>
          <div className={style.row}>
            <img src={email} alt="" />
            <h5>
              <a
                target="_blank"
                href="mailto:info@moneyfirst.com.au
                "
              >
                info@moneyfirst.com.au
              </a>
            </h5>
          </div>
          <div className={style.row}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
              alt=""
            />
            <h5>(7)3184-6424</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
