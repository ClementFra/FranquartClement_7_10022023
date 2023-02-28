import React from "react";
import { Link } from "react-router-dom";
import Styles from "./cards.module.scss";

// Gestion du lien, de l'image et titre du logement
/**************************************************/
const Card = ({ cover, id, title }) => {
  return (
    <article className={Styles.card}>
      <Link to={`accommodation/${id}`}>
        <h2 className={Styles.card__title}>{title}</h2>
        <div className={Styles.card__location}>
          <img src={cover} alt="location" />
        </div>
      </Link>
    </article>
  );
};

export default Card;