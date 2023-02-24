import React from "react";
import Styles from "../sass/components/slideShow.module.scss";
import { useState, useEffect, useReducer } from "react";
import rightArrow from "../../assets/images/arrow_right.png";
import leftArrow from "../../assets/images/arrow_left.png";

const Slide = ({ pictures }) => {
  const [currentSlide, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case "next":
        return state === pictures.length - 1 ? 0 : state + 1;
      case "prev":
        return state === 0 ? pictures.length - 1 : state - 1;

      default:
        throw new Error("Action" + action.type + " is undefined.");
    }
  }
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toogle = () => {
      if (pictures.length > 1) {
        setShow((s) => s + !show);
      }
    };
    toogle();
  });

  return (
    <div className={Styles["slide"]}>
      {show ? (
        <div className={Styles["slide__next-previous"]}>
          <img
            className={Styles["slide__next-previous__prev"]}
            src={leftArrow}
            onClick={() => dispatch({ type: "prev" })}
            alt="previous"
          />
          <img
            className={Styles["slide__next-previous__next"]}
            src={rightArrow}
            onClick={() => dispatch({ type: "next" })}
            alt="next"
          />
        </div>
      ) : null}
      <div
        className={Styles["slide__content"]}
        style={{ transform: `translateX(${-currentSlide * 100}% )` }}
      >
        {pictures.map((picture, index) => {
          return (
            <div
              className={[
                Styles["slide__content__item"],
                !show && Styles.open,
              ].join(" ")}
              key={index}
            >
              <img src={picture} alt="Illustration du bien" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
