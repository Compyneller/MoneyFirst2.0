import React from "react";
import style from "./Partners.module.scss";
import austrac from "../../Assets/AUSTRAC.png";
import afca from "../../Assets/afca.svg";
import Satisfaction from "../../Assets/Satisfaction & Guaranteed.png";
import ASIC from "../../Assets/ASIC.png";
import Verified from "../../Assets/Verified & Secured.png";

const Partners = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div
          className={style.Cards}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <a href="https://online.austrac.gov.au/ao/public/rsregister.seam">
            <img src={austrac} alt="" />
          </a>
        </div>

        <div
          className={style.Cards}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <a href="https://www.afca.org.au/">
            <img src={afca} alt="" />
          </a>
        </div>
        <div
          className={style.Cards}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <a href="https://moneyfirst.com.au/#">
            <img className={style.smallImage} src={Satisfaction} alt="" />
          </a>
        </div>
        <div
          className={style.Cards}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <a href="https://moneyfirst.com.au/#">
            <img src={Verified} alt="" />
          </a>
        </div>
        <div
          className={style.Cards}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <a href="https://connectonline.asic.gov.au/RegistrySearch/faces/landing/panelSearch.jspx?searchText=631693126&searchType=OrgAndBusNm&_adf.ctrl-state=yjbkojxn1_15">
            <img src={ASIC} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
