import React from "react";
import style from "./OurServices.module.scss";

const OurServices = () => {
  return (
    <div className={style.Container}>
      <h1
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        OUR{" "}
        <span
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          SERVICES
        </span>
      </h1>
      <div className={style.row}>
        <div className={style.Cards}>
          <div className={style.imageContainer}>
            <img
              src="https://icons8.com/vue-static/landings/animated-icons/icons/refresh/refresh_200.gif"
              alt=""
            />
          </div>
          <h3>EXCHANGE RATE</h3>
          <p>
            Moneyfirst gives its customers the highest exchange rate in the
            industry & believes in quality.
          </p>
        </div>
        <div className={style.Cards}>
          <div className={style.imageContainer}>
            <img
              src="https://icons8.com/vue-static/landings/animated-icons/icons/computer-display/computer-display_200.gif"
              alt=""
            />{" "}
          </div>
          <h3>PLATFORMS</h3>
          <p>
            Get the Moneyfirst services on iOS, Android & Web applications.
            Download the app now!
          </p>
        </div>
        <div className={style.Cards}>
          <div className={style.imageContainer}>
            <img
              src="https://icons8.com/vue-static/landings/animated-icons/icons/delivery/delivery_200.gif"
              alt=""
            />{" "}
          </div>
          <h3>INSTANT TRANSFER</h3>
          <p>
            Moneyfirst covers all the transactions in just a few seconds. Send &
            receive the money within a blink of an eye!
          </p>
        </div>
        <div className={style.Cards}>
          <div className={style.imageContainer}>
            <img
              src="https://icons8.com/vue-static/landings/animated-icons/icons/customer-insight/customer-insight_200.gif"
              alt=""
            />{" "}
          </div>
          <h3>CUSTOMER SUPPORT</h3>
          <p>
            The Moneyfirst team always delivers quick solutions to all our
            customers. Just click help & connect with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
