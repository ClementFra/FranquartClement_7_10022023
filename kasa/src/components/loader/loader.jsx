import React from "react";
import Styles from "./loader.module.scss";

/*Mise en place d'un loader en attente de la réponse de l'Api*/

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