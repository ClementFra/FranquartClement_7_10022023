import React from "react";
import { useState } from "react";
import Styles from "./collapse.module.scss";
import Arrow from "../../assets/images/arrow_back.svg";

const Collapse = ({ text, title, style, classList, page }) => {
  const [open, setOpen] = useState(false);

  const Content = () => {
    setOpen((toggle) => {
      return (toggle = !open);
    });
  };

  return (
    <article
      className={[Styles[`container__${page}`], Styles[classList]].join(" ")}
    >
      <div
        className={Styles[`container__${page}__element`]}
        onClick={Content}
      >
        <h2 className={Styles[`container__${page}__element__title`]}>
          {title}
        </h2>
        <img
          src={Arrow}
          alt="drop"
          className={open ? Styles.open : ""}
        ></img>
      </div>
      <div
        className={[
          Styles[`container__${page}__content`],
          open && Styles.open,
        ].join(" ")}
      >
        <ul className={Styles[`container__${page}__content__text`]}>{text}</ul>
      </div>
    </article>
  );
};
export default Collapse;
