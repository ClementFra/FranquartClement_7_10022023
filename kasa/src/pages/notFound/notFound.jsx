import React from "react";
import Styles from "./notFound.module.scss";
import { NavLink } from "react-router-dom";

/*Gestion de la page 404 en cas d'erreur */

const NotFound = () => {
  return (
    <section className={Styles.error}>
      <p className={Styles.error__status}>404</p>
      <p className={Styles.error__text}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className={Styles.link__homepage}>
        Retournez vers la page d'acceuil
      </NavLink>
    </section>
  );
};

export default NotFound;
