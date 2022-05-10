import React from "react";
import style from "./India.module.scss";
const India = () => {
  return (
    <div className={style.Container}>
      <h1>SEND INR(D) WORLDWIDE</h1>

      <table data-aos="zoom-in">
        <tr className={style.tableHead}>
          <th
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Send Ammount(AUD)
          </th>
          <th
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-delay="1000"
            data-aos-duration="2000"
          >
            Express Fees
          </th>
          <th
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            // data-aos-duration="1000"
          >
            Economy Fees
          </th>
        </tr>
        <tr>
          <td
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            A$20- A$100{" "}
          </td>
          <td
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-delay="1000"
            data-aos-duration="2000"
          >
            A$0.00 (10sec){" "}
          </td>
          <td
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
          >
            A$0.00 (12hours)
          </td>
        </tr>
        <tr>
          <td
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            A$100- A$500{" "}
          </td>
          <td
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-delay="1000"
            data-aos-duration="2000"
          >
            A$0.00 (10sec){" "}
          </td>
          <td
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
          >
            A$0.00 (12hours)
          </td>
        </tr>
        <tr>
          <td
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            A$500- A$20000{" "}
          </td>
          <td
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-delay="1000"
            data-aos-duration="2000"
          >
            A$0.00 (10sec){" "}
          </td>
          <td
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
          >
            A$0.00 (12hours)
          </td>
        </tr>
      </table>
    </div>
  );
};

export default India;
