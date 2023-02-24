import React from "react";
import { useState } from "react";
import "../sass/components/collapse.scss";

const Collapse = ({ text, title }) => {
  const [open, setOpen] = useState(false);

  const Content = () => {
    setOpen((toggle) => {
      return (toggle = !open);
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
