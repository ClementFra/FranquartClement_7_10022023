import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Styles from "./header.module.scss";

/*******************************************************************************/
/*Composant Header comprenant le logo ainsi que les liens de navigation du site*/
/*******************************************************************************/

const Header = () => {
  return (
    <header>
      <div className={Styles.logo}>
        <img src={Logo} alt="Logo de l'entreprise Kasa" />
      </div>
      <nav>
        <ul className={Styles.list}>
          <li className={Styles["list__item"]}>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className={Styles["list__item"]}>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
