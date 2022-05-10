import React from "react";
import style from "./Comments.module.scss";

const Comments = () => {
  return (
    <div className={style.container}>
      <h1>Moneyfirst Was Born Of Frustration!!!!</h1>
      <img
        src="https://cdn-icons-png.flaticon.com/512/59/59149.png"
        alt=""
      />{" "}
      <p data-aos="zoom-in">
        The world's banking system wasn't for people without borders. That's why
        we're building a new & influential one!
      </p>
      <h1>Team MoneyFirst</h1>
    </div>
  );
};

export default Comments;
