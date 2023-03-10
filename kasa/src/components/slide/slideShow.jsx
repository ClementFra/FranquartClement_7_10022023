import React from "react";
import Styles from "./slideShow.module.scss";
import { useState, useEffect, useReducer } from "react";
import rightArrow from "../../assets/images/arrow_right.png";
import leftArrow from "../../assets/images/arrow_left.png";

const Slide = ({ pictures }) => {
  /* Gestion de l'etat de l'image courante*/ 
  const [currentSlide, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case "next":
        return state === pictures.length - 1 ? 0 : state + 1;/* Si on atteint la dernière image on retourne vers la première image */
      case "prev":
        return state === 0 ? pictures.length - 1 : state - 1;/* Si on atteint la première image on retourne vers la dernière image */

      default:
        throw new Error("Action" + action.type + " is undefined.");
    }
  }

  /* Gestion de la visibilité des flèches droite et gauche dans le carrousel
     en fonction du nombre d'images en cas de plussieurs images */
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
        <div className={Styles["slide__next"]}>
          <img
            className={Styles["slide__next-arrow__left"]}
            src={leftArrow}
            onClick={() => dispatch({ type: "prev" })}
            alt="previous"
          />
          <img
            className={Styles["slide__next-arrow__right"]}
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
