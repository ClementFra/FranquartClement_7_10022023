import React from "react";
import Styles from "./banner.module.scss";

const Banner = ({ title, srcImg, altTexte }) => {
  return (
    <div className={Styles.banner}>
      {title ? <h1 className={Styles["banner__title"]}>{title}</h1> : ""}
      <div className={Styles["overlay"]}></div>
      <img src={srcImg} alt={altTexte}></img>
    </div>
  );
};

export default Banner;
