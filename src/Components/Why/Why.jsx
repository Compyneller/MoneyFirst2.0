import React from "react";
import style from "./Why.module.scss";

const Why = () => {
  return (
    <div className={style.Container}>
      <h1>WHY CHOOSE US?</h1>
      <div className={style.row}>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className={style.Cards}
        >
          <img
            src="https://icons8.com/vue-static/landings/animated-icons/icons/calculator/calculator_200.gif"
            alt=""
          />
          <h3>SEND & RECEIVE A$ 1</h3>
          <p>
            We allow our users to send INR(D) worldwide as low as they want
            without any fixed minimum limit. You can send & receive A$ 1 with
            Moneyfirst.
          </p>
        </div>
        <div
          className={style.Cards}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img
            src="https://icons8.com/vue-static/landings/animated-icons/icons/time/time_200.gif"
            alt=""
          />
          <h3>ANYTIME ANYWHERE</h3>

          <p>
            Our team is working round the clock so that you can get access to
            this powerful, secure & easy application whenever you want with no
            boundaries.
          </p>
        </div>
        <div
          className={style.Cards}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src="https://icons8.com/vue-static/landings/animated-icons/icons/file/file_200.gif"
            alt=""
          />
          <h3>GOVT REGISTERED</h3>
          <p>
            Moneyfirst is registered & regulated with{" "}
            <a href="https://www.austrac.gov.au/">AUSTRAC</a> to provide you
            with a healthy & safe networking system. Now it's just Monefirst,
            Guardianship & You!
          </p>
        </div>
        <div className={style.Cards} data-aos="fade-left">
          <img
            src="https://icons8.com/vue-static/landings/animated-icons/icons/people/people_200.gif"
            alt=""
          />
          <h3>REFER & EARN</h3>
          <p>
            Invite your friends, family & colleagues to the Moneyfirst app. On
            every successful invite, get A$ 10 directly in your wallet. Avail of
            this offer now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
