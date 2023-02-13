import React from "react";
import "../../components/sass/notFound.scss";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="error">
      <p className="error__status">404</p>
      <p className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="link__homepage">
        Retournez vers la page d'acceuil
      </NavLink>
    </section>
  );
};

export default NotFound;
