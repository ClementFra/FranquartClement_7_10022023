import React from "react";
import Styles from "./banner.module.scss";

/*Gestion de la bannière au niveau de son titre, la source ainsi que le texte alternatif de l'image */

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
