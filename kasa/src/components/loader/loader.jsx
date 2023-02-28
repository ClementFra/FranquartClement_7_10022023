import React from "react";
import Styles from "./loader.module.scss";
const Loader = () => {
    return (
      <div className={Styles.loader}>
        <span className={Styles.dot}>.</span>
        <span className={Styles.dot}>.</span>
        <span className={Styles.dot}>.</span>
      </div>
    );
  };
  
  export default Loader;