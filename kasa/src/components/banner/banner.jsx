import React from "react";
import "../../assets/sass/components/banner.scss";

const Banner = ({ title, srcImg, altTexte }) => {
  return (
    <div className="banner">
      {title ? <h1 className="banner__title">{title}</h1> : ""}
      <div className="overlay"></div>
      <img src={srcImg} alt={altTexte}></img>
    </div>
  );
};

export default Banner;