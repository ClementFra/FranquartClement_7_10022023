import React from "react";
import { useState } from "react";

const Collapse = ({ text, title }) => {
  const [active, setActive] = useState(false);

  const Content = () => {
    setActive((current) => {
      return (current = !active);
    });
  };

  return (
    <article>
      <div onClick={Content}>
        <h2>{title}</h2>
      </div>
      <div>
        <ul>{text}</ul>
      </div>
    </article>
  );
};
export default Collapse;
