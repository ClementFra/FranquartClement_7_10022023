import React from "react";

import { useState, useEffect, useReducer } from "react";
import rightArrow from "../../assets/images/arrow_right.png";
import leftArrow from "../../assets/images/arrow_left.png";

const Slide = ({ pictures }) => {
  const [dispatch] = useReducer(reducer, 0);

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
    <div>
      {show ? (
        <div>
          <img
            src={leftArrow}
            onClick={() => dispatch({ type: "prev" })}
            alt="previous"
          />
          <img
            src={rightArrow}
            onClick={() => dispatch({ type: "next" })}
            alt="next"
          />
        </div>
      ) : null}
      <div>
        {pictures.map((picture, index) => {
          return (
            <div>
              <img src={picture} alt="Illustration du bien" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
